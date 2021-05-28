<template>
  <div class="card text-center text-white bg-primary mb-3">
    <div class="card-body">
      <h1 class="card-title">{{ time.tiempo }}</h1>
    </div>
    <div class="card-text">{{ time.texto }}</div>
  </div>
</template>

<script>
export default {
  name: "TimeItem",
  props: ["time"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
