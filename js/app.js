(function () {
  "use strict";

  function el(tag, className, children) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    (children || []).forEach((c) => {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function renderHero() {
    document.getElementById("hero-title").textContent = TRIP.title;
    document.getElementById("hero-subtitle").textContent = TRIP.subtitle;
    document.getElementById("hero-dates").textContent = TRIP.dateRange;
    document.title = TRIP.title;
  }

  function renderBoard(containerId, flight) {
    const board = document.getElementById(containerId);
    board.innerHTML = "";

    const label = el("div", "board-label", [flight.label]);

    const route = el("div", "board-route", [
      `${flight.from.code} \u2192 ${flight.to.code}`,
      el("span", "via", [`via ${flight.via} \u2014 ${flight.from.city} to ${flight.to.city}`])
    ]);

    const times = el("div", "board-times", [
      el("span", "depart", [flight.depart]),
      ` depart \u00b7 ${flight.date}`,
      el("span", "arrive-note", [`arrive ${flight.arrive} (${flight.arriveNote})`])
    ]);

    const flights = el("div", "board-flights", [
      `Flights: ${flight.flights.join(" \u00b7 ")}`
    ]);

    board.appendChild(label);
    board.appendChild(route);
    board.appendChild(times);
    board.appendChild(flights);
  }

  function renderDayCard(day) {
    const items = el(
      "ul",
      "day-items",
      day.items.map((item) => el("li", null, [item]))
    );

    return el("div", "day-card", [
      el("div", "day-card-head", [
        el("span", "day-date", [day.date]),
        el("span", "day-label", [day.label])
      ]),
      items
    ]);
  }

  function renderStop(stop, index) {
    const daysWrap = el(
      "div",
      "stop-days",
      stop.days.map(renderDayCard)
    );

    const nightsLabel =
      stop.nightCount === 0
        ? "Departure"
        : `${stop.nights} \u00b7 ${stop.nightCount} night${stop.nightCount > 1 ? "s" : ""}`;

    const head = el("button", "stop-head", [
      el("span", "stop-city", [stop.city]),
      el("span", "stop-kanji", [stop.kanji]),
      el("span", "stop-nights", [nightsLabel]),
      el("span", "stop-toggle", ["+"])
    ]);
    head.setAttribute("aria-expanded", "true");
    head.setAttribute("type", "button");

    const stopEl = el("div", "stop is-open", [
      el("div", "stop-marker"),
      head,
      daysWrap
    ]);

    head.addEventListener("click", () => {
      const isOpen = stopEl.classList.toggle("is-open");
      head.setAttribute("aria-expanded", String(isOpen));
    });

    return stopEl;
  }

  function renderRoute() {
    const route = document.getElementById("route");
    route.innerHTML = "";
    TRIP.stops.forEach((stop, i) => route.appendChild(renderStop(stop, i)));
  }

  function renderNotes() {
    const list = document.getElementById("notes-list");
    list.innerHTML = "";
    TRIP.notes.forEach((note) => list.appendChild(el("li", null, [note])));
  }

  function init() {
    renderHero();
    renderBoard("board-outbound", TRIP.outbound);
    renderBoard("board-return", TRIP.return);
    renderRoute();
    renderNotes();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
