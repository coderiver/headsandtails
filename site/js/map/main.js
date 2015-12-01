
var pathToData="js/lib/data/geoData.json";

window.rotating;
var marker_size=0.02;
var scene,camera,renderer,group,raycaster,_w,_h,mouse,stats;



window.addEventListener("load", function () {

  hide_info();
  window.addEventListener( 'resize', onWindowResize, false );


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

  _w=window.innerWidth;
  _h= window.innerHeight;
  var aspect = _w/ _h;
  scene = new THREE.Scene(); 
  camera  = new THREE.PerspectiveCamera(45,_w /_h, 0.01, 1000 );
  camera.position.z = 1.5;
  renderer = new THREE.WebGLRenderer({ antialias: true } ); 
  renderer.setClearColor(new THREE.Color(0x76c6e0, 1.0));
  renderer.setSize( _w, _h ); 
  document.getElementById("globeHolder").appendChild( renderer.domElement );  

  group = new THREE.Object3D(); 
  scene.add(group);
  group.position.x=0.6;
  group.position.y=0.12;
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


function onWindowResize() {

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

   group.position.x=0.6/(1920/1080/(windowHalfX/windowHalfY));

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}




function update_drag_rotation(){

  group.rotation.y += ( targetRotationX*0.5 - group.rotation.y ) * 0.1;

  finalRotationY = (targetRotationY*0.5 - group.rotation.x); 

  if (group.rotation.x  <= 1 && group.rotation.x >= -1 ) {

    group.rotation.x += finalRotationY * 0.1;
  }
  if (group.rotation.x  > 1 ) {

    group.rotation.x = 1
  }

  if (group.rotation.x  < -1 ) {

    group.rotation.x = -1
  }


  if(dragging_earth)update_last_info();


}


function hide_info(){
 document.getElementById("info").style.visibility="hidden"; 
}

var last_object;
function update_last_info(){
  if(last_object)update_info(last_object);
}
function update_info(mesh){
  last_object=mesh;
  document.getElementById("info").style.visibility="visible";
 //console.log();
 var pos=toScreenPosition(mesh,camera);
 document.getElementById("info_name").innerHTML =mesh.my_obj.name;
 document.getElementById("info").style.top=pos.y-40+"px";
 document.getElementById("info").style.left=pos.x-21+"px";
}