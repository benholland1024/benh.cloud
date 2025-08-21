<template>
  <div class="flex-container">
    <div>
      <h2>Ktty - A terminal text editor</h2>
      <p>
        This is a terminal text editor written in NodeJS, and re-written in C++.  It's similar to 
        Emacs or Nano.
      </p><br/>
      <p>
        It currently lets you make new files or open existing files, edit text, navigate around text, and save.  
        You can scroll or resize the window. And it warns you if you try to exit without saving, prompting you 
        to either save first or commit to losing changes.  A menu bar is implemented, but no menu options are 
        functional yet.
      </p><br/>
      <p>
        The biggest feature of ktty is it's documentation.  Each step required to recreate ktty is documented 
        in a tutorial, which you can check out <a href="https://salbertlaw.com" target="_blank">here</a>.
      </p><br/><br/>
    </div>
    <div class="media-container">
      <video style="width:100%;" autoplay muted loop>
        <source src="../../assets/page_assets/portfolio/ktty/ktty-demo.mp4" type="video/mp4">
        <img src="../../assets/page_assets/portfolio/ktty/ktty.png" class="portfolio-pic" alt="A screenshot of the ktty app." />
      </video>
    </div>
  </div>

  <!--  Spacer, to leave room at the bottom. -->
  <div style="padding:200px 0px 200px 10vw;">
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