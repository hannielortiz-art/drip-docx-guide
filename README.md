# Drip Docx Nurse Guide

A phone-friendly reference for every Drip Docx IV drip and injection: ingredients, draw-up volumes and needles, bag or route, IV push times, prices, suggested add-ons, and cautions. A bottom tab bar switches between Drips, Shots, Calculator and Timer. Search looks across both drug tabs.

## What it does

- **Starred cards:** tap the star on any drip or injection to keep it handy, then use the Starred button to see only those. Stars stay on that phone.
- **Calculator:** set a rate, check a running drip, count the drops, and IV push times. The drop counter has you tap once for each drop for 10 seconds and compares the count to the target.
- **Timer:** times the one infusion that is running, with a progress bar, time left and done-by time. It stays on that phone.
- **Theme:** a Light, Dark or Auto switch under the page title.
- **Updates:** the app offers an Update banner when a newer version is published.

It is one static page with no build step and no dependencies other than Google Fonts.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole app: styles, data and script |
| `logo.jpg` | Drip Docx logo, used in the header and as the favicon |
| `version.json` | The current version number, checked by the app so phones can offer an update |
| `README.md` | This file |

## Run it

Open `index.html` in a browser. Nothing else is needed.

## Sharing

This repository is public and published with GitHub Pages, with Narges Najmyar's approval. Share the Pages link with the Drip Docx nurses. The page asks search engines not to list it, but anyone who has the link can open it.

The content comes from Narges's Drip Docx Nurse Reference Guide plus details from the Olympia vial labels. Menu prices are included. Pay rates, door codes, passwords and payment handles are intentionally not in this app. Do not add them.

## Edit the content

All drug data lives in the `D` array in the `<script>` block of `index.html`. Each entry has these fields:

| Field | Meaning |
|---|---|
| `id` | Short unique name, used as the card's anchor and to look up the price in the `PRICE` list |
| `kind` | `"iv"` for drips, `"inj"` for injections (the four with a push time show an IV push tag) |
| `name`, `quick` | Card title and the one-line summary under it |
| `fridge` | `true` shows the Refrigerated tag |
| `does`, `ingredients`, `draw`, `bag`, `addons`, `cautions` | The card sections |
| `table` | Optional label strengths table |
| `notes` | Not shown in the app. Leave it empty and put anything important in `cautions` |

Prices live in the `PRICE` list and IV push times in the `PUSH` and `PUSH_TABLE` lists, just below the drug data. The push times come from the manufacturer labels, not the guide, and should be approved by Narges. Glutathione is 3 to 5 minutes and the slower the better, per Narges. Only glutathione, famotidine, Toradol and Zofran are IV pushes; the other injections are IM.

Copy an existing entry, change the text, and reload the page.

## Open items to confirm with Narges

Based on the guide and what Narges has said since.

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
| Background | `#E5DED5` | `#000000` |
| Cards | `#FFFFFF` | `#1B1816` |
| Text | `#1C1C1C` | `#F2EAE2` |
| Accent | `#7D6E63` | `#CCB094` |
| Header band and tab bar | `#1C1C1C` | `#1C1C1C` |

Fonts: Playfair Display for headings, Montserrat for body text, and Atkinson Hyperlegible for numbers. All three load from Google Fonts.

## Disclaimer

For internal reference only. Always confirm doses and orders with Narges and follow the order and protocols in place for each patient.

## Releasing an update

1. Change `VERSION` in `index.html` (search for `const VERSION`) to a new value, for example `2026-12-01.1`.
2. Put the same text in `version.json`, like `{"version":"2026-12-01.1"}`.
3. Upload both files to GitHub.

Phones that open the app check `version.json`. If it differs from the version they are running, a banner appears with an Update button. The version also shows at the bottom of the page.
