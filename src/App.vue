<template>
  <div :class="{ 'dark-mode': dark_mode }" style="min-height: 100vh;">
  
    <div id="tooltip" :style="{
        top: (tooltip_y - 50) + 'px', 
        left: (tooltip_x - 40) + 'px',
        display: tooltip.display ? 'block' : 'none'
      }">
      {{ tooltip.message }}!
    </div>

    <img src="./assets/misc/moon.png" id="dark-mode-icon" @click="toggle_dark_mode()" />
    
    <header>
      <h1>&#9639; &nbsp; Ben H. &nbsp; &#9640;</h1>
      <p id="page-subtitle">Hi! This is my personal website.</p>
    </header>

    <nav id="nav-links">
      <router-link class="nav-link blue" to="/">Bio</router-link>
      <router-link class="nav-link blue2" to="/portfolio">Portfolio</router-link>
      <router-link class="nav-link brown" to="/plans">Plans</router-link>
      <router-link class="nav-link orange" to="/dash">Dash</router-link>
    </nav>

    <div class="divider-line"></div>

    <router-view/>

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
@import url('./assets/styling/header.css');
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


/*  Dark mode stuff.   */
#dark-mode-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
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

</style>
