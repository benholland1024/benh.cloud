<template>
  <div id="container">
  </div>
</template>

<script>
import * as Three from 'three'

var scene;

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
      scene = new Three.Scene();
      
      //  Set up the camera inside the container
      let lens_angle = 70;
      var aspect = container.clientWidth/container.clientHeight;
      var near = 1;
      var far = 2000;
      this.camera = new Three.PerspectiveCamera(lens_angle, aspect, near, far);
      this.camera.position.z = 1;

      scene.background = new Three.Color('rgb(22,22,50)');

      //  Add camera to scene. 
      scene.add(this.camera)

      //  Create a mesh out of a geometry + material
      const geometry = new Three.PlaneGeometry(150, 150, 64, 64);
      const material = new Three.MeshStandardMaterial({
        color: 'red',
      }); 
      var plane = new Three.Mesh(geometry, material);

      //  Add the mesh to the scene
      // scene.add(plane);

      //  Create a BOX out of a geometry + material
      const BoxGeometry = new Three.BoxGeometry(4,4,4);
      const BoxMaterial = new Three.MeshStandardMaterial({
        color: 'green',
      }); 
      var box = new Three.Mesh(BoxGeometry, BoxMaterial);
      box.position.z = -10;

      //  Add the mesh to the scene
      scene.add(box);

      const axesHelper = new Three.AxesHelper( 5 );
      scene.add( axesHelper );

      //  Define a light. 
      var ambientLight = new Three.AmbientLight( 0x404040 );
      ambientLight.position.set( 0, 1, .5 );

      scene.add(ambientLight)

      const light = new Three.PointLight( 0xffffff, 100, 100 );
      light.position.set( 10, 0, 0 );
      scene.add( light );

      //  Create a renderer
      this.renderer = new Three.WebGLRenderer({antialias: true});
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
      this.renderer.render(scene, this.camera);

      this.plane = plane;
      this.box = box;
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      // this.mesh.rotation.x += 0.01;
      // this.plane.rotation.y += 0.02;
      this.box.rotation.z -= 0.01;
      this.box.rotation.y -= 0.01;
      // console.log(this.box.position);
      this.renderer.render(scene, this.camera);
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