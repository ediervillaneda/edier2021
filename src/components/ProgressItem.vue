<template>
  <div class="progress">
    <div
      class="progress-bar progress-bar-striped"
      role="progressbar"
      v-bind:style="{ width: progreso + '%' }"
      aria-valuenow="10"
      aria-valuemin="0"
      aria-valuemax="100"
    >
    {{ progreso }} %
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressItem",
  props: ["progreso"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
