'use strict';

let cvName = "Jamie Sherriff";
let title = "Hands-On Engineering Leader & Software Architect";
let blurb = "Engineering leader who still ships code. 14+ years building full-stack solutions, scaling teams, and architecting systems across AgriTech, geospatial, and SaaS domains."
let experiencesList = [
	{
		dateStart: "2026",
		dateEnd: "Present",
		title: "Manager of Software Development / Associate Software Engineer",
		location: "Abley",
		descriptionItems: [
			"Providing hands-on technical direction and architectural leadership across multiple software divisions.",
			"Leading and mentoring a team of developers and specialists while driving key business initiatives.",
			"Introducing and embedding AI development tooling across the business to speed up delivery without compromising quality."
		]
	},
	{
		dateStart: "2023",
		dateEnd: "2026",
		title: "Manager of Software Development / Principal Spatial Developer",
		location: "Abley",
		descriptionItems: [
			"Managed and mentored a team of 6 (5 developers + UI/UX specialist), driving software delivery, career growth, and hiring.",
			"Technical Lead across consulting and product development, owning full lifecycle delivery including BAU support.",
			"Established observability infrastructure, enabling production insights and reliability metrics."
		]
	},
	{
		dateStart: "2022",
		dateEnd: "2023",
		title: "Principal Spatial Developer",
		location: "Abley",
		descriptionItems: [
			"Technical lead on AgriTech software development projects, specialising in geospatial analysis and precision agriculture.",
			"Led design through to delivery of new SaaS products from concept to market.",
		]
	},
	{
		dateStart: "2019",
		dateEnd: "2022",
		title: "Spatial Developer & Senior Spatial Developer",
		location: "Abley",
		descriptionItems: [
			"Delivered full-stack solutions across C#/.NET, Python, JS/TS, Angular, Vue, and React, specialising in AgriTech platforms and geospatial consulting.",
			"Operated in a client-facing consultancy capacity, delivering bespoke software, automating workflows, and mentoring junior engineers."
		]
	},
	{
		dateStart: "2012",
		dateEnd: "2018",
		title: "Software and Test Automation Engineer",
		location: "Telogis",
		descriptionItems: [
			"Progressed from QA Automation intern to Software Engineer.",
			"Delivered features, performance optimisation, and CI/CD pipeline improvements in an Agile environment.",
			"Designed and built custom end-to-end test automation frameworks for mobile (iOS/Android) and web platforms.",
			"Developed embedded diagnostics firmware for fleet telematics hardware."
		]
	}
];

let projectsList = [
	{
		dateStart: "2017",
		dateEnd: "Present",
		title: "Mocha Teamcity Reporter",
		location: "Self",
		descriptionItems: [
			"Open source JavaScript test reporter integrating Mocha with JetBrains TeamCity. Averaging 1.5 million yearly npm downloads. Inherited and maintained from original founder.",
		]
	},
	{
		dateStart: "2017",
		dateEnd: "Present",
		title: "Solar Geomagnetic Forecasting Web Application",
		location: "Self",
		descriptionItems: [
			"Open source Progressive Web App displaying aurora forecasting data from NOAA."]
	}
];

let educationList = [
	{
		dateStart: "2018",
		title: "ITIL Foundation Course",
		location: "AuldHouse",
		description: "IT Service Management certification"
	},
	{
		dateStart: "2012",
		dateEnd: "2014",
		title: "Bachelor of Science",
		location: "University of Canterbury",
		description: "Majoring in Computer Science and Geography"
	}
];

let skillsList = [
	"Full stack development",
	"CI/CD",
	"Software testing and automation",
	"SaaS Software",
	"Web Services",
	"AWS & Azure",
	"Mobile Applications",
	"Agile",
	"GIS",
];

let skillsLists = [
	["Full stack development"],
	["Software testing and automation"],
	["SaaS Software", "Web Services"],
	["Mobile", "Agile"],
	["CI/CD", "GIS"]
];

let aiSkillsLists = [
	["AI-assisted development, testing, review and documentation"],
	["Machine learning integration"],
	["Copilot", "Gemini", "Claude", "ChatGPT"],
];


let frameworksList = [
	["React", "Vue", "Angular"],
	["Jest", "PyTest", "Mocha"],
	["Express", "Flask", "ASP.Net"],
	["SQL Server", "SQLite", "Postgres"],
	["Webpack", "Vite"],
];


let membershipList = [
	"Canterbury Tech Mentor",
	"Linux Australia Member"
];

let accomplishmentsList = [
	"2024 ACE NZ Awards finalist",
	"2x ESRI NZEUC speaker",
	"2x FOSS4G speaker",
	"ACE NZ Emerging Leader Nominee"
];


let interestsLists = [
	["Running", "Hiking", "Biking"],
	["Photography", "Technology", "Astronomy"],
];

let contactInfoList = [
	{ itemName: "website", value: "https://sherriff.kiwi", private: false, "iconClassValue": "fa fa-globe" },
	{ itemName: "github", value: "github.com/jamie-sherriff", private: false, iconClassValue: "fab fa-github" },
	{ itemName: "linkedin", value: "linkedin.com/in/jamie-sherriff", private: false, iconClassValue: "fab fa-linkedin" },
];

let searchTermsList = [
	"JavaScript",
	"Node.js",
	"Node",
	"JS",
	"ESRI",
	"mapbox",
	"Kepler.gl",
	"Mapping",
	"Python",
	"Angular",
	"React",
	"C",
	"C#",
	".NET",
	"PHP",
	"SQL",
	"Java",
	"Selenium",
	"UI Automation",
	"Xcode",
	"Load Testing",
	"Git",
	"GitHub",
	"Travis",
	"Linux",
	"Mac",
	"Windows",
	"Android",
	"iOS",
	"AWS",
	"Azure",
	"Cloud",
	"CI/CD",
	"Open Source",
	"AI",
	"Machine Learning",
	"LLM",
	"Copilot",
	"ChatGPT",
	"Claude",
	"AI-Assisted Development",
	"Generative AI",
	"AI Integration",
	"Prompt Engineering",
	"Scrum",
	"API",
	"REST",
	"Microservices",
	"Docker",
	"GraphQL",
	"Reporting",
	"KPIs",
	"Metrics",
	"Analytics",
	"Mentoring",
	"Product Development",
	"Serverless",
	"IaC",
	"Observability",
	"System Design",
	"Cloud-Native",
	"People Management",
	"Cross-Functional Leadership",
	"Engineering Culture",
	"Hiring",
	"1:1s",
	"Agile",
	"Kanban",
	"Sprint Planning",
	"Retrospectives",
	"Continuous Delivery",
	"ETL",
	"Data Engineering",
	"TypeScript",
	"Playwright",
	"Agentic AI",
	"AI Code Review",

]

let skillObjectListData = [
	{ score: 5, name: 'JavaScript' },
	{ score: 5, name: 'TypeScript' },
	{ score: 5, name: 'HTML&CSS' },
	{ score: 4, name: 'Python' },
	{ score: 4, name: 'Bash' },
	{ score: 3, name: 'PowerShell' },
	{ score: 2, name: 'C' },
	{ score: 2, name: 'C#' },
	{ score: 2, name: 'Java' },
	{ score: 2, name: 'PHP' },
]

let expertiseData = [
	{ score: 5, label: "Full-Stack" },
	{ score: 4, label: "Leadership" },
	{ score: 3, label: "DevOps" },
	{ score: 3, label: "GIS" },
	{ score: 2, label: "AI/ML" },
	{ score: 2, label: "Quality" },
]