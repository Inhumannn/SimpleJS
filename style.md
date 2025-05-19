```css
/* =======================
    Import Google Fonts
   ======================= */
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Playfair+Display&display=swap");

/* =======================
    Reset + Comportement global
   ======================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

/* =======================
   Variables Globales
   ======================= */
:root {
  /* Fonts */
  --font-main: "Poppins", sans-serif;
  --font-title: "Playfair Display", serif;

  /* Font-sizes responsives avec clamp() */
  --w-logo: clamp(60px, 6vw, 290px);
  --fz-title: clamp(28px, 6vw, 40px);
  --fz-title2: clamp(24px, 5vw, 35px);
  --fz-title3: clamp(20px, 4vw, 25px);
  --fz-p: clamp(14px, 2vw, 16px);

  /* Spacings (Système d’espacement scalable) */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 32px;

  /* Transitions */
  --transition-fast: 0.2s ease-in-out;
  --transition-slow: 0.6s ease;

  /* Grille Responsive */
  --grid-columns: 3;
  --grid-gap: 1rem;

  /* Couleurs Light par défaut */
  --bg-color: #ffffff;
  --text-color: #000000;
}

/* =======================
   Dark Mode (via data-theme)
   ======================= */
[data-theme="dark"] {
  --bg-color: #111111;
  --text-color: #ffffff;
  /* document.documentElement.setAttribute('data-theme', 'dark'); */
}

/* =======================
   Corps de la page
   ======================= */
body {
  font-family: var(--font-main);
  font-size: var(--fz-p);
  line-height: 1.6;
  background-color: var(--bg-color);
  color: var(--text-color);
  /* calc() */
  padding-top: calc(var(--header-height) + var(--space-md));
}

/* =======================
   Exemple : Section Container
   ======================= */
.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--space-md);
}

/* =======================
   Exemple : Grille Responsive
   ======================= */
.grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: var(--grid-gap);
}

/* =======================
   Exemple : Bouton avec transition
   ======================= */
.button {
  padding: var(--space-sm) var(--space-md);
  border: none;
  background-color: var(--text-color);
  color: var(--bg-color);
  transition: background-color var(--transition-fast);
  cursor: pointer;
}

.button:hover {
  background-color: #333;
}
```
