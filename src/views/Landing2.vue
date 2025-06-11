<template>
  <div id="container">
    <div id="left-container">
      <div id="cloud">&#9729;</div>
      <div id="cloud2">&#9729;</div>
      <div id="rain">
        <div class="raindrop" v-for="drop in drops" :key="drop.id" :style="{
          color: drop.color,
          left: 20 + drop.x_pos + 'px',
          'animation-duration': drop.speed
        }" v-html="drop.char">
        </div>
      </div>
    </div>
    <div id="right-container">
      <h1>Ben H.</h1>
      <h3>Web & hardware design.</h3>
      <br><br>
      <p>I work in web design, making web apps, animations, data displays, etc. </p>
      <br>
      <p>I also have experience in circuit design, controlling motors, and reading from sensors. </p>
      <br/><br/>
      <router-link class="blue2 portfolio-link" to="/portfolio">Portfolio &#8674; </router-link>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'Landing',
  components: {
    // HelloWorld
  },
  mounted() {
    this.init()
   // this.animate()
  },
  data() {
    return {
      count: 0,
      drops: []
    }
  },
  methods: {
    init() {
      setInterval(this.create_raindrop, 50);
    },
    create_raindrop() {
      this.count++;
      let r = Math.floor(Math.random() * 100);
      let g = r;
      let b = Math.floor(Math.random() * 156) + 100;

      let charDec = Math.floor(Math.random() * 223) + 32;

      this.drops.push({
        id: this.count,
        char: `&#${charDec};`,
        color: `rgba(${r},${g},${b}, 1)`,
        speed: Math.floor(Math.random() * 100) / 100,  // speed should be between 1-2
        x_pos: Math.floor(Math.random() * 370)
      });
      const current_count = this.count;
      const _this = this;

      //  Delete that element
      setTimeout(() => {
        let idx = this.drops.find((drop) => drop.id ==current_count);
        _this.drops.splice(idx, 1);
      }, 2000);
      // create a new div element
      // const newDiv = document.createElement("div");
      
      // newDiv.innerHTML = "8";
      // newDiv.style.color = "pink";

      // add the newly created element and its content into the DOM
      // const rain_container = document.getElementById("rain");
      // rain_container.appendChild(newDiv);

      // newDiv.classList.add('raindrop');
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
    }
  }
}
</script>

<style scoped>
  #container {
    width: 100%;
    min-height: 800px;
    max-width: 1500px;
    left: 0 auto;
    right: 0 auto;
    padding-top: 100px;
    padding-bottom: 200px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    font-family: sans-serif;
  }
  h1 {
    margin: 0px;
  }
  h3 {
    font-style: italic;
    opacity: 0.5;
  }


  #left-container {
    /* user-select: none; /* Makes all text not selectable */
    position: relative;
    width: 600px;
    margin-left: 100px;
    height: 500px;
  }
  #cloud {
    font-size: 400px;
    color: gray;
    position: absolute;
    top: -100px;
    z-index: 1;
  }
  #cloud2 {
    font-size: 200px;
    color: lightgray;
    position: absolute;
    top: 100px;
    left: 250px;
    z-index: 2;
  }
  .raindrop {
    animation: rainfall 2s linear 0s 1;
    position: absolute;
    top: 400px;
    /* left: 50px; */
    z-index: 0;
    opacity: 0;
    font-weight: bold;
  }
  @keyframes rainfall {
    0% {
      top: 250px;
      padding-left: 15px;
      opacity: 1;
    } 
    50% {
      top: 400px;
      padding-left: 0px;
      opacity: 1;
    }
    100% {
      top: 400px;
      padding-left: 0px;
      opacity: 0;
    }
  }

  #right-container {
    width: 400px;
    padding: 10px;
    padding-top: 100px;
    text-align: center;
  }

  .portfolio-link {
    font-weight: bold;
  }
</style>