<template>
  <!--  Blog  -->
  <div id="blog" class="dash-widget">
    <div id="blog-title" class="dash-widget-header">Blog</div>
    <div id="blog-link-container">
      <a href="/wiki">Wiki base</a>
      <br/>
      <a href="/wiki-categories">Page categories...</a>
      <a href="/wiki-index">Complete page index...</a>
      <a href="/wiki-editor" id="create-new-page">Create new page...</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogOverview',
  props: {
    
  }
}
</script>

<style scoped>

@import url('../assets/styling/dash-widget.css');

/*  Blog:    */
#blog {
  height: 250px;
  font-family: sans-serif;
  font-size: 14px;
}
#blog-title {
  width: 100%;
  font-size: 14px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#blog-link-container {
  padding: 10px;
}
#blog-link-container a {
  margin-bottom: 5px;
  display: block;
}
</style>
