## Instrukce pro Claude - Specializace na Google Apps Script webové aplikace

### Přístup k vývoji

- **~~První verze**: Vytvoř kompletní ukázku v artefaktu pro rychlé testování~~ - Hotovo✅
- **Následný vývoj**: Rozděl kód do samostatných částí pro snadnou správu větších aplikací
- **GitHub integrace**: Počítej s tím, že kód bude verzován na GitHubu pro lepší přehled změn

### Struktura kódu

stranyk s css, javascriptem mají koncovku html pro Google apps script (jiné koncovky tam nejsou možné) 
Propojení do index.html pomocí **include**

### **Základní rozdělení:**

- **`Code.gs`** hlavní Google Apps Script logika - Hlavní serverový soubor (doGet, include funkce)
- **`ZpracovaniFormulare.gs`**
- **`appsscript.json`** # Manifest aplikace

- **`Index_HTML.html`** - základní HTML struktura
- **`Styles_CSS.html`** - všechny styly (micro-framework)
- **`Script_JS.html`** - frontend JavaScript - pro všeobecné a společné skripty

**Utility javascripty:**

Společné javascripty

- **`Modals_JS.html`**
- **`Kalkulacky_JS.html`**

**Stránky/sekce aplikace** *(rozdelené dle tlačítek na navbaru)***:**

### *Rozhovor*

- Optimalizace - zrušíme - bude pouze jako odkaz na externí aplikaci
    - **`Optimalizace_HTML.html`**
    - 
- Bilance
    - **`Bilance_HTML.html`**
    - **`Bilance_JS.html`**
- Zdravotní dotazník -  bude samostatně - pouze funkce vytvoření draftu emailu v gmailu pro odeslání odkazu klientovi na vyplnění
    - **`Zdravotni_dotaznik_HTML.html`**
    - **`Zdravotni_dotaznik_JS.html`**

### *Nabídkovače*

- Život a zdraví
    - **`Zivot_zdravi_HTML.html`**
    - **`Zivot_zdravi_JS.html`**
- **Investiční porovnávač**
    - **`Investicni_porovnavac_HTML.html`**
    - **`Investicni_porovnavac_JS.html`**
- **DIPuj** - pouze odkaz na externí aplikaci

### *Kalkulačky*

- **Inflace vs. Zhodnocení**
    - **`Inflace_HTML.html`**
    - **`Inflace_JS.html`**
- **Investiční kalkulátory**
    - **`Investicni_kalkulatory_HTML.html`**
    - **`Investicni_kalkulatory_JS.html`**
- **Mzdové kalkulačky**
    - Zatím chybí
- **Porovnání produktů**
    - Zatím chybí
- **Stavebko vs. Investice**
    - Zatím chybí

### *Pomůcky*

- **Přehledovka**
    - stránka sloužící pro vytvoření přehledu rozdělení portfolia. Zadání až deseti různých investičních produktů (smluv)
        - v rámci produktů výběr až 10 investičních nástrojů/fondů
        - zadání
            - počátku smlouvy
            - čísla smlouvy
            - investovaná částka
            - aktuální hodnota na smlouvě
            - 
    - **`Prehledovka_HTML.html`**
    - **`Prehledovka_JS.html`**

- **Platby**
    - Pomůcka pro zadání plateb na produkty a vytvoření pdf s qr kódy
    - Propojení do google tabulky s databází nastavení plateb
        - Výběr produktů z tabulky
        - zadání platby
        - zadání variabilních, konstantních a specifických symbolů
        - datum platby
        - Výběr plateb dle četnosti
    - **`Platby_HTML.html`**

### Design a CSS Framework

**Vlastní micro-framework:**

- CSS Custom Properties pro barvy a spacing
- Utility třídy inspirované Tailwindem (`p-4`, `text-lg`, `bg-primary`)
- Předpřipravené komponenty (tlačítka, karty, formuláře)
- Mobile-first responzivní design
- Barva `#13a0db` jako primární

**Vizuální styl:**

- Moderní, čistý design s minimalistickým přístupem
- Omezená paleta barev (primární modrá + neutrální šedé)
- Konzervativní, ale současný vzhled
- Důraz na čitelnost a použitelnost

**Ikony:**

- **Výhradně Tabler Icons**:
- `https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css`
- konzistentní design
- Použití: `<i class="ti ti-plus"></i>`
- Velikosti: `icon-sm`, `icon`, `icon-lg`, `icon-xl`

**Responzivita:**

- Mobile-first přístup s breakpointy
- Flexibilní layout pro všechny velikosti obrazovek
- Touch-friendly ovládání na mobilech
- Automatické přizpůsobení komponent

### Technické specifikace

- Google Apps Script kompatibilní kód
- Vanilla JavaScript (bez externích knihoven)
- CSS Grid/Flexbox pro layouty
- CSS Custom Properties pro snadnou customizaci
- Progresivní vylepšování funkcionality

### Komponenty micro-frameworku

- **Utility třídy**: spacing, typography, barvy, layout
- **Tlačítka**: `btn`, `btn-primary`, `btn-secondary`, `btn-outline`
- **Karty**: `card`, `card-header`, `card-body`, `card-footer`
- **Formuláře**: `form-input`, `form-label`, `form-group`
- **Tabulky**: `table`, `table-container`
- **Badges**: `badge`, `badge-success`, `badge-warning`
- **Grid systém**: `grid`, `grid-cols-auto`, responzivní varianty

## Informace o projektu

### Cíl projektu:

Komplexní webová aplikace s přepínáním stránek. Bude sloužit k různým výpočtům a nabídkám pro klienty.

### Funcionalita

- Pro GAS
- Modaly s výpočty a grafy
- Tisk do PDF - z webu nebo google tabulky
- Přepínaní z listy mezi jednotlivými částmi
- Napojení na Google tabulky pro využití jako
    - databáze
    - zdroj nabídky k tisku do pdf

**Instrukce budou doplňovány průběžně, jak bude vytvářen projekt**

### Instrukce pro naprogramování

1. Přidat tlačítko domů
    - Vrátí uživatele na úvodní stránku
2. Do navbaru odkaz na DIPuj - https://script.google.com/macros/s/AKfycbynLjd9wqMx_DIuQoPytGi4CEvn8Hy13MlT_sOBVoh1-JOgmzrp39d2WdoUrOmtkFEO/exec
3. Do navbaru odkaz na Optimalizaci - https://script.google.com/macros/s/AKfycbz8fNqv4WtwPlYx375Ql3DkU0jEkuCyiI80_2BEIFdEmnG01IAPzvcisUa07mOY-mSDag/exec
4. Zdravotní dotazník - Upravit stránku
    - smazat formulář
    - přidat možnost vytvoření draftu do gmailu pro odeslání odkazu na zdravotní dotazník pro odeslání klientovi - (budeme umět odeslat rovnou?)
5. Přidat nabídkovač Život & zdraví
    - modelace životního pojištění - viz jiný projekt - jak napojíme do chatu pro zdroj kodu?
6. Přidat Investiční porovnávač
    - Viz kód jiný projekt - jak napojíme do chatu pro zdroj kodu?