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