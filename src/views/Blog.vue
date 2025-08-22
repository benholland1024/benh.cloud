<template>
  <div id="blog-container">
    <h1>Blog</h1>
    <hr/><hr/><br/>

    <div class="blog-post">
      <h2>HTML Template Engines and Tokenization 🚂 🪙 </h2>
      <p class="byline">July 10th, 2025</p>
      <p>HTML templating engines: Very cool.</p> 
      <p>
        I briefly described what an HTML templating engine was in my last post. So here, I'll focus on 
        some basic implementation details. 
      </p>
      <p>
        My <a href="https://github.com/rooftop-media/cookbook-tutorial" target="_blank">current goal</a>  is to implement a single type
        of feature: Custom component definition, component reuse, and component trees. A <b class="green">component</b> is a collection 
        of HTML, CSS, and JS, captured in a JS object and named. The idea is that one component can contain other components.  
        You might have a component named "Website" that contains several components named "Blog-Post" and several named "Comment". 
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
      <p>
        So, how do we find all the tag names in our template HTML string?
        The answer is <a href="https://en.wikipedia.org/wiki/Lexical_analysis#Tokenization" target="_blank" class="green bold">tokenization</a>.
      </p>
      <p>
        Tokeniziation is a lexical analysis technique that's also used in compiler logic and language-based machine learning. 
        The idea is to label not only tag names, but to label <i>all</i> elements of our string. Here's how it works:
      </p>
      <ol>
        <li>
          Loop through each character of the text string, creating a list of "tokens" as you go.
          <br/>Each token consists of a token "type" and a token "value".<br/><br/>
          <ul><li>
            For example, "&lt;<code class="blue">my-custom-component</code>&gt;" would be represented as 
            <br/>[ 
            <!--  { type: "LESS-THAN", value: "<"  }-->
            <br/> &nbsp; { <code class="green">type</code>: <code class="yel">"LESS-THAN"</code>,&nbsp; <code class="green">value</code>: <code class="yel">"&lt;"</code> &nbsp; },
            <br/> &nbsp; { <code class="green">type</code>: <code class="yel">"TEXT"</code>,&nbsp; <code class="green">value</code>: <code class="yel">"my-custom-component"</code> &nbsp; },
            <br/> &nbsp; { <code class="green">type</code>: <code class="yel">"GREATER-THAN"</code>,&nbsp; <code class="green">value</code>: <code class="yel">"&gt;"</code> &nbsp; }
            <br/>]
          </li></ul>
          <br/>
        </li>
        <li>
          Loop through <i>that</i> list of tokens to build a <i>new</i> list of tokens. 
          <br/>This can be done multiple times, using layers of different token formats. 
          <br/>It's an easy way to accomplish a few different goals, like:<br/><br/>
          <ul>
            <li><b>Adding context</b>, for example labelling an "=" differently depending on whether it's used as plaintext, vs. right after a tag attribute name.<br/><br/></li>
            <li><b>Simplifying token lists</b>, for example getting rid of the "LESS-THAN" tokens followed by "TEXT" tokens in favor of one "OPEN-TAG-NAME" token.<br/><br/></li>
            <li>
              <b>Accomplishing tasks one at a time</b>, for example classifying all vanilla HTML features in one function, then classifying extra features like 
              &#123;{ double curly braces }}.<br/><br/>
            </li>
          </ul>
          <br/>Such token list layers can make a program much easier to understand, though for efficiency, I believe it's best to use as few "token transform" layers as possible.<br/><br/>
        </li>
        <li>
          Use or alter the final token representation. Our goal was to find the tags named &lt;<code class="blue">my-custom-component</code>&gt; 
          so we can replace them with the template in <code class="blue">MyCustomComponent</code>. To do this, we can iterate through 
          the token list until we find a token that looks something like <br/>
          { <code class="green">type</code>: <code class="yel">"OPEN-TAG-NAME"</code>,&nbsp; <code class="green">value</code>: <code class="yel">"my-custom-component"</code> &nbsp; }
          <br/>Then we can replace it with a tokenized version of the <code class="blue">MyCustomComponent</code> template. 
          <br/>Finally, we make a function to transform the token list back into HTML.
        </li>
      </ol>
      <p style="font-style: italic;">
        [ You might be wondering why we can't use regex instead of tokenization. Regex is a tempting option, but it alone can't 
        handle context-dependent text searches, since it's a finite state machine.  Or, if it can, it would make less sense to me. 
        <br/><br/>Regex could be used as part of tokenization, but I opted not to use that tool for this project. ]
      </p>
      <p>Tokenization has been a lot of fun so far, and a good excuse to work on my algorithm design skills. </p>
      <p>
        The next step of the project will be to write tests, to make sure component rendering is consistent
        and high quality.
      </p>
      <hr/>
    </div> <!--  End blog post -->

    <!--  Blog post :)  -->
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
            &lt;<span class="blue">div</span> <span class="green">v-if</span>="<span class="yel">my_var</span>"&gt;
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
export default {
  name: 'Blog',
  components: {
    // HelloWorld
  },
  mounted() {
    this.load_table();
  },
  data() {
    return {
      
    }
  },
  methods: {
    load_table() {
      const http = new XMLHttpRequest(); // todo: remove this
      http.open("GET", "http://104.248.51.41/api/table?name=blog-posts");
      http.send();
      http.onreadystatechange = () => {
        if (http.readyState == 4 && http.status == 200) {
          let table = JSON.parse(http.responseText);
          if (!table.error) {
            console.log("Table recieved! ");
            console.log(table)
          } else {
            //document.getElementById('error').innerHTML = table.msg;
          }
        }
      }
    },
    $t(en, de) { return this.$root.$t(en, de) }
  },
}
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
.bold {
  font-weight: bold;
}
.blue {
  color: rgb(76, 76, 141);
}
.dark-mode .blue {
  color: rgb(154, 154, 241);
}
.green {
  color: rgb(20, 121, 0);
}
.dark-mode .green {
  color: rgb(168, 241, 119);
}
.yel {
  color: rgb(170, 153, 0);
}
.dark-mode .yel {
  color: rgb(255, 240, 101);
}
</style>