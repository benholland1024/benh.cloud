<template>
  <div class="flex-container">
    <div>
      <h2>The Albert Law Firm</h2>
      <p>This client needed their site redesigned using a flexible CMS.</p><br/>
      <p>
        Rather than using WordPress or similar, I chose a more flexible route that could precisely fit the client's vision.
        The website is built in VueJS, with the page content loaded in using <a href="https://prismic.io/" target="_blank">Prismic</a>. 
      </p><br/>
      <p>
        The client can now edit page content securely from Prismic, without touching any code.  But we still have the flexibility 
        to add and update features using VueJS tools and libraries when needed.
      </p><br/><br/>
      <p>Check out the Albert Law Firm at <a href="https://salbertlaw.com" target="_blank">salbertlaw.com</a>.</p>
    </div>
    <div class="media-container">
      <video style="width:100%;" autoplay muted loop>
        <source src="../../assets/page_assets/portfolio/AlbertLaw/AlbertLaw.webm" type="video/webm">
        <img src="../../assets/page_assets/portfolio/salbertlaw.png" class="portfolio-pic" alt="A screenshot of the home page of DataPantry.com" />
      </video>
    </div>
  </div>

  <!--  Spacer, to leave room at the bottom. -->
  <div style="padding:200px;">
    <a href="/portfolio">&#8617; Back to Ben's Portfolio</a>
  </div>

</template>


<script>

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
  display: block;
  box-shadow: 10px 10px var(--blue);
}
</style>