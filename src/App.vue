<template>
  <!-- The outer div, containing the whole app. -->
  <div :class="{ 'dark-mode': dark_mode }" style="min-height: 100vh; display:flex;">
  
    <img src="./assets/misc/moon.png" id="dark-mode-icon" @click="toggle_dark_mode()" />

    <div id="sidebar">
      <header>
        <h1>benh.cloud</h1>
      </header>
      <nav id="nav-links">
        <router-link class="nav-link" to="/"><img src="./assets/page_assets/bio/icons/face.png"/>bio</router-link>
        <router-link class="nav-link" to="/portfolio"><img src="./assets/page_assets/bio/icons/briefcase.png"/>portfolio</router-link>
        <router-link class="nav-link" to="/projects"><img src="./assets/page_assets/bio/icons/machine.png"/>projects</router-link>
        <router-link class="nav-link" to="/dash"><img src="./assets/page_assets/bio/icons/paragraph.png"/>blog</router-link>
      </nav>
    </div>

    <div id="content-container">
      <router-view :dark="dark_mode"/>
    </div>

    <div id="mobile-navbar">
      <router-link class="nav-link" to="/"><img src="./assets/page_assets/bio/icons/face.png"/><br/>bio</router-link>
        <router-link class="nav-link" to="/portfolio"><img src="./assets/page_assets/bio/icons/briefcase.png"/><br/>portfolio</router-link>
        <router-link class="nav-link" to="/projects"><img src="./assets/page_assets/bio/icons/machine.png"/><br/>projects</router-link>
        <router-link class="nav-link" to="/dash"><img src="./assets/page_assets/bio/icons/paragraph.png"/><br/>blog</router-link>
    </div>

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
        message: this.$store.state.tooltip_message,
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

/****************** */
/*    Variables.    */
/****************** */
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

/**************** */
/*    App.vue     */
/**************** */
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html, body {
  margin: 0px;
}

header, #nav-links, #dark-mode-icon {
  z-index: 1;
}
header, #nav-links {
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

/*************************** */
/*  Menu (sidebar + mobile)  */
/*************************** */

#sidebar {
  position: fixed;
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

#mobile-navbar {
  display: none;
}

@media only screen and (max-width: 650px) {
  #sidebar {
    display: none;
  }
  #mobile-navbar {
    display: block;
    background: #ddd;
    width: 100vw;
    height: 80px;
    position: fixed;
    bottom: 0px;
    z-index: 2;
    display: flex;
  }
  .dark-mode #mobile-navbar {
    background: #161616;
  }

}

#nav-links {
  text-align: left;
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
  width: 15px;
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
@media only screen and (max-width: 650px) {
  .nav-link {
    text-align: center;
    margin: 0px;
    padding: 20px;
    box-sizing: border-box;
  }
  .nav-link img {
    margin: 0px;
  }
  #mobile-navbar a.router-link-exact-active {
    font-weight: bold;
  }
  .dark-mode #mobile-navbar a.router-link-exact-active {
    background: #222;
  }
  #mobile-navbar a:not(.router-link-exact-active) {
    font-weight: normal;
  }
}


/************************* */
/*  Page content container */
/************************* */
#content-container {
  width: 100vw;
  padding-left: 300px;
  box-sizing: border-box;
  overflow-x: hidden;
}
@media only screen and (max-width: 650px) {
  #content-container {
    padding-left: 0px;
  }
}

</style>
