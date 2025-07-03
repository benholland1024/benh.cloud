<template>
  <div id="flex-container">

  
    <div id="left-container">
      
    </div> <!--  End left container -->

    <div id="right-container">
      <h1>Projects</h1>
      <br>
      <p>I like to work on personal projects. I'll post some that I've completed here, soon.</p>
      <br>
    </div>

    <div id="display"></div>

      <!-- info minimized-->
      <!-- <div id="info-mini" v-else-if="false">
        <div class="clickable" @click="show_info=true">Show info</div>
      </div> -->

  </div>
</template>

<script>

/*


*/

import * as Three from 'three'
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"


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
      time: 0,
      parent_box: null,
      mouse_down: false,  //  Stores whether the mouse is clicked.
      mouse_last_x: null, //  Stores the last x value of a move. 
      mouse_last_y: null, //  Stores the last y value of a move. 
      show_info: false, // Used to minimize or maximize the info window
      objects: []       // Tracks all meshes added to the scene
    }
  },
  props: ['dark'],
  watch: {
    dark: function() {
      console.log("Changed")
      let bg = '#ffffff';
      if (this.dark) {
        bg = '#0D0D0D';
      }
      scene.background = new Three.Color(bg);
    }
  },
  methods: {
    // INIT
    init() {

      //  Initializes arrow keys for movement.
      //this.listen_for_keypress();
      this.listen_for_mouse_drag();

      //  Set up the container.
      let container = document.getElementById('display');

      //  Set up the scene object.
      scene = new Three.Scene();
      
      //  Set up the camera inside the container
      let lens_angle = 70;
      var aspect = container.clientWidth/container.clientHeight;
      var near = 1;
      var far = 2000;
      this.camera = new Three.PerspectiveCamera(lens_angle, aspect, near, far);
      this.camera.position.z = 3;
      this.camera.position.y = 8.5;
      this.camera.position.x = 13;
      this.camera.rotation.x = -.8;
      this.camera.rotation.y = .8;
      this.camera.rotation.z = 0.6;


      //  Add camera to scene. 
      scene.add(this.camera)

      let bg = '#ffffff';
      if (this.$parent.$parent.dark_mode) {
        bg = '#0D0D0D';
      }
      scene.background = new Three.Color(bg);


      //  Create a mesh out of a geometry + material
      const geometry = new Three.PlaneGeometry(150, 150, 64, 64);
      const material = new Three.MeshStandardMaterial({
        color: 'red',
      }); 
      var plane = new Three.Mesh(geometry, material);

      //  Add the mesh to the scene
      // scene.add(plane);

      //  Creating a cube which will be the parent of all rainbow cubes
      const size = 0.5;
      const BoxGeometry = new Three.BoxGeometry(size,size,size);
      const BoxMaterial = new Three.MeshStandardMaterial({
        transparent: true,
        opacity: 0,
        color: 'black',
      }); 
      var parent_box = new Three.Mesh(BoxGeometry, BoxMaterial);

      //  Add the mesh to the scene
      scene.add(parent_box);
      this.parent_box = parent_box;

      //  Creating rainbow cubes arranged in sphere
      const sphere_size = 6;
      for (let x = -sphere_size; x < sphere_size; x++) {
        for (let y = -sphere_size; y < sphere_size; y++) {
          for (let z = -sphere_size; z < sphere_size; z++) {
            let distance = Math.sqrt(x*x + y*y + z*z);
            if (distance > sphere_size || distance < sphere_size - 2) {
              continue;
            }
            let r = 150 + x * 15;
            let g = 150 + y * 15; 
            let b = 150 + z * 15;
            this.create_box(`rgb(${r},${g},${b})`, x, y, z);
          }
        }
      }

      // const axesHelper = new Three.AxesHelper( 5 );
      // scene.add( axesHelper );

      //  Define a light. 
      var ambientLight = new Three.AmbientLight( 0x404040 );
      ambientLight.position.set( 0, 1, .5 );

      scene.add(ambientLight)

      const light = new Three.PointLight( 0xffffff, 100, 100 );
      light.position.set( 10, 0, 0 );
      scene.add( light );

      const light2 = new Three.HemisphereLight( 0xffffbb, 0x080820, 1 );
      scene.add( light2 );

      //  Create a renderer
      this.renderer = new Three.WebGLRenderer({antialias: true});
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
      this.renderer.render(scene, this.camera);

      //  Allow mouse to control camera
      // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      // const updateCameraOrbit = () => {
      //   const forward = new Three.Vector3();
      //   this.camera.getWorldDirection(forward);
      //   this.controls.target.copy(this.camera.position).add(forward);
      // }
      // this.controls.addEventListener('end', () => {
      //   updateCameraOrbit();
      // });
      // updateCameraOrbit();

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
    //  INIT: Mouse! 
    listen_for_mouse_drag() {

      let _this = this;
      document.body.addEventListener('mousemove', function (e) {
        // If the mouse is down and we've moved before, get the difference and move the boxes. 
        if (_this.mouse_last_x != null && _this.mouse_last_y != null && _this.mouse_down && _this.parent_box) {
          _this.parent_box.rotation.y += (e.x - _this.mouse_last_x) * 0.01;
          _this.parent_box.rotation.x += (e.y - _this.mouse_last_y) * 0.01;
        }
        _this.mouse_last_x = e.x;
        _this.mouse_last_y = e.y;
      });
      document.body.addEventListener('mousedown', function () {
        _this.mouse_down = true;
        _this.mouse_last_x = null;
        _this.mouse_last_y = null;
      });
      document.body.addEventListener('mouseup', function () {
        _this.mouse_down = false;
      });

      window.addEventListener("resize", onWindowResize);
    
      function onWindowResize() {
        if (!_this.camera) { return ; }
        _this.camera.aspect = window.innerWidth / window.innerHeight;
        _this.camera.updateProjectionMatrix();
        _this.renderer.setSize(window.innerWidth, window.innerHeight);
      }

    },

    create_box(color, x, y, z) {
      const size = 0.5;
      const BoxGeometry = new Three.BoxGeometry(size,size,size);
      const BoxMaterial = new Three.MeshStandardMaterial({
        color: color,
      }); 
      var box = new Three.Mesh(BoxGeometry, BoxMaterial);
      box.position.x = x;
      box.position.y = y;
      box.position.z = z;

      box.parent = this.parent_box;
      this.parent_box.add(box);

      //  Add the mesh to the scene
      //scene.add(box);


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
      this.parent_box.rotation.y += 0.001;
      this.time += 0.01;
      for (let i = 0; i < this.objects.length; i++) {
        let scale = Math.abs(Math.sin(this.time + i * 0.01 + this.objects[i].obj.position.y * 0.1 ))
        this.objects[i].obj.scale.x = scale;
        this.objects[i].obj.scale.y = scale;
        this.objects[i].obj.scale.z = scale;

        // this.objects[i].obj.rotation.x += scale * 0.01;
        // this.objects[i].obj.rotation.y += scale * 0.01;
      }
      // this.objects[0].obj.rotation.y -= 0.01;
      // this.objects[0].obj.rotation.z -= 0.01;

      // this.controls.update();
      // console.log(this.box.position);
      this.renderer.render(scene, this.camera);
    }
  }
}
</script>

<style scoped>
  #flex-container {
    display: flex;
    /* width: 100vw; */
    padding-top: 100px;
    justify-content: space-around;
    flex-flow: row wrap;
    position: relative;
  }
  #display {
    top: 0px;
    left: 0px;
    position: absolute !important;
    width: calc(100vw - 300px);
    height: 100vh;
    z-index: 0;
  }

  #left-container {
    width: 600px;
    height: 400px;
    position: relative;
    top: 0px;
    z-index: 1;
    /* border: solid 1px white; */
  }
  #info, #info-mini {
    position: absolute;
    padding: 20px;
    background: rgba(0,0,0,0.5);
    font-family: sans-serif;
    border-radius: 10px;
    border: solid gray 1px;
    top: 100px;
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

  #right-container {
    width: 400px;
    padding: 10px;
    padding-top: 10px;
    padding-bottom: 300px;
    text-align: left;
    font-family: sans-serif;
    z-index: 1;
    background: rgba(255,255,255,.5)
  }
  #right-container h1 {
    color: var(--brown);
  }
  .dark-mode #right-container  {
    background: rgba(13,13,13,.5)

  }

  .portfolio-link {
    font-weight: bold;
  }

  p {
    margin-bottom: 5px;;
  }
</style>