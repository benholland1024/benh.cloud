<template>
  <div :class="{ 'dark-mode': dark_mode }" style="min-height: 100vh;display:flex;">
  
    <div id="tooltip" :style="{
        top: (tooltip_y - 50) + 'px', 
        left: (tooltip_x - 40) + 'px',
        display: tooltip.display ? 'block' : 'none'
      }">
      {{ tooltip.message }}!
    </div>

    <img src="./assets/misc/moon.png" id="dark-mode-icon" @click="toggle_dark_mode()" />

    <div id="sidebar">
      <header>
        <h1>benh.cloud</h1>
      </header>
      <nav id="nav-links">
        <router-link class="nav-link" to="/"><img src="./assets/page_assets/bio/icons/face.png"/>Bio</router-link>
        <router-link class="nav-link" to="/portfolio"><img src="./assets/page_assets/bio/icons/briefcase.png"/>dev portfolio</router-link>
        <router-link class="nav-link" to="/plans"><img src="./assets/page_assets/bio/icons/machine.png"/>design portfolio</router-link>
        <router-link class="nav-link" to="/dash"><img src="./assets/page_assets/bio/icons/paragraph.png"/>blog</router-link>
      </nav>
    </div>
    
    <!--
    <header>
      <h1>&#9639; &nbsp; Ben H. &nbsp; &#9640;</h1>
      <p id="page-subtitle">Hi! This is my personal website.</p>
    </header>

    <nav id="nav-links">
      <router-link class="nav-link blue" to="/">Bio</router-link>
      <router-link class="nav-link blue2" to="/portfolio">Portfolio</router-link>
      <router-link class="nav-link brown" to="/plans" v-if="0">Plans</router-link>
      <router-link class="nav-link orange" to="/dash">Dash</router-link>
    </nav>

    <div class="divider-line"></div>-->

    <router-view :dark="dark_mode"/>

  </div>
</template>

<script>

export default {
  
  data() {
    return {
      dark_mode: false,
      tooltip_x: 0,
      tooltip_y: 0
    }
  },

  computed: {
    tooltip() {
      return {
        display: this.$store.state.display_tooltip,
        message: this.$store.state.tooltip_message
      }
    }
  },
  
  methods: {
    toggle_dark_mode() {
      this.dark_mode = !this.dark_mode;
      localStorage.darkMode = this.dark_mode;
    }
  },
  
  mounted() {
    //  Get browser's dark mode settings
    if (String(localStorage.darkMode) == "false") {
      this.dark_mode = false;
    } else {
      this.dark_mode = true;
    }

    window.addEventListener('mousemove', (event) => {
      this.tooltip_x = event.clientX;
      this.tooltip_y = event.clientY;
    })
  }

}
</script>


<style> /*  App-wide styles!  */

@import url('./assets/styling/page-content.css');
@import url('./assets/styling/css-images.css');

/*  Variables.    */
:root {
  --blue: #466EA8;
  --blue2: #4698A8;
  --brown: #A88846;
  --orange: #F87600;
  --gray: #999999;
  --black: #0D0D0D;
  --light-black: #1E1E1E;
}

.blue {
  color: var(--blue);
}
.blue2 {
  color: var(--blue2);
}
.brown {
  color: var(--brown);
}
.orange {
  color: var(--orange);
}
.gray {
  color: var(--gray);
}

/*  Must credit!  */
@font-face {
  font-family: morallySerif;
  src: url(./assets/page_assets/bio/Morally\ Serif.otf);
}

/*  App base.     */
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html, body {
  margin: 0px;
}

header, #nav-links, .divider-line, #dark-mode-icon {
  z-index: 1;
}
header, #nav-links, .divider-line {
  position: relative;
}

/*  Dark mode stuff.   */
#dark-mode-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 2;
}
.dark-mode #dark-mode-icon {
  filter: invert();
}
.dark-mode {
  background: #0D0D0D;
  color: white;
}
.dark-mode a:not(.nav-link) {
  color: var(--blue2);
}

#tooltip {
    position: absolute;
    /* display: none; */
    width: 100px;
    height: 40px;
    font-size: 12px;
    border-radius: 5px;
    background: black;
    color: white;
    z-index: 100;
    padding: 5px 10px;
}

/*  Redesign  */

#sidebar {
  position: relative;
  left: 0px;
  height: 100vh;
  width: 300px;
  background: #ddd;
  z-index: 2;
}
.dark-mode #sidebar {
  background: #161616;
}
h1 {
  text-align: left;
  width: 100%;
  padding-left: 10px;
  margin-bottom: 0px;
  box-sizing: border-box;
  font-family: morallySerif;
  font-weight: normal;
}

/*  The nav bar.        */
nav {
  align-text: left;
}
.nav-link {
  width: 200px;
  margin-top: 20px;
  margin-left: 10px;
  padding: 5px;
  border-radius: 5px;
  text-align: left;
  font-family: sans-serif;
  text-decoration: none;
  display: block;
}
.nav-link, .nav-link:visited {
  color: white;
}
.nav-link img {
  margin-right: 10px;
  margin-bottom: -3px;  /*  Makes icons align better with text */
}
.nav-link:hover {
  text-decoration: underline;
}
.nav-link.selected {
  font-weight: bold;
  text-decoration: underline;
}

nav a.router-link-exact-active {
  font-weight: bold;
}
.dark-mode nav a.router-link-exact-active {
  background: #222;
}
nav a:not(.router-link-exact-active) {
  font-weight: normal;
}

</style>
