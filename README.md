# Print Cardify

If you've ever needed to print a photocopy of your CNIC or a set of passport photos, you know the routine: go to a print shop, explain what you need, wait, pay, and hope they arranged the copies sensibly on the page. Doing it yourself isn't much better — manually placing images on an A4 sheet in Word or Photoshop just to get the spacing and card size right is fiddly and wastes paper when it's off.

Print Cardify exists to skip all of that. Upload the front and back of a card, or a single photo, and it lays everything out at the correct real-world size — 85×53.9mm for ID cards, 35×45mm for passport photos — arranged and repeated to fill an A4 sheet, ready to print directly from the browser.

## Why it's built the way it is

- **No accounts, no uploads to a server.** Images never leave your browser — they're processed and rendered locally and sent straight to `window.print()`. There was no reason to make people trust a server with a scan of their ID card.
- **Free.** This started as a tool to solve a recurring personal annoyance, not a product to monetize.
- **Correct measurements over "close enough".** Print shops and generic templates often get card dimensions slightly wrong, wasting a printed sheet. Getting the millimeters right is the entire point.

## What's here today

- **CNIC / ID card layout generator** — front and back images arranged in a repeating grid for printing multiple copies at once.
- **Passport photo maker** — one photo turned into a grid of standard passport-size prints (4 to 20 per sheet).

More layout generators (e.g. polaroid-style prints) are planned as the same need comes up for other formats.
