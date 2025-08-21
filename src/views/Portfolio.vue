<!--
  Portfolio.vue

  Displays my work projects, including:
   - The pulse duplictor 
   - The Albert law firm website
   - The startup stirfry website.
   - The KHE website.

-->


<template>
  <div style="width: 100%">
    <!-- <h1>Portfolio</h1>
    <p class="back-link">
      <router-link class="blue2 portfolio-link" to="/">&#8672; Back to the Landing page </router-link>
    </p> -->
    <Portfolio-carousel></Portfolio-carousel>

    <!--
    <div class="portfolio-item">
      <img src="../assets/page_assets/portfolio/DataPantry_landing.png" class="portfolio-pic" alt="A screenshot of the home page of DataPantry.com" />
      <div class="portfolio-item-text">
        <p>An online <b>database manager</b>.</p>
        <p>This is my current main side project. It's similar to Google's Firebase or Amazon's AWS.</p>
        <p>Check it out at <a :href="`https://datapantry.org`" target="_blank">datapantry.org.</a></p>
      </div>
    </div>
    
    <div class="portfolio-item">
      <img src="../assets/page_assets/portfolio/pulse_duplicator_diagram.png" class="portfolio-pic" alt="Pulse duplicator" />
      <div class="portfolio-item-text">
        <p>A novel <b>pulse duplicator</b>.</p>
        <p>This is my main project while working at BETA Lab.</p>
        <p>View a <a :href="`${publicPath}page_assets/portfolio/PulseDuplicatorBMESPoster.pdf`" target="_blank">poster presenting the work.</a></p>
      </div>
    </div>

    <div class="portfolio-item">
      <img src="../assets/page_assets/portfolio/salbertlaw.png" class="portfolio-pic" alt="A screenshot of the home page of salbertlaw.com" />
      <div class="portfolio-item-text">
        <p>Website for the <b>Albert Law Firm</b>.</p>
        <p>This is a redesign of the law firm's old website, using VueJS.</p>
        <p>Live URL: <a href="https://salbertlaw.com/home" target="_blank">https://salbertlaw.com/home</a></p>
      </div>
    </div>

    <div class="portfolio-item" v-if="0">
      <img src="../assets/page_assets/portfolio/how-react-works.png" class="portfolio-pic" alt="A screenshot of the homepage of how-react.works" />
      <div class="portfolio-item-text">
        <p>A tutorial website for ReactJS.</p>
        <p>I designed & implemented this website with ReactJS, describing ReactJS. </p>
        <p>Live URL: <a href="https://how-react.works/" target="_blank">https://how-react.works/</a></p>
      </div>
    </div>

    <div class="portfolio-item" v-if="0">
      <img src="../assets/page_assets/portfolio/how-dotnet-works.png" class="portfolio-pic" alt="A screenshot of the homepage of how-dotnet.works" />
      <div class="portfolio-item-text">
        <p>A tutorial website for Microsoft's development framework, .NET.</p>
        <p>I designed & implemented this website with .NET, describing how to use .NET. WIP. </p>
        <p>Live URL: <a href="https://how-dotnet.works/" target="_blank">https://how-dotnet.works/</a></p>
      </div>
    </div>

    <div class="portfolio-item" v-if="0">
      <img src="../assets/page_assets/portfolio/how-angular-works.png" class="portfolio-pic" alt="A screenshot of the homepage of how-dotnet.works" />
      <div class="portfolio-item-text">
        <p>A tutorial website for Google's development framework, Angular.</p>
        <p>I designed & implemented this website with Angular, describing how to use Angular. WIP. </p>
        <p>Live URL: <a href="https://how-angular.works/" target="_blank">https://how-angular.works/</a></p>
      </div>
    </div>

    <div class="portfolio-item" v-if="0">
      <img src="../assets/page_assets/portfolio/rooftop-media.png" class="portfolio-pic" alt="A screenshot of the homepage of rooftop-media.org" />
      <div class="portfolio-item-text">
        <p>A website for Rooftop Media, a software company I am working on starting.</p>
        <p>Currently under construction.  This website links to some other software projects I'm working on. </p>
        <p>Live URL: <a href="https://rooftop-media.org/" target="_blank">https://rooftop-media.org/</a></p>
      </div>
    </div>

    <br /><br /><br /><br />
    <p class="centered" v-if="0">And here are two websites I designed that are no longer in use. </p>

    <div class="portfolio-item">
      <img src="../assets/page_assets/portfolio/khe2019.png" class="portfolio-pic" alt="A screenshot of the home page of the KHE 2018 website." />
      <div class="portfolio-item-text">
        <p>Website for KSU's hackathon, <b>Kent Hack Enough 2018</b>.</p>
        <p>This was a collaborative effort, but I lead the website design this year. </p>
        <p>This website is no longer active.  You can see a style guide I made <a :href="`${publicPath}page_assets/portfolio/khe2019_StyleGuide.png`" target="_blank">here</a>.</p>
      </div>
    </div>

    <div class="portfolio-item" v-if="0">
      <img src="../assets/page_assets/portfolio/benh.png" class="portfolio-pic" alt="A screenshot of the home page of my old personal website." />
      <div class="portfolio-item-text">
        <p>My old personal website.</p>
        <p>This website is no longer active. It used to be live at www.benh.io. </p>
        <p>You can browse an archived version <a :href="`${publicPath}page_assets/portfolio/old_website/index.html`" target="_blank">here</a>.</p>
      </div>
    </div>

    <br /><br /><br /><br />
    <p class="centered" v-if="0">
      Finally, this website is for a design company I founded with my friend, Nick C.<br />
      I made the 3d models used on the website, while Nick designed & coded the website itself.
    </p>
    <br /><br />

    <div class="portfolio-item">
      <img src="../assets/page_assets/portfolio/startupstirfry.png" class="portfolio-pic" />
      <div class="portfolio-item-text">
        <p>Website for <b>Startup Stirfry</b>.</p>
        <p>This website is still live.  This was a collaboration between me and Nick Crawford. </p>
        <p>Live URL:  <a href="https://startupstirfry.com/" target="_blank">https://startupstirfry.com/</a>.</p>
      </div>
    </div>-->

    <br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br />

  </div>
</template>


<script>
import PortfolioCarousel from '../components/PortfolioCarousel.vue';


export default {
  name: 'Portfolio',
  components: {
    PortfolioCarousel
  },
  data() {
    return {
      publicPath: process.env.BASE_URL, //  Links to /public
    }
  }
}
</script>


<style scoped>

/* h1 {
  margin-top: 0px;
  padding-top: 100px;
  text-align: center;
  font-family: sans-serif;
}
.back-link {
  text-align: center;
}

.portfolio-item {
    width: 100%;
    height: 300px;
    position: relative;
    box-shadow: 0px 0px 10px rgba(0,0,0,.7);
    margin-top: 100px;
    transition-duration: .5s;
    overflow: hidden;
    margin-bottom: -5px;
}
.portfolio-item:hover {
    transform: scale(1.1);
}
.portfolio-item-text {
    width: calc(100% - 20px);
    background: rgba(255,255,255,0.85);
    position: absolute;
    bottom: 0px;
    padding: 10px;
    font-size: 14px;
}
.dark-mode .portfolio-item-text {
    background: rgba(0,0,0,0.85);
}
.portfolio-item-text p {
    margin-bottom: 5px;
}
.portfolio-pic {
    object-fit: cover;
    width: 100%;
} */
</style>
