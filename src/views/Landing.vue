<template>
  <div id="container">
  </div>
</template>

<script>
import * as Three from 'three'

export default {
  name: 'Landing',
  components: {
    // HelloWorld
  },
  mounted() {
    this.init()
    this.animate()
  },
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
    }
  },
  methods: {
    init() {
      //  Set up the container
      let container = document.getElementById('container');

      //  Set up the scene object.
      this.scene = new Three.Scene();
      
      //  Set up the camera inside the container
      let lens_angle = 70;
      var aspect = container.clientWidth/container.clientHeight;
      var near = 1;
      var far = 2000;
      this.camera = new Three.PerspectiveCamera(lens_angle, aspect, near, far);
      this.camera.position.z = 1;

      //  Add camera to scene. 
      this.scene.add(this.camera)

      //  Create a mesh out of a geometry + material
      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
      let material = new Three.MeshLambertMaterial({ color: 0xCC0000 });
      this.mesh = new Three.Mesh(geometry, material);

      //  Add the mesh to the scene
      this.scene.add(this.mesh);

      //  Define a light. 
      var ambientLight = new Three.AmbientLight( 0x404040 );
      ambientLight.position.set( 0, 1, .5 );

      this.scene.add(ambientLight)

      //  Create a renderer
      this.renderer = new Three.WebGLRenderer({antialias: true});
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
    }
  }
}
</script>

<style scoped>
  #container {
    width: 100%;
    height: 800px;
  }
</style>