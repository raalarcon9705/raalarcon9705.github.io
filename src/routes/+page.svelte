<script>
	import { createParticlesEffectBackground, initPageSections } from '../utils/functions';
	import Home from '../components/Home.svelte';
	import Header from '../components/Header.svelte';
	import Resume from '../components/Resume.svelte';
	import Contact from '../components/Contact.svelte';
	import Footer from '../components/Footer.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		initPageSections();
		createParticlesEffectBackground();
	});
</script>

<Header />

<main>
	<Home />
	<Resume />
	<Contact />

	<div class="section-bg-slider" />
	<a href="#!" class="close-section">&times;</a>
</main>

<Footer />

<style global lang="scss">
	@import '../sass/style.scss';
</style>
