const map = L.map("map", {
  zoomControl: false,
  minZoom: 2,
  maxBounds: [
    [-70, -180],
    [85, 180]
  ],
  maxBoundsViscosity: 0.9
}).setView([24, 126], 4);

L.control.zoom({ position: "topright" }).addTo(map);

L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
  attribution: "&copy; OpenStreetMap &copy; CARTO",
  maxZoom: 8,
  subdomains: "abcd",
  noWrap: true
}).addTo(map);

const colors = {
  japan: "#ff8b6a",
  china: "#f3c86d",
  allied: "#77d2e7",
  soviet: "#a48cff",
  route: "#f5f0d4"
};

const events = [
  {
    dateLabel: "18 Sept 1931 - 1932",
    title: "Mukden Incident and the seizure of Manchuria",
    theater: "Northeast China",
    phase: "Japanese escalation",
    mapFocus: "Mukden, Changchun, Harbin",
    summary:
      "Officers of the Kwantung Army used the Mukden Incident as a pretext to occupy Manchuria. The campaign produced the puppet state of Manchukuo in 1932 and marked the start of Japan's long war on the Asian mainland.",
    highlights: [
      "Japanese troops seized Mukden on September 18, 1931, after a staged railway explosion on the South Manchurian Railway.",
      "By early 1932, major Manchurian centers had fallen and Japan installed Manchukuo under the former Qing emperor Puyi.",
      "The episode deepened Japan's international isolation and set the pattern for further expansion by force."
    ],
    locations: [
      {
        name: "Tokyo",
        lat: 35.6764,
        lng: 139.65,
        side: "japan",
        detail: "Imperial capital and political center of Japanese strategy."
      },
      {
        name: "Mukden (Shenyang)",
        lat: 41.8057,
        lng: 123.4315,
        side: "china",
        detail: "Site of the September 18, 1931 incident used to justify invasion."
      },
      {
        name: "Changchun",
        lat: 43.8171,
        lng: 125.3235,
        side: "japan",
        detail: "Later renamed Hsinking and used as the capital of Manchukuo."
      },
      {
        name: "Harbin",
        lat: 45.8038,
        lng: 126.535,
        side: "china",
        detail: "Northern Manchurian city drawn into the occupation zone."
      }
    ],
    routes: [
      {
        side: "japan",
        points: [
          [35.6764, 139.65],
          [41.8057, 123.4315],
          [43.8171, 125.3235],
          [45.8038, 126.535]
        ]
      }
    ],
    view: [
      [31, 116],
      [48, 146]
    ]
  },
  {
    dateLabel: "Jul - Dec 1937",
    title: "War in China becomes full scale",
    theater: "North and East China",
    phase: "Open war",
    mapFocus: "Beijing, Shanghai, Nanjing",
    summary:
      "Fighting at the Marco Polo Bridge widened into the Second Sino-Japanese War. Japan attacked from north China into the lower Yangtze, capturing Shanghai and then Nanjing by December.",
    highlights: [
      "A clash near the Marco Polo Bridge outside Beijing on July 7, 1937 became the opening engagement of full-scale war.",
      "Japanese forces fought a long and costly battle for Shanghai before advancing inland to Nanjing.",
      "The fall of Nanjing in December 1937 was followed by mass atrocities that became one of the defining crimes of the war in Asia."
    ],
    locations: [
      {
        name: "Marco Polo Bridge",
        lat: 39.8466,
        lng: 116.228,
        side: "china",
        detail: "The July 1937 clash here triggered full-scale war."
      },
      {
        name: "Beijing",
        lat: 39.9042,
        lng: 116.4074,
        side: "china",
        detail: "Northern political center drawn into the expanding campaign."
      },
      {
        name: "Shanghai",
        lat: 31.2304,
        lng: 121.4737,
        side: "china",
        detail: "Site of major urban fighting in late 1937."
      },
      {
        name: "Nanjing",
        lat: 32.0603,
        lng: 118.7969,
        side: "china",
        detail: "Nationalist capital captured by Japan in December 1937."
      }
    ],
    routes: [
      {
        side: "japan",
        points: [
          [35.6764, 139.65],
          [39.9042, 116.4074],
          [31.2304, 121.4737],
          [32.0603, 118.7969]
        ]
      }
    ],
    view: [
      [24, 108],
      [42, 126]
    ]
  },
  {
    dateLabel: "1938 - 1940",
    title: "Japan expands but fails to force a Chinese surrender",
    theater: "Central and South China",
    phase: "Strategic stalemate",
    mapFocus: "Wuhan, Guangzhou, Chongqing",
    summary:
      "Japan took more major Chinese cities in 1938, but China kept fighting from the interior. The war widened geographically while becoming harder for Japan to end decisively.",
    highlights: [
      "Wuhan fell in October 1938 and Guangzhou later that same month, extending Japanese reach into central and south China.",
      "The Chinese government shifted inland to Chongqing, where it continued to resist despite bombing and blockade pressure.",
      "By 1940, Japan held major cities and rail corridors but still lacked the knockout victory it had expected."
    ],
    locations: [
      {
        name: "Wuhan",
        lat: 30.5928,
        lng: 114.3055,
        side: "china",
        detail: "Central Chinese city captured by Japan in late 1938."
      },
      {
        name: "Guangzhou",
        lat: 23.1291,
        lng: 113.2644,
        side: "china",
        detail: "South China port city taken by Japan in October 1938."
      },
      {
        name: "Chongqing",
        lat: 29.563,
        lng: 106.5516,
        side: "china",
        detail: "Wartime capital of the Chinese Nationalist government."
      }
    ],
    routes: [
      {
        side: "japan",
        points: [
          [31.2304, 121.4737],
          [30.5928, 114.3055],
          [23.1291, 113.2644]
        ]
      },
      {
        side: "china",
        points: [
          [32.0603, 118.7969],
          [29.563, 106.5516]
        ]
      }
    ],
    view: [
      [20, 102],
      [35, 122]
    ]
  },
  {
    dateLabel: "7 Dec 1941 - early 1942",
    title: "Pearl Harbor and the opening of the Pacific War",
    theater: "Central Pacific and Southeast Asia",
    phase: "Sudden expansion",
    mapFocus: "Pearl Harbor, Hong Kong, Malaya, the Philippines",
    summary:
      "Japan attacked Pearl Harbor and launched near-simultaneous offensives across the Pacific and Southeast Asia. The aim was to neutralize Allied fleets and secure a defensive empire rich in oil, rubber, and strategic bases.",
    highlights: [
      "The attack on Pearl Harbor on December 7, 1941 brought the United States directly into the war.",
      "Japanese forces also struck Hong Kong, the Philippines, Malaya, Guam, and Wake as part of a coordinated regional offensive.",
      "The speed of the opening blows shocked Allied commands and shifted the war from continental Asia into a vast maritime theater."
    ],
    locations: [
      {
        name: "Pearl Harbor",
        lat: 21.3646,
        lng: -157.95,
        side: "allied",
        detail: "US Pacific Fleet base attacked on December 7, 1941."
      },
      {
        name: "Hong Kong",
        lat: 22.3193,
        lng: 114.1694,
        side: "allied",
        detail: "British colony attacked in the opening hours of the wider offensive."
      },
      {
        name: "Kota Bharu, Malaya",
        lat: 6.1254,
        lng: 102.2381,
        side: "allied",
        detail: "One of the first landing sites of the Malayan campaign."
      },
      {
        name: "Manila",
        lat: 14.5995,
        lng: 120.9842,
        side: "allied",
        detail: "Key objective in the Japanese attack on the Philippines."
      }
    ],
    routes: [
      {
        side: "japan",
        points: [
          [35.6764, 139.65],
          [22.3193, 114.1694],
          [6.1254, 102.2381],
          [14.5995, 120.9842]
        ]
      }
    ],
    camera: {
      center: [20, 170],
      zoom: 3
    },
    view: [
      [-2, 92],
      [34, -145]
    ]
  },
  {
    dateLabel: "Feb - May 1942",
    title: "Japan reaches its widest wartime empire",
    theater: "Southeast Asia and the Southwest Pacific",
    phase: "Peak expansion",
    mapFocus: "Singapore, Java, Rangoon, Rabaul",
    summary:
      "Japan's conquests accelerated through early 1942. The fall of Singapore, advances into Burma, and gains in the Dutch East Indies gave Tokyo the strategic depth and resources it had sought.",
    highlights: [
      "Singapore fell on February 15, 1942, one of Britain's worst defeats of the war.",
      "Control of the Dutch East Indies brought access to oil while advances through Burma threatened Allied links to China.",
      "Yet the very size of the empire created long sea lanes and many vulnerable island positions."
    ],
    locations: [
      {
        name: "Singapore",
        lat: 1.3521,
        lng: 103.8198,
        side: "allied",
        detail: "British fortress that fell to Japan in February 1942."
      },
      {
        name: "Batavia (Jakarta)",
        lat: -6.2088,
        lng: 106.8456,
        side: "allied",
        detail: "Center of the Dutch East Indies campaign."
      },
      {
        name: "Rangoon (Yangon)",
        lat: 16.8661,
        lng: 96.1951,
        side: "allied",
        detail: "Major Burmese port captured in March 1942."
      },
      {
        name: "Rabaul",
        lat: -4.271,
        lng: 152.203,
        side: "japan",
        detail: "Forward base anchoring Japanese operations in the Southwest Pacific."
      }
    ],
    routes: [
      {
        side: "japan",
        points: [
          [6.1254, 102.2381],
          [1.3521, 103.8198],
          [-6.2088, 106.8456]
        ]
      },
      {
        side: "japan",
        points: [
          [1.3521, 103.8198],
          [16.8661, 96.1951]
        ]
      },
      {
        side: "japan",
        points: [
          [35.6764, 139.65],
          [13.4443, 144.7937],
          [-4.271, 152.203]
        ]
      }
    ],
    view: [
      [-16, 86],
      [24, 160]
    ]
  },
  {
    dateLabel: "4 - 7 Jun 1942",
    title: "Midway becomes a strategic turning point",
    theater: "North Pacific",
    phase: "Momentum shifts",
    mapFocus: "Midway Atoll",
    summary:
      "At Midway, US forces sank four Japanese fleet carriers. Japan lost irreplaceable pilots, carriers, and operational freedom, ending hopes for another decisive naval blow against the United States.",
    highlights: [
      "Japanese planners hoped to seize Midway and lure the US Pacific Fleet into a trap.",
      "American codebreaking and carrier aviation turned the operation into a devastating Japanese defeat.",
      "Midway did not end the war, but it narrowed Japan's offensive options and helped transfer initiative to the Allies."
    ],
    locations: [
      {
        name: "Midway Atoll",
        lat: 28.2072,
        lng: -177.3735,
        side: "allied",
        detail: "Remote atoll at the center of the June 1942 carrier battle."
      },
      {
        name: "Imperial Japanese carrier force",
        lat: 31.1,
        lng: -176.4,
        side: "japan",
        detail: "Carrier striking force that sought to overwhelm Midway and the US fleet."
      }
    ],
    routes: [],
    camera: {
      center: [28, 179],
      zoom: 3
    },
    view: [
      [18, 148],
      [38, -155]
    ]
  },
  {
    dateLabel: "Aug 1942 - Feb 1943",
    title: "Guadalcanal opens the long Allied counteroffensive",
    theater: "Solomon Islands",
    phase: "Allied recovery",
    mapFocus: "Guadalcanal and Rabaul",
    summary:
      "The Guadalcanal campaign forced Japan into a grinding struggle it could not sustain. The campaign tied together land, sea, and air battles and marked the beginning of persistent Allied advances through the South Pacific.",
    highlights: [
      "US Marines landed on Guadalcanal in August 1942 to deny Japan a threatening airfield position.",
      "Repeated naval clashes and logistical strain bled both sides, but Japan could not replace losses as effectively as the United States.",
      "The campaign's outcome made Rabaul increasingly vulnerable and broke the aura of Japanese inevitability."
    ],
    locations: [
      {
        name: "Guadalcanal",
        lat: -9.6457,
        lng: 160.1562,
        side: "allied",
        detail: "Island campaign that began the sustained Allied rollback."
      },
      {
        name: "Rabaul",
        lat: -4.271,
        lng: 152.203,
        side: "japan",
        detail: "Major Japanese base whose influence was gradually reduced."
      }
    ],
    routes: [
      {
        side: "allied",
        points: [
          [-17.7434, 168.3273],
          [-9.6457, 160.1562]
        ]
      },
      {
        side: "japan",
        points: [
          [-4.271, 152.203],
          [-9.6457, 160.1562]
        ]
      }
    ],
    view: [
      [-20, 145],
      [2, 171]
    ]
  },
  {
    dateLabel: "Jun - Oct 1944",
    title: "The Marianas and the return to the Philippines",
    theater: "Western Pacific",
    phase: "Allied advance",
    mapFocus: "Saipan, Guam, Leyte",
    summary:
      "American advances into the Marianas and back toward the Philippines brought major bases within bomber range of Japan and further weakened Japanese sea power.",
    highlights: [
      "Saipan fell in July 1944 and had major political consequences inside Japan.",
      "Control of the Marianas enabled new B-29 bomber bases against the Japanese home islands.",
      "The October 1944 Leyte landings opened the campaign to retake the Philippines and led to the Battle of Leyte Gulf."
    ],
    locations: [
      {
        name: "Saipan",
        lat: 15.1778,
        lng: 145.75,
        side: "allied",
        detail: "Marianas objective captured in July 1944."
      },
      {
        name: "Guam",
        lat: 13.4443,
        lng: 144.7937,
        side: "allied",
        detail: "Retaken by US forces in summer 1944."
      },
      {
        name: "Leyte",
        lat: 10.7202,
        lng: 124.794,
        side: "allied",
        detail: "Landing site that began the liberation of the Philippines."
      }
    ],
    routes: [
      {
        side: "allied",
        points: [
          [15.1778, 145.75],
          [13.4443, 144.7937],
          [10.7202, 124.794]
        ]
      }
    ],
    view: [
      [4, 118],
      [22, 151]
    ]
  },
  {
    dateLabel: "Feb - Jun 1945",
    title: "Iwo Jima, Okinawa, and direct pressure on Japan",
    theater: "Approaches to the home islands",
    phase: "Encirclement",
    mapFocus: "Iwo Jima, Okinawa, Tokyo",
    summary:
      "The battles for Iwo Jima and Okinawa brought Allied forces to the doorstep of Japan. Bombing, blockade, and the collapse of Japan's defensive perimeter made the strategic situation increasingly untenable.",
    highlights: [
      "Iwo Jima was captured after ferocious fighting in early 1945 and provided emergency landing support for B-29 operations.",
      "Okinawa became the largest amphibious battle in the Pacific and revealed how costly an invasion of Japan might be.",
      "By mid-1945, Japan faced air attack, naval blockade, and shrinking capacity to move or supply its forces."
    ],
    locations: [
      {
        name: "Iwo Jima",
        lat: 24.7841,
        lng: 141.3228,
        side: "allied",
        detail: "Captured in March 1945 after weeks of intense combat."
      },
      {
        name: "Okinawa",
        lat: 26.3344,
        lng: 127.8056,
        side: "allied",
        detail: "Battlefield from April to June 1945 and gateway to the home islands."
      },
      {
        name: "Tokyo",
        lat: 35.6764,
        lng: 139.65,
        side: "japan",
        detail: "Political center facing mounting bombardment and blockade."
      }
    ],
    routes: [
      {
        side: "allied",
        points: [
          [10.7202, 124.794],
          [24.7841, 141.3228],
          [26.3344, 127.8056],
          [35.6764, 139.65]
        ]
      }
    ],
    view: [
      [20, 122],
      [39, 145]
    ]
  },
  {
    dateLabel: "6 Aug - 2 Sep 1945",
    title: "Atomic bombings, Soviet entry, and surrender",
    theater: "Japan and Manchuria",
    phase: "War ends",
    mapFocus: "Hiroshima, Nagasaki, Manchuria, Tokyo Bay",
    summary:
      "In August 1945, the United States dropped atomic bombs on Hiroshima and Nagasaki while the Soviet Union entered the war against Japan and invaded Manchuria. Japan announced its acceptance of surrender terms on August 15 and signed the formal instrument in Tokyo Bay on September 2.",
    highlights: [
      "Hiroshima was bombed on August 6 and Nagasaki on August 9, 1945.",
      "The Soviet Union declared war on Japan on August 8 and invaded Manchuria early on August 9, crushing Japanese forces there.",
      "The formal surrender ceremony aboard USS Missouri in Tokyo Bay on September 2, 1945 ended World War II."
    ],
    locations: [
      {
        name: "Hiroshima",
        lat: 34.3853,
        lng: 132.4553,
        side: "japan",
        detail: "Target of the first atomic bombing on August 6, 1945."
      },
      {
        name: "Nagasaki",
        lat: 32.7503,
        lng: 129.8777,
        side: "japan",
        detail: "Target of the second atomic bombing on August 9, 1945."
      },
      {
        name: "Manchuria front",
        lat: 44.0,
        lng: 125.0,
        side: "soviet",
        detail: "Axis of the Soviet offensive launched after the war declaration."
      },
      {
        name: "Tokyo Bay",
        lat: 35.45,
        lng: 139.75,
        side: "allied",
        detail: "Site of the formal surrender aboard USS Missouri on September 2, 1945."
      }
    ],
    routes: [
      {
        side: "soviet",
        points: [
          [47.2, 130.2],
          [44.0, 125.0]
        ]
      },
      {
        side: "allied",
        points: [
          [34.3853, 132.4553],
          [35.45, 139.75]
        ]
      },
      {
        side: "allied",
        points: [
          [32.7503, 129.8777],
          [35.45, 139.75]
        ]
      }
    ],
    view: [
      [28, 118],
      [48, 145]
    ]
  }
];

const layer = L.layerGroup().addTo(map);
const slider = document.getElementById("slider");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const recenterBtn = document.getElementById("recenterBtn");
const timelineButtons = document.getElementById("timelineButtons");
const introPanel = document.querySelector(".intro-panel");
const eventPanel = document.querySelector(".event-panel");
const timelinePanel = document.querySelector(".timeline-panel");
const overlayPanels = [
  introPanel,
  eventPanel,
  timelinePanel
].filter(Boolean);
const controlsPanel = document.querySelector(".controls-panel");

const refs = {
  dateLabel: document.getElementById("dateLabel"),
  eventTitle: document.getElementById("eventTitle"),
  eventStep: document.getElementById("eventStep"),
  eventSummary: document.getElementById("eventSummary"),
  theater: document.getElementById("theater"),
  phase: document.getElementById("phase"),
  mapFocus: document.getElementById("mapFocus"),
  locationCount: document.getElementById("locationCount"),
  highlights: document.getElementById("highlights"),
  stepLabel: document.getElementById("stepLabel")
};

let currentIndex = 0;
let timer = null;

function createTimelineButtons() {
  const fragment = document.createDocumentFragment();

  events.forEach((event, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "timeline-button";
    button.dataset.index = String(index);
    button.innerHTML = `
      <time>${event.dateLabel}</time>
      <strong>${event.title}</strong>
      <span>${event.phase}</span>
    `;
    button.addEventListener("click", () => {
      button.blur();
      stopPlayback();
      update(index);
    });
    fragment.appendChild(button);
  });

  timelineButtons.appendChild(fragment);
}

function formatPopup(location) {
  const sideLabel = {
    japan: "Japanese advance",
    china: "Chinese resistance",
    allied: "Allied position",
    soviet: "Soviet offensive"
  }[location.side];

  return `
    <p class="popup-kicker">${sideLabel}</p>
    <p class="popup-title">${location.name}</p>
    <p class="popup-copy">${location.detail}</p>
  `;
}

function addLocationMarker(location) {
  L.circleMarker([location.lat, location.lng], {
    radius: 7,
    color: colors[location.side],
    fillColor: colors[location.side],
    fillOpacity: 0.96,
    weight: 2
  })
    .bindPopup(formatPopup(location))
    .addTo(layer);
}

function addRoute(route) {
  L.polyline(route.points, {
    color: colors[route.side] || colors.route,
    weight: 3,
    opacity: 0.82,
    dashArray: "8 10"
  }).addTo(layer);
}

function renderHighlights(items) {
  refs.highlights.replaceChildren();

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    refs.highlights.appendChild(li);
  });
}

function updateTimelineState(index) {
  const buttons = timelineButtons.querySelectorAll(".timeline-button");
  buttons.forEach((button) => {
    const isActive = Number(button.dataset.index) === index;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function getMapPadding() {
  if (window.matchMedia("(max-width: 980px)").matches) {
    const topPanels = [introPanel, timelinePanel].filter(
      (panel) => panel && window.getComputedStyle(panel).display !== "none"
    );
    const topInset = topPanels.reduce((maxBottom, panel) => {
      const rect = panel.getBoundingClientRect();
      return Math.max(maxBottom, Math.round(rect.bottom) + 18);
    }, 24);

    const bottomPanels = [controlsPanel, eventPanel].filter(
      (panel) => panel && window.getComputedStyle(panel).display !== "none"
    );
    const bottomInset = bottomPanels.reduce((maxInset, panel) => {
      const rect = panel.getBoundingClientRect();
      return Math.max(maxInset, Math.round(window.innerHeight - rect.top) + 18);
    }, 24);

    return {
      paddingTopLeft: [24, topInset],
      paddingBottomRight: [24, bottomInset]
    };
  }

  const leftInset = overlayPanels.reduce((maxRight, panel) => {
    const rect = panel.getBoundingClientRect();
    return Math.max(maxRight, Math.round(rect.right) + 28);
  }, 40);

  const bottomInset = controlsPanel
    ? Math.max(40, Math.round(window.innerHeight - controlsPanel.getBoundingClientRect().top) + 24)
    : 40;

  return {
    paddingTopLeft: [leftInset, 36],
    paddingBottomRight: [40, bottomInset]
  };
}

function focusMap(event, animate = true) {
  if (event.camera) {
    map.flyTo(event.camera.center, event.camera.zoom, {
      animate,
      duration: animate ? 1.15 : 0.01,
      easeLinearity: 0.2
    });
    return;
  }

  map.flyToBounds(event.view, {
    duration: animate ? 1.15 : 0,
    easeLinearity: 0.2,
    ...getMapPadding()
  });
}

function update(index) {
  const event = events[index];
  currentIndex = index;
  slider.value = String(index);

  refs.dateLabel.textContent = event.dateLabel;
  refs.eventTitle.textContent = event.title;
  refs.eventStep.textContent = `${index + 1} / ${events.length}`;
  refs.eventSummary.textContent = event.summary;
  refs.theater.textContent = event.theater;
  refs.phase.textContent = event.phase;
  refs.mapFocus.textContent = event.mapFocus;
  refs.locationCount.textContent = String(event.locations.length);
  refs.stepLabel.textContent = `${event.title} (${event.dateLabel})`;

  renderHighlights(event.highlights);
  updateTimelineState(index);

  layer.clearLayers();
  event.routes.forEach(addRoute);
  event.locations.forEach(addLocationMarker);

  focusMap(event);
}

function stopPlayback() {
  if (!timer) {
    return;
  }

  clearInterval(timer);
  timer = null;
  playBtn.textContent = "Play";
}

function startPlayback() {
  stopPlayback();
  playBtn.textContent = "Pause";

  timer = setInterval(() => {
    if (currentIndex >= events.length - 1) {
      stopPlayback();
      return;
    }

    update(currentIndex + 1);
  }, 2800);
}

slider.max = String(events.length - 1);

slider.addEventListener("input", (event) => {
  stopPlayback();
  update(Number(event.target.value));
});

playBtn.addEventListener("click", () => {
  if (timer) {
    stopPlayback();
    return;
  }

  if (currentIndex === events.length - 1) {
    update(0);
  }

  startPlayback();
});

prevBtn.addEventListener("click", () => {
  stopPlayback();
  update(Math.max(0, currentIndex - 1));
});

nextBtn.addEventListener("click", () => {
  stopPlayback();
  update(Math.min(events.length - 1, currentIndex + 1));
});

recenterBtn.addEventListener("click", () => {
  stopPlayback();
  update(currentIndex);
});

let resizeTimer = null;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    focusMap(events[currentIndex], false);
  }, 120);
});

document.addEventListener("keydown", (event) => {
  if (event.target && /input|textarea|select|button/i.test(event.target.tagName)) {
    return;
  }

  if (event.key === "ArrowLeft") {
    stopPlayback();
    update(Math.max(0, currentIndex - 1));
  } else if (event.key === "ArrowRight") {
    stopPlayback();
    update(Math.min(events.length - 1, currentIndex + 1));
  } else if (event.key === " ") {
    event.preventDefault();
    if (timer) {
      stopPlayback();
    } else {
      startPlayback();
    }
  }
});

createTimelineButtons();
update(0);
