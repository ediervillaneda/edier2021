<template>
  <main class="px-3 row d-flex align-content-center flex-wrap">
    <h1 class="col-12">Faltan</h1>
    <dic class="col-12">&nbsp;</dic>
    <div class="col-12 container-fluid m-auto text-center">
      <div class="row">
        <div v-for="time in times" :key="time.id" class="col-3">
          <time-item :time="time"></time-item>
        </div>
      </div>
    </div>
    <div class="col-12">
      <progress-item :progreso="progreso"></progress-item>
    </div>
    <dic class="col-12">&nbsp;</dic>

    <h1 class="col-12">Para el cumpleaños de Clarita</h1>
    <dic class="col-12">&nbsp;</dic>

    <p class="lead col-12">Ya casi cumple años mi persona favorita.</p>
    <dic class="col-12">&nbsp;</dic>

    <p class="lead col-12" v-if="progreso >= 100">
      <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white"
        >mira este detalle</a
      >
    </p>
  </main>
</template>

<script>
import TimeItem from "./components/TimeItem.vue";
import ProgressItem from "./components/ProgressItem.vue";

export default {
  name: "App",
  data() {
    return {
      startTime: Date.now(),
      endTime: "June 7, 2021 07:00:00",
      times: [
        { id: 0, texto: "Dias", tiempo: 1 },
        { id: 1, texto: "Horas", tiempo: 1 },
        { id: 2, texto: "Minutos", tiempo: 1 },
        { id: 3, texto: "Segundos", tiempo: 1 },
      ],
      progreso: 0,
      // isActive: false,
      timeinterval: 1000,
    };
  },
  components: {
    TimeItem,
    ProgressItem,
  },
  methods: {
    updateTimer: function () {
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
    getTimeRemaining: function () {
      let t = Date.parse(new Date(this.endTime)) - Date.parse(new Date());
      if (t >= 0) {
        this.times[3].tiempo = Math.floor((t / 1000) % 60); //seconds
        this.times[2].tiempo = Math.floor((t / 1000 / 60) % 60); //minutes
        this.times[1].tiempo = Math.floor((t / (1000 * 60 * 60)) % 24); //hours
        this.times[0].tiempo = Math.floor(t / (1000 * 60 * 60 * 24)); //days
      } else {
        this.times.forEach((time) => (time.tiempo = 0));
        this.progreso = 0;
      }
    },
    updateProgressBar: function () {
      let startTime = Date.parse(new Date("June 7, 2020 00:00:00"));

      // let startTime = Date.parse(new Date(this.startTime));
      let currentTime = Date.parse(new Date());
      let endTime = Date.parse(new Date(this.endTime));
      this.progreso = parseFloat(
        ((currentTime - startTime) / (endTime - startTime)) * 100
      ).toFixed(6);
    },
  },
  created: function () {
    this.updateTimer();
    this.timeinterval = setInterval(() => this.updateTimer(), 1000);
  },
};
</script>

<style></style>
