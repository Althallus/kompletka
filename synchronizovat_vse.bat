@echo off
:: Tento skript provede kompletní a "tvrdou" synchronizaci.
:: 1. Stahne data z Google Apps Script a prepise lokalni slozku.
:: 2. Ulozi zmeny (i smazane soubory) a nahraje je na GitHub.

echo.
echo === ZACATEK SYNCHRONIZACE ===
echo.

:: Prepnuti do pracovni slozky projektu
cd /d "D:\GAS_PROJEKTY\Kompletka"

:: Krok 1: Vynucene stazeni z Google Apps Script
echo ---> Stahuji a prepisuji soubory z Google Apps Script...
clasp pull --force

:: Krok 2: Priprava vsech zmen pro Git (pridani, upravy i smazani)
echo ---> Pripravuji vsechny zmeny pro Git...
git add .

:: Krok 3: Ulozeni zmen (commit) s automatickou zpravou
echo ---> Ukladam zmeny lokalne (commit)...
git commit -m "Automaticka synchronizace z GAS"

:: Krok 4: Nahrani zmen na GitHub
echo ---> Nahravam finalni stav na GitHub...
git push

echo.
echo === SYNCHRONIZACE DOKONCENA ===
echo.
pause