// Japan Trip — Jan 13–24, 2027
// Edit this file to update the itinerary. The site reads directly from this object.

const TRIP = {
  title: "Japan, Winter Line",
  subtitle: "Kuching → Tokyo → Nagano → Kyoto → Nara → Osaka → Tokyo → Kuching",
  dateRange: "13 – 24 January 2027",

  outbound: {
    label: "Outbound",
    date: "Tue, 12 Jan 2027",
    from: { code: "KCH", city: "Kuching" },
    to: { code: "NRT", city: "Narita" },
    via: "Bandar Seri Begawan (BWN)",
    depart: "21:40",
    arrive: "07:30",
    arriveNote: "+1 day, Wed 13 Jan",
    flights: ["BI-856", "BI-695"]
  },

  return: {
    label: "Return",
    date: "Sun, 24 Jan 2027",
    from: { code: "NRT", city: "Narita" },
    to: { code: "KCH", city: "Kuching" },
    via: "Bandar Seri Begawan (BWN)",
    depart: "11:45",
    arrive: "21:00",
    arriveNote: "same day",
    flights: ["BI-696", "BI-855"]
  },

  stops: [
    {
      city: "Tokyo",
      kanji: "東京",
      nights: "Jan 13 – 15",
      nightCount: 3,
      days: [
        {
          date: "Jan 13",
          label: "Arrival",
          items: [
            "Land Narita 07:30, transfer into the city",
            "Check in, rest off the flight",
            "Evening: Senso-ji, Asakusa — lit up and quieter after dark"
          ]
        },
        {
          date: "Jan 14",
          label: "Market & Shibuya",
          items: [
            "Breakfast at Tsukiji Outer Market — before 9am for the best stalls",
            "Afternoon: Ginza / teamLab (optional)",
            "Evening: Shibuya Crossing + Shibuya Sky at dusk"
          ]
        },
        {
          date: "Jan 15",
          label: "Local Tokyo",
          items: [
            "Morning: Meiji Shrine / Harajuku",
            "Afternoon: Yanaka Ginza — old-school, cash-only local shops",
            "Dinner: Omoide Yokocho, Shinjuku"
          ]
        }
      ]
    },
    {
      city: "Nagano",
      kanji: "長野",
      nights: "Jan 16 – 17",
      nightCount: 2,
      days: [
        {
          date: "Jan 16",
          label: "Tokyo to Yudanaka",
          items: [
            "Direct Shinkansen from Tokyo to Nagano, then local line to Yudanaka",
            "Check in to onsen ryokan, kaiseki dinner",
            "Evening: stroll through Shibu Onsen — 9 historic public bathhouses"
          ]
        },
        {
          date: "Jan 17",
          label: "Snow monkeys & onsen soak",
          items: [
            "Early morning: hike into Jigokudani Snow Monkey Park (~25 min through snowy forest, wild monkeys in hot springs)",
            "Afternoon: free time — soak in the ryokan's onsen or explore Yudanaka town"
          ]
        },
        {
          date: "Jan 18",
          label: "Travel to Kyoto",
          items: [
            "Train to Kyoto via Nagoya (scenic Kiso Valley route)"
          ]
        }
      ]
    },
    {
      city: "Kyoto",
      kanji: "京都",
      nights: "Jan 19 – 21",
      nightCount: 3,
      days: [
        {
          date: "Jan 19",
          label: "Shrines & temples",
          items: [
            "Early: Fushimi Inari Taisha — before 8am to beat the crowds",
            "Afternoon: Kiyomizu-dera + Higashiyama old streets",
            "Evening in Gion"
          ]
        },
        {
          date: "Jan 20",
          label: "Nara day trip + market",
          items: [
            "Day trip to Nara — Todai-ji, Great Buddha Hall, deer park (~45 min by train)",
            "Evening: Nishiki Market for dinner, bring cash"
          ]
        },
        {
          date: "Jan 21",
          label: "Bamboo grove, then Osaka",
          items: [
            "Morning: Arashiyama Bamboo Forest (early = quieter) + Tenryu-ji",
            "Afternoon train to Osaka",
            "Evening: Dotonbori"
          ]
        }
      ]
    },
    {
      city: "Osaka",
      kanji: "大阪",
      nights: "Jan 22 – 23",
      nightCount: 2,
      days: [
        {
          date: "Jan 22",
          label: "Market & castle",
          items: [
            "Breakfast at Kuromon Market — before 1pm, popular stalls sell out",
            "Osaka Castle grounds + observatory",
            "Free time: Shinsaibashi shopping"
          ]
        },
        {
          date: "Jan 23",
          label: "Travel day",
          items: [
            "Free morning",
            "Afternoon: shinkansen back toward Tokyo/Narita",
            "Overnight near the airport"
          ]
        }
      ]
    },
    {
      city: "Narita",
      kanji: "成田",
      nights: "Jan 24",
      nightCount: 0,
      days: [
        {
          date: "Jan 24",
          label: "Departure",
          items: [
            "Early transfer to Narita",
            "Flight departs 11:45"
          ]
        }
      ]
    }
  ],

  notes: [
    "Luggage forwarding (takkyubin): forward big suitcases hotel-to-hotel, carry only a day bag on travel days.",
    "Language: major stations, menus, and signage have enough English; Google Translate's camera mode covers the rest.",
    "January cold: layers needed. Kyoto/Osaka ~5–10°C daytime; Nagano colder with snow. Grippy shoes for the Jigokudani trail.",
    "Book ahead: Shibu Onsen ryokan and any teamLab tickets — January is peak onsen season.",
    "Costs: see the Budget section below for the full transport, accommodation, and food breakdown, adjustable by pax."
  ]
};
