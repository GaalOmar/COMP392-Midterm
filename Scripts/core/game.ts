/// <reference path="_reference.ts"/>

// MAIN GAME FILE

/*
    Name: Ga-alo Omar 300175123
    Source File Name: Advanced Graphics - Midterm 
    Last Modified by: Ga-alo Omar
    Date last Modified: Mar 3, 2016
    Program description: Creating a tapered tower with colors
    Revision History:
    Commit 1: Created the visual code file - Intial Commit
    Commit 2: Added Cubes
    Commit 3: Added rotation to the cubes
    Commit 4: Finial Commit
    
    
*/

// THREEJS Aliases
import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import SphereGeometry = THREE.SphereGeometry;
import Geometry = THREE.Geometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Material = THREE.Material;
import Mesh = THREE.Mesh;
import Object3D = THREE.Object3D;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import AmbientLight = THREE.AmbientLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
import Face3 = THREE.Face3;
import Point = objects.Point;
import CScreen = config.Screen;

//Custom Game Objects
import gameObject = objects.gameObject;

// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (() => {

    // declare game objects
    var scene: Scene = new Scene();
    var renderer: Renderer;
    var camera: PerspectiveCamera;
    var control: Control;
    var gui: GUI;
    var stats: Stats;
    var axes: AxisHelper;
    var ambientLight: AmbientLight;
    var spotLight: SpotLight;
    var groundMaterial: LambertMaterial;
    var groundGeometry: PlaneGeometry;
    var ground: Mesh;
    var cube1: Mesh 
    var cube2: Mesh;
    var cube3: Mesh;
    var cube4: Mesh;
    var cube5: Mesh;
   

    function init() {
        // Instantiate a new Scene object
        //scene = new Scene();
        
        setupRenderer(); // setup the default renderer
	
        setupCamera(); // setup the camera


        /* ENTER CODE HERE */
        //Add Ground
        groundGeometry = new PlaneGeometry(20,23);
        groundMaterial = new LambertMaterial({color: 0xf2ede4});
        ground = new Mesh(groundGeometry, groundMaterial);
        ground .castShadow = true;
        ground .receiveShadow = true;
        ground.rotation.x = -0.5 * Math.PI;
        scene.add(ground);
        console.log("Added ground...");
        
        //Add Cube1
        cube1 = new Mesh(new CubeGeometry(6,2, 5), new LambertMaterial({color: (Math.random() * 0xFFFFFF << 0)}));
        cube1 .castShadow = true;
        cube1 .receiveShadow = true;
        cube1 .position.x = 0.5;
        cube1 .position.y = 0.5;
        scene.add(cube1);
        
        //Add Cube2
        cube2 = new Mesh(new CubeGeometry(4,2, 4), new LambertMaterial({color: (Math.random() * 0xFFFFFF << 0)}));
        cube2 .castShadow = true;
        cube2 .receiveShadow = true;
        cube2 .position.x = 0.5;
        cube2 .position.y = 2.5;
        cube2 .position.z = 0.5;
        scene.add(cube2);
        
        //Add Cube3
        cube3 = new Mesh(new CubeGeometry(3,2, 2), new LambertMaterial({color: (Math.random() * 0xFFFFFF << 0)}));
        cube3 .castShadow = true;
        cube3 .receiveShadow = true;
        cube3 .position.x = 0.5;
        cube3 .position.y = 4.5;
        cube3 .position.z = 0.5;
        scene.add(cube3);
        
        //Add Cube4
        cube4 = new Mesh(new CubeGeometry(2,2, 2), new LambertMaterial({color: (Math.random() * 0xFFFFFF << 0)}));
        cube4 .castShadow = true;
        cube4 .receiveShadow = true;
        cube4 .position.x = 0.5;
        cube4 .position.y = 6.5;
        cube4 .position.z = 0.5;
        scene.add(cube4);
        
        //Add Cube5
        cube5 = new Mesh(new CubeGeometry(1,1,1), new LambertMaterial({color: (Math.random() * 0xFFFFFF << 0)}));
        cube5 .castShadow = true;
        cube5 .receiveShadow = true;
        cube5 .position.x = 0.5;
        cube5 .position.y = 8;
        cube5 .position.z = 0.5;
        scene.add(cube5);
        
        //axes helper
        axes = new AxisHelper(20);
        ground.add(axes);
        console.log("Added Axis Helper to scene...");
        
         // Add an AmbientLight to the scene
        ambientLight = new AmbientLight(0x404040);
        scene.add(ambientLight);
        console.log("Added an Ambient Light to Scene....");
	
        // Add a SpotLight to the scene
        spotLight = new SpotLight(0xffffff);
        spotLight.position.set(-40, 60, -20);
        //spotLight.position.set(5.6, 23.1, 5.4);
        // spotLight.rotation.set(-0.8, 42.7, 19.5);
        spotLight.castShadow = true;
        scene.add(spotLight);
        console.log("Added a SpotLight Light to Scene...");
       
        // add controls
        gui = new GUI();
        control = new Control(0, 0, 0,0,0);
        addControl(control);

        // Add framerate stats
        addStatsObject();
        console.log("Added Stats to scene...");

        document.body.appendChild(renderer.domElement);
        gameLoop(); // render the scene	

    }

    function addControl(controlObject: Control): void {
        /* ENTER CODE for the GUI CONTROL HERE */
        gui.add(controlObject, 'rotationSpeedC1', -0.05, 0.05);
        gui.add(controlObject, 'rotationSpeedC2', -0.04, 0.04);
        gui.add(controlObject, 'rotationSpeedC3', -0.06, 0.06);
        gui.add(controlObject, 'rotationSpeedC4', -0.07, 0.07);
        gui.add(controlObject, 'rotationSpeedC5', -0.08, 0.08);

    }

    function addStatsObject() {
        stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }

    // Setup main game loop
    function gameLoop(): void {
        stats.update();
        
        cube1.rotation.y += control.rotationSpeedC1;
        cube2.rotation.y += control.rotationSpeedC2;
        cube3.rotation.y += control.rotationSpeedC3;
        cube4.rotation.y += control.rotationSpeedC4;
        cube5.rotation.y += control.rotationSpeedC5;
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
	
        // render the scene
        renderer.render(scene, camera);
    }

    // Setup default renderer
    function setupRenderer(): void {
        renderer = new Renderer();
        renderer.setClearColor(0x404040, 1.0);
        renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        console.log("Finished setting up Renderer...");
    }

    // Setup main camera for the scene
    function setupCamera(): void {
        camera = new PerspectiveCamera(35, config.Screen.RATIO, 0.1, 100);
        camera.position.x = 15.3;
        camera.position.y = 18.5;
        camera.position.z = -28.7;
        camera.rotation.set(-1.10305, 0.49742, -0.1396);
        camera.lookAt(new Vector3(0, 0, 0));
        console.log("Finished setting up Camera...");
    }

   window.onload = init;

    return {
        scene: scene
    }

})();

