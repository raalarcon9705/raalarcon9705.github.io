<script>
  export let value = 0;
  export let skill = '';
</script>

<div class="skill-bar" data-value="{value}%" style="--value: {value}%">
  <div class="skill-bar-info">
    <span class="label">{skill}</span>
    <span class="value">{value}%</span>
  </div>
  <div class="skill-progress"></div>
</div>