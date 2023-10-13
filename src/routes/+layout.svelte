<script>
	import { onMount } from 'svelte';
	import '../app.css';

	// Auto opening/close links in mobile view
	let navOpened = false;

	// Highlighting current page in nav bar
</script>

<header class="px-10 sm:px-16 md:px-24 lg:px-40 pt-12 transition-all">
	<nav class="flex flex-row justify-between items-center relative">
		<h1 class="text-4xl text-red font-bold">
			<a href="/">Yong Le He</a>
		</h1>
		<button
			on:click={() => {
				navOpened = !navOpened;
			}}
			class="text-red md:hidden"
		>
			Nav
		</button>
		<div
			class={`
      ${navOpened ? '' : 'invisible opacity-0 md:visible md:opacity-100'}
      absolute right-0 top-[50px] bg-beige py-3 px-2 rounded-lg 
      md:static md:py-0 md:px-0 md:bg-transparent 
      transition-all duration-200 ease-in
      `}
		>
			<ul id="nav-links" class=" flex flex-col gap-4 md:flex-row">
				<li class="hover:scale-105 transition-all">
					<a
						class="text-xl px-3 py-2 rounded-lg hover:bg-beige hover:text-red transition-all"
						href="/projects">Projects</a
					>
				</li>
				<li class="hover:scale-105 transition-all">
					<a
						class="text-xl px-3 py-2 rounded-lg hover:bg-beige hover:text-red transition-all"
						href="/skills">Skills</a
					>
				</li>
			</ul>
		</div>
	</nav>
</header>

<slot />

<footer>
	<p class="text-center">Made with Svelte, SvelteKit, and TailwindCSS</p>
</footer>
