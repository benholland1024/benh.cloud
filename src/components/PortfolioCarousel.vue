<template>
  
  <!------------------------------>
  <!--    Portfolio Carousel    -->
  <!------------------------------>
  <div id="portfolio-carousel-container">
    <h2>Portfolio:</h2>
    <div id="portfolio-carousel">

      <a class="carousel-card" href="/portfolio/data-pantry">
        <div class="card-screen"></div>
        <img src="../assets/page_assets/portfolio/DataPantry_landing.png" class="portfolio-pic" alt="A screenshot of the home page of DataPantry.com" />
        <div class="carousel-about">
          <h3>Data Pantry</h3>
          <div>A database manager.</div>
        </div>
      </a>

      <a class="carousel-card" href="/portfolio/albert-law">
        <div class="card-screen"></div>
        <img src="../assets/page_assets/portfolio/salbertlaw.png" class="portfolio-pic" alt="A screenshot of the home page of salbertlaw.com" />
        <div class="carousel-about">
          <h3>The Albert Law Firm</h3>
          <div>A redesign of the company's old website.</div>
        </div>
      </a>

      <a class="carousel-card" href="/portfolio/pulse-duplicator">
        <div class="card-screen"></div>
        <img src="../assets/page_assets/portfolio/pulse_duplicator_diagram.png" class="portfolio-pic" alt="The pulse duplicator, with parts labelled." />
        <div class="carousel-about">
          <h3>Pulse Duplicator</h3>
          <div>A novel pulse duplicator prototype for Beta Labs.</div>
        </div>
      </a>

      <a class="carousel-card" href="/portfolio/khe-2019">
        <div class="card-screen"></div>
        <img src="../assets/page_assets/portfolio/khe2019.png" class="portfolio-pic" alt="The website for KHE 2019." style="height:210px"/>
        <div class="carousel-about">
          <h3>Website for KHE 2019</h3>
          <div>Design & code for a hackathon website.</div>
        </div>
      </a>

    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioCarousel',
  props: {
    
  }
}

</script>

<style scoped>

  /********************************/
  /*   The portfolio carousel     */
  /********************************/

  h2 {
    font-family: morallySerif;
    padding-left: 100px;
    padding-bottom: 50px;
    font-weight: normal;
    font-size: 2em;
  }

  #portfolio-carousel-container {
    padding: 200px 0px;
  }
  #portfolio-carousel {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    justify-content: space-around;
  }
  .carousel-card {
    width: 320px;
    height: 185px;
    position: relative;
    display: flex;
    text-decoration: none;
    cursor: pointer;
    justify-content: center;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.9);
    overflow: hidden;
    transition-duration: 1s;
  }
  .carousel-card:hover {
    transform: scale(1.1);
  }
  .card-screen {
    position: absolute;
    z-index: 2;
    background: rgba(0,0,0,0.4);
    width: 320px;
    height: 185px;
    top: -320px;
    transition-duration: 0.5s;
  }
  .carousel-card:hover .card-screen {
    top: 0px;
  }
  .carousel-card img {
    height: 185px;
    object-fit: cover;
  }
  .carousel-about {
    position: absolute;
    width: 250px;
    top: 70px;
    right: 0; 
    left: 0;
    z-index: 3;
    margin-inline: auto; 
    background: var(--bg-translucent);
    backdrop-filter: blur(10px); /*  Frosted glass effect!  */
    border-radius: 5px;
    color: var(--text-color);
    padding: 10px;
  }
  .carousel-about h3 {
    margin-bottom: 10px;
  }
</style>