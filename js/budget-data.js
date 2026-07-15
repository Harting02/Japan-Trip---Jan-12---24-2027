// Japan Trip — Budget data
// All figures are per person unless noted. Edit here to update the Budget page.

const BUDGET = {
  pax: { default: 4, min: 1, max: 10 },
  exchangeRate: "¥1 ≈ RM 0.0251 (Jul 2026) — MYR figures are approximate, check the live rate closer to booking.",
  jrPassNote: "Skip the classic 7-day nationwide JR Pass for this route — it doesn't pencil out, and several legs (Nagaden to Yudanaka, Kintetsu to Nara, Hankyu to Osaka) aren't covered anyway. Buy point-to-point instead.",

  flights: {
    label: "Round-trip flight",
    detail: "KCH → NRT via BWN (BI-856/695), NRT → KCH via BWN (BI-696/855)",
    perPersonMYR: 2500,
    notes: "Placeholder based on typical fares for this routing — update once tickets are booked."
  },

  transportLegs: [
    { label: "Narita → Tokyo", detail: "Keisei Skyliner", perPersonMYR: 60 },
    { label: "Tokyo → Yudanaka", detail: "Hokuriku Shinkansen \"Kagayaki\" (Tokyo → Nagano) + Nagaden Line ltd. express (Nagano → Yudanaka)", perPersonMYR: 233 },
    { label: "Yudanaka → Kyoto", detail: "Nagaden + ltd. express \"Shinano\" via Kiso Valley + Tokaido Shinkansen", perPersonMYR: 317 },
    { label: "Kyoto ↔ Nara", detail: "JR Nara Line Miyakoji Rapid, round trip", perPersonMYR: 36 },
    { label: "Kyoto → Osaka", detail: "Hankyu Ltd Express (scenic route via Kawaramachi)", perPersonMYR: 10 },
    { label: "Osaka → Narita area", detail: "Shinkansen \"Nozomi\" + Narita Express", perPersonMYR: 425 }
  ],

  accommodation: [
    { city: "Tokyo", nights: 3, ratePerRoomMYR: 201, roomCapacity: 2, pick: "Hotel + Hostel Tokyo Asakusa 2 — private room, low end of range" },
    { city: "Shibu Onsen", nights: 2, ratePerPersonMYR: 251, perPerson: true, pick: "Daymaruya Ryokan — per person, low end of range" },
    { city: "Kyoto", nights: 3, ratePerPersonMYR: 88, perPerson: true, pick: "K's House Kyoto — per bed, low end of range" },
    { city: "Osaka", nights: 1, ratePerRoomMYR: 201, roomCapacity: 2, pick: "Osaka Namba Hostel Miyabi — private, low end of range" },
    { city: "Narita", nights: 1, ratePerRoomMYR: 201, roomCapacity: 3, pick: "Toyoko Inn Narita Airport Shinkan — twin/triple, low end of range, near Jan 23 overnight" }
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
      city: "Shibu Onsen",
      options: [
        { name: "Daymaruya Ryokan", price: "¥10,000–15,000/person (~RM251–376)", note: "Owner-run, free shuttle to Snow Monkey Park/station" },
        { name: "Koishiya Ryokan", price: "¥12,000–18,000/person w/ meals (~RM301–452)", note: "Clean, budget, free key to all 9 public bathhouses" }
      ]
    },
    {
      city: "Kyoto",
      options: [
        { name: "K's House Kyoto", price: "¥3,500–6,000/bed (~RM88–151), private rooms available", note: "Big social space, 10 min from Kyoto Station" },
        { name: "Ryokan Hostel Gion", price: "¥12,000–18,000 (~RM301–452) family room", note: "Very clean, quiet, right in Gion near Higashiyama" }
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
