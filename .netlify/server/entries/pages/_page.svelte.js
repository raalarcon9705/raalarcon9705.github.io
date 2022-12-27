import { c as create_ssr_component, e as escape, d as each, v as validate_component } from "../../chunks/index.js";
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><div class="${"container"}"><h1 class="${"big text-light title"}">Reynier Rivero</h1>
    <h2 class="${"subtitle text-primary typed"}">I am <span class="${"typed-word"}">Web Developer</span></h2>
    <div class="${"m-y-1"}"><a href="${"/assets/Reynier's Resume.pdf?v=03-11-2022"}" download class="${"btn primary"}">Download CV</a></div></div></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header><div class="${"container"}"><nav><a href="${"/"}" class="${"brand"}">Reynier Rivero</a>
      <ul class="${"nav-list sections"}"><li><a href="${"#resume"}">Resume</a></li>
        
        <li><a href="${"#contact"}">Contact</a></li></ul>
      <ul class="${"nav-list socials"}"><li><a target="${"_blank"}" rel="${"noreferrer"}" href="${"https://telegram.me/raalarcon"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 24 24"}"><path id="${"telegram-1"}" d="${"M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"}"></path></svg></a></li>
        <li><a target="${"_blank"}" rel="${"noreferrer"}" href="${"https://wa.me/5977620291"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 24 24"}"><path d="${"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"}"></path></svg></a></li>
        <li><a target="${"_blank"}" rel="${"noreferrer"}" href="${"https://www.linkedin.com/in/raalarcon/"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 24 24"}"><path d="${"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"}"></path></svg></a></li>
        <li><a target="${"_blank"}" rel="${"noreferrer"}" href="${"https://www.messenger.com/t/raalarcon.9705"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 24 24"}"><path d="${"M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z"}"></path></svg></a></li></ul>
      <button class="${"nav-toggler"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}"><path d="${"M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"}"></path></svg></button></nav></div></header>`;
});
const skills = [
  {
    skill: "HTML & CSS",
    value: 95
  },
  {
    skill: "Javascript",
    value: 90
  },
  {
    skill: "TypeScript",
    value: 85
  },
  {
    skill: "Angular",
    value: 85
  },
  {
    skill: "React",
    value: 80
  },
  {
    skill: "Node.js",
    value: 78
  },
  {
    skill: "Express.js",
    value: 70
  },
  {
    skill: "React Native",
    value: 60
  },
  {
    skill: "Svelte",
    value: 50
  }
];
const otherSkills = [
  {
    skill: "Adaptability to work teams",
    value: 90
  },
  {
    skill: "Teamwork",
    value: 90
  },
  {
    skill: "Analysis and design of algorithms",
    value: 80
  }
];
const Skill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = 0 } = $$props;
  let { skill = "" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.skill === void 0 && $$bindings.skill && skill !== void 0)
    $$bindings.skill(skill);
  return `<div class="${"skill-bar"}" data-value="${escape(value, true) + "%"}" style="${"--value: " + escape(value, true) + "%"}"><div class="${"skill-bar-info"}"><span class="${"label"}">${escape(skill)}</span>
    <span class="${"value"}">${escape(value)}%</span></div>
  <div class="${"skill-progress"}"></div></div>`;
});
const Resume = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section"}" id="${"resume"}"><div class="${"section-content"}"><div class="${"container"}"><div class="${"section-header"}"><h4 class="${"section-subtitle"}">I&#39;m available for hire</h4>
        <h3 class="${"section-title"}">My Resume</h3></div>
      <div class="${"d-flex wrap"}"><div class="${"expand-md"}"><h3 class="${"box-text"}">Education</h3>
          <ul class="${"timeline"}"><li class="${"timeline-item"}"><h4 class="${"timeline-title"}">Sep 2016 - Dec 2021</h4>
              <div class="${"timeline-text"}"><span class="${"title"}">Informatics Engineering
                  <span>UCI, Havana</span></span>
                <ul><li>Recognition for participation in the ICPC</li>
                  <li>Development of a blog to share good practices among the developers of the University of Informatics Sciences</li>
                  <li>Contributions in the different projects of the Medical Informatics Center of the University</li></ul></div></li></ul></div>
        <div class="${"expand-md"}"><h3 class="${"box-text"}">Work Experience</h3>
          <ul class="${"timeline"}"><li class="${"timeline-item"}"><h4 class="${"timeline-title"}">May 2022 - Present</h4>
              <div class="${"timeline-text"}"><span class="${"title"}">Frontend Developer
                  <span>DSpot</span></span>
                <ul><li>MakerDAO Informational Site Optimizations.</li>
                  <li>Develop of several components, pipes and services for the website.</li>
                  <li>Development of automated tests for the MakerDAO website.</li></ul></div></li>
            <li class="${"timeline-item"}"><h4 class="${"timeline-title"}">Jun 2018 - Jan 2022</h4>
              <div class="${"timeline-text"}"><span class="${"title"}">Frontend Developer
                  <span>Boukker Technologies Inc.</span></span>
                <ul><li>Created a Landing Page for the tool using Bootstrap 5.</li>
                  <li>Creation of several plugins for TinyMCE editor.</li>
                  <li>Developed a dynamic and interactive website that ensures high traffic, page views and user experiences.</li>
                  <li>Improved user experience by implementing a PWA.</li>
                  <li>Implemented a simple and efficient online rich text editor, with a nice and responsive interface.</li>
                  <li>Facilitated an efficient SSR with Angular Universal and ExpressJs.</li></ul></div></li>
            <li class="${"timeline-item"}"><h4 class="${"timeline-title"}">Apr 2020 - Oct 2020</h4>
              <div class="${"timeline-text"}"><span class="${"title"}">Angular Developer
                  <span>ElroiSupplies</span></span>
                <ul><li>Created an e-commerce using shopify&#39;s graphql api.</li>
                  <li>Innovated a CMS-style e-commerce template generator, using Angular.</li>
                  <li>Developed a PWA to improve the user experience in the store.</li></ul></div></li></ul></div></div>

      <div class="${"d-flex wrap"}"><div class="${"expand-md"}"><h3 class="${"box-text"}">Programming Skills</h3>

          ${each(skills, (skill) => {
    return `${validate_component(Skill, "Skill").$$render($$result, { skill: skill.skill, value: skill.value }, {}, {})}`;
  })}</div>
        <div class="${"expand-md"}"><h3 class="${"box-text"}">Other Skills</h3>
          
          ${each(otherSkills, (skill) => {
    return `${validate_component(Skill, "Skill").$$render($$result, { skill: skill.skill, value: skill.value }, {}, {})}`;
  })}

          <h3 class="${"box-text"}">Projects</h3>
          <ul class="${"link-list"}"><li><a target="${"_blank"}" rel="${"noreferrer"}" href="${"https://www.boukker.com"}">https://www.boukker.com</a></li>
            <li><a target="${"_blank"}" rel="${"noreferrer"}" href="${"https://www.biprintzble.com"}">https://www.biprintzble.com</a></li>
            <li><a target="${"_blank"}" rel="${"noreferrer"}" href="${"https://123regenrinnefrei.de"}">https://123regenrinnefrei.de</a></li>
            <li><a target="${"_blank"}" rel="${"noreferrer"}" href="${"https://www.lorca.ai/"}">https://www.lorca.ai</a></li></ul></div></div></div></div></section>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"section"}" id="${"contact"}"><div class="${"container"}"><div class="${"section-content"}"><div class="${"section-header"}"><h4 class="${"section-subtitle"}">I&#39;m available for hire</h4>
        <h3 class="${"section-title"}">Contact Me</h3></div>

      <form class="${"d-flex wrap"}"><div class="${"expand-md"}"><div class="${"form-input"}"><input required type="${"text"}" name="${"name"}" placeholder="${"Your Name"}"></div>
          <div class="${"form-input"}"><input required type="${"email"}" name="${"email"}" placeholder="${"Your Email"}"></div>
          <div class="${"form-input"}"><input required type="${"tel"}" name="${"subject"}" placeholder="${"Your Phone"}"></div></div>
        <div class="${"expand-md"}"><div class="${"form-input h-100"}"><textarea required name="${"content"}" placeholder="${"Your Message"}" class="${"h-100"}"></textarea></div></div>

        <div class="${"expand-full d-flex justify-center margin-top"}"><button disabled type="${"submit"}" class="${"btn primary"}">Submit</button></div></form></div></div></section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");:root{--bg-image:url(./assets/reynier-rivero.jpg);--primary-color-rgb:81,165,196;--primary-color:rgb(var(--primary-color-rgb));--font-family:"Lato", sans-serif;--bp-sm:575px;--bp-md:888px;--bp-lg:1232px;--bp-xl:1552px}*{margin:0;box-sizing:border-box}.particles-background{position:fixed;z-index:-1;pointer-events:none;top:0;left:0}.particles-background+.over-canvas{content:"";display:block;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.7);z-index:-1}body{background-image:var(--bg-image);background-size:cover;min-height:100vh;font-family:var(--font-family);overflow-x:hidden}.container{max-width:888px;margin:0 auto;padding:0 1rem}@media(min-width: 576px){.container{max-width:540px}}@media(min-width: 768px){.container{max-width:720px}}@media(min-width: 992px){.container{max-width:960px}}.big{font-size:74px;margin:0;line-height:70px}.text-light{color:#fff !important}.text-primary{color:var(--primary-color) !important}main{min-height:100vh;display:flex;flex-direction:column;justify-content:center}.title{margin-left:-5px;margin-bottom:1rem}header{position:fixed;top:0;left:0;width:100%}header .container{padding:1rem}header .brand{color:#fff;font-size:26px;text-decoration:none;font-weight:bold}header nav{display:flex;justify-content:space-between;align-items:center;width:100%}header nav .nav-list{list-style:none;color:#fff;display:flex;margin-bottom:0;padding:0}header nav .nav-list li a{color:#fff;display:inline-block;text-decoration:none;padding:0.5rem;display:flex;align-items:center;justify-content:center;border-radius:5px;transition:background-color 200ms}header nav .nav-list li a:hover{background-color:rgba(0, 0, 0, 0.7)}header nav .nav-list li a svg{fill:#fff !important}header nav .nav-list.socials a{width:40px;height:40px;border-radius:50%}header .nav-toggler{border:0;outline:0;background:transparent}header .nav-toggler:hover{cursor:pointer}header .nav-toggler svg{fill:#fff}@media(max-width: 768px){header{background-color:rgba(0, 0, 0, 0.4)}header .nav-list.socials{position:fixed;bottom:1rem;left:50%;transform:translateX(-50%)}header .nav-list.sections{position:absolute;width:100%;top:64px;left:0;text-align:center;flex-direction:column;overflow:hidden;background-color:rgba(0, 0, 0, 0.4);transition:max-height 200ms;max-height:0}header .nav-list.sections.expand{max-height:70px}}@media(min-width: 769px){header .nav-toggler{display:none}}footer{position:fixed;right:0;width:fit-content;bottom:40%;transform:rotate(-90deg) translateY(90px);font-weight:lighter}footer a{display:flex;align-items:center;text-decoration:none;color:#fff;letter-spacing:10px}footer a svg{fill:var(--primary-color);margin-right:0.5rem}.section{position:fixed;height:100vh;width:100vw;left:calc(-100vw - 10px);top:0;z-index:10}.section::before,.section::after{content:"";position:absolute;height:100vh;width:100vw;left:0;top:0}.section::before{background-image:var(--bg-image);background-size:cover;filter:blur(4px)}.section::after{background-color:rgba(0, 0, 0, 0.7)}.section .section-content{position:relative;z-index:11;max-height:100%;overflow-y:auto;overflow-x:hidden;padding:3rem 1rem}.section .section-header{display:flex;flex-direction:column;align-items:center;margin-bottom:4rem}.section .section-header .section-title{text-align:center;font-size:48px;line-height:1.2em;margin-bottom:30px;color:#fff}.section .section-header .section-subtitle{font-size:20px;margin-bottom:10px;color:var(--primary-color)}.section .section-header::after{display:block;content:"";max-width:100%;width:7rem;height:3px;background-color:var(--primary-color)}.section-bg-slider{position:fixed;height:100vh;width:100vw;left:-100vw;top:0;z-index:15;transition:left 1s;background-color:var(--primary-color)}.close-section{display:none;width:40px;height:40px;border-radius:50%;justify-content:center;align-items:center;font-size:30px;position:fixed;top:1rem;right:1.5rem;z-index:20;color:#fff;line-height:30px;text-decoration:none;transition:background-color 200ms}.close-section:hover{background-color:rgba(0, 0, 0, 0.7)}.section:not(:target){animation-name:closeSection;animation-duration:0.5s}.section:target{animation-name:openSection;animation-delay:0.25s;animation-fill-mode:forwards;opacity:1 !important;pointer-events:initial;user-select:initial}.section:not(.ready-section){opacity:0;pointer-events:0;user-select:0}.section:target~.section-bg-slider{left:100vw}.section:target~.close-section{display:flex}@keyframes openSection{from{left:-100vw}to{left:0}}@keyframes closeSection{0%{left:0}50%{left:0}100%{left:-100vw}}.btn{color:#fff;border-radius:2px !important;padding:12px 30px;min-width:120px;outline:0;font-weight:700;text-decoration:none;text-transform:none;font-size:14px;display:inline-block;border-width:0;outline:none}.btn.primary{background-color:var(--primary-color)}.btn:not(:disabled){cursor:pointer}.btn:disabled{pointer-events:none;opacity:0.6}.m-y-1{margin-top:1rem;margin-bottom:1rem}.disabled{cursor:default !important;pointer-events:none;opacity:0.8}.d-flex{display:flex}.d-flex.wrap{flex-wrap:wrap}.d-flex.justify-center{justify-content:center}.expand-md,.expand{flex:1;padding:0 1rem}.expand-full{flex:1;min-width:100%;max-width:100%;width:100%}@media(max-width: 887.98px){.expand-md{min-width:100%;max-width:100%;width:100%}}textarea,input{padding:10px;background:rgba(0, 0, 0, 0.5);border-radius:3px;height:auto;box-shadow:none;font-weight:400;font-size:15px;border:solid 1px rgba(255, 255, 255, 0.2);color:#ffffff;display:block;width:100%;line-height:1.5;outline:0;transition:border-color 200ms}textarea:focus,input:focus{border-color:var(--primary-color)}.form-input{position:relative}.form-input:not(:last-child){margin-bottom:20px}.h-100{height:100% !important}@media(max-width: 887.98px){#contact form .expand-md{margin-bottom:1rem}}.margin-top{margin-top:2rem}.box-text{display:inline-block;border:solid 3px rgba(255, 255, 255, 0.2);padding:10px 20px;border-radius:3px;font-size:32px;color:#fff;margin-bottom:40px;font-weight:600}ul.timeline{position:relative;counter-reset:list 0;padding:0;padding-left:22px}ul.timeline .timeline-item{list-style:none;border-left:2px solid var(--primary-color)}ul.timeline .timeline-item:last-child{border-left-color:transparent}ul.timeline .timeline-item .timeline-title{font-size:14px;margin:0;padding:0;color:var(--primary-color)}ul.timeline .timeline-item .timeline-title::before{color:#fff;position:relative;left:-22px;display:inline-block;width:40px;height:40px;line-height:40px;text-align:center;border-radius:50%;background-color:var(--primary-color);counter-increment:list;content:counter(list)}ul.timeline .timeline-item .timeline-text{padding:0 40px 40px 40px;color:#ccc}ul.timeline .timeline-item .timeline-text .title{font-weight:700;margin-bottom:10px;display:block;font-size:20px;color:#fff;margin-left:0}ul.timeline .timeline-item .timeline-text .title span{display:inline-block;font-weight:500;margin-left:30px;color:var(--primary-color);font-size:16px}ul.timeline .timeline-item .timeline-text .title span::before{content:"-";font-style:normal;position:absolute;margin-left:-20px}ul.timeline .timeline-item .timeline-text ul{margin:0;padding:0;list-style:none}ul.timeline .timeline-item .timeline-text ul li::before{content:"";display:inline-block;margin-right:0.5rem;width:6px;height:6px;margin-bottom:2px;border-radius:50%;background-color:var(--primary-color)}.skill-bar{margin-bottom:40px}.skill-bar .skill-bar-info{display:flex;justify-content:space-between}.skill-bar .skill-bar-info .label,.skill-bar .skill-bar-info .value{color:#fff;font-size:15px;font-weight:600}.skill-bar .skill-progress{margin-top:20px;margin-bottom:20px;width:100%;height:10px;background:rgba(255, 255, 255, 0.1);border-radius:3px;position:relative}.skill-bar .skill-progress::before{height:10px;width:var(--value);border-radius:3px;background-color:var(--primary-color);display:block;content:""}#resume .expand-md{padding:0 0.8rem}::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.8);border-radius:0}::-webkit-scrollbar-thumb{background:rgba(255, 255, 255, 0.2);border-radius:10px}.link-list{list-style:none;padding:0}.link-list li{margin-bottom:0.5rem}.link-list li a{color:#fff;text-decoration:none}.link-list li a::after{content:"";display:inline-block;margin-left:0.5rem;width:12px;height:12px;background-image:url(/link.svg);background-size:cover;filter:invert(1)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main>${validate_component(Home, "Home").$$render($$result, {}, {}, {})}
	${validate_component(Resume, "Resume").$$render($$result, {}, {}, {})}
	${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}

	<div class="${"section-bg-slider"}"></div>
	<a href="${"#!"}" class="${"close-section"}">×</a>
</main>`;
});
export {
  Page as default
};
