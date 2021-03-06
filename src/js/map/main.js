
  var _scale=200;

window.globe_w=1000;
window.globe_h=1000;


var  windowHalfX = window.globe_w / 2;
var  windowHalfY = window.globe_h / 2;

var pathToData="js/lib/data/geoData.json";

window.rotating;
var marker_size=0.02*_scale;
var scene,camera,renderer,group,raycaster,_w,_h,mouse,stats;



window.addEventListener("load", function () {

  hide_info();
  // window.addEventListener( 'resize', onWindowResize, false );


  stats = new Stats();
  stats.setMode( 0 ); 
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  // document.body.appendChild( stats.domElement );


  setupScene();
  setupGlobe();
  addLight();
  addInteraction();

  loop();

}, false);

function setupScene(){


  _w=window.globe_w;
  _h= window.globe_h;
  var aspect = _w/ _h;
  scene = new THREE.Scene(); 
  camera  = new THREE.PerspectiveCamera(45,_w /_h, 0.01, 1000 );
  camera.position.z = 1.5*_scale;
  renderer = new THREE.WebGLRenderer({ antialias: true } ); 
  renderer.setClearColor(new THREE.Color(0x76c6e0, 1.0));
  renderer.setSize( _w, _h ); 
  if ($('#globeHolder').length) {
    document.getElementById("globeHolder").appendChild( renderer.domElement );  
  };
  

  group = new THREE.Object3D(); 
  scene.add(group);
  // group.position.x=0.6;
  // group.position.y=0.12;
  window.rotating=group;
  raycaster = new THREE.Raycaster();

}



var loop = function loop() {
  stats.begin();

  requestAnimationFrame(loop);

  update_drag_rotation();

  renderer.render(scene, camera);


  stats.end();

};

window.setGlobeSize=function(w,h){
  window.globe_w=w;
  window.globe_h=h;

  windowHalfX = window.globe_w / 2;
  windowHalfY =window.globe_h / 2;

   // group.position.x=0.6/(1920/1080/(windowHalfX/windowHalfY));

   camera.aspect = window.globe_w / window.globe_h;
   camera.updateProjectionMatrix();

   renderer.setSize( window.globe_w, window.globe_h );

 }

 function onWindowResize() {

  windowHalfX = window.globe_w / 2;
  windowHalfY =window.globe_h / 2;

   // group.position.x=0.6/(1920/1080/(windowHalfX/windowHalfY));

   camera.aspect = window.globe_w / window.globe_h;
   camera.updateProjectionMatrix();

   renderer.setSize( window.globe_w, window.globe_h );

 }




 function update_drag_rotation(){

  group.rotation.y += ( targetRotationX*0.5 - group.rotation.y ) * 0.1;

  finalRotationY = (targetRotationY*0.5 - group.rotation.x); 

  if (group.rotation.x  <= 1 && group.rotation.x >= -1 ) {

    group.rotation.x += finalRotationY * 0.1;
  }
  if (group.rotation.x  > 0.5 ) {

    group.rotation.x = 0.5
  }

  if (group.rotation.x  < -0.5 ) {

    group.rotation.x = -0.5
  }


  if(dragging_earth)update_last_info();


}


function hide_info(){
  if ($('#info').length) {
    document.getElementById("info").style.visibility="hidden"; 
  };
}

var last_object;
function update_last_info(){
  if(last_object)update_info(last_object);
}
function update_info(mesh){
  last_object=mesh;
 last_object=mesh;
  if ($('#info').length) {
    document.getElementById("info").style.visibility="visible";
  }
 //console.log();
 var pos=toScreenPosition(mesh,camera);
 document.getElementById("info_name").innerHTML =mesh.my_obj.name;
 document.getElementById("info").style.top=pos.y+offset_y-40+"px";
 document.getElementById("info").style.left=pos.x+offset_x-21+"px";
}


