<template>
  <!-- The outer div, containing the whole app. -->
  <div :class="{ 'dark-mode': dark_mode }" style="min-height: 100vh; display:flex;">
  
    <img src="./assets/misc/moon.png" id="dark-mode-icon" @click="toggle_dark_mode()" />

    <div id="sidebar">
      <header>
        <router-link style="color:white; text-decoration: none;" to="/"><h1>benh.cloud</h1></router-link>
      </header>
      <nav id="nav-links">
        <router-link class="nav-link" to="/"><div class="img" id="about-me-link"></div>about me</router-link>
        <router-link class="nav-link" to="/portfolio"><div class="img" id="portfolio-link"></div>portfolio</router-link>
        <!-- <router-link class="nav-link" to="/projects"><div class="img" id="projects-link"></div>projects</router-link> -->
        <router-link class="nav-link" to="/blog"><div class="img" id="blog-link"></div>blog</router-link>
      </nav>
    </div>

    <div id="content-container">
      <router-view :dark="dark_mode" v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" :dark="dark_mode" />
        </keep-alive>
      </router-view>
    </div>

    <div id="mobile-navbar">
      <router-link class="nav-link" to="/"><div class="img" id="about-me-link"></div>about</router-link>
      <router-link class="nav-link" to="/portfolio"><div class="img" id="portfolio-link"></div>portfolio</router-link>
      <!--<router-link class="nav-link" to="/projects"><div class="img" id="projects-link"></div>projects</router-link>-->
      <router-link class="nav-link" to="/blog"><div class="img" id="blog-link"></div>blog</router-link>
    </div>

  </div>
</template>

<script>

export default {
  
  data() {
    return {
      dark_mode: true,
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
  --text-color: black;
  --background-color: white;
  --bg-translucent: rgba(255,255,255,0.7);

  --blue: #466EA8;
  --blue2: #4698A8;
  --brown: #A88846;
  --orange: #F87600;
  --gray: #999999;
  --black: #0D0D0D;
  --light-black: #1E1E1E;

  --sidebar-width: 240px; 
  font-family: sans-serif;

}
:root .dark-mode {
  --text-color: white;
  --background-color: black;
  --bg-translucent: rgba(0,0,0,0.9);
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
  width: var(--sidebar-width);
  background: #ddd;
  z-index: 2;
  color: var(--text-color);
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
  color: black;
}
.dark-mode h1 {
  color: white;
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
    z-index: 4;
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
  display: flex;
  align-items: center;
}
.nav-link, .nav-link:visited {
  color: black;
}
.dark-mode .nav-link, .dark-mode .nav-link:visited {
  color: white;
}
.nav-link .img {
  margin-right: 10px;
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-bottom: -3px;  /*  Makes icons align better with text */
  background-color: black;
  background-size: contain;
  border: solid 3px black;
  mask-position: center;
  mask-repeat: no-repeat;
  padding:3px;
  /* -webkit-mask-image: url(./assets/icons/face.svg);
  mask-image: url(./assets/icons/face.svg); */
}
#about-me-link {
  -webkit-mask-image: url(./assets/icons/face.svg);
  mask-image: url(./assets/icons/face.svg);
}
#portfolio-link {
  -webkit-mask-image: url(./assets/icons/machine.svg);
  mask-image: url(./assets/icons/machine.svg);
}
#projects-link {
  -webkit-mask-image: url(./assets/icons/briefcase.svg);
  mask-image: url(./assets/icons/briefcase.svg);
}
#blog-link {
  -webkit-mask-image: url(./assets/icons/paragraph.svg);
  mask-image: url(./assets/icons/paragraph.svg);
}
.dark-mode .nav-link .img {
  background-color: white;
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
    padding-top: 10px;
    box-sizing: border-box;
    display: block;
  }
  .nav-link img {
    margin: 0px;
    padding: 0px;
  }
  .img {
    margin: 0px !important;
  }
  #mobile-navbar .nav-link {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  padding-left: var(--sidebar-width);
  box-sizing: border-box;
  overflow-x: hidden;
}
@media only screen and (max-width: 650px) {
  #content-container {
    padding-left: 0px;
  }
}

</style>
