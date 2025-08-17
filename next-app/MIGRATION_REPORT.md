# Migration Report

## Source Mapping
- `index.html` → `src/app/page.tsx`
- `about.html` → `src/app/about/page.tsx`
- `contact.html` → `src/app/contact/page.tsx`
- `products/products.html` → `src/app/products/page.tsx`
- Individual files under `products/*.html` → `src/app/products/[slug]/page.tsx`

## Products Extracted
The following product names were parsed from the legacy `products/products.html`:

- SUPERGEST-SR
- SUPER-HB
- FOLJOY
- CLEAN-V7
- CLEAN-V3
- CYCLE-21
- CYSTOPIL
- ESOKARE-D
- Z-ON
- SNORIL-LX
- SNORIL-D
- SNORIL-COLD
- VITOTOP
- D3-NINE+
- D3-NINE
- ASTRACLAV
- RIGHTCEF
- SETMOL-MDS
- MEGAMONT-L

These are now represented in `src/data/products.ts` with generated slugs for dynamic routing.
