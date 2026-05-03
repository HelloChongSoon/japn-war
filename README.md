# Japan's War in Asia and the Pacific

An interactive static site that maps the expansion of Japan's war from Manchuria in 1931 to the formal surrender in Tokyo Bay on September 2, 1945.

## What changed

- Refactored the original one-file prototype into `index.html`, `styles.css`, and `script.js`.
- Expanded the historical arc from 8 stops to 10 stops with clearer pacing across China, Southeast Asia, the Pacific, and the final surrender.
- Added stronger visual hierarchy, accessible controls, keyboard navigation, and a clickable stop-by-stop timeline.
- Added a no-build GitHub Pages workflow so the project can deploy directly from `main`.

## Project structure

- `index.html` - page structure and content slots
- `styles.css` - layout, typography, theme, responsiveness, and map overlay styling
- `script.js` - map setup, timeline data, playback controls, and UI rendering
- `.github/workflows/deploy.yml` - GitHub Pages deployment workflow

## Run locally

Because this is a plain static site, you can preview it with any local web server.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy with GitHub Pages

The repository includes a GitHub Actions workflow that deploys the static files to GitHub Pages whenever `main` is updated.

To enable it in GitHub:

1. Push the repository to GitHub.
2. In the repository settings, open `Pages`.
3. Set the source to `GitHub Actions`.
4. Push to `main` or run the `Deploy static site to GitHub Pages` workflow manually.

## Historical scope

The site is an educational timeline, not a full campaign database. Each stop highlights the strategic shift of a phase rather than every operation in the war.

The event sequence was checked against these references:

- Britannica on the [Mukden Incident](https://www.britannica.com/event/Mukden-Incident), [Marco Polo Bridge Incident](https://www.britannica.com/event/Marco-Polo-Bridge-Incident), and [Second Sino-Japanese War](https://www.britannica.com/event/Second-Sino-Japanese-War)
- National Park Service material on [Pearl Harbor National Memorial](https://www.nps.gov/pearlharbor/) and [National Pearl Harbor Remembrance Day](https://www.nps.gov/perl/learn/historyculture/national-pearl-harbor-remembrance-day.htm)
- The National WWII Museum overview of the [Battle of Midway](https://www.nationalww2museum.org/war/topics/battle-of-midway)
- National Archives material on the [Japanese Instrument of Surrender](https://www.archives.gov/college-park/highlights/japanese-surrender)

## Notes for future improvements

- Add a dedicated source panel or bibliography inside the UI.
- Add optional audio narration or captions for classroom use.
- Add campaign overlays or filters for China, Southeast Asia, and the Central Pacific.
