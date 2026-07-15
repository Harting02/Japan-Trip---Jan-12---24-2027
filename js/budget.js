(function () {
  "use strict";

  const CATEGORIES = [
    { key: "flights", label: "Flights", color: "#d6472e" },
    { key: "transport", label: "Local transport", color: "#4a5b98" },
    { key: "accommodation", label: "Accommodation", color: "#c9822a" },
    { key: "food", label: "Food", color: "#128a63" },
    { key: "misc", label: "Misc", color: "#a34a86" }
  ];

  const PAX_HIGHLIGHT = "#d6472e";
  const PAX_BASE = "#4a5b98";

  let pax = BUDGET.pax.default;

  function fmt(n) {
    return "RM " + Math.round(n).toLocaleString();
  }

  function el(tag, className, children) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    (children || []).forEach((c) => {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function accommodationCost(item, p) {
    if (item.perPerson) return item.ratePerPersonMYR * item.nights * p;
    const rooms = Math.ceil(p / item.roomCapacity);
    return rooms * item.ratePerRoomMYR * item.nights;
  }

  function transportPerPersonTotal() {
    return BUDGET.transportLegs.reduce((sum, l) => sum + l.perPersonMYR, 0);
  }

  function computeTotals(p) {
    const flights = BUDGET.flights.perPersonMYR * p;
    const transport = transportPerPersonTotal() * p;
    const accommodation = BUDGET.accommodation.reduce((sum, a) => sum + accommodationCost(a, p), 0);
    const food = BUDGET.food.perPersonPerDayMYR * BUDGET.food.days * p;
    const misc = BUDGET.misc.perPersonMYR * p;
    const grandTotal = flights + transport + accommodation + food + misc;
    return { flights, transport, accommodation, food, misc, grandTotal, perPerson: grandTotal / p };
  }

  function renderPaxControl() {
    document.getElementById("pax-count").textContent = pax;
    document.getElementById("pax-minus").disabled = pax <= BUDGET.pax.min;
    document.getElementById("pax-plus").disabled = pax >= BUDGET.pax.max;
  }

  function renderKPIs(totals) {
    const grid = document.getElementById("kpi-grid");
    grid.innerHTML = "";

    const headline = [
      { label: "Grand total", value: fmt(totals.grandTotal), sub: `For ${pax} pax` },
      { label: "Per person", value: fmt(totals.perPerson), sub: "Grand total ÷ pax" }
    ];

    headline.forEach((k) => {
      grid.appendChild(
        el("div", "kpi-card kpi-card-headline", [
          el("div", "kpi-label", [k.label]),
          el("div", "kpi-value", [k.value]),
          el("div", "kpi-sub", [k.sub])
        ])
      );
    });

    CATEGORIES.forEach((cat) => {
      const swatch = el("div", "kpi-swatch", []);
      swatch.style.background = cat.color;
      grid.appendChild(
        el("div", "kpi-card", [
          swatch,
          el("div", "kpi-label", [cat.label]),
          el("div", "kpi-value", [fmt(totals[cat.key])])
        ])
      );
    });
  }

  function renderProgress(totals) {
    const wrap = document.getElementById("progress-bars");
    wrap.innerHTML = "";
    CATEGORIES.forEach((cat) => {
      const val = totals[cat.key];
      const pct = totals.grandTotal ? Math.round((val / totals.grandTotal) * 100) : 0;

      const fill = el("div", "progress-fill", []);
      fill.style.width = pct + "%";
      fill.style.background = cat.color;
      const track = el("div", "progress-track", [fill]);

      wrap.appendChild(
        el("div", "progress-wrap", [
          el("div", "progress-label", [
            el("span", null, [cat.label]),
            el("span", "progress-value", [`${fmt(val)} (${pct}%)`])
          ]),
          track
        ])
      );
    });
  }

  function renderDonut(totals) {
    Plotly.newPlot(
      "chart-donut",
      [
        {
          type: "pie",
          sort: false,
          labels: CATEGORIES.map((c) => c.label),
          values: CATEGORIES.map((c) => totals[c.key]),
          hole: 0.65,
          marker: { colors: CATEGORIES.map((c) => c.color), line: { color: "#faf9f6", width: 2 } },
          textinfo: "none",
          hovertemplate: "<b>%{label}</b><br>RM %{value:,.0f}<br>%{percent}<extra></extra>"
        }
      ],
      {
        paper_bgcolor: "#ffffff",
        plot_bgcolor: "#ffffff",
        margin: { t: 36, b: 20, l: 20, r: 20 },
        legend: { font: { color: "#3d4266", size: 12, family: "Zen Kaku Gothic New, sans-serif" }, bgcolor: "rgba(0,0,0,0)" },
        height: 300,
        title: { text: "Expense breakdown", font: { color: "#6b7086", size: 12, family: "JetBrains Mono, monospace" }, x: 0.02 },
        annotations: [
          {
            text: `<b>${fmt(totals.grandTotal)}</b>`,
            x: 0.5,
            y: 0.5,
            font: { size: 15, color: "#12162a" },
            showarrow: false
          }
        ]
      },
      { displayModeBar: false, responsive: true }
    );
  }

  function renderPaxChart() {
    const paxRange = [];
    for (let p = BUDGET.pax.min; p <= Math.max(BUDGET.pax.max, 8); p++) paxRange.push(p);

    const perPersonByPax = paxRange.map((p) => computeTotals(p).perPerson);
    const colors = paxRange.map((p) => (p === pax ? PAX_HIGHLIGHT : PAX_BASE));

    Plotly.newPlot(
      "chart-pax",
      [
        {
          type: "bar",
          x: paxRange,
          y: perPersonByPax,
          marker: { color: colors },
          hovertemplate: "%{x} pax<br>RM %{y:,.0f} / person<extra></extra>"
        }
      ],
      {
        paper_bgcolor: "#ffffff",
        plot_bgcolor: "#ffffff",
        margin: { t: 36, b: 36, l: 50, r: 20 },
        height: 300,
        title: { text: "Cost per person by group size", font: { color: "#6b7086", size: 12, family: "JetBrains Mono, monospace" }, x: 0.02 },
        xaxis: { title: "Pax", tickmode: "linear", dtick: 1, tickfont: { color: "#6b7086", size: 11 }, gridcolor: "#e7e3d9" },
        yaxis: { title: "RM / person", tickfont: { color: "#6b7086", size: 11 }, gridcolor: "#e7e3d9" }
      },
      { displayModeBar: false, responsive: true }
    );
  }

  function makeExpander(title, bodyNode, openByDefault) {
    const btn = el("button", "expander-btn", [
      title,
      el("span", "expander-arrow", ["▾"])
    ]);
    btn.setAttribute("type", "button");

    const body = el("div", "expander-body", [bodyNode]);
    const wrap = el("div", openByDefault ? "expander open" : "expander", [btn, body]);

    btn.addEventListener("click", () => wrap.classList.toggle("open"));
    return wrap;
  }

  function table(headers, rows) {
    const thead = el("thead", null, [
      el("tr", null, headers.map((h) => el("th", null, [h])))
    ]);
    const tbody = el(
      "tbody",
      null,
      rows.map((row) => el("tr", null, row.map((cell) => el("td", null, [cell]))))
    );
    return el("table", null, [thead, tbody]);
  }

  function renderFlightsExpander(totals) {
    const body = table(
      ["Route", "Per person", `Total (${pax} pax)`],
      [[`${BUDGET.flights.detail}`, fmt(BUDGET.flights.perPersonMYR), fmt(totals.flights)]]
    );
    return makeExpander("Flights", el("div", null, [body, el("p", "expander-note", [BUDGET.flights.notes])]));
  }

  function renderTransportExpander() {
    const rows = BUDGET.transportLegs.map((leg) => [
      leg.label,
      leg.detail,
      fmt(leg.perPersonMYR),
      fmt(leg.perPersonMYR * pax)
    ]);
    const body = table(["Leg", "Via", "Per person", `Total (${pax} pax)`], rows);
    return makeExpander("Local transport", body, true);
  }

  function renderAccommodationExpander() {
    const rows = BUDGET.accommodation.map((item) => {
      const cost = accommodationCost(item, pax);
      const basis = item.perPerson
        ? "per person"
        : `${Math.ceil(pax / item.roomCapacity)} room(s) × ${item.roomCapacity}/rm`;
      return [item.city, `${item.nights} night${item.nights > 1 ? "s" : ""}`, item.pick, basis, fmt(cost)];
    });
    const body = table(["City", "Nights", "Assumed pick", "Rooms", `Total (${pax} pax)`], rows);

    const stayOptions = el(
      "div",
      "stay-list",
      BUDGET.stay.map((group) =>
        el("div", "stay-card", [
          el("div", "stay-city", [group.city]),
          el(
            "ul",
            "stay-options",
            group.options.map((opt) =>
              el("li", "stay-option", [
                el("div", "stay-option-head", [
                  el("span", "stay-name", [opt.name]),
                  el("span", "stay-price", [opt.price])
                ]),
                el("div", "stay-note", [opt.note])
              ])
            )
          )
        ])
      )
    );

    return makeExpander(
      "Accommodation",
      el("div", null, [body, el("p", "expander-note", ["Options considered per stop:"]), stayOptions])
    );
  }

  function renderFoodExpander(totals) {
    const body = table(
      ["Daily estimate / person", "Days", `Total (${pax} pax)`],
      [[fmt(BUDGET.food.perPersonPerDayMYR), String(BUDGET.food.days), fmt(totals.food)]]
    );
    return makeExpander("Food", el("div", null, [body, el("p", "expander-note", [BUDGET.food.notes])]));
  }

  function renderMiscExpander(totals) {
    const body = table(
      ["Per person", `Total (${pax} pax)`],
      [[fmt(BUDGET.misc.perPersonMYR), fmt(totals.misc)]]
    );
    return makeExpander("Misc / contingency", el("div", null, [body, el("p", "expander-note", [BUDGET.misc.notes])]));
  }

  function renderExpanders(totals) {
    const wrap = document.getElementById("expanders");
    wrap.innerHTML = "";
    wrap.appendChild(renderFlightsExpander(totals));
    wrap.appendChild(renderTransportExpander());
    wrap.appendChild(renderAccommodationExpander());
    wrap.appendChild(renderFoodExpander(totals));
    wrap.appendChild(renderMiscExpander(totals));
  }

  function renderNotes() {
    const list = document.getElementById("budget-notes-list");
    list.innerHTML = "";
    [BUDGET.jrPassNote, BUDGET.exchangeRate].forEach((note) => list.appendChild(el("li", null, [note])));
  }

  function renderAll() {
    const totals = computeTotals(pax);
    renderPaxControl();
    renderKPIs(totals);
    renderProgress(totals);
    renderDonut(totals);
    renderPaxChart();
    renderExpanders(totals);
  }

  function init() {
    renderNotes();
    renderAll();

    document.getElementById("pax-minus").addEventListener("click", () => {
      pax = Math.max(BUDGET.pax.min, pax - 1);
      renderAll();
    });
    document.getElementById("pax-plus").addEventListener("click", () => {
      pax = Math.min(BUDGET.pax.max, pax + 1);
      renderAll();
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
