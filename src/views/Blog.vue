<template>
  <div id="blog-container">
    <h1>Blog</h1>
    <hr/><hr/><br/>

    <div class="blog-post">
      <h2>HTML template engine 🚂</h2>
      <p class="byline">July 10th, 2025</p>
      <p>HTML templating engines: Very cool.</p> 
      <p>
        I briefly described what an HTML templating engine was in my last post. So here, I'll focus on 
        some basic implementation details. 
      </p>
      <p>
        My current goal is to implement a single type of feature: Custom component definition, component reuse, 
        and component trees. A <b class="orange">component</b> is a collection of HTML, CSS, and JS, captured in a JS object and named. 
        The idea is that one component can contain other components.  You might have a component named "Website" 
        that contains several components named "Blog-Post" and several named "Comment". 
      </p>
      <p>
        For the purposes of this goal, then, a component's HTML "template" is just vanilla HTML, with one difference:
        we can use custom tag names. That is, we're not limited to &lt;<code class="blue">p</code>&gt;, 
        &lt;<code class="blue">h1</code>&gt;, &lt;<code class="blue">div</code>&gt;, &lt;<code class="blue">span</code>&gt;, etc.
        We can define <i>new</i> components, like &lt;<code class="blue">my-custom-component</code>&gt;. 
      </p>
      <p>
        A basic example uses two components: <code class="blue">MyCustomComponent</code> and <code class="blue">Main</code>. 
        Both are defined by an HTML template. <code class="blue">MyCustomComponent</code> contains only vanilla HTML, while
        <code class="blue">Main</code> also includes the tag &lt;<code class="blue">my-custom-component</code>&gt;.
      </p>
      <p>
        To make our basic example work, we need to find all the tags that don't have "vanilla" HTML tag names in 
        <code class="blue">Main</code> component template. Then we need to replace them with other appropriately 
        named component templates.  In this case, we'll replace the &lt;<code class="blue">my-custom-component</code>&gt;
        tag with the template of <code class="blue">MyCustomComponent</code>.
      </p>
      <p>So, how do we find all the tag names in our template?</p>
      <p>
        
      </p>
      <hr/>
    </div>

    <div class="blog-post">
      <h2>Building a Javascript Framework from vanilla JS ✨</h2>
      <p class="byline">July 9th, 2025</p>
      <p>
        C and C++ are cool, Python is powerful, and I hear good things about Java and C#.  
        But Javascript is fun and accessible. It's the first language I got into, back in middle school. 
        Javascript is the standardized script of web browsers (iconic). You can even use JS for your 
        full stack: NodeJS for your backend, and any number of tools for the frontend. 
        And while JS has some issues, it's also easy to upgrade and fix for any project.
      </p>
      <p>
        Using a Javascript framework is one way to upgrade your JS experience. JS frameworks, like React,
        Angular, or Vue, provide better syntax and more software patterns.  Such frameworks are a 
        requirement for a large-scale website, if you're building in JS. 
      </p>
      <p>I am venturing to build <i>my own</i> JS framework, from vanilla JS. I have two motivations:</p>
      <ol>
        <li>I want to understand the mechanisms involved. </li>
        <li>I want to be familiar with all dependencies.</li>
      </ol>
      <p>
        A key part of this project will be <i>documentation</i> -- not just on how to use the framework,
        but also how it's built. In fact, I'm building <a href="" target="_blank">a tutorial</a> on 
        how to recreate the entire framework.
      </p>
      <p>The first thing I'm focusing on is the <a href="https://en.wikipedia.org/wiki/JavaScript_templating"><b>HTML templating engine</b></a>.</p>
      <p>JS frameworks use HTML templating to add new features to HTML, such as:</p>
      <ul>
        <li>
          Inserting JS variables into a document, with the syntax: <br/>
          <!--  <div> Variable value: {{ my_var }} </div>   -->
          <code>&lt;<span class="blue">div</span>&gt;Variable value: 	&#123;{ <span class="yel">my_var</span> }}&lt;/<span class="blue">div</span>&gt;</code>
          <br/><br/>
        </li>
        <li>
          Using "if" statements in HTML, with syntax that might look like:<br/>
          <!--  <div v-if="my_var">This content only appears if my_var is true! </div>  -->
          <code>
            &lt;<span class="blue">div</span> <span class="orange">v-if</span>="<span class="yel">my_var</span>"&gt;
            This content only appears if my_var is true!&lt;/<span class="blue">div</span>&gt;
          </code><br/><br/>
        </li>
        <li>Defining and inserting reusable, customizable components. I'll show an example of this in the next post.<br/><br/></li>
        <li>And more! (for-loops, etc.)</li>
      </ul>
      <p>
        Using all these features, we basically define a new kind of HTML, with extra features. "Vanilla" HTML is parsed  
        and interpreted by web browsers.  To use these extra features, the JS framework has to parse the new format 
        and turn it into vanilla HTML. And that's where an HTML template engine comes in.
      </p>
      <p>In the next post, I'll talk about the details of making such a templating engine. Thanks for joining me!</p>
    </div>
    <hr/>
  </div>
</template>

<script>

</script>

<style>
#blog-container {
  padding: 100px 10%;
  max-width: 600px;
}
.blog-post {
  margin-top: 150px;
  /* font-family: sans-serif; */
}
.byline {
  opacity: 0.6;
}
p {
  margin-bottom: 15px;
}
.blog-post hr {
  margin-bottom: 50px;
}
.blue {
  color: rgb(154, 154, 241);
}
.orange {
  color: rgb(241, 199, 119);
}
.yel {
  color: rgb(255, 240, 101);
}
</style>