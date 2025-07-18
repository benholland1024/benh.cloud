<template>
  <div id="flex-container">

  
    <div id="shape-container">
      <img src="../assets/page_assets/bio/decorated_pfp.png" style="width:100%;"/>

    </div> <!--  End shape container -->

    <div id="right-container">
      <h1>about me</h1>
      <!-- <img src="../assets/page_assets/bio/slice17.png" style="width:100%"/> -->
      <br>
      <p>I work in web design, making web apps, animations, data displays, etc. </p>
      <br>
      <p>I also have experience in circuit design, controlling motors, and reading from sensors. </p>
      <br/><br/>
      <div class="bio-link-container" style="width: 300px; text-align: left">
        <p><img src="../assets/icons/mail.png" class="icon" /><a href="mailto:benholland1024@gmail.com">benholland1024@gmail.com</a></p>
        <p><img src="../assets/icons/phone.png" class="icon" /><a href="tel:+13307038105">+1 330.703.8105</a></p>
        <p><img src="../assets/icons/github.png" class="icon" /><a href="https://github.com/benholland1024">github.com/benholland1024</a></p>
      </div>
      <br/>
      <router-link class="blue2 portfolio-link" to="/portfolio">Portfolio &#8674; </router-link>
    </div>


      <!-- info minimized-->
      <!-- <div id="info-mini" v-else-if="false">
        <div class="clickable" @click="show_info=true">Show info</div>
      </div> -->

  </div>
</template>

<script>

/*


*/

export default {
  name: 'Landing',
  components: {
    // HelloWorld
  },
  mounted() {
    this.init()
  },
  data() {
    return {
    }
  },
  methods: {
    // INIT
    init() {
    },
  }
}
</script>

<style scoped>
  #flex-container {
    display: flex;
    /* width: 100vw; */
    box-sizing: border-box;
    padding-top: 100px;
    justify-content: space-around;
    flex-flow: row wrap;
    position: relative;
  }


  #shape-container {
    width: 100%;
    max-width: 600px;
    position: relative;
    top: 0px;
    z-index: 1;
    /* border: solid 1px white; */
  }
  #info, #info-mini {
    position: absolute;
    padding: 20px;
    background: rgba(0,0,0,0.5);
    font-family: sans-serif;
    border-radius: 10px;
    border: solid gray 1px;
    top: 100px;
    right: 30px;
  }

  #info {
    width: 400px;
    height: 500px;
  }

  .clickable {
    cursor: pointer;
    opacity: 0.5;
    font-weight: bold;
    text-decoration: underline;
    text-align: right;
  }

  #right-container {
    width: 400px;
    padding: 10px;
    padding-top: 10px;
    padding-bottom: 300px;
    text-align: left;
    font-family: sans-serif;
    z-index: 1;
    background: rgba(255,255,255,.5)
  }
  .dark-mode #right-container  {
    background: rgba(13,13,13,.5)
  }
  #right-container h1 {
    margin: 0px;
    padding: 0px;
    color: #905353;
  }
  #right-container p {
    font-size: large;
  }

  .bio-link-container a {
    color: #88bee0;
  }

  .portfolio-link {
    font-weight: bold;
  }

  p {
    margin-bottom: 5px;;
  }
</style>