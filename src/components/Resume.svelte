<script>
	import { education, experience, otherSkills, projects, skills } from '../data';
	import Skill from './Skill.svelte';
	import Study from './Study.svelte';
	import Work from './Work.svelte';
</script>

<section class="section" id="resume">
	<div class="section-content">
		<div class="container">
			<div class="section-header">
				<h4 class="section-subtitle">I'm available for hire</h4>
				<h3 class="section-title">My Resume</h3>
			</div>
			<div class="d-flex wrap">
				<div class="expand-md">
					<h3 class="box-text">Education</h3>
					<ul class="timeline">
						{#each education as study}
							<li class="timeline-item">
								<Study data={study} />
							</li>
						{/each}
					</ul>
				</div>
				<div class="expand-md">
					<h3 class="box-text">Work Experience</h3>
					<ul class="timeline">
						{#each experience as work}
							<li class="timeline-item">
								<Work data={work} />
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<div class="d-flex wrap">
				<div class="expand-md">
					<h3 class="box-text">Programming Skills</h3>

					{#each skills as skill}
						<Skill skill={skill.skill} value={skill.value} />
					{/each}
				</div>
				<div class="expand-md">
					<h3 class="box-text">Other Skills</h3>

					{#each otherSkills as skill}
						<Skill skill={skill.skill} value={skill.value} />
					{/each}

					<h3 class="box-text">Projects</h3>
					<ul class="link-list">
						{#each projects as url}
							<li>
								<a target="_blank" rel="noreferrer" href={url}>{url}</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
