export const projects = [
  {
    slug: "floating-iot-station",
    order: 1,
    title: "Floating IoT Pond Water-Quality Monitoring Station",
    subtitle: "Solar-powered aquaculture monitoring platform",
    status: "Completed",
    tags: ["IoT", "Instrumentation", "RS-485/Modbus", "Embedded Systems", "Aquaculture"],
    cover_image: "/portfolio-of-sabbir/assets/images/projects/floating-iot-station/photo-1.jpg",
    gallery: [
      "/portfolio-of-sabbir/assets/images/projects/floating-iot-station/photo-1.jpg",
      "/portfolio-of-sabbir/assets/images/projects/floating-iot-station/photo-2.jpg",
      "/portfolio-of-sabbir/assets/images/projects/floating-iot-station/photo-3.jpg",
      "/portfolio-of-sabbir/assets/images/projects/floating-iot-station/photo-4.jpg",
      "/portfolio-of-sabbir/assets/images/projects/floating-iot-station/photo-5.png",
      "/portfolio-of-sabbir/assets/images/projects/floating-iot-station/photo-6.png",
      "/portfolio-of-sabbir/assets/images/projects/floating-iot-station/photo-7.png",
    ],
    videos: ["/portfolio-of-sabbir/assets/videos/projects/floating-iot-station/control-panel.mp4"],
    outcomes: [
      "Published as second author in IEEE Instrumentation & Measurement Magazine (2026)",
      "1st Runner-Up, Youth Startup Summit, Rajshahi & Rangpur Division (USD 2,000 award)",
      "Champion, Agri-Mechanization Idea Competition, RUET & BARI (2025); advanced to the national round at BARI, Gazipur, placing 2nd Runner-Up among 45 teams from 15 universities",
    ],
    related_publication: "iot-magazine-2026",
    body: "A solar-powered floating station that continuously monitors pond water quality: dissolved oxygen, pH, ammonia, nitrate, and temperature, using industrial-grade RS-485 Modbus sensors connected to an ESP32 microcontroller, transmitting live data to a remote dashboard so multiple ponds can be supervised without a farmer physically present.",
    contribution:
      "I integrated the RS-485/Modbus sensor network with the ESP32, designed the custom PCB for probe interfacing, sized and built the solar PV and LiFePO4 power system, designed the floating platform structure, developed the firmware, and carried out sensor calibration and field testing.",
  },
  {
    slug: "smart-farming-system",
    order: 2,
    title: "Smart Farming Monitoring and Control System",
    subtitle: "SystemSage Solutions, cellular-connected precision agriculture",
    status: "Deployed",
    tags: ["IoT", "Automation", "Precision Agriculture", "Cellular Communication", "Embedded Systems"],
    cover_image: "/portfolio-of-sabbir/assets/images/projects/smart-farming-system/photo-1.jpg",
    gallery: [
      "/portfolio-of-sabbir/assets/images/projects/smart-farming-system/photo-1.jpg",
      "/portfolio-of-sabbir/assets/images/projects/smart-farming-system/photo-2.jpg",
      "/portfolio-of-sabbir/assets/images/projects/smart-farming-system/photo-3.jpg",
      "/portfolio-of-sabbir/assets/images/projects/smart-farming-system/photo-4.jpg",
    ],
    videos: [
      "/portfolio-of-sabbir/assets/videos/projects/smart-farming-system/overview.mp4",
      "/portfolio-of-sabbir/assets/videos/projects/smart-farming-system/highlight-reel.mp4",
    ],
    outcomes: [
      "Installed at the Bangladesh Agricultural Research Institute (BARI), Jamalpur, as the first deployed unit, and piloted at the University of Rajshahi",
      "Field demonstrations conducted with more than 20 farmers",
      "Received approximately USD 800 in pre-seed funding through the University Innovation Hub Programme (UIHP RUET IC3, World Bank & ICT Division)",
    ],
    body: "An IoT-based monitoring and automated control system built on ESP32 microcontrollers with SIM7600 cellular connectivity, delivering real-time environmental data and automated irrigation control through a web application, designed to function independently of Wi-Fi in remote agricultural areas.",
    contribution:
      "As co-founder of SystemSage Solutions, I developed the system's embedded firmware, RS-485/Modbus sensor integration, and SIM7600 cellular telemetry, and led the off-grid solar/LiFePO4 power system design. I also directed hardware fabrication, including PCB layout and enclosure design, and led field deployment and testing across all pilot sites.",
  },
  {
    slug: "thesis-automated-feeding-aeration",
    order: 3,
    title: "A Smart System for Automated Feeding and Water Quality Monitoring in Aquaculture",
    subtitle: "Undergraduate Thesis, closed-loop extension of the floating IoT station",
    status: "Completed",
    tags: ["Control Systems", "Closed-Loop Automation", "Mechanism Design", "Aquaculture"],
    cover_image: "/portfolio-of-sabbir/assets/images/projects/thesis-automated-feeding-aeration/photo-1.jpg",
    gallery: ["/portfolio-of-sabbir/assets/images/projects/thesis-automated-feeding-aeration/photo-1.jpg"],
    supervisor: "Prof. Dr. Mhia Md. Zaglul Shahadat",
    body: "An extension of the floating monitoring platform into closed-loop control: a rack-and-pinion feed dispensing mechanism actuated by a servo motor, and automated aeration that triggers when dissolved oxygen falls below 5 mg/L, moving the system from passive monitoring to autonomous intervention.",
    contribution:
      "I designed the feed dispensing mechanism in CAD, integrated it with the sensing platform, and implemented the dissolved-oxygen-triggered aeration control logic. Validated under bench conditions, supervised by Prof. Dr. Mhia Md. Zaglul Shahadat.",
  },
  {
    slug: "agv-potato-disease",
    order: 4,
    title: "Autonomous Ground Vehicle for Potato Field Disease Detection",
    subtitle: "Proposed research direction, ideation stage",
    status: "Concept / Proposed",
    tags: ["Machine Learning", "Precision Agriculture", "Robotics", "Proposed Research"],
    cover_image: "/portfolio-of-sabbir/assets/images/projects/agv-potato-disease/photo-1.jpg",
    gallery: [
      "/portfolio-of-sabbir/assets/images/projects/agv-potato-disease/photo-1.jpg",
      "/portfolio-of-sabbir/assets/images/projects/agv-potato-disease/photo-2.jpg",
    ],
    outcomes: [
      "Presented at the Research Poster Presentation Competition, RUET University Day 2025, placed 4th",
    ],
    future_plan:
      "I intend to begin development on this project, starting with dataset collection and a baseline disease-classification model.",
    body: "A future project I intend to pursue, currently at the ideation stage only. The proposal is for an autonomous ground vehicle for potato fields that would detect crop disease using machine learning, notify farmers of affected areas, suggest required interventions, and trigger an automated spray system over the identified zones, extending the sense-and-act approach from my aquaculture work into crop health management. No development work has started: there is no hardware, no dataset, and no trained model at this stage. What exists is the concept itself, which I presented as a research poster.",
    contribution:
      "I originated and developed the system concept, and presented it as a research poster outlining the proposed disease-detection pipeline, farmer notification approach, and automated spray mechanism.",
  },
];

export const projects_intro = {
  title: "Research & Projects",
  lede: "Four projects spanning aquaculture instrumentation, precision agriculture, and closed-loop control, from a published, deployed platform to a proposed research direction, stated plainly as such.",
};

export const featured_intro = {
  eyebrow: "Selected work",
  title: "Featured projects",
  lede: "From a published, deployed platform to a proposed research direction, stated plainly as such.",
};
