// Japan Trip — Budget data
// All figures are per person unless noted. Edit here to update the Budget page.

const BUDGET = {
  pax: { default: 4, min: 1, max: 10 },
  exchangeRate: "¥1 ≈ RM 0.0251 (Jul 2026) — MYR figures are approximate, check the live rate closer to booking.",
  jrPassNote: "Skip the classic 7-day nationwide JR Pass for this route — since its last price hike it doesn't pencil out, and several legs (Odakyu Romancecar, Nagaden to Yudanaka, Kintetsu to Nara, Hankyu to Osaka) aren't covered anyway. Buy point-to-point instead, and get the Hakone Freepass (¥7,100 / ~RM178, 2-day) locally for the Hakone day.",

  flights: {
    label: "Round-trip flight",
    detail: "KCH → NRT via BWN (BI-856/695), NRT → KCH via BWN (BI-696/855)",
    perPersonMYR: 2500,
    notes: "Placeholder based on typical fares for this routing — update once tickets are booked."
  },

  transportLegs: [
    { label: "Narita → Tokyo", detail: "Keisei Skyliner", perPersonMYR: 60 },
    { label: "Tokyo → Hakone (day)", detail: "Hakone Freepass (buses, ropeway, cruise) + Romancecar seat surcharge, round trip", perPersonMYR: 238 },
    { label: "Hakone → Yudanaka", detail: "Odakyu bus/train + Hokuriku Shinkansen \"Kagayaki\" + Nagaden Line", perPersonMYR: 275 },
    { label: "Yudanaka → Kyoto", detail: "Nagaden + ltd. express \"Shinano\" via Kiso Valley + Tokaido Shinkansen", perPersonMYR: 317 },
    { label: "Kyoto ↔ Nara", detail: "JR Nara Line Miyakoji Rapid, round trip", perPersonMYR: 36 },
    { label: "Kyoto → Osaka", detail: "JR Special Rapid", perPersonMYR: 15 },
    { label: "Osaka → Narita area", detail: "Shinkansen \"Nozomi\" + Narita Express", perPersonMYR: 425 }
  ],

  accommodation: [
    { city: "Tokyo", nights: 3, ratePerRoomMYR: 276, roomCapacity: 2, pick: "Hotel + Hostel Tokyo Asakusa 2 — private room, mid-range estimate" },
    { city: "Hakone", nights: 1, ratePerRoomMYR: 753, roomCapacity: 2, pick: "Tonosawa Ichinoyu Honkan — 2p w/ dinner, private balcony onsen" },
    { city: "Shibu Onsen", nights: 1, ratePerPersonMYR: 377, perPerson: true, pick: "Koishiya Ryokan — per person w/ meals" },
    { city: "Kyoto", nights: 3, ratePerRoomMYR: 377, roomCapacity: 4, pick: "Ryokan Hostel Gion — family room" },
    { city: "Osaka", nights: 1, ratePerRoomMYR: 264, roomCapacity: 2, pick: "Osaka Namba Hostel Miyabi — private" },
    { city: "Narita", nights: 1, ratePerRoomMYR: 226, roomCapacity: 3, pick: "Toyoko Inn Narita Airport Shinkan — twin/triple, near Jan 23 overnight" }
  ],

  stay: [
    {
      city: "Tokyo (Asakusa)",
      options: [
        { name: "Hotel + Hostel Tokyo Asakusa 2", price: "¥8,000–14,000/night (~RM201–351) private rm", note: "Well-reviewed for cleanliness, steps from Senso-ji" },
        { name: "Asakusa Hostel Toukaisou", price: "¥9,000–15,000/night (~RM226–376) private (2–4p)", note: "Laundry, kitchen, quiet safe block" }
      ]
    },
    {
      city: "Hakone",
      options: [
        { name: "Tonosawa Ichinoyu Honkan", price: "¥25,000–35,000 (~RM628–879) for 2p w/ dinner", note: "Private balcony onsen, good value vs luxury ryokan" },
        { name: "Hakone Suimeiso", price: "¥15,000–20,000 (~RM377–502) for 2p", note: "3 min from Hakone-Yumoto Station, public baths" }
      ]
    },
    {
      city: "Shibu Onsen",
      options: [
        { name: "Koishiya Ryokan", price: "¥12,000–18,000/person w/ meals (~RM301–452)", note: "Clean, budget, free key to all 9 public bathhouses" },
        { name: "Daymaruya Ryokan", price: "¥10,000–15,000/person (~RM251–376)", note: "Owner-run, free shuttle to Snow Monkey Park/station" }
      ]
    },
    {
      city: "Kyoto",
      options: [
        { name: "Ryokan Hostel Gion", price: "¥12,000–18,000 (~RM301–452) family room", note: "Very clean, quiet, right in Gion near Higashiyama" },
        { name: "K's House Kyoto", price: "¥3,500–6,000/bed (~RM88–151), private rooms available", note: "Big social space, 10 min from Kyoto Station" }
      ]
    },
    {
      city: "Osaka",
      options: [
        { name: "Osaka Namba Hostel Miyabi", price: "¥8,000–13,000 (~RM201–326) private", note: "High cleanliness ratings, Namba Station location" },
        { name: "Dotonbori Hotel", price: "¥10,000–16,000 (~RM251–402) private", note: "Clean, plain, central, good reviews" }
      ]
    },
    {
      city: "Narita (Jan 23)",
      options: [
        { name: "Toyoko Inn Narita Airport Shinkan", price: "¥8,000–10,000 (~RM201–251) twin/triple", note: "Business-hotel clean/safe, free terminal shuttle — better for a group than a capsule hotel" },
        { name: "9h nine hours Narita (Terminal 2)", price: "¥5,700 (~RM143) solo capsule", note: "Only if splitting up — no private group rooms" }
      ]
    }
  ],

  food: {
    perPersonPerDayMYR: 150,
    days: 12,
    notes: "Convenience stores, casual noodle/rice shops, a mix of sit-down meals — 13–24 Jan inclusive."
  },

  misc: {
    label: "Misc / contingency",
    perPersonMYR: 0,
    notes: "Not estimated yet — SIM/eSIM, souvenirs, optional activities (teamLab, etc.). Add your own per-person figure here."
  }
};
