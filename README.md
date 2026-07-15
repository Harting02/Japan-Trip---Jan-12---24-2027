# Japan Trip 2027

A two-page trip site for a Japan trip, 13–24 January 2027: Kuching → Tokyo → Hakone → Nagano → Kyoto → Nara → Osaka → Tokyo → Kuching.

**Live preview:** https://harting02.github.io/Japan-Trip---Jan-12---24-2027/

## Pages

- **`index.html` — Trip plan.** Flight boards, the day-by-day route, and pre-trip notes.
- **`budget.html` — Budget.** Cost breakdown by category (flights, local transport, accommodation, food), with:
  - A donut chart of the expense split and a bar chart of cost-per-person by group size
  - Progress bars showing each category's share of the total
  - Expandable tables for the per-leg transport costs and per-city accommodation options
  - An **add/remove pax** counter that recalculates totals live — accommodation splits across rooms, everything else scales per head

## View it

Open `index.html` or `budget.html` directly in a browser, or use the live preview link above (served via **GitHub Pages**, Settings → Pages → Deploy from branch → `main` → `/root`).

## Structure

```
japan-trip-2027/
├── index.html          # trip plan page
├── budget.html         # budget planner page
├── css/
│   └── styles.css      # shared design system + layout for both pages
├── js/
│   ├── data.js          # itinerary data — edit to update flights/stops/days
│   ├── app.js            # renders data.js into index.html
│   ├── budget-data.js     # budget data — edit to update flight/transport/accommodation/food estimates
│   └── budget.js          # renders budget-data.js into budget.html (charts, pax control, tables)
└── README.md
```

## Editing the itinerary

Flight times, cities, day-by-day plans, and the "before you go" notes live in `js/data.js`. `index.html` re-renders automatically from that file.

## Editing the budget

Flight cost, per-leg transport fares, accommodation rates, and the daily food estimate live in `js/budget-data.js`. `budget.html` re-renders automatically, including the charts and the pax-adjusted totals.
