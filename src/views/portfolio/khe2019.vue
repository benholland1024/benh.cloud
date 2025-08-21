<template>
  <div class="flex-container">
    <div>
      <h2>Kent Hack Enough Hackathon</h2>
      <p>This was the website and style guide for the hackathon for Kent State University.</p>
      <br/>
      <p>
        I made all the assets for this website. The site has since been updated, but you can see the 
        original style guide I made <a :href="`${publicPath}page_assets/portfolio/khe2019_StyleGuide.png`" target="_blank">here</a>.
      </p><br/>
    </div>
    <div class="media-container">
      <video style="width:100%;" autoplay muted loop>
        <source src="../../assets/page_assets/portfolio/khe2019/demo.mp4" type="video/mp4">
        <img src="../../assets/page_assets/portfolio/khe2019.png" class="portfolio-pic" alt="A screenshot of the KHE 2019 website." />
      </video>
    </div>
  </div>


  <!--  Spacer, to leave room at the bottom. -->
  <div style="padding:200px 0px 200px 10vw;">
    <a href="/portfolio">&#8617; Back to Ben's Portfolio</a>
  </div>

</template>


<script>
export default {
  name: 'khe',
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
.media-container img, .media-container video {
  display: block;
  box-shadow: 10px 10px var(--blue);
}
</style>