<script>
	import { onMount } from 'svelte';
	import '../app.css';

	let linksRevealed = true;
	onMount(() => {
		window.addEventListener('resize', () => {
			// for cross browser compatibility
			let w =
				window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			// tailwind `md` breakpoint
			if (w >= 768) {
				linksRevealed = true;
			} else {
				linksRevealed = false;
			}
		});
	});
</script>

<header class="px-10 sm:px-16 md:px-24 lg:px-40 py-16">
	<nav class="flex flex-row justify-between relative">
		<h1 class="text-3xl font-bold">
			<a href="/">Yong Le He</a>
		</h1>
		<details open={linksRevealed}>
			<summary class="inline md:hidden cursor-pointer"> Nav </summary>
			<ul class="absolute right-0 bottom-[-60px] flex flex-col gap-4 md:static md:flex-row">
				<li>
					<a class="nav-link" href="/projects">Projects</a>
				</li>
				<li>
					<a class="nav-link" href="/skills">Skills</a>
				</li>
			</ul>
		</details>
	</nav>
</header>

<slot />

<footer>
	<p class="text-center">Made with Svelte, SvelteKit, and TailwindCSS</p>
</footer>
