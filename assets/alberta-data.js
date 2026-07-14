// Alberta Class 7 practice data for the Labbaik Driving School app.
// Questions written from the Alberta Basic Licence Driver's Handbook (Class 7 GDL).

const KNOWLEDGE = [
  { q: "Unless otherwise posted, what is the maximum speed limit in an urban area in Alberta?", a: ["30 km/h", "50 km/h", "60 km/h", "70 km/h"], c: 1, ex: "The default limit inside cities and towns is 50 km/h unless signs say otherwise." },
  { q: "Unless otherwise posted, what is the maximum speed on a highway outside an urban area?", a: ["70 km/h", "80 km/h", "100 km/h", "110 km/h"], c: 1, ex: "The default outside urban areas is 80 km/h — including gravel roads. Primary highways are usually POSTED at 100\u2013110 km/h." },
  { q: "In Calgary, playground zones (30 km/h) are in effect…", a: ["Only on school days", "8:30 a.m. to 4:30 p.m.", "7:30 a.m. to 9:00 p.m., every day", "Dawn to dusk on weekends"], c: 2, ex: "Calgary playground zones run 7:30 a.m.–9:00 p.m. every day of the year." },
  { q: "As a GDL (Class 7) driver, what is your legal blood alcohol limit?", a: ["0.08", "0.05", "0.02", "Zero"], c: 3, ex: "GDL drivers must have NO alcohol or drugs in their system — zero tolerance." },
  { q: "A school bus ahead has its alternating red lights flashing. You must…", a: ["Slow to 30 km/h and pass carefully", "Stop only if children are visible", "Stop in both directions, unless on a divided highway", "Honk and proceed"], c: 2, ex: "Traffic in both directions must stop for flashing red school bus lights, except oncoming traffic on a divided highway." },
  { q: "In good conditions, the minimum following distance behind the vehicle ahead is…", a: ["1 second", "2 seconds", "4 seconds", "One car length"], c: 1, ex: "Keep at least a 2-second gap in ideal conditions; 3–4 seconds when roads are wet, icy, or visibility is poor." },
  { q: "Two vehicles arrive at a 4-way stop at the same time. Who goes first?", a: ["The vehicle on the left", "The vehicle on the right", "The larger vehicle", "Whoever signals first"], c: 1, ex: "When two vehicles stop at the same time, yield to the vehicle on your right." },
  { q: "At an uncontrolled intersection (no signs or lights), you must…", a: ["Always stop", "Yield to traffic on your right", "Yield to traffic on your left", "Speed up to clear it quickly"], c: 1, ex: "Slow down and yield to any vehicle approaching from your right." },
  { q: "You're turning left at a green light with oncoming traffic. You should…", a: ["Turn quickly before they arrive", "Yield until there's a safe gap", "Enter the intersection and wait for a safe gap", "Wait behind the stop line until the light turns yellow"], c: 2, ex: "Enter the intersection when the light is green, then complete the turn when there's a safe gap in oncoming traffic." },
  { q: "An emergency vehicle approaches with sirens on. You must…", a: ["Speed up and get out of the way", "Stop immediately where you are", "Pull to the right edge of the road and stop", "Pull to the left and slow down"], c: 2, ex: "Move to the right side of the road, clear of intersections, and stop until it has passed." },
  { q: "Passing an emergency vehicle or tow truck stopped with lights flashing, you must slow to…", a: ["60 km/h or the posted limit, whichever is lower", "80 km/h", "50 km/h in all cases", "Any careful speed"], c: 0, ex: "In the lane next to the stopped vehicle, slow to 60 km/h or the posted limit — whichever is LOWER." },
  { q: "A solid double yellow line down the centre of the road means…", a: ["Passing is allowed with care", "No passing in either direction", "Passing allowed only at night", "The road is one-way"], c: 1, ex: "Solid double yellow lines mean passing is not allowed in either direction." },
  { q: "When merging onto a highway you should…", a: ["Stop at the end of the ramp and wait", "Merge at 60 km/h regardless of traffic", "Match the speed of highway traffic and merge into a gap", "Force your way in — merging traffic has right-of-way"], c: 2, ex: "Use the acceleration lane to reach the speed of traffic, then merge smoothly into a safe gap." },
  { q: "Your headlights must be on…", a: ["Only when it's raining", "From one hour after sunset to one hour before sunrise, and when you can't see 150 m ahead", "Only on highways at night", "From sunset to sunrise only"], c: 1, ex: "Lights are required from 1 hour after sunset to 1 hour before sunrise, and any time visibility is under 150 m." },
  { q: "How close to a fire hydrant may you park?", a: ["Within 3 m", "No closer than 5 m", "No closer than 10 m", "Anywhere if you stay in the car"], c: 1, ex: "You must park at least 5 m away from a fire hydrant." },
  { q: "A Class 7 learner must be accompanied by a supervisor who is…", a: ["Any licensed driver", "18 or older with a full (non-GDL) licence, seated beside you", "21 or older with any licence", "A certified instructor only"], c: 1, ex: "Your supervisor must be 18+, hold a full non-GDL licence, and sit in the front passenger seat." },
  { q: "A GDL driver's licence is suspended when they accumulate…", a: ["4 demerit points", "8 demerit points", "15 demerit points", "20 demerit points"], c: 1, ex: "GDL drivers are suspended at 8 demerits; fully licensed drivers at 15." },
  { q: "What is the minimum age to get a Class 7 learner's licence in Alberta?", a: ["14 with parental consent", "15 with parental consent", "16", "18"], c: 0, ex: "You can get a Class 7 at 14 with a parent or guardian's consent." },
  { q: "How long must you hold a Class 7 licence before taking the basic road test?", a: ["6 months", "At least 1 year", "2 years", "There is no minimum"], c: 1, ex: "You must hold your Class 7 for at least 12 months before taking the Class 5-GDL road test." },
  { q: "Who is legally responsible for passengers under 16 wearing seat belts?", a: ["The passengers themselves", "The vehicle owner", "The driver", "Nobody"], c: 2, ex: "The driver is responsible for ensuring all passengers under 16 are properly buckled up." },
  { q: "A front tire blows out while driving. You should…", a: ["Brake hard immediately", "Grip the wheel firmly, ease off the gas, and slow gradually", "Steer sharply to the shoulder", "Shift to neutral and coast"], c: 1, ex: "Hold the wheel firmly, ease off the accelerator, and brake gently once the vehicle is under control." },
  { q: "Your rear wheels start to skid to the right. You should…", a: ["Brake hard and steer left", "Steer right — in the direction you want the rear to go", "Steer in the direction you want the front of the car to go and ease off the pedals", "Accelerate out of the skid"], c: 2, ex: "Ease off the gas and brakes and steer where you want to go. Avoid overcorrecting." },
  { q: "The light turns yellow as you approach an intersection. You should…", a: ["Always stop immediately", "Speed up to beat the red", "Stop if you can do so safely", "Honk to warn others"], c: 2, ex: "A yellow light means stop — unless you're so close that stopping suddenly would be unsafe." },
  { q: "A flashing red traffic light means…", a: ["Slow down and proceed with caution", "Stop, then proceed when safe — like a stop sign", "The signal is broken; ignore it", "Stop and wait for green"], c: 1, ex: "Flashing red = treat it as a stop sign. Flashing yellow = slow down and proceed with caution." },
  { q: "You must NOT make a U-turn…", a: ["On any residential street", "On a curve or near a hill crest where you can't be seen within 150 m", "At any intersection", "Anywhere in a city"], c: 1, ex: "Never U-turn where visibility is limited — curves, hill crests — or where signs prohibit it." },
  { q: "In winter, ice tends to form first on…", a: ["Gravel roads", "Bridges and overpasses", "Residential streets", "Parking lots"], c: 1, ex: "Bridge decks freeze before other road surfaces because cold air circulates above and below them." },
  { q: "If your vehicle starts to hydroplane on a wet road, you should…", a: ["Brake firmly", "Ease off the accelerator and keep steering straight", "Turn sharply toward the shoulder", "Accelerate through the water"], c: 1, ex: "Don't brake. Ease off the gas and let the tires regain contact with the road." },
  { q: "A pedestrian is waiting at an unmarked crosswalk at an intersection. You must…", a: ["Proceed — it's unmarked", "Yield and let them cross", "Honk so they wait", "Wave them across from a distance"], c: 1, ex: "Every intersection has a crosswalk, marked or not. You must yield to pedestrians crossing." },
  { q: "Using a hand-held phone while driving in Alberta results in…", a: ["A warning for a first offence", "A fine only", "A fine and 3 demerit points", "Licence suspension"], c: 2, ex: "Distracted driving carries a fine and 3 demerits — enough to put a GDL driver close to suspension." },
  { q: "When parking uphill with a curb, point your front wheels…", a: ["Toward the curb", "Away from the curb", "Straight ahead", "It doesn't matter with the parking brake on"], c: 1, ex: "Uphill with a curb: turn wheels away from the curb so the car rolls into the curb if brakes fail. Downhill: toward the curb." },
];

// Road signs — art is simple inline SVG (120×120 viewBox).
const SIGNS = [
  { name: "Stop", meaning: "Come to a complete stop, then proceed when safe", wrong: ["Slow down and proceed", "Stop only if traffic is coming", "Yield to the right"],
    svg: `<svg viewBox="0 0 120 120"><polygon points="38,8 82,8 112,38 112,82 82,112 38,112 8,82 8,38" fill="#c0392b" stroke="#fff" stroke-width="5"/><text x="60" y="72" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="800" font-size="30" fill="#fff">STOP</text></svg>` },
  { name: "Yield", meaning: "Give way to traffic and pedestrians; stop if needed", wrong: ["Stop completely, always", "Merge ahead", "Road narrows"],
    svg: `<svg viewBox="0 0 120 120"><polygon points="10,14 110,14 60,110" fill="#c0392b"/><polygon points="26,24 94,24 60,90" fill="#fff"/></svg>` },
  { name: "Maximum speed 50 km/h", meaning: "The legal speed limit is 50 km/h", wrong: ["Minimum speed 50 km/h", "Highway route number 50", "Advisory speed for the curve ahead"],
    svg: `<svg viewBox="0 0 120 120"><rect x="18" y="6" width="84" height="108" rx="8" fill="#fff" stroke="#20262b" stroke-width="4"/><text x="60" y="38" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="700" font-size="15" fill="#20262b">MAXIMUM</text><text x="60" y="88" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="800" font-size="42" fill="#20262b">50</text></svg>` },
  { name: "Do not enter", meaning: "Do not enter this roadway", wrong: ["No stopping", "Road closed to trucks", "No passing zone"],
    svg: `<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="#c0392b"/><rect x="24" y="52" width="72" height="16" rx="4" fill="#fff"/></svg>` },
  { name: "One-way traffic", meaning: "Traffic moves only in the direction of the arrow", wrong: ["Merge left", "Detour ahead", "Passing lane ahead"],
    svg: `<svg viewBox="0 0 120 120"><rect x="6" y="38" width="108" height="44" rx="6" fill="#20262b"/><path d="M22 60h56" stroke="#fff" stroke-width="9" stroke-linecap="round"/><path d="M66 44l26 16-26 16z" fill="#fff"/></svg>` },
  { name: "No U-turn", meaning: "U-turns are not permitted here", wrong: ["No left turn", "Winding road ahead", "No right turn"],
    svg: `<svg viewBox="0 0 120 120"><rect x="10" y="10" width="100" height="100" rx="10" fill="#fff" stroke="#20262b" stroke-width="3"/><path d="M44 82V54a16 16 0 0 1 32 0v14" fill="none" stroke="#20262b" stroke-width="9"/><path d="M76 62l-11 12h22z" fill="#20262b"/><circle cx="60" cy="60" r="43" fill="none" stroke="#c0392b" stroke-width="8"/><line x1="30" y1="30" x2="90" y2="90" stroke="#c0392b" stroke-width="8"/></svg>` },
  { name: "No parking", meaning: "Parking is not allowed in this area", wrong: ["No passing", "Parking permitted", "No stopping at any time"],
    svg: `<svg viewBox="0 0 120 120"><rect x="10" y="10" width="100" height="100" rx="10" fill="#fff" stroke="#20262b" stroke-width="3"/><text x="60" y="78" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="800" font-size="52" fill="#20262b">P</text><circle cx="60" cy="60" r="43" fill="none" stroke="#c0392b" stroke-width="8"/><line x1="30" y1="30" x2="90" y2="90" stroke="#c0392b" stroke-width="8"/></svg>` },
  { name: "Two-way traffic", meaning: "You are leaving a one-way road; traffic travels in both directions", wrong: ["Divided highway begins", "Passing permitted", "Keep right"],
    svg: `<svg viewBox="0 0 120 120"><rect x="20.5" y="20.5" width="79" height="79" transform="rotate(45 60 60)" fill="#f4c430" stroke="#20262b" stroke-width="3"/><path d="M44 78V52" stroke="#20262b" stroke-width="8" stroke-linecap="round"/><path d="M44 36L33 52h22z" fill="#20262b"/><path d="M76 42v26" stroke="#20262b" stroke-width="8" stroke-linecap="round"/><path d="M76 84L65 68h22z" fill="#20262b"/></svg>` },
  { name: "Merge", meaning: "Traffic merges ahead; adjust speed and position", wrong: ["Divided highway ends", "Two-way traffic ahead", "Right lane ends — move left"],
    svg: `<svg viewBox="0 0 120 120"><rect x="20.5" y="20.5" width="79" height="79" transform="rotate(45 60 60)" fill="#f4c430" stroke="#20262b" stroke-width="3"/><path d="M52 88V46" stroke="#20262b" stroke-width="8" stroke-linecap="round"/><path d="M76 88c0-20-24-18-24-34" fill="none" stroke="#20262b" stroke-width="8" stroke-linecap="round"/><path d="M52 30L41 48h22z" fill="#20262b"/></svg>` },
  { name: "Winding road", meaning: "A series of curves ahead; slow down", wrong: ["Slippery when wet", "Road under construction", "Sharp turn left"],
    svg: `<svg viewBox="0 0 120 120"><rect x="20.5" y="20.5" width="79" height="79" transform="rotate(45 60 60)" fill="#f4c430" stroke="#20262b" stroke-width="3"/><path d="M52 90c18-6 2-18 14-26s-2-18 8-26" fill="none" stroke="#20262b" stroke-width="8" stroke-linecap="round"/><path d="M74 24l-4 20 16-9z" fill="#20262b"/></svg>` },
  { name: "Railway crossing ahead", meaning: "Railway crossing ahead — slow down, look, and be ready to stop for trains", wrong: ["Road closed", "No passing zone", "Airport ahead"],
    svg: `<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="#f4c430" stroke="#20262b" stroke-width="3"/><line x1="34" y1="34" x2="86" y2="86" stroke="#20262b" stroke-width="7"/><line x1="86" y1="34" x2="34" y2="86" stroke="#20262b" stroke-width="7"/><text x="39" y="52" font-family="Manrope,sans-serif" font-weight="800" font-size="22" fill="#20262b">R</text><text x="63" y="84" font-family="Manrope,sans-serif" font-weight="800" font-size="22" fill="#20262b">R</text></svg>` },
  { name: "Traffic signal ahead", meaning: "Traffic lights ahead — be prepared to stop", wrong: ["Do not pass", "School zone ahead", "Emergency vehicles ahead"],
    svg: `<svg viewBox="0 0 120 120"><rect x="20.5" y="20.5" width="79" height="79" transform="rotate(45 60 60)" fill="#f4c430" stroke="#20262b" stroke-width="3"/><rect x="46" y="30" width="28" height="60" rx="8" fill="#20262b"/><circle cx="60" cy="43" r="7" fill="#e74c3c"/><circle cx="60" cy="60" r="7" fill="#f4c430"/><circle cx="60" cy="77" r="7" fill="#2ecc71"/></svg>` },
  { name: "Hospital", meaning: "Hospital service nearby", wrong: ["Helicopter pad", "Hotel zone", "Highway route marker"],
    svg: `<svg viewBox="0 0 120 120"><rect x="12" y="12" width="96" height="96" rx="10" fill="#2a6fdb"/><text x="60" y="82" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="800" font-size="58" fill="#fff">H</text></svg>` },
  { name: "School zone", meaning: "School area — watch for children; obey the 30 km/h zone when in effect", wrong: ["Pedestrian crosswalk only", "Playground equipment ahead", "Crossing guard ahead"],
    svg: `<svg viewBox="0 0 120 120"><polygon points="60,6 112,44 96,112 24,112 8,44" fill="#d3e34a" stroke="#20262b" stroke-width="3"/><circle cx="47" cy="48" r="8" fill="#20262b"/><path d="M47 56l-6 34M47 56l8 34" stroke="#20262b" stroke-width="7" stroke-linecap="round"/><circle cx="76" cy="42" r="8" fill="#20262b"/><path d="M76 50l-6 34M76 50l8 34" stroke="#20262b" stroke-width="7" stroke-linecap="round"/></svg>` },
  { name: "No left turn", meaning: "Left turns are not permitted here", wrong: ["No U-turn", "One-way to the right", "Curve to the left ahead"],
    svg: `<svg viewBox="0 0 120 120"><rect x="10" y="10" width="100" height="100" rx="10" fill="#fff" stroke="#20262b" stroke-width="3"/><path d="M74 84V64c0-12-9-20-21-20h-8" fill="none" stroke="#20262b" stroke-width="9"/><path d="M53 30L37 44l16 14z" fill="#20262b"/><circle cx="60" cy="60" r="43" fill="none" stroke="#c0392b" stroke-width="8"/><line x1="30" y1="30" x2="90" y2="90" stroke="#c0392b" stroke-width="8"/></svg>` },
  { name: "No right turn", meaning: "Right turns are not permitted here", wrong: ["One-way to the left", "No U-turn", "Merging traffic from the right"],
    svg: `<svg viewBox="0 0 120 120"><rect x="10" y="10" width="100" height="100" rx="10" fill="#fff" stroke="#20262b" stroke-width="3"/><path d="M46 84V64c0-12 9-20 21-20h8" fill="none" stroke="#20262b" stroke-width="9"/><path d="M67 30l16 14-16 14z" fill="#20262b"/><circle cx="60" cy="60" r="43" fill="none" stroke="#c0392b" stroke-width="8"/><line x1="30" y1="30" x2="90" y2="90" stroke="#c0392b" stroke-width="8"/></svg>` },
  { name: "Keep right", meaning: "Keep to the right of the divider or island", wrong: ["Right turn only", "Merge right", "One-way road"],
    svg: `<svg viewBox="0 0 120 120"><rect x="18" y="6" width="84" height="108" rx="8" fill="#fff" stroke="#20262b" stroke-width="4"/><line x1="46" y1="40" x2="74" y2="72" stroke="#20262b" stroke-width="12" stroke-linecap="round"/><path d="M82 84 L58 80 L78 60 Z" fill="#20262b"/></svg>` },
  { name: "No passing", meaning: "Passing other vehicles is not allowed", wrong: ["Two-way traffic", "Do not enter", "Divided highway"],
    svg: `<svg viewBox="0 0 120 120"><rect x="10" y="10" width="100" height="100" rx="10" fill="#fff" stroke="#20262b" stroke-width="3"/><rect x="40" y="42" width="17" height="34" rx="4" fill="#c0392b"/><rect x="63" y="42" width="17" height="34" rx="4" fill="#20262b"/><circle cx="60" cy="60" r="43" fill="none" stroke="#c0392b" stroke-width="8"/><line x1="30" y1="30" x2="90" y2="90" stroke="#c0392b" stroke-width="8"/></svg>` },
  { name: "Speed limit 100 km/h", meaning: "Maximum speed is 100 km/h on this highway", wrong: ["Minimum speed 100", "Distance 100 km", "Route 100"],
    svg: `<svg viewBox="0 0 120 120"><rect x="18" y="6" width="84" height="108" rx="8" fill="#fff" stroke="#20262b" stroke-width="4"/><text x="60" y="36" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="700" font-size="14" fill="#20262b">MAXIMUM</text><text x="60" y="86" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="800" font-size="36" fill="#20262b">100</text></svg>` },
  { name: "Pedestrian crossing", meaning: "Watch for pedestrians crossing ahead", wrong: ["School zone", "Sidewalk closed", "No pedestrians allowed"],
    svg: `<svg viewBox="0 0 120 120"><rect x="20.5" y="20.5" width="79" height="79" transform="rotate(45 60 60)" fill="#f4c430" stroke="#20262b" stroke-width="3"/><circle cx="60" cy="38" r="7" fill="#20262b"/><path d="M60 46v24M60 54l-11 6M60 54l11 6M60 70l-8 20M60 70l8 20" stroke="#20262b" stroke-width="6" stroke-linecap="round" fill="none"/></svg>` },
  { name: "Deer / wildlife crossing", meaning: "Wildlife may cross the road ahead", wrong: ["Petting zoo ahead", "Cattle guard", "No hunting"],
    svg: `<svg viewBox="0 0 120 120"><rect x="20.5" y="20.5" width="79" height="79" transform="rotate(45 60 60)" fill="#f4c430" stroke="#20262b" stroke-width="3"/><ellipse cx="62" cy="58" rx="17" ry="8" fill="#20262b"/><path d="M47 56L36 40" stroke="#20262b" stroke-width="5" stroke-linecap="round"/><circle cx="34" cy="37" r="4" fill="#20262b"/><path d="M33 34L27 25M35 34L39 24" stroke="#20262b" stroke-width="4" stroke-linecap="round"/><path d="M50 64L47 84M60 65L60 86M72 64L76 84M78 60L84 76" stroke="#20262b" stroke-width="5" stroke-linecap="round"/><path d="M78 53L86 47" stroke="#20262b" stroke-width="4" stroke-linecap="round"/></svg>` },
  { name: "Slippery when wet", meaning: "Road may be slippery when wet — slow down", wrong: ["Winding road", "Loose gravel", "Car wash ahead"],
    svg: `<svg viewBox="0 0 120 120"><rect x="20.5" y="20.5" width="79" height="79" transform="rotate(45 60 60)" fill="#f4c430" stroke="#20262b" stroke-width="3"/><rect x="46" y="40" width="28" height="18" rx="4" fill="#20262b"/><circle cx="50" cy="60" r="5" fill="#20262b"/><circle cx="70" cy="60" r="5" fill="#20262b"/><path d="M40 74c4-4 8 4 12 0s8 4 12 0 8 4 12 0" fill="none" stroke="#20262b" stroke-width="4" stroke-linecap="round"/><path d="M40 84c4-4 8 4 12 0s8 4 12 0 8 4 12 0" fill="none" stroke="#20262b" stroke-width="4" stroke-linecap="round"/></svg>` },
  { name: "Bump ahead", meaning: "A bump or uneven surface is ahead", wrong: ["Speed hump zone ends", "Hill ahead", "Rough shoulder"],
    svg: `<svg viewBox="0 0 120 120"><rect x="20.5" y="20.5" width="79" height="79" transform="rotate(45 60 60)" fill="#f4c430" stroke="#20262b" stroke-width="3"/><path d="M34 74c8 0 10-20 26-20s18 20 26 20" fill="none" stroke="#20262b" stroke-width="8" stroke-linecap="round"/></svg>` },
  { name: "Steep hill", meaning: "Steep downgrade ahead — trucks use caution", wrong: ["Ramp ahead", "Falling rocks", "Truck route"],
    svg: `<svg viewBox="0 0 120 120"><rect x="20.5" y="20.5" width="79" height="79" transform="rotate(45 60 60)" fill="#f4c430" stroke="#20262b" stroke-width="3"/><path d="M32 42L88 86" stroke="#20262b" stroke-width="5" stroke-linecap="round"/><g transform="translate(58 56) rotate(38)"><rect x="-17" y="-11" width="22" height="12" rx="2" fill="#20262b"/><rect x="5" y="-6" width="9" height="7" rx="1.5" fill="#20262b"/><circle cx="-10" cy="4" r="4.5" fill="#20262b"/><circle cx="9" cy="4" r="4.5" fill="#20262b"/></g></svg>` },
  { name: "Lane ends", meaning: "The right lane ends ahead — merge left", wrong: ["Divided highway begins", "Added lane", "Narrow bridge"],
    svg: `<svg viewBox="0 0 120 120"><rect x="20.5" y="20.5" width="79" height="79" transform="rotate(45 60 60)" fill="#f4c430" stroke="#20262b" stroke-width="3"/><path d="M44 88 L44 38 L60 38 L60 66 C60 74 66 76 78 76 L78 88 Z" fill="#20262b"/></svg>` },
  { name: "Roundabout ahead", meaning: "A traffic circle is ahead — yield to traffic in it", wrong: ["Divided highway", "Detour", "Dead end"],
    svg: `<svg viewBox="0 0 120 120"><rect x="20.5" y="20.5" width="79" height="79" transform="rotate(45 60 60)" fill="#f4c430" stroke="#20262b" stroke-width="3"/><path d="M60 44a16 16 0 1 1-14 8" fill="none" stroke="#20262b" stroke-width="6"/><path d="M60 40l8 7-9 5z" fill="#20262b"/></svg>` },
  { name: "Stop ahead", meaning: "A stop sign is ahead — prepare to stop", wrong: ["Yield ahead", "Signal ahead", "Do not enter"],
    svg: `<svg viewBox="0 0 120 120"><rect x="20.5" y="20.5" width="79" height="79" transform="rotate(45 60 60)" fill="#f4c430" stroke="#20262b" stroke-width="3"/><polygon points="52,40 68,40 78,50 78,66 68,76 52,76 42,66 42,50" fill="#c0392b"/><text x="60" y="62" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="800" font-size="11" fill="#fff">STOP</text></svg>` },
  { name: "Divided highway begins", meaning: "The road ahead is divided by a median", wrong: ["Divided highway ends", "Two-way traffic", "Keep left"],
    svg: `<svg viewBox="0 0 120 120"><rect x="20.5" y="20.5" width="79" height="79" transform="rotate(45 60 60)" fill="#f4c430" stroke="#20262b" stroke-width="3"/><path d="M50 88V64c0-10-6-14-6-22M70 88V64c0-10 6-14 6-22" fill="none" stroke="#20262b" stroke-width="7" stroke-linecap="round"/><path d="M44 40l-6 12h12zM76 40l-6 12h12z" fill="#20262b"/><ellipse cx="60" cy="70" rx="4" ry="14" fill="#20262b"/></svg>` },
  { name: "Playground zone", meaning: "Playground nearby — slow to the posted zone speed", wrong: ["School zone", "Park entrance", "Sports field"],
    svg: `<svg viewBox="0 0 120 120"><polygon points="60,6 112,44 96,112 24,112 8,44" fill="#33c07a" stroke="#20262b" stroke-width="3"/><circle cx="46" cy="46" r="7" fill="#20262b"/><path d="M46 53l-4 22M46 53l6 12-2 10M46 60l-10-4M46 60l12-2" stroke="#20262b" stroke-width="4.5" stroke-linecap="round" fill="none"/><circle cx="78" cy="52" r="6" fill="#20262b"/><path d="M78 58v18M78 64l-8 6M78 64l8 6" stroke="#20262b" stroke-width="4.5" stroke-linecap="round" fill="none"/></svg>` },
];

const COURSES = [
  { id: "full", name: "Full Course", tag: "Most popular", desc: "10 hrs behind the wheel + 15 hrs online. New driver to road-test ready.", price: "$550–$750", len: "2-hr sessions" },
  { id: "brushup", name: "Brush-Up Lessons", tag: null, desc: "Sharpen specific skills — parking, merging, confidence. Min. 2 sessions.", price: "$55–$75", len: "per session" },
  { id: "rental", name: "Car for Road Test", tag: null, desc: "Take your test in a familiar, well-maintained car. Includes warm-up.", price: "$90", len: "flat rate" },
];

const INSTRUCTORS = ["Imran", "Sadia", "Yusuf"];

const SLOTS = ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

const CHECKLIST = [
  "Class 7 licence (physical card)",
  "Road test permit / booking confirmation",
  "Glasses or contacts, if required",
  "Registration & insurance for the test vehicle",
  "Arrive 15 minutes early",
  "Do a brush-up lesson within 48 hours of the test",
  "Sleep well — no lessons after 9 PM the night before",
];

const JOURNEY = [
  { step: 1, title: "Exchange or start your licence", desc: "Newcomers: some countries exchange directly at a registry. Otherwise, start with the Class 7 knowledge test.", done: true },
  { step: 2, title: "Pass the knowledge test", desc: "30 questions at an Alberta registry — pass mark 25. Practice here until you consistently score 27+.", done: false },
  { step: 3, title: "Take driving lessons", desc: "Build real Calgary road skills. Experienced drivers often need 4–6 brush-up sessions to break old habits.", done: false },
  { step: 4, title: "Pass the road test", desc: "Book the Class 5-GDL test. Rent our car ($90) so you test in a vehicle you know.", done: false },
];

const FEES = [
  { item: "Knowledge test (at registry)", fee: "≈ $17 per attempt" },
  { item: "Class 7 licence issue", fee: "Varies by registry" },
  { item: "Class 5-GDL road test", fee: "≈ $83\u2013150, varies by registry" },
  { item: "Labbaik full course", fee: "$550–$750 (GST incl.)" },
  { item: "Labbaik brush-up session", fee: "$55–$75" },
  { item: "Car rental for road test", fee: "$90 flat" },
];

const DOCS = [
  "Passport or PR card / visa",
  "Proof of Alberta residence (lease, utility bill)",
  "Foreign licence + official translation if not in English",
  "Driving experience letter (for licence exchange credit)",
];

const GUIDES = [
  { title: "Parallel parking", len: "4:12", note: "The 3-reference-point method" },
  { title: "Hill parking", len: "2:48", note: "Which way to turn your wheels" },
  { title: "3-point turn", len: "3:30", note: "Shoulder checks that examiners watch for" },
  { title: "Highway merging", len: "5:05", note: "Deerfoot on-ramps, step by step" },
];
