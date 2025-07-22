

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
      .setFaviconUrl('https://i.imgur.com/UO5ZFJ1.png');
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


