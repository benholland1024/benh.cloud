<template>
  <div class="flex-container">
    <div>
      <h2>The Pulse Duplicator</h2>
      <p>
        This was my main project while working for the <a href="" target="_blank">BETA Lab</a>  
         (<b>B</b>io<b>E</b>ngineering for <b>T</b>ranslational <b>A</b>pplications Lab).
      </p><br/>
      <p>
        The lab was working on an artificial heart valve design. I was the only one in the lab 
        with a computer science degree, and so I was in charge of creating a system to test the 
        novel heart valve design, compliant with ISO standards.
      </p><br/>
      <p>
        I researched the needed sensors for us to order, designed a custom PCB, and used Linux 
        on an RPi to both display the data and provide touch-screen user controls.
      </p><br/>
      <p>
        The UI was made using Python for hardware interfacing, and Javascript for the display 
        and user controls.
      </p><br/><br/>
      <p>
        Check out a poster explaining the work 
        <a :href="`${publicPath}page_assets/portfolio/PulseDuplicatorBMESPoster.pdf`" target="_blank">here</a>.
      </p>
    </div>
    <div class="media-container">
      <!-- <img src="../../assets/page_assets/portfolio/pulse_duplicator_diagram.png" class="portfolio-pic" alt="A diagram of the pulse duplicator." /> -->
      <video style="width:100%;" autoplay muted loop>
        <source src="../../assets/page_assets/portfolio/PulseDuplicator/demo.mp4" type="video/mp4">
        Your browser does not support video :(
      </video>
    </div>
  </div>

  <div style="text-align: center; margin-top: 100px;" class="media-container">
    <img src="../../assets/page_assets/portfolio/pulse_duplicator_diagram.png"  alt="A diagram of the pulse duplicator." />
  </div>

  <!--  Spacer, to leave room at the bottom. -->
  <div style="padding:200px;">
    <a href="/portfolio">&#8617; Back to Ben's Portfolio</a>
  </div>

</template>


<script>
export default {
  name: 'PulseDup',
  data() {
    return {
      publicPath: process.env.BASE_URL, //  Links to /public
    }
  }
}
</script>

<style scoped>
.flex-container {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  gap: 40px;
  padding-top: 100px;
}
.flex-container div {
  min-width: 300px;
  width: 40%;
}
h2 {
  font-weight: normal; 
  font-size: 3em;
  margin-bottom: 30px;
  font-family: morallySerif;
}
.portfolio-pic {
  width: 30vw;
}
.media-container video, .media-container img {
  box-shadow: 10px 10px var(--blue);
}
</style>