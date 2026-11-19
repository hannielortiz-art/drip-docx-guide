# Drip Docx Nurse Guide

A phone-friendly reference for every Drip Docx IV drip and injection: ingredients, draw-up volumes and needles, bag or route, suggested add-ons, and cautions. Search by name or ingredient, and filter by IV drips, injections and pushes, or refrigerated.

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

The content comes from Narges's Drip Docx Nurse Reference Guide plus details from the Olympia vial labels. Prices, pay rates, door codes, passwords and payment handles are intentionally not in this app. Do not add them.

## Edit the content

All drug data lives in the `D` array in the `<script>` block of `index.html`. Each entry has these fields:

| Field | Meaning |
|---|---|
| `id` | Short unique name, used as the card's anchor |
| `kind` | `"iv"` for drips, `"inj"` for injections and pushes |
| `name`, `quick` | Card title and the one-line summary under it |
| `fridge` | `true` shows the Refrigerated tag |
| `does`, `ingredients`, `draw`, `bag`, `addons`, `cautions` | The card sections |
| `table` | Optional label strengths table |
| `notes` | Extra notes. Items starting with "Check:" flag something to confirm with Narges |

Copy an existing entry, change the text, and reload the page.

## Open items marked "Check"

- Ondansetron dose: the Hangover IV says 5 cc (2 cc if not nauseous), while the ondansetron card says 1 to 4 cc.
- Myers calcium: the label lists calcium chloride dihydrate, while the guide says calcium gluconate.
- Myers hydroxocobalamin strength was not readable in the label photos.
- Glutathione strength is not in the guide. Read it from the vial.
- More Life IV: the guide gives no volume per vial.
- Ultimate Drip IV: the guide does not state the bag size.
- Iron IV: the guide says a 250 mL bag. The Venofer label allows 200 mg in up to 100 mL normal saline. Vitamin C should not share the bag with Venofer.

## Colors

Taken from the Drip Docx logo.

| Token | Dark (default) | Light |
|---|---|---|
| Background | `#000000` | `#F7F2EC` |
| Accent (tan) | `#CCB094` | `#7A5B3C` |
| Text | `#F2EAE2` | `#1A1511` |

The page follows the phone's light or dark setting.

## Disclaimer

For internal reference only. Always confirm doses and orders with Narges and follow the order and protocols in place for each patient.
