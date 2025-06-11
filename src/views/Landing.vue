<template>
  <div id="container">
    <!-- info -->
    <div id="info" v-if="show_info">
      <div class="clickable" @click="show_info = false">Hide info</div>
      <br/>
      <div id="object-list">
        <div style="font-weight: bold">Objects:</div>
        <div v-for="object in objects" :key="object.name">
          {{ object.name }}
        </div>
      </div>
    </div>
    <!-- info minimized-->
    <div id="info-mini" v-else>
      <div class="clickable" @click="show_info=true">Show info</div>
    </div>
  </div>
</template>

<script>

/*


*/

import * as Three from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"


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
      show_info: false, // Used to minimize or maximize the info window
      objects: []       // Tracks all meshes added to the scene
    }
  },
  methods: {
    // INIT
    init() {

      //  Initializes arrow keys for movement.
      //this.listen_for_keypress();

      //  Set up the container.
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

      //  Add camera to scene. 
      scene.add(this.camera)

      scene.background = new Three.Color('rgb(22,22,50)');


      //  Create a mesh out of a geometry + material
      const geometry = new Three.PlaneGeometry(150, 150, 64, 64);
      const material = new Three.MeshStandardMaterial({
        color: 'red',
      }); 
      var plane = new Three.Mesh(geometry, material);

      //  Add the mesh to the scene
      // scene.add(plane);

      this.create_box();

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

      //  Allow mouse to control camera
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      const updateCameraOrbit = () => {
        const forward = new Three.Vector3();
        this.camera.getWorldDirection(forward);
        this.controls.target.copy(this.camera.position).add(forward);
      }
      this.controls.addEventListener('end', () => {
        updateCameraOrbit();
      });
      updateCameraOrbit();

      this.plane = plane;
    },
    //  INIT: Keyboard!
    listen_for_keypress() {
      window.addEventListener('keydown', (e) => {
        const cam_move_sensitivity = 0.2;
        if (e.key == 'ArrowUp') {
          this.camera.position.y += cam_move_sensitivity;
        } else if (e.key == 'ArrowDown') {
          this.camera.position.y -= cam_move_sensitivity;
        } else if (e.key == 'ArrowLeft') {
          this.camera.position.x -= cam_move_sensitivity;
        } else if (e.key == 'ArrowRight') {
          this.camera.position.x += cam_move_sensitivity;
        }
      });
    },

    create_box() {
      const BoxGeometry = new Three.BoxGeometry(4,4,4);
      const BoxMaterial = new Three.MeshStandardMaterial({
        color: 'green',
      }); 
      var box = new Three.Mesh(BoxGeometry, BoxMaterial);
      box.position.z = -10;

      //  Add the mesh to the scene
      scene.add(box);

      this.objects.push({
        name: 'box1',
        obj: box
      })
    },

    //  ANIMATE
    animate: function() {
      requestAnimationFrame(this.animate);
      // this.mesh.rotation.x += 0.01;
      // this.plane.rotation.y += 0.02;
      this.objects[0].obj.rotation.y -= 0.01;
      this.objects[0].obj.rotation.z -= 0.01;

      this.controls.update();
      // console.log(this.box.position);
      this.renderer.render(scene, this.camera);
    }
  }
}
</script>

<style scoped>
  #container {
    width: 100%;
    height: calc(100vh - 200px);
    position: relative;
  }
  #info, #info-mini {
    position: absolute;
    padding: 20px;
    background: rgba(0,0,0,0.5);
    font-family: sans-serif;
    border-radius: 10px;
    border: solid gray 1px;
    top: 30px;
    right: 30px;
  }

  #info {
    width: 400px;
    height: 500px;
  }

  .clickable {
    cursor: pointer;
    opacity: 0.5;
    font-weight: bold;
    text-decoration: underline;
    text-align: right;
  }
</style>