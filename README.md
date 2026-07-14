# Japan Trip 2027

A single-page itinerary site for a Japan trip, 13–24 January 2027: Kuching → Tokyo → Hakone → Nagano → Kyoto → Nara → Osaka → Tokyo → Kuching.

## View it

Open `index.html` directly in a browser, or enable **GitHub Pages** (Settings → Pages → Deploy from branch → `main` → `/root`) to get a shareable link.

## Structure

```
japan-trip-2027/
├── index.html        # page markup
├── css/
│   └── styles.css    # design system + layout
├── js/
│   ├── data.js        # trip data — edit this to update flights/stops/days
│   └── app.js          # renders data.js into the page
└── README.md
```

## Editing the itinerary

Everything you'd want to change — flight times, cities, day-by-day plans, the "before you go" notes — lives in `js/data.js`. The page re-renders automatically from that file, no HTML editing needed.
