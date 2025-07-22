@echo off
echo.
echo =================================================================
echo.
echo  POZOR: Tento skript provede KOMPLETNI PREPSANI dat!
echo  1. Lokalni slozka bude prepsana stavem z Google Apps Script.
echo  2. Repozitar na GitHubu bude prepsan lokalnim stavem.
echo.
echo =================================================================
echo.
echo Stisknete libovolnou klavesu pro pokracovani, nebo zavrete okno pro zruseni...
pause

:: Prepnuti do pracovni slozky projektu
cd /d "D:\GAS_PROJEKTY\Kompletka"

:: === CAST 1: PRIPRAVA A ZALOHA ===
echo.
echo ---> Pripravuji...

:: Zaloha README.md, pokud existuje
if exist README.md (
    echo      Zalohuji README.md...
    copy README.md README.md.bak > nul
)

:: Docasne prejmenovani .claspignore, pokud existuje
if exist .claspignore (
    echo      Docasne prejmenovavam .claspignore...
    rename .claspignore _claspignore
)


:: === CAST 2: SYNCHRONIZACE Z GOOGLE APPS SCRIPT ===
echo.
echo ---> Stahuji a prepisuji soubory z Google Apps Script (clasp pull --force)...
clasp pull --force


:: === CAST 3: OBNOVA A UKLID ===
echo.
echo ---> Obnovuji docasne soubory...

:: Obnova README.md ze zalohy, pokud existuje zaloha
if exist README.md.bak (
    echo      Obnovuji README.md...
    copy README.md.bak README.md > nul
    del README.md.bak
)

:: Vraceni nazvu .claspignore, pokud byl prejmenovan
if exist _claspignore (
    echo      Vracim zpet .claspignore...
    rename _claspignore .claspignore
)


:: === CAST 4: NAHRANI NA GITHUB ===
echo.
echo ---> Pripravuji vsechny zmeny pro Git (add)...
git add .

echo ---> Ukladam zmeny lokalne (commit)...
git commit -m "Totalni synchronizace z GAS"

echo ---> Natvrdo nahravam finalni stav na GitHub (push --force)...
git push --force

echo.
echo =================================================================
echo.
echo === SYNCHRONIZACE DOKONCENA ===
echo.
pause