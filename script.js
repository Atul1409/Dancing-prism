window.onload=function(){
    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;
    
    var renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setClearColor(0x000000, 1);
    document.body.appendChild(renderer.domElement);
    
    var scene = new THREE.Scene();
    
    var camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT);
    camera.position.z = 40;
    camera.lookAt(0,0,0)
    scene.add(camera);
    
    var CylinderGeometry  = new THREE.CylinderGeometry (10, 10, 10,3);
    var PhongMaterial = new THREE.MeshPhongMaterial({color: 0x00aaff , emissive : 0x00ffaa});
    var cube = new THREE.Mesh(CylinderGeometry, PhongMaterial);
    scene.add(cube);
    cube.rotation.set(0.4, 0.2, 0);
    
    var light = new THREE.HemisphereLight(0xffffff, 0x000000, 2);
    
    var fogC = new THREE.Color(0xff56ff);
    
    
    /*scene.background = fogC;*/
    scene.fog = new THREE.Fog(fogC, 65,20)
    scene.add(light)
    
    
    function render() {
        requestAnimationFrame(render);
        renderer.render( scene, camera);
        cube.rotation.x += .01;
        cube.rotation.y += .02;
        cube.rotation.z += .001;
    }
    render();
    }
