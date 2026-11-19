# Drip Docx Nurse Guide

A phone-friendly reference for every Drip Docx IV drip and injection: ingredients, draw-up volumes and needles, bag or route, IV push times, prices, suggested add-ons, and cautions. It has three tabs: IV drips, Injections, and a drip Calculator (set a rate, check a running drip, a quick chart, and IV push times). Search looks across both drug tabs, and a toggle shows refrigerated items only.

It is one static page with no build step and no dependencies other than Google Fonts.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole app: styles, data and script |
| `logo.jpg` | Drip Docx logo, used in the header and as the favicon |
| `README.md` | This file |

## Run it

Open `index.html` in a browser. Nothing else is needed.

## Sharing

This repository is public and published with GitHub Pages, with Narges Najmyar's approval. Share the Pages link with the Drip Docx nurses. The page asks search engines not to list it, but anyone who has the link can open it.

The content comes from Narges's Drip Docx Nurse Reference Guide plus details from the Olympia vial labels. Menu prices are included and match dripdocx.com as of August 2026. Pay rates, door codes, passwords and payment handles are intentionally not in this app. Do not add them.

## Edit the content

All drug data lives in the `D` array in the `<script>` block of `index.html`. Each entry has these fields:

| Field | Meaning |
|---|---|
| `id` | Short unique name, used as the card's anchor and to look up the price in the `PRICE` list |
| `kind` | `"iv"` for drips, `"inj"` for injections and pushes |
| `name`, `quick` | Card title and the one-line summary under it |
| `fridge` | `true` shows the Refrigerated tag |
| `does`, `ingredients`, `draw`, `bag`, `addons`, `cautions` | The card sections |
| `table` | Optional label strengths table |
| `notes` | Not shown in the app. Leave it empty and put anything important in `cautions` |

Prices live in the `PRICE` list and IV push times in the `PUSH` and `PUSH_TABLE` lists, just below the drug data. The push times come from the manufacturer labels, not the guide, and should be approved by Narges.

Copy an existing entry, change the text, and reload the page.

## Open items to confirm with Narges

Based on the second edition of the guide (August 2026) and what Narges has said since.

- Refrigeration: Narges says B12 and Famotidine are not refrigerated and Lipo-Mino is. The guide still says the opposite on those slides.
- NAD+: the guide gives the 100 mg dose but not the draw-up volume. The vial label read 100 mg/mL when checked earlier, so confirm with Narges before the first dose.
- Myers: the label lists calcium chloride dihydrate, while the guide says calcium gluconate. The hydroxocobalamin strength was not readable in the label photos.
- Glutathione strength is not in the guide. Read it from the vial.
- More Life IV: the guide gives a 5 cc syringe for each ingredient but no volume per vial.
- Iron IV: confirm whether labs or a provider order are required, and how long to observe afterward.
- Famotidine: the anaphylaxis dose is 20 mg, so confirm the vial strength for the emergency volume.

## Colors and fonts

Sampled from dripdocx.com. The page is light by default and follows the phone's dark setting.

| Token | Light (default) | Dark |
|---|---|---|
| Background | `#F2F1EF` | `#000000` |
| Cards | `#F7F2ED` | `#121010` |
| Text | `#1C1C1C` | `#F2EAE2` |
| Accent | `#7D6E63` | `#CCB094` |
| Header band | `#1C1C1C` | `#1C1C1C` |

Fonts: Playfair Display for headings, Montserrat for body text, and Atkinson Hyperlegible for numbers. All three load from Google Fonts.

## Disclaimer

For internal reference only. Always confirm doses and orders with Narges and follow the order and protocols in place for each patient.
