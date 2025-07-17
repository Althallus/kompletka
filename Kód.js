function doGet(e) {
  return HtmlService.createTemplateFromFile('Index')
      .evaluate()
      .setTitle('Optimalizace')
      .setFaviconUrl('https://bsfaplikace.cz/images/logo-bohemika.png');
}

/**
 * Pomocná funkce pro vkládání obsahu souborů (jako CSS nebo JS) do HTML.
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}