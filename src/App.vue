<template>
  <div>
    <fireworks v-if="regalo"></fireworks>

    <main
      class="d-flex align-content-around flex-wrap align-content-between text-center"
      style="height: 90vh !important"
      v-else
    >
      <h1 class="w-100">Faltan</h1>
      <div class="row w-100">
        <div v-for="time in times" :key="time.id" class="col-3">
          <time-item :time="time"></time-item>
        </div>
        <div class="col-12 w-100" v-if="progreso">
          <progress-item :progreso="progreso"></progress-item>
        </div>
      </div>
      <h1 class="w-100">Para el cumpleaños de Edier</h1>
    </main>
  </div>
</template>

<script>
import TimeItem from "./components/TimeItem.vue";
import ProgressItem from "./components/ProgressItem.vue";
import Fireworks from "./components/Fireworks.vue";

export default {
  name: "App",
  data() {
    return {
      startTime: Date.now(),
      // endTime: new Date("May 29, 2021 001:43:00"),
      endTime: new Date("June 18, 2021 05:20:00"),
      times: [
        { id: 0, texto: "Dias", tiempo: 1 },
        { id: 1, texto: "Horas", tiempo: 1 },
        { id: 2, texto: "Minutos", tiempo: 1 },
        { id: 3, texto: "Segundos", tiempo: 1 },
      ],
      progreso: 0,
      // isActive: false,
      timeinterval: 1000,
      regalo: true,
    };
  },
  components: {
    TimeItem,
    ProgressItem,
    Fireworks,
  },
  methods: {
    updateTimer: function() {
      if (
        this.times[3].tiempo > 0 ||
        this.times[2].tiempo > 0 ||
        this.times[1].tiempo > 0 ||
        this.times[0].tiempo > 0
      ) {
        this.getTimeRemaining();
        this.updateProgressBar();
      } else {
        // clearTimeout(this.timeinterval);
        // this.times[3].tiempo = this.times[2].tiempo = this.times[1].tiempo = this.times[0].tiempo = 0;
        this.progreso = 0;
      }
    },
    getTimeRemaining: function() {
      let t = Date.parse(this.endTime) - Date.parse(new Date());
      if (t >= 0) {
        this.times[3].tiempo = Math.floor((t / 1000) % 60); //seconds
        this.times[2].tiempo = Math.floor((t / 1000 / 60) % 60); //minutes
        this.times[1].tiempo = Math.floor((t / (1000 * 60 * 60)) % 24); //hours
        this.times[0].tiempo = Math.floor(t / (1000 * 60 * 60 * 24)); //days
      } else {
        this.times.forEach((time) => (time.tiempo = 0));
        this.progreso = 100;
      }
    },
    updateProgressBar: function() {
      let startTime = Date.parse(new Date(this.endTime).getFullYear() - 1);
      // let startTime = Date.parse(new Date(this.startTime));
      let currentTime = Date.parse(new Date());
      let endTime = Date.parse(new Date(this.endTime));
      this.progreso = parseFloat(
        ((currentTime - startTime) / (endTime - startTime)) * 100
      ).toFixed(6);
      if (this.progreso >= 100) {
        this.regalo = true;
        clearInterval(this.timeinterval);
        this.timeinterval = null;
      }
    },
  },
  created: function() {
    this.updateTimer();
    this.timeinterval = setInterval(() => this.updateTimer(), 1000);
  },
  watch: function() {},
};
</script>

<style></style>
