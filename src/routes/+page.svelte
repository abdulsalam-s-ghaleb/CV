<script lang="ts">
	import type { PageData } from './$types';
	import {
		Download,
		Mail,
		MapPin,
		Calendar,
		Briefcase,
		Code2,
		Sparkles,
		Github,
		Linkedin,
		Twitter,
		ExternalLink,
		ChevronRight,
		Award,
		Users,
		Folder,
		Send,
		Presentation
	} from '@lucide/svelte/icons';
	import { onMount } from 'svelte';

	export let data: PageData;
	const { name, title, about, stats, experiences, skills, projects, socials } = data;

	let scrollY = 0;
	let mounted = false;

	onMount(() => {
		mounted = true;
		const handleScroll = () => (scrollY = window.scrollY);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	// Icon mapping for socials
	const socialIcons: Record<string, any> = {
		GitHub: Github,
		LinkedIn: Linkedin,
		Twitter: Twitter,
		Email: Mail
	};
</script>

<svelte:window bind:scrollY />

<div class="relative min-h-screen overflow-hidden bg-base-100">
	<!-- Animated Background -->
	<div class="fixed inset-0">
		<!-- Parallax blur effects -->
		<div
			class="absolute -top-[400px] left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl transition-transform duration-1000"
			style="transform: translateY({scrollY * 0.5}px) translateX(-50%)"
		></div>
		<div
			class="absolute top-[200px] right-0 h-[600px] w-[600px] rounded-full bg-accent/20 blur-3xl transition-transform duration-1000"
			style="transform: translateY({scrollY * 0.3}px)"
		></div>
		<div
			class="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-3xl transition-transform duration-1000"
			style="transform: translateY({-scrollY * 0.2}px)"
		></div>

		<!-- Grid pattern overlay -->
		<div class="bg-grid absolute inset-0 bg-center opacity-25"></div>
	</div>

	<div class="relative z-1 flex flex-col items-center px-6 py-12 text-base-content">
		<!-- Hero Section -->
		<header class="w-full space-y-4 text-center {mounted ? 'animate-fade-in' : 'opacity-0'}">
			<!-- Avatar with animation -->
			<div class="avatar mb-6 {mounted ? 'animate-bounce-in' : 'scale-0'}">
				<div
					class="relative w-36 rounded-full shadow-2xl ring-4 ring-primary ring-offset-4 ring-offset-base-100 transition-all duration-300 hover:ring-offset-8"
				>
					<img
						src="https://t60kv6b4px.ufs.sh/f/sozfFBo5NxiRkBzx6kR0LdWIUbkm56jvZqgYPMuJiBN2FolC"
						alt="Profile of {name}"
					/>
				</div>
			</div>

			<!-- Name + Title with stagger animation -->
			<div class="space-y-2">
				<h1
					class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-5xl font-bold text-transparent {mounted
						? 'animate-slide-up'
						: 'translate-y-10 opacity-0'}"
				>
					{name}
				</h1>
				<p
					class="flex items-center justify-center gap-2 text-xl text-secondary {mounted
						? 'animate-slide-up-delay-1'
						: 'translate-y-10 opacity-0'}"
				>
					<Briefcase class="h-5 w-5" />
					{title}
				</p>
				<p
					class="mx-auto max-w-2xl text-base-content/80 {mounted
						? 'animate-slide-up-delay-2'
						: 'translate-y-10 opacity-0'}"
				>
					{about}
				</p>
			</div>

			<!-- CTA buttons with hover effects -->
			<div
				class="mt-6 flex flex-wrap justify-center gap-4 {mounted
					? 'animate-slide-up-delay-3'
					: 'translate-y-10 opacity-0'}"
			>
				<a
					class="group btn shadow-lg transition-all duration-300 btn-primary hover:scale-105 hover:shadow-primary/50"
					href="https://t60kv6b4px.ufs.sh/f/sozfFBo5NxiRvk7V046E8BWfv0TkHtOnmY5Abyg61asRUZDl"
					target="_blank"
				>
					<Download class="h-4 w-4 transition-transform group-hover:translate-y-1" />
					Download CV
				</a>
				<a
					class="group btn shadow-lg transition-all duration-300 btn-outline btn-secondary hover:scale-105 hover:shadow-secondary/50"
					href="#contact"
				>
					<Send class="h-4 w-4 transition-transform group-hover:translate-x-1" />
					Contact Me
				</a>
			</div>
		</header>

		<!-- Stats with icons and animations -->
		<div
			class="mt-16 grid grid-cols-1 gap-4 md:grid-cols-4 {mounted
				? 'animate-fade-in-delay'
				: 'opacity-0'}"
		>
			{#each stats as s, i}
				<div
					class="card border border-base-300 bg-base-200/50 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-base-200/70 hover:shadow-xl"
					style="animation-delay: {i * 100}ms"
				>
					<div class="mb-2 flex justify-center">
						{#if i === 0}
							<Award class="h-8 w-8 text-primary" />
						{:else if i === 1}
							<Presentation class="h-8 w-8 text-accent" />
						{:else if i === 2}
							<Users class="h-8 w-8 text-secondary" />
						{:else}
							<Folder class="h-8 w-8 text-cyan-800" />
						{/if}
					</div>
					<div class="text-sm text-base-content/70">{s.label}</div>
					<div
						class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent"
					>
						{s.value}
					</div>
				</div>
			{/each}
		</div>
		<div class="w-full max-w-5xl">
			<!-- Experience Section -->
			<section class="mt-20 {mounted ? 'animate-fade-in-delay' : 'opacity-0'}">
				<div class="mb-8 flex items-center gap-3">
					<Briefcase class="h-6 w-6 text-primary" />
					<h2 class="text-3xl font-bold">Experience</h2>
				</div>

				<div class="space-y-6">
					{#each experiences as exp, i}
						<div
							class="group card border border-base-300 bg-base-200/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:translate-x-2 hover:border-primary/50 hover:shadow-xl"
							style="animation-delay: {i * 150}ms"
						>
							<div class="mb-3 flex items-start justify-between">
								<div>
									<h3
										class="group-hover:text-primary-focus text-xl font-bold text-primary transition-colors"
									>
										{exp.role}
									</h3>
									<p class="text-lg font-semibold">{exp.company}</p>
								</div>
								<ChevronRight
									class="h-5 w-5 text-base-content/50 transition-transform group-hover:translate-x-1"
								/>
							</div>

							<div class="mb-3 flex items-center gap-4 text-sm text-base-content/70">
								<span class="flex items-center gap-1">
									<Calendar class="h-4 w-4" />
									{exp.years}
								</span>
								<span class="flex items-center gap-1">
									<MapPin class="h-4 w-4" />
									{exp.location}
								</span>
							</div>

							<p class="mb-4 text-base-content/80">{exp.desc}</p>

							<div class="flex flex-wrap gap-2">
								{#each exp.stack as tech}
									<span
										class="badge badge-outline badge-sm transition-all badge-primary hover:scale-110 hover:badge-primary"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</section>

			<!-- Skills Section -->
			<section class="mt-20 {mounted ? 'animate-fade-in-delay' : 'opacity-0'}">
				<div class="mb-8 flex items-center gap-3">
					<Code2 class="h-6 w-6 text-primary" />
					<h2 class="text-3xl font-bold">Skills</h2>
				</div>

				<div class="flex flex-wrap gap-3">
					{#each skills as skill, i}
						<span
							class="badge cursor-default badge-outline p-4 badge-lg transition-all duration-300 badge-primary hover:scale-110 hover:shadow-lg hover:badge-primary"
							style="animation-delay: {i * 50}ms"
						>
							{skill}
						</span>
					{/each}
				</div>
			</section>

			<!-- Projects Section -->
			<section class="mt-20 {mounted ? 'animate-fade-in-delay' : 'opacity-0'}">
				<div class="mb-8 flex items-center gap-3">
					<Folder class="h-6 w-6 text-primary" />
					<h2 class="text-3xl font-bold">Projects</h2>
				</div>

				<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{#each projects as proj, i}
						<div
							class="group card border border-base-300 bg-base-200/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl"
							style="animation-delay: {i * 100}ms"
						>
							<h3
								class="group-hover:text-primary-focus mb-2 text-xl font-bold text-primary transition-colors"
							>
								{proj.name}
							</h3>
							<p class="mb-4 line-clamp-3 text-sm text-base-content/70">
								{proj.desc}
							</p>

							<div class="mb-4 flex flex-wrap gap-2">
								{#each proj.stack as tag}
									<span class="badge badge-ghost badge-sm">
										{tag}
									</span>
								{/each}
							</div>

							<a class="group/btn btn w-full btn-sm btn-primary" href={proj.link} target="_blank">
								View Project
								<ExternalLink
									class="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
								/>
							</a>
						</div>
					{/each}
				</div>
			</section>
		</div>
		<!-- Contact Section -->
		<section
			id="contact"
			class="mt-20 text-center {mounted ? 'animate-fade-in-delay' : 'opacity-0'}"
		>
			<h2 class="mb-4 text-3xl font-bold">Let's Connect</h2>
			<p class="mb-8 text-base-content/70">
				I'm always interested in hearing about new projects and opportunities.
			</p>

			<div class="flex justify-center gap-4">
				{#each socials as s}
					{@const Icon = socialIcons[s.name] || ExternalLink}
					<a
						class="btn btn-circle transition-all duration-300 btn-outline btn-lg hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
						href={s.url}
						target="_blank"
						aria-label={s.name}
					>
						<Icon class="h-6 w-6" />
					</a>
				{/each}
			</div>

			<div
				class="mt-8 inline-flex items-center gap-2 rounded-full bg-success/20 px-4 py-2 text-sm text-success"
			>
				<span class="relative flex h-3 w-3">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"
					></span>
					<span class="relative inline-flex h-3 w-3 rounded-full bg-success"></span>
				</span>
				Available for hire
			</div>
		</section>

		<!-- Footer -->
		<footer class="mt-24 text-center text-sm text-base-content/50">
			© {new Date().getFullYear()}
			{name} · Built with
			<span class="text-primary">Svelte</span> +
			<span class="text-secondary">DaisyUI</span>+
			<span class="text-accent">TailwindCSS</span>
		</footer>
	</div>
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slide-up {
		from {
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes bounce-in {
		0% {
			transform: scale(0);
			opacity: 0;
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	.animate-fade-in {
		animation: fade-in 0.6s ease-out forwards;
	}

	.animate-fade-in-delay {
		animation: fade-in 0.6s ease-out 0.3s forwards;
		opacity: 0;
	}

	.animate-slide-up {
		animation: slide-up 0.6s ease-out forwards;
	}

	.animate-slide-up-delay-1 {
		animation: slide-up 0.6s ease-out 0.1s forwards;
	}

	.animate-slide-up-delay-2 {
		animation: slide-up 0.6s ease-out 0.2s forwards;
	}

	.animate-slide-up-delay-3 {
		animation: slide-up 0.6s ease-out 0.3s forwards;
	}

	.animate-bounce-in {
		animation: bounce-in 0.6s ease-out forwards;
	}

	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.bg-grid {
		background-image:
			repeating-linear-gradient(45deg, var(--color-primary) 0px 1px, transparent 1px 10px),
			linear-gradient(to right, var(--color-primary) 1px, transparent 1px),
			linear-gradient(var(--color-primary) 1px, transparent 1px);
		background-size: 40px 40px;
		animation: gridmove 30s linear infinite;
	}

	@keyframes gridmove {
		from {
			background-position: 0 0;
		}
		to {
			background-position: 40px 40px;
		}
	}
</style>
