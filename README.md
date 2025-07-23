# Finanční Aplikace - FiDos

## Přehled projektu

Komplexní webová aplikace pro finanční poradenství postavená na Google Apps Script. Aplikace poskytuje různé kalkulačky, nabídkovače a nástroje pro finanční poradce a jejich klienty.

## Struktura projektu

### Hlavní soubory
- **`Code.js`** - Hlavní serverový soubor (doGet, include funkce)
- **`appsscript.json`** - Manifest aplikace
- **`Index_HTML.html`** - Základní HTML struktura
- **`Styles_CSS.html`** - Všechny styly (micro-framework)
- **`Scripts_JS.html`** - Frontend JavaScript pro všeobecné a společné skripty

### Utility javascripty
- **`Modals_JS.html`** - Správa modálních oken
- **`Kalkulacky_JS.html`** - Kalkulačky a výpočty

### Server-side skripty
- **`ZivotZdravi-scripts.js`** - Backend logika pro Život & zdraví
- **`ZdravotníDotaznik-scripts.js`** - Backend logika pro zdravotní dotazník

### Stránky/sekce aplikace

#### Rozhovor
- **Bilance** (`Bilance_HTML.html`) - Přehled příjmů, výdajů a celkové finanční situace
- **Optimalizace** - Externí odkaz na optimalizační aplikaci
- **Zdravotní dotazník** (`Zdravotni_dotaznik_HTML.html`, `Zdravotni_dotaznik_JS.html`) - Vytvoření draftu emailu pro odeslání dotazníku

#### Nabídkovače
- **Investiční porovnávač** (`Investicni_porovnavac_HTML.html`) - Nástroje pro investiční produkty
- **Život & zdraví** (`Zivot_zdravi_HTML.html`, `Zivot_zdravi_JS.html`, `Zivot_zdravi_Modals_HTML.html`) - Modelace životního pojištění
- **DIPuj** - Externí odkaz na DIP aplikaci

#### Kalkulačky
- **Investiční kalkulačky** (`Investicni_kalkulatory_HTML.html`) - Specializované kalkulačky
- **Porovnání produktů** (`Porovnani_produktu_HTML.html`) - Porovnání finančních produktů
- **Stavebko vs. investice** (`Stavebko_HTML.html`) - Porovnání stavebního spoření a investic

#### Pomůcky
- **Platby** (`Platby_HTML.html`) - Vytvoření přehledu plateb včetně QR kódů
- **Přehledovka** (`Prehledovka_HTML.html`) - Přehledové nástroje a reporty

## Technické specifikace

### Design systém
- **Vlastní micro-framework** s CSS Custom Properties
- **Utility třídy** inspirované Tailwindem (`p-4`, `text-lg`, `bg-primary`)
- **Primární barva**: `#13a0db`
- **Ikony**: Výhradně Tabler Icons
- **Responzivní design**: Mobile-first přístup

### Funkcionalita
- Modální okna s výpočty a grafy
- Přepínání mezi sekcemi
- Napojení na Google Sheets pro databázi
- Tisk do PDF
- Tmavý/světlý režim

### Kompatibilita
- Google Apps Script kompatibilní kód
- Vanilla JavaScript (bez externích knihoven)
- CSS Grid/Flexbox pro layouty
- Progresivní vylepšování funkcionality

## Stav implementace

### ✅ Hotové
- Základní struktura a navigace
- Design systém a styly
- Optimalizace sekce s kalkulačkou
- Zdravotní dotazník s Gmail integrací
- Modální systém
- Responzivní design

### 🚧 Ve vývoji
- Život & zdraví nabídkovač
- Investiční porovnávač
- Kalkulačky sekce

### 📋 Plánované
- Bilance kalkulátor
- Platby s QR kódy
- Přehledovka portfolia
- Stavebko vs. investice
- Mzdové kalkulačky

## Návod pro vývoj

1. **Struktura souborů**: Každá sekce má vlastní HTML, JS a případně modal soubory
2. **Styly**: Všechny styly v `Styles_CSS.html` s využitím CSS custom properties
3. **Navigace**: Automatické přepínání sekcí přes `data-page` atributy
4. **Modály**: Využití `data-modal-target` pro otevírání modálních oken
5. **Server-side**: Google Apps Script funkce v samostatných .js souborech

## Nasazení

Aplikace je určena pro nasazení jako Google Apps Script webová aplikace s přístupem pro konkrétní uživatele nebo organizaci.