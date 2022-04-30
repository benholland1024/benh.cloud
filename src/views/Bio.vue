<template>
  <div class="text-center">

    <br /><br /><br /><br />

    <!--  Main bio  -->
    <div class="container-center flex space-between">
      <div style="width:48%">
        <h3>About Me</h3>
        <p> My name is Ben, born in 1996.  I live in NE Ohio.  I studied computer science at Kent State University. </p>
        <br /><br />
        <h3>Career</h3>
        <p> I'm currently working for Giant Eagle's curbside department, and pursuing software work on the side.  </p>
        <!-- <p> I want to work a 40 hour week doing something that I find meaningful.  </p> -->
        <br /><br />
        <h3>Interests</h3>
        <p>Software (specifically, web design)</p>
        <p>Economics and politics</p>
        <p>Drums and guitar</p>
        <p>3d modeling and printing</p>
        <p>Creative writing, especially scripts</p>
        <p>Visual design, for games, UIs, & art</p>
      </div>
      <div style="width:48%">
        <img src="../assets/page_assets/bio/selfie.png" style="width: 50%; padding: 0px 0px 20px 20px;" />
        <br />
        <p><img src="../assets/icons/mail.png" class="icon" />bhollan5@kent.edu</p>
        <p><img src="../assets/icons/phone.png" class="icon" />330.703.8105</p>
        <p><img src="../assets/icons/github.png" class="icon" />www.github.com/bhollan5</p>
        <p><img src="../assets/icons/resume.png" class="icon" /><a :href="`${publicPath}page_assets/bio/BenHolland_TechResume.pdf`" target="_blank">View my resume</a></p>
      </div>
    </div>

    <br /><br /><br /><br />

    <div class="ellipsis"></div>

    <!--  Top 5 section  -->

    <br /><br /><br /><br />

    <div class="container-center flex space-between">
      <div style="width:48%">
        <h3>Some good albums</h3>
        <ol>
          <li>The Leo Sun Sets by Serena Isioma</li>
          <li>We've Been Talking by Enemies</li>
          <li>Magic Trix by Xenia Rubinos</li>
          <li>Ga Ga Ga Ga Ga by Spoon</li>
          <li>Omega La La by Rubblebucket</li>
        </ol>
        <br /><br />
        <h3>Some good movies</h3>
        <ol>
          <li>Melancholia (2011)</li>
          <li>In Bruges (2008)</li>
          <li>Stranger Than Fiction (2006)</li>
          <li>The Secret Life of Bees (2008)</li>
          <li>Little Miss Sunshine (2006)</li>
        </ol>
      </div>
      <div style="width:48%">
        <h3>Some good books</h3>
        <ol>
          <li>The Jungle by Upton Sinclair</li>
          <li>100 Years of Solitude by Gabriel García Márquez</li>
          <li>Malagash by Joey Comeau</li>
          <li>Little Fires Everywhere by Celeste Ng</li>
          <li>Heart of Darkness by Joseph Conrad</li>
        </ol>
        <br /><br />
      </div>
    </div>

    <br /><br /><br /><br />
    <div class="divider-line"></div>
    <br /><br /><br /><br /><br /><br /><br /><br />

</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Bio',
  components: {
    // HelloWorld
  },
  data() {
    return {
      publicPath: process.env.BASE_URL, //  Links to /public
    }
  }
}
</script>
