<template>
  <div class="fireworks">
    <h2 class="saludo text-center">
      <span>&#128149;</span> <span>&#128149;</span> <span>&#128149;</span> <br/>
      Feliz Cumple Mi Adoración <br/>
       <span>&#128149;</span> <span>&#128149;</span> <span>&#128149;</span></h2>
    <div class="contenedor">
      <div class="arm arm--left">
        <div class="armsleeve sleeve--left"></div>
      </div>
      <div class="arm arm--right">
        <div class="armsleeve sleeve--right"></div>
      </div>
      <div class="leg leg--left">
        <div class="legpant pant--left"></div>
      </div>
      <div class="leg leg--right">
        <div class="legpant pant--right"></div>
      </div>

      <div class="body">
        <div class="bodycopy"></div>
        <div class="hairdo"></div>
        <div class="hair-1"></div>
        <div class="hair-2"></div>
        <div class="hair-3"></div>
        <div class="hair-4"></div>
        <div class="face">
          <div class="brow brow--left"></div>
          <div class="brow brow--right"></div>
          <div class="eyeydetail detail--left"></div>
          <div class="eyeydetail detail--right"></div>
          <div class="eye eye--left"></div>
          <div class="eye eye--right"></div>
          <div class="nose"></div>
          <div class="mouth">
            <div class="mouth--inner"></div>
            <div class="teeth"></div>
          </div>
          <div class="glasses">
            <div class="frame frame--left"></div>
            <div class="frame frame--right"></div>
            <div class="middle"></div>
            <div class="framebody framebody--left"></div>
            <div class="framebody framebody--right"></div>
          </div>
        </div>
        <div class="pants"></div>
        <div class="shirt"></div>
        <!-- <img src="bucket.png" alt="buckethat" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fireworks",

  data() {
    return {};
  },
  mounted: function() {},
  methods: {},
};

/// Particle JS

/* ---- particles.js config ---- */

// particlesJS("particles-js", {
//   particles: {
//     number: { value: 80, density: { enable: true, value_area: 800 } },
//     color: { value: ["#f7b267", "#f79d65", "#f4845f", "#f27059", "#f25c54", "#ffffff", "#cc444b", "#ff6b6b", "#e63946"] },
//     shape: {
//       type: "circle",
//       stroke: { width: 0, color: "#000000" },
//       polygon: { nb_sides: 5 },
//       image: { src: "img/github.svg", width: 100, height: 100 },
//     },
//     opacity: {
//       value: 1,
//       random: false,
//       anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
//     },
//     size: {
//       value: 6,
//       random: true,
//       anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
//     },
//     line_linked: {
//       enable: false,
//       distance: 150,
//       color: "#ffffff",
//       opacity: 0.4,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 6,
//       direction: "top",
//       random: true,
//       straight: false,
//       out_mode: "bounce",
//       bounce: false,
//       attract: { enable: false, rotateX: 600, rotateY: 1200 },
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: { enable: true, mode: "repulse" },
//       onclick: { enable: true, mode: "push" },
//       resize: true,
//     },
//     modes: {
//       grab: { distance: 400, line_linked: { opacity: 1 } },
//       bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
//       repulse: { distance: 150, duration: 0.4 },
//       push: { particles_nb: 4 },
//       remove: { particles_nb: 2 },
//     },
//   },
//   retina_detect: true,
// });
</script>

<style scope>
/* body { */
.fireworks {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 190, 93);
  margin: 0;
}

.saludo {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-transform: uppercase;
  color: rgb(228, 161, 62);
  font-size: 4em;
  animation: fontupdown 1s ease-in-out infinite alternate;
}

@keyframes fontupdown {
  from {
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  to {
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.contenedor {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 380px;
  /* border: 20px solid white; */
  /*  box-shadow: inset 0px 0px 30px 8px white; */
  border-radius: 50%;
}

.body {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 150px;
  background-color: rgb(153, 119, 77);
  border-radius: 50% / 30%;
  border: 1px solid black;
  transform-origin: center center;
  transform: rotate(-3deg) translate(-50%, -50%);
  animation: movebody 1s step-end infinite;
  z-index: 1;
}

.bodycopy {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(153, 118, 76);
  border-radius: 50% / 30%;
  z-index: 3;
}

@keyframes movebody {
  0% {
    top: 50%;
    left: 50%;
    transform-origin: center center;
    transform: rotate(-3deg) translate(-50%, -50%);
  }
  50% {
    top: 50%;
    left: 50%;
    transform-origin: center center;
    transform: rotate(6deg) translate(-50%, -50%);
  }
}

.arm {
  position: absolute;
  width: 50px;
  height: 30px;
  background-color: rgb(153, 118, 76);
  border: 1px solid black;
  border-radius: 30% / 50%;
}

.arm--left {
  top: 45%;
  left: 29%;
  transform: rotate(30deg);
  z-index: 1;
  animation: movearmleft 1s step-end infinite;
}

.arm--right {
  top: 48%;
  right: 35%;
  transform: rotate(-30deg);
  z-index: 3;
  animation: movearmright 1s step-end infinite;
}

@keyframes movearmleft {
  0% {
    top: 45%;
    left: 29%;
    transform: rotate(30deg);
    z-index: 1;
  }
  50% {
    top: 48%;
    left: 35%;
    transform: rotate(30deg);
    z-index: 3;
  }
}

@keyframes movearmright {
  0% {
    top: 48%;
    right: 35%;
    transform: rotate(-30deg);
    z-index: 3;
  }
  50% {
    top: 45%;
    right: 29%;
    transform: rotate(-30deg);
    z-index: 1;
  }
}

.leg {
  position: absolute;
  width: 30px;
  height: 50px;
  background-color: rgb(153, 118, 76);
  border: 1px solid black;
  border-radius: 50% / 30%;
}

.leg--left {
  top: 59%;
  left: 37%;
  z-index: 1;
  animation: movelegleft 1s step-end infinite;
}

.leg--right {
  top: 59%;
  right: 35%;
  transform: rotate(-50deg);
  z-index: 1;
  animation: movelegright 1s step-end infinite;
}

@keyframes movelegleft {
  0% {
    top: 59%;
    left: 38%;
    z-index: 1;
  }
  50% {
    top: 58%;
    left: 35%;
    transform: rotate(50deg);
    z-index: 1;
  }
}

@keyframes movelegright {
  0% {
    top: 60%;
    right: 35%;
    transform: rotate(-50deg);
    z-index: 1;
  }
  50% {
    top: 59%;
    right: 37%;
    z-index: 1;
    transform: rotate(0);
  }
}

.face {
  position: absolute;
  width: 100px;
  height: 70px;
  z-index: 3;
}

.eye {
  position: absolute;
  top: 45%;
  background: black;
  width: 15px;
  height: 5px;
  border-radius: 70% / 120%;
  transform-origin: 50%;
}

.eye--left {
  left: 25%;
  transform: rotate(5deg);
  animation: blinkleft 2s infinite;
}

.eye--right {
  right: 25%;
  transform: rotate(-5deg);
  animation: blinkright 2s infinite;
}

@keyframes blinkleft {
  0%,
  100% {
    transform: scale(1, 0.05) rotate(5deg);
  }
  5%,
  95% {
    transform: scale(1, 1) rotate(5deg);
  }
}

@keyframes blinkright {
  0%,
  100% {
    transform: scale(1, 0.05) rotate(-5deg);
  }
  5%,
  95% {
    transform: scale(1, 1);
    transform: scale(1, 1) rotate(-5deg);
  }
}

.mouth {
  position: absolute;
  top: 77%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #200503;
  width: 26px;
  height: 13px;
  border-radius: 50% / 80%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  overflow: hidden;
  border: 1px solid black;
}

.teeth {
  position: absolute;
  top: -15%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 22px;
  height: 8px;
  border-radius: 20% / 40%;
}

.mouth--inner {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f0817c;
  width: 22px;
  height: 15px;
  border-radius: 50% / 50%;
}

.eyeydetail {
  position: absolute;
  top: 47.5%;
  width: 3px;
  height: 1px;
  border-radius: 50% 45% 50% 50% / 50% 35% 50% 50%;
  box-shadow: -2px -2px 0 0 black;
}

.detail--left {
  left: 36%;
  transform: rotate(15deg) scale(-1, 1);
}

.detail--right {
  right: 36%;
  transform: rotate(-15deg);
}

.brow {
  position: absolute;
  top: 10%;
  width: 30px;
  height: 27px;
  background: black;
  -webkit-clip-path: polygon(3% 38%, 3% 49%, 69% 49%, 49% 37%);
  clip-path: polygon(3% 38%, 3% 49%, 69% 49%, 49% 37%);
}

.brow--left {
  left: 11%;
  transform: scaleX(-1) rotate(-5deg);
}

.brow--right {
  right: 11%;
  transform: rotate(-5deg);
}

.shirt {
  position: absolute;
  top: 44%;
  left: -1%;
  background-color: #153a3a;
  border: 1px solid black;
  width: 100px;
  height: 55px;
  border-radius: 0 0 3px 3px;
  /* background-image: url("adererror.png"); */
  background-position: 80% 25%;
  background-size: 20%;
  background-repeat: no-repeat;
  z-index: 3;
}

.armsleeve {
  position: absolute;
  top: -6%;
  right: -1%;
  width: 40px;
  height: 32px;
  background-color: #153a3a;
  border: 1px solid black;
  border-radius: 0 40% 40% 0 / 0 50% 50% 0;
}

.sleeve--left {
  animation: movesleeveleft 1s step-end infinite;
}

.sleeve--right {
  animation: movesleeveright 1s step-end infinite;
}

@keyframes movesleeveleft {
  0% {
    right: -1%;
    border-radius: 0 40% 40% 0 / 0 50% 50% 0;
  }
  50% {
    left: -2%;
    border-radius: 40% 0 0 40% / 50% 0 0 50%;
  }
}

@keyframes movesleeveright {
  0% {
    right: -1%;
    border-radius: 0 40% 40% 0 / 0 50% 50% 0;
  }
  50% {
    left: -1%;
    border-radius: 40% 0 0 40% / 50% 0 0 50%;
  }
}

.pants {
  position: absolute;
  bottom: -1%;
  left: -1%;
  background-color: rgb(48, 29, 14);
  border: 1px solid black;
  width: 100px;
  height: 55px;
  border-radius: 0 0 60% 60% / 0 0 100% 100%;
  z-index: 3;
}

.legpant {
  position: absolute;
  width: 31px;
  height: 40px;
  background-color: rgb(48, 29, 14);
  border: 1px solid black;
  border-radius: 50% 50% 0 0 / 30% 30% 0 0;
}

.pant--left {
  left: -5%;
}

.pant--right {
  right: -5%;
}

.hairdo {
  position: absolute;
  top: 13%;
  left: 51%;
  transform: rotate(-3deg) translate(-50%, -50%);
  width: 105px;
  height: 90px;
  background-color: black;
  border-radius: 50% 50% 50% 50% / 40% 40% 40% 40%;
  z-index: 1;
}

.hair-1 {
  position: absolute;
  top: -22%;
  left: 39%;
  width: 20%;
  height: 20%;
  background: black;
  -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transform: rotate(-50deg);
  z-index: 1;
}

.hair-2 {
  position: absolute;
  top: -21%;
  left: 50%;
  width: 20%;
  height: 20%;
  background: black;
  -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transform: rotate(-35deg);
  z-index: 1;
}

.hair-3 {
  position: absolute;
  top: -20%;
  left: 60%;
  width: 20%;
  height: 20%;
  background: black;
  -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transform: rotate(60deg);
  z-index: 1;
}

.hair-4 {
  position: absolute;
  top: -18%;
  left: 70%;
  width: 20%;
  height: 20%;
  background: black;
  -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transform: rotate(70deg);
  z-index: 1;
}

img {
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 140px;
  z-index: 3;
}

.frame {
  position: absolute;
  top: 38%;
  width: 24px;
  height: 16px;
  border: 2px solid rgb(29, 13, 3);
}

.frame--left {
  left: 18%;
  border-radius: 35% 40% 50% 50% / 35% 40% 70% 70%;
}

.frame--right {
  right: 18%;
  border-radius: 40% 35% 50% 50% / 40% 35% 70% 70%;
}

.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 4px;
  box-shadow: 0 -2px 0 0 rgb(29, 13, 3);
  border-radius: 50%;
}
</style>
