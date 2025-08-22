<template>

  <!------------------------------>
  <!--    Image and About-Me    -->
  <!------------------------------>
  <div id="flex-container">
    <div id="shape-container">
      <img src="../assets/page_assets/bio/decorated_pfp.png" style="width:100%;"/>

    </div> <!--  End shape container -->

    <div id="right-container">
      <h1>{{ $t('about me', 'über mich') }}</h1>
      <!-- <img src="../assets/page_assets/bio/slice17.png" style="width:100%"/> -->
      <br>
      <p>
        {{ $t('I work in web design, making web apps, animations, data displays, etc.',
        'Ich arbeite im Webdesign und erstelle Web-Apps, Animationen, Datenanzeigen usw.')}}
      </p>
      <br>
      <p>
        {{ $t('I also have experience in circuit design, controlling motors, and reading from sensors.',
        'Ich habe auch Erfahrung im Schaltungsdesign, in der Steuerung von Motoren und im Auslesen von Sensoren.')}}
      </p>
      <br/><br/>
      <div class="bio-link-container" style="width: 300px; text-align: left">
        <p><img src="../assets/icons/mail.png" class="icon" /><a href="mailto:benholland1024@gmail.com">benholland1024@gmail.com</a></p>
        <p><img src="../assets/icons/phone.png" class="icon" /><a href="tel:+13307038105">+1 330.703.8105</a></p>
        <p><img src="../assets/icons/github.png" class="icon" /><a href="https://github.com/benholland1024">github.com/benholland1024</a></p>
      </div>
      <br/>
      <router-link class="blue2 portfolio-link" to="/portfolio">Portfolio &#8674; </router-link>
    </div>

  </div>

  <!------------------------------>
  <!--    Portfolio Carousel    -->
  <!------------------------------>
  <portfolio-carousel></portfolio-carousel>

</template>

<script>
import PortfolioCarousel from '@/components/PortfolioCarousel.vue';

/*


*/

export default {
  name: 'AboutMe',
  components: {
    PortfolioCarousel
  },
  mounted() {
    this.init()
  },
  data() {
    return {
      carousel_idx: 0
    }
  },
  methods: {
    // INIT
    init() {
    },
    $t(en, de) {return this.$root.$t(en, de); }
  }
}
</script>

<style scoped>

  

  /*  The top container, with the image and about-me text.  */
  #flex-container {
    display: flex;
    /* width: 100vw; */
    box-sizing: border-box;
    padding-top: 100px;
    justify-content: space-around;
    flex-flow: row wrap;
    position: relative;
  }

  /*  The left container, with the image.  */
  #shape-container {
    width: 100%;
    max-width: 600px;
    position: relative;
    top: 0px;
    z-index: 1;
  }

  /*  The container with the about me text  */
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
  .bio-link-container a {   /*  Container within the right container, with all the links: github, email, etc  */
    color: #88bee0;
  }
  .portfolio-link {
    font-weight: bold;
  }
  #right-container p {
    margin-bottom: 5px;
  }

</style>