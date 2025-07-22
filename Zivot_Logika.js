// =================================================================
// === KÓD PŘEVZATÝ Z PŮVODNÍ APLIKACE "ŽIVOT & ZDRAVÍ" ===
// =================================================================

// --- Globální proměnné z #Base.js ---
var SpreadsheetID = "1rNwXNeEswntNLLwGqHTjfGPZkbdhXGuROTIoaiKNkro"; 
var ss = SpreadsheetApp.openById(SpreadsheetID);
var sheet_DATA = ss.getSheetByName("ZIVOT_DATA");

// --- Funkce z #Base.js ---
function logSimpleAccess(userId = '') {
  const sheet = SpreadsheetApp.openById('1spyAuJ1rXqDR5ZgrWd46nn3tc7Sd4YWSiroBAAbukrI').getSheetByName('ŽIVOT');
  const date = new Date();
  sheet.appendRow([date, userId || 'anonym']);
}

// --- Funkce z #Funkce.js ---

/**
 * Původní funkce "processForm", přejmenovaná kvůli integraci.
 * Zpracuje data z formuláře a zapíše je do Google Sheetu pro výpočty.
 */
function processZivotForm(formObject) {
  //Pozice poradce a manazera
  sheet_DATA.getRange(5,5,13,1)//(start row, start column, number of rows, number of columns
   .setValues([
                [formObject.client_narozeni || ""],
                [formObject.client_prijem || ""],
                [formObject.client_vydaje || ""],
                [formObject.client_mortgage || ""],
                [formObject.client_rezerva || ""],
                [formObject.typ_prijmu_selected || ""],
                [null],
                [formObject.pohlavi_selected || ""],
                [formObject.pocet_deti || ""],
                [formObject.client_duchod_zaklad || ""],
                [formObject.client_rok_odpracovane || ""],
                [formObject.smrt_nasobek || ""],
                [formObject.rozdeleni_dluhu || ""],
              ]);    

  sheet_DATA.getRange(5,6,12,1)//(start row, start column, number of rows, number of columns
   .setValues([
              [formObject.client_narozeni_2 || ""],
              [formObject.client_prijem_2 || ""],
              [formObject.client_vydaje_2 || ""],
              [null],
              [null],
              [formObject.typ_prijmu_selected_2 || ""],
              [null],
              [formObject.pohlavi_selected_2 || ""],
              [formObject.pocet_deti_2 || ""],
              [formObject.client_duchod_zaklad_2 || ""],
              [formObject.client_rok_odpracovane_2 || ""],
              [formObject.smrt_nasobek_2 || ""],
              ]);    
 
  SpreadsheetApp.flush();  
 
  var data = sheet_DATA.getRange(32,5,78,2).getValues(); // Načte vypočítané hodnoty zpět z tabulky
 
  return data;
}

function getTableData() {
  SpreadsheetApp.flush();  
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('TABLES_DATA');
  const range = sheet.getRange("B4:E14");
  const data = range.getValues();
  return data;
}