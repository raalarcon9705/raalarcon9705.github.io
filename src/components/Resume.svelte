<script>
	import { otherSkills, skills } from "../data";
	import Skill from "./Skill.svelte";
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
            <li class="timeline-item">
              <h4 class="timeline-title">Sep 2016 - Dec 2021</h4>
              <div class="timeline-text">
                <span class="title">
                  Informatics Engineering
                  <span>UCI, Havana</span>
                </span>
                <ul>
                  <li>Recognition for participation in the ICPC</li>
                  <li>Development of a blog to share good practices among the developers of the University of Informatics Sciences</li>
                  <li>Contributions in the different projects of the Medical Informatics Center of the University</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="expand-md">
          <h3 class="box-text">Work Experience</h3>
          <ul class="timeline">
            <li class="timeline-item">
              <h4 class="timeline-title">May 2022 - Present</h4>
              <div class="timeline-text">
                <span class="title">
                  Frontend Developer
                  <span>DSpot</span>
                </span>
                <ul>
                  <li>MakerDAO Informational Site Optimizations.</li>
                  <li>Develop of several components, pipes and services for the website.</li>
                  <li>Development of automated tests for the MakerDAO website.</li>
                </ul>
              </div>
            </li>
            <li class="timeline-item">
              <h4 class="timeline-title">Jun 2018 - Jan 2022</h4>
              <div class="timeline-text">
                <span class="title">
                  Frontend Developer
                  <span>Boukker Technologies Inc.</span>
                </span>
                <ul>
                  <li>Created a Landing Page for the tool using Bootstrap 5.</li>
                  <li>Creation of several plugins for TinyMCE editor.</li>
                  <li>Developed a dynamic and interactive website that ensures high traffic, page views and user experiences.</li>
                  <li>Improved user experience by implementing a PWA.</li>
                  <li>Implemented a simple and efficient online rich text editor, with a nice and responsive interface.</li>
                  <li>Facilitated an efficient SSR with Angular Universal and ExpressJs.</li>
                </ul>
              </div>
            </li>
            <li class="timeline-item">
              <h4 class="timeline-title">Apr 2020 - Oct 2020</h4>
              <div class="timeline-text">
                <span class="title">
                  Angular Developer
                  <span>ElroiSupplies</span>
                </span>
                <ul>
                  <li>Created an e-commerce using shopify's graphql api.</li>
                  <li>Innovated a CMS-style e-commerce template generator, using Angular.</li>
                  <li>Developed a PWA to improve the user experience in the store.</li>
                </ul>
              </div>
            </li>
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
            <li><a target="_blank" rel="noreferrer" href="https://www.boukker.com">https://www.boukker.com</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.biprintzble.com">https://www.biprintzble.com</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://123regenrinnefrei.de">https://123regenrinnefrei.de</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.lorca.ai/">https://www.lorca.ai</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>