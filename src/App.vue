<template>
  
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
</template>

<style> /*  App-wide styles!  */

@import url('./assets/styling/page-content.css');
@import url('./assets/styling/header.css');

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

 .divider-line {
    margin-top: 20px;
    width: 400px;
    border-bottom: solid 1px black;
    margin-left: auto;
    margin-right: auto;
  }
</style>
