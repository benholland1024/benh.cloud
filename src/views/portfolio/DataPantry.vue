<template>
  <div class="flex-container">
    <div>
      <h2>DataPantry.org</h2>
      <p>This project is built and maintained by me, with help from the open source community.</p>
      <br/>
      <p>
        DataPantry.org is a <b>database management website</b>.  Businesses can 
        design their database using a schema diagram, then immediately use the Pantry API to 
        access their database tables.
      </p><br/>
      <p>
        They can add, update, read or delete data, from their own
        website, securely, with datatype validation. 
      </p><br/><br/>
      <p>Try it out yourself at <a href="https://datapantry.org" target="_blank">datapantry.org</a>!</p>
    </div>
    <div class="vid-container">
      <video style="width:100%;" autoplay muted loop>
        <source src="../../assets/page_assets/portfolio/DataPantry/landing.webm" type="video/webm">
        <img src="../../assets/page_assets/portfolio/DataPantry_landing.png" class="portfolio-pic" alt="A screenshot of the home page of DataPantry.com" />
      </video>
    </div>
  </div>


  <!--  Second section, with the schema demo.  -->
  <div class="flex-container">
    <div class="vid-container">
      <video style="width:100%;" autoplay muted loop>
        <source src="../../assets/page_assets/portfolio/DataPantry/schema_demo.webm" type="video/webm">
        <img src="../../assets/page_assets/portfolio/DataPantry_landing.png" class="portfolio-pic" alt="A screenshot of the home page of DataPantry.com" />
      </video>
    </div>
    <div>
      <p>This is the schema editor.</p><br/>
      <p>
        Tables can be created, moved and renamed.  Table columns can also be created and renamed, and their datatypes can be set.
        Table relationships can also be defined. 
      </p>
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
.vid-container video {
  display: block;
  box-shadow: 10px 10px var(--blue);
}
</style>