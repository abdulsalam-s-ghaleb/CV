import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		name: 'Abdulsalam Ghaleb',
		title: 'Full Stack Developer',
		about: `Results-driven Full Stack Developer with 2+ years of experience delivering successful cross-sector technology projects across Saudi Arabia and Malaysia. Skilled in the complete software development lifecycle, from conception and design to deployment and maintenance of web and mobile applications. Passionate about leveraging a broad technical skill set to build innovative, efficient, and user-centric solutions.`,

		socials: [
			{
				name: 'Email',
				url: 'mailto:abdulsalam.s.ghaleb@gmail.com',
				class: 'btn-primary'
			},
			{
				name: 'GitHub',
				url: 'https://github.com/abdulsalam-s-ghaleb',
				class: 'btn-secondary'
			},
			{
				name: 'LinkedIn',
				url: 'https://linkedin.com/in/salam-ghaleb',
				class: 'btn-accent'
			}
		],

		stats: [
			{ label: 'Years Experience', value: '2+' },
			{ label: 'Projects Completed', value: '10+' },
			{ label: 'Technical Certifications', value: '12+' },
			{ label: 'Honors & Awards', value: '2' }
		],

		experiences: [
			{
				role: 'Full Stack Developer',
				company: 'Othouba Line',
				years: '03/2024 - 03/2025',
				location: 'Jeddah, Saudi Arabia',
				desc: 'Architected responsive, SEO-optimized web apps with React/Next.js and developed RESTful APIs with Appwrite for authentication, real-time data, and storage.',
				stack: ['React', 'Next.js', 'Appwrite', 'NoSQL', 'REST APIs', 'CI/CD']
			},
			{
				role: 'Full Stack Developer',
				company: 'Freelance',
				years: '12/2022 - Present',
				location: 'Remote',
				desc: 'Developed and maintained a variety of cross-platform web and mobile applications for clients using frameworks like Flutter, Django, Next.js, and Nuxt.js.',
				stack: ['Flutter', 'Django', 'Next.js', 'Nuxt.js', 'Svelte', 'React Native', 'SQL', 'NoSQL']
			},
			{
				role: 'Web Scraping / Software Developer',
				company: 'Fresh Futures Australia PTY LTD',
				years: '06/2022 - 09/2022',
				location: 'Remote',
				desc: 'Developed sophisticated web scraping and automation tools using Python, increasing data processing efficiency by up to 10x with multiprocessing.',
				stack: ['Python', 'BeautifulSoup', 'Selenium', 'Dropbox API']
			}
		],

		skills: [
			'Next.js + React',
			'Nuxt.js + Vue.js',
			'Svelte',
			'Flutter + Dart',
			'Python + Django',
			'TypeScript / JavaScript',
			'Node.js',
			'NoSQL (Appwrite, Firebase)',
			'SQL (MySQL, PostgreSQL)',
			'Docker',
			'Git',
			'Agile Methodologies'
		],

		projects: [
			{
				name: 'Recipify',
				desc: 'A full-stack recipe management platform with SSR, advanced search, and user-generated content.',
				stack: ['Vue.js', 'Nuxt.js', 'Appwrite', 'Tailwind CSS'],
				link: 'https://recipify.online'
			},
			{
				name: 'GPTMana',
				desc: 'A cross-platform AI-powered chat assistant for Android, iOS, and the Web.',
				stack: ['Flutter', 'Dart', 'Provider', 'GetX', 'REST APIs'],
				link: 'https://media.licdn.com/dms/image/v2/D562DAQHDMcOqD4WC1g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1686141821300?e=1756605600&v=beta&t=5oMr6JfQIs4-srtyHl85YcLjoT_2hzc6j2BmGtVZcRA'
			},
			{
				name: 'AI E-Commerce System',
				desc: 'E-commerce site allowing product search via text or image using AI object recognition.',
				stack: ['Python', 'Django', 'TensorFlow', 'OpenCV'],
				link: 'https://github.com/abdulsalam-s-ghaleb/Web-Based-Application-E-Commerce-system-with-object-recognition-using-Neural-Network-AI'
			}
		]
	};
};
