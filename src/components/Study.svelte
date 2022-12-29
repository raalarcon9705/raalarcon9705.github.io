<script>
	/** @type {any} */
	export let data = {};
</script>

<h4 class="timeline-title">{data.from} - {data.until}</h4>
<div class="timeline-text">
	<span class="title">
		{data.title}
		<span>{data.university}</span>
	</span>
	<ul>
		{#each data.annotations as note}
			<li>{note}</li>
		{/each}
	</ul>
</div>
