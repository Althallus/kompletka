/**
 * Zpracuje data odeslaná ze zdravotního dotazníku a uloží je do Google Sheet.
 * @param {object} formObject Objekt obsahující data z formuláře.
 * @returns {object} Objekt se stavem operace.
 */
function processHealthQuestionnaire(formObject) { // <-- ZMĚNA NÁZVU
  try {
    // Otevřeme konkrétní spreadsheet podle jeho ID
    const spreadsheet = SpreadsheetApp.openById('125AoNvqlbVhMFBNq5PZaipsGNXYMKnd71DYwGvCbQJQ');
    const sheet = spreadsheet.getSheetByName('Odpovědi');
    
    // Zbytek kódu zůstává stejný...
    const headers = Object.keys(formObject);
    
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
    }
    
    const sheetHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    const newRow = sheetHeaders.map(header => {
      if (Array.isArray(formObject[header])) {
        return formObject[header].join(', ');
      }
      return formObject[header] || '';
    });
    
    sheet.appendRow(newRow);
    
    return { status: 'success', message: 'Formulář byl úspěšně odeslán a data uložena.' };

  } catch (error) {
    Logger.log(error);
    return { status: 'error', message: 'Došlo k chybě při ukládání dat: ' + error.message };
  }
}


// Priprava draftu emailu odeslani zdravotniho dotazníku
function createQuestionnaireDraft(clientName, clientEmail) {
  try {
    const subject = "Zdravotní dotazník – příprava pro naše setkání";
    const questionnaireUrl = "https://script.google.com/macros/s/AKfycbyyhP6Smjp3J3X7WH_G17nfgusG2G0bTkJWq0cU7frIWhVZVbxdBBR2skU4gG-qmE504w/exec";
    const fromAlias = 'martin.masek@bohemika.eu';

    // Krok 1: Načtení podpisu pomocí pokročilé služby Gmail
    // Tento kód bude fungovat pouze po povolení "Gmail API" ve službách projektu.
    const signature = Gmail.Users.Settings.SendAs.get('me', fromAlias).signature;

    const greeting = clientName ? `Dobrý den, ${clientName},` : "Dobrý den,";

    const emailBody = `
      <div style="font-family: Arial, sans-serif; font-size: 10pt; color: #333333;">
        <p>${greeting}</p>
        <p>děkuji za Váš čas. Abychom mohli co nejlépe připravit naši další schůzku, poprosím Vás o vyplnění krátkého zdravotního dotazníku.</p>
        <p>Najdete ho na následujícím odkazu:<br>
        <a href="${questionnaireUrl}" style="font-size: 16px; font-weight: bold; color: #13a0db; text-decoration: none;">Přejít na zdravotní dotazník</a>
        </p>
        <p>Vyplnění Vám zabere jen pár minut. Data jsou samozřejmě důvěrná a slouží pouze pro naši interní potřebu.</p>
        <p>Děkuji a těším se na viděnou.</p>
        <br>
        ${signature}
      </div>
    `;

    // Krok 2: Vytvoření draftu s aliasem a dynamickým podpisem
    GmailApp.createDraft(clientEmail, subject, '', {
      htmlBody: emailBody,
      from: fromAlias
    });
    
    return { status: 'success', message: 'Koncept e-mailu byl úspěšně vytvořen ve vašem Gmailu.' };

  } catch (error) {
    Logger.log(error);
    // Vylepšená chybová hláška pro případ, že služba není povolena
    if (error.message.includes("Gmail is not defined")) {
      return { status: 'error', message: 'Chyba: Pokročilá služba Gmail není v projektu povolena. Povolte ji v sekci "Služby".' };
    }
    return { status: 'error', message: 'Nastala chyba: ' + error.message };
  }
}

/**
 * Prohledá kontakty uživatele a vrátí shody.
 * @param {string} searchText Text zadaný uživatelem.
 * @returns {Array} Pole objektů s kontakty, které obsahují jméno a e-mail.
 */
function searchContacts(searchText) {
  if (!searchText || searchText.length < 2) {
    return [];
  }
  try {
    const response = People.People.Connections.list('people/me', {
      pageSize: 200, 
      personFields: 'names,emailAddresses'
    });
    if (!response.connections) {
      return [];
    }
    const lowerCaseSearchText = searchText.toLowerCase();
    const filteredContacts = [];
    for (const person of response.connections) {
      if (filteredContacts.length >= 5) break; 
      const displayName = (person.names && person.names.length > 0) ? person.names[0].displayName : "";
      const emailAddresses = (person.emailAddresses && person.emailAddresses.length > 0) ? person.emailAddresses.map(e => e.value) : [];
      if (emailAddresses.length > 0) {
        const nameMatch = displayName.toLowerCase().includes(lowerCaseSearchText);
        const emailMatch = emailAddresses.some(email => email.toLowerCase().includes(lowerCaseSearchText));
        if (nameMatch || emailMatch) {
          filteredContacts.push({
            name: displayName || emailAddresses[0],
            email: emailAddresses[0]
          });
        }
      }
    }
    return filteredContacts;
  } catch (err) {
    Logger.log('Chyba při hledání kontaktů: ' + err.message);
    return [];
  }
}

function processForm(formObject) {
  const SpreadsheetID = "1rNwXNeEswntNLLwGqHTjfGPZkbdhXGuROTIoaiKNkro"; 
const ss = SpreadsheetApp.openById(SpreadsheetID);
const sheet_DATA = ss.getSheetByName("ZIVOT_DATA");
  //Pozice poradce a manazera
 sheet_DATA.getRange(5,5,13,1)//(start row, start column, number of rows, number of columns
   .setValues([
                [formObject.client_narozeni || ""],
                [formObject.client_prijem || ""],
                [formObject.client_vydaje || ""],
                [formObject.client_mortgage || ""],
                [formObject.client_rezerva || ""],
                [formObject.typ_prijmu_selected || ""],
                // [formObject.stav_selected || ""],
                [null],
                [formObject.pohlavi_selected || ""],
                [formObject.pocet_deti || ""],
                [formObject.client_duchod_zaklad || ""],
                [formObject.client_rok_odpracovane || ""],
                [formObject.smrt_nasobek || ""],
                // [formObject.rozdeleniDluhu ? "TRUE" : "FALSE"],
                [formObject.rozdeleni_dluhu || ""],
              ]);    

 sheet_DATA.getRange(5,6,12,1)//(start row, start column, number of rows, number of columns
   .setValues([
              [formObject.client_narozeni_2 || ""],
              [formObject.client_prijem_2 || ""],
              [formObject.client_vydaje_2 || ""],
              // [formObject.client_mortgage || ""],
              [null],
              [null],
              [formObject.typ_prijmu_selected_2 || ""],
              // [formObject.stav_selected || ""],
[null],
              [formObject.pohlavi_selected_2 || ""],
              [formObject.pocet_deti_2 || ""],
              [formObject.client_duchod_zaklad_2 || ""],
              [formObject.client_rok_odpracovane_2 || ""],
              [formObject.smrt_nasobek_2 || ""],
              ]);    


 
 SpreadsheetApp.flush();  

//  var dateFormat = sheet_DATA.getRange("C20:C55");
//   dateFormat.setNumberFormat("@STRING@");
 
var data = sheet_DATA.getRange(32,5,78,2).getValues(); //(start row, start column, number of rows, number of columns
 
 return data;
}

function getTableData() {
  
  SpreadsheetApp.flush();  
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('TABLES_DATA');
  const range = sheet.getRange("B4:E14");
  // const range = sheet.getDataRange();
  const data = range.getValues();
  return data;
}