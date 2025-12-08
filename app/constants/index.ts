export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Blockchain Developer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Blockchain Developer",
		company_name: "Freelance",
		icon: "/company/6994639.png",
		iconBg: "#383E56",
		date: "2023 - Present",
		points: [
			"Decentralized Development Expertise: Gained deep knowledge of smart-contract architectures, DApp development and consensus protocols through hands-on blockchain projects.",
			"Cross-Chain & Crypto-Tech Savvy: Built and integrated applications using Layer-1 and Layer-2 solutions, ensuring scalability and security.",
			"Collaborative Blockchain Engineering: Collaborated with developers, auditors, and stakeholders to design and implement robust decentralized systems.",
			"Live Deployment & Maintenance: Successfully deployed blockchain apps to mainnet, managed upgrades, and ensured smooth user experience under real-world conditions.",
			"Positive Project Outcomes: Delivered transparent, trustless features that improved system integrity and user trust — leading to stronger adoption and long-term growth."
		],
	},
	{
		title: "Next.JS Developer",
		company_name: "Sparkbright Engineering",
		icon: "/company/sparkbright.webp",
		iconBg: "#E6DEDD",
		date: "2023 - 2024",
		points: [
			"Self-Taught Expertise: Gained proficiency in React.JS and Next.JS through independent learning.",
			"Successful Website Development: Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
			"Collaborative Design: Worked closely with stakeholders to gather feedback and iterate on the portfolio website's interactivity."
		],
	},
	{
		title: "AI developer",
		company_name: "Freelance",
		icon: "/company/6843357.png",
		iconBg: "#E6DEDD",
		date: "2023 - Present",
		points: [
			"Developing and integrating AI-powered features into modern web and mobile applications.",
			"Building intelligent systems using Python, TensorFlow, PyTorch, and OpenAI APIs.",
			"Optimizing AI workflows, improving model accuracy, and deploying models into production environments.",
			"Designing and training machine learning models for automation, prediction, and data analysis.",
			"Collaborating with clients to understand requirements and convert ideas into functional AI-driven solutions.",




			




		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
		name: "Om Patel",
		image: "/socialmedia/behance.svg",
		link: "https://www.behance.net/omthecreator",
	},
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Om Patel",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/om-patel-401068143/",
	},
	{
		id: 3,
		testimonial:
			"Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
		name: "Om Patel",
		image: "/socialmedia/dribble.svg",
		link: "https://dribbble.com/om2121",
	},
	{
		id: 4,
		testimonial:
			"Also do check out my UI/UX Portfolio where I have shared by design studies.",
		name: "Om Patel",
		image: "/socialmedia/portfolio.svg",
		link: "https://omthecreator.netlify.app/",
	},
	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Om Patel",
		image: "/tech/github.webp",
		link: "https://github.com/Jaycee1996",
	},
];


const projects: {
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
		{
			name: "Sol Swap Bot",
			description:
				"We have developed a fully functional Discord-based Solana swap bot that allows users to seamlessly execute SOL and SPL token swaps through an intuitive and automated command interface.",
			tags: [
				{
					name: "Typescript",
					color: "blue-text-gradient",
				},
			],
			image: "/projectimg/discord-bot.webp",
			platform: "Wordpress",
			deploy_link: "https://github.com/Jaycee1996/discord-sol-swapbot.git",
		},
		{
			name: "Sparkbright Engineering Portfolio",
			description:
				" Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
			tags: [
				{
					name: "next",
					color: "red-text-gradient",
				},
				{
					name: "Next UI",
					color: "orange-text-gradient",
				},
				{
					name: "tailwind",
					color: "blue-text-gradient",
				},
			],
			image: "/projectimg/sparkbright.png",
			source_code_link: "https://github.com/Jaycee1996/React-Admin-DashBoard",
			platform: "Web",
			deploy_link: "https://sparkbright.in/",
		},
		{
			name: "HooBank",
			description:
				"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
			tags: [
				{
					name: "next",
					color: "green-text-gradient",
				},
				{
					name: "tailwind",
					color: "blue-text-gradient",
				},
			],
			image: "/projectimg/hoobank.webp",
			source_code_link: "https://github.com/Jaycee1996/hoobank",
			platform: "Vercel",
			deploy_link: "https://hoobankbyom.netlify.app/",
		},
		{
			name: "MERN Dashboard",
			description:
				" Designed and developed a visually appealing and user-friendly Data Analytics Dashboard using MERN",
			tags: [
				{
					name: "react",
					color: "blue-text-gradient",
				},
				{
					name: "materialui",
					color: "orange-text-gradient",
				},
				{
					name: "MongoDB",
					color: "green-text-gradient",
				},
				{
					name: "Express",
					color: "pink-text-gradient",
				},
			],
			image: "/projectimg/mern.png",
			source_code_link: "https://github.com/Jaycee1996/Project_MERN-Dashboard",
			platform: "Web",
			deploy_link: "https://admin-frontend-r705.onrender.com/",
		},
		{
			name: "Metaverse Web 3.0",
			description:
				"A Modern UI/UX Landing Page using Framer Motion and TailwindCSS with a feel and looks of Web 3.0",
			tags: [
				{
					name: "react",
					color: "blue-text-gradient",
				},
				{
					name: "tailwind",
					color: "green-text-gradient",
				},
				{
					name: "framer-motion",
					color: "orange-text-gradient",
				},
			],
			image: "/projectimg/metaverse.png",
			source_code_link: "https://github.com/Jaycee1996/Project_Metaverse",
			platform: "Vercel",
			deploy_link: "https://project-metaverse-beta.vercel.app/",
		},
		{
			name: "AI Chatbot",
			description:
				"Provides multi-model switching capabilities through a multi-model AI chatbot built using real-time context processing.",
			tags: [
				{
					name: "Typescript",
					color: "blue-text-gradient",
				},
				{
					name: "CSS",
					color: "green-text-gradient",
				},
				{
					name: "Python",
					color: "orange-text-gradient",
				},
				{
					name: "Javascript",
					color: "green-text-gradient",
				},
			],
			image: "/projectimg/chat.png",
			source_code_link: "https://github.com/Jaycee1996/Multi_Model_AI_Chatbot.git",
			platform: "Vercel",
			deploy_link: "https://chatbot-next-flame.vercel.app/",
		},
	];

export { services, technologies, experiences, testimonials, projects };
