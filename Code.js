/**
 * Zobrazí hlavní stránku aplikace.
 * @param {object} e Objekt události.
 * @returns {HtmlOutput} HTML výstup pro prohlížeč.
 */
function doGet(e) {
  // Vytvoří šablonu z hlavní kostry HTML
  return HtmlService.createTemplateFromFile('Index_HTML')
      .evaluate()
      .setTitle('Finanční Aplikace')
      .setFaviconUrl('https://bsfaplikace.cz/images/logo-bohemika.png');
}

/**
 * Vloží obsah souboru (CSS nebo JS) do HTML šablony.
 * Důležité: V Apps Script se soubory s CSS a JS vkládají jako HTML, proto se volá createHtmlOutputFromFile.
 * @param {string} filename Cesta k souboru (bez přípony).
 * @returns {string} Obsah souboru.
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


function testListAllContacts() {
  try {
    // Pokusíme se načíst prvních 20 kontaktů
    const response = People.People.Connections.list('people/me', {
      pageSize: 30,
      personFields: 'names,emailAddresses'
    });

    // Vypíšeme do logu, co jsme našli
    Logger.log("Výsledek z People API:");
    Logger.log(JSON.stringify(response.connections, null, 2));
    
    if (!response.connections || response.connections.length === 0) {
      Logger.log("Nenalezeny žádné kontakty. Zkontrolujte prosím, zda máte kontakty na https://contacts.google.com/ a zda má skript oprávnění k jejich čtení.");
    }

  } catch (e) {
    Logger.log("Došlo k chybě při volání People API: " + e.message);
  }
}