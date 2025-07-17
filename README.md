## Instrukce pro Claude - Specializace na Google Apps Script webové aplikace

### Přístup k vývoji

- **První verze**: Vytvoř kompletní ukázku v artefaktu pro rychlé testování
- **Následný vývoj**: Rozděl kód do samostatných částí pro snadnou správu větších aplikací
- **GitHub integrace**: Počítej s tím, že kód bude verzován na GitHubu pro lepší přehled změn

### Struktura kódu

**Základní rozdělení:**

- `Code.gs` - hlavní Google Apps Script logika
- `index.html` - základní HTML struktura
- `styles.css` - všechny styly (micro-framework)
- `script.js` - frontend JavaScript

**Pro větší aplikace dodatečně:**

- `components/` - jednotlivé UI komponenty
- `modules/` - specifické funkcionality (kalkulačky, pluginy)
- `utils/` - pomocné funkce
- `config.js` - konfigurace a konstanty

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

- **Výhradně Tabler Icons**: `https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons.min.css`
- 4,500+ ikon zdarma, konzistentní design
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

### Hlavní části

- Finanční kalkulátory pro různé výpočty
    - Výpočet budoucí hodnoty
    - Výpočet
- Investiční porovnávač
- Kalkulátor pojistných částek pro životní pojištění
- Bilance klienta
- Cross-sell - cíle a stav portfolia klienta
- Kalkulátor pro výpočet a porovnání **Dlouhodobého investičního produktu** a **Doplňkového penzijního spoření**
- Porovnání spořících produktů
- Porovnání stavebního spoření a investice
- Platby - Pomůcka pro vytvoření přehledu plateb klientovi včetně QR

### Funcionalita

- Pro GAS
- Modaly s výpočty a grafy
- Tisk do PDF - z webu nebo google tabulky
- Přepínaní z listy mezi jednotlivými částmi
- Napojení na Google tabulky pro využití jako
    - databáze
    - zdroj nabídky k tisku do pdf

**Instrukce budou doplňovány průběžně, jak bude vytvářen projekt**
