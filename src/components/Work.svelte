<script>
	/** @type {any} */
	export let data = {};
</script>

<h4 class="timeline-title">{data.from} - {data.until}</h4>
<div class="timeline-text">
	<span class="title">
		{data.position}
		<span>{data.company}</span>
	</span>
	<ul>
		{#each data.annotations as note}
			<li>{note}</li>
		{/each}
	</ul>
</div>
