

function setupGlobe(){


  var visitedMap= THREE.ImageUtils.loadTexture( "images/ic_visited.png" );
  var  notVisitedMap= THREE.ImageUtils.loadTexture( "images/ic_not_visited.png" );

  var geo_points=[];



  var geometry   = new THREE.SphereGeometry(0.5, 64, 64);
  var material  = new THREE.MeshPhongMaterial();


  var displacementMap = THREE.ImageUtils.loadTexture( "images/Bump_MAP.jpg" );
  var earthMesh =  new THREE.Mesh(
    geometry,

    new THREE.MeshPhongMaterial({
      map: THREE.ImageUtils.loadTexture('images/DIFFUSE_map_1.jpg'),
      displacementMap: displacementMap,
      displacementScale: 0.01,
      displacementBias: - 0.004,
      bumpMap: displacementMap,
      bumpScale:  0.005,
      specularMap: THREE.ImageUtils.loadTexture('images/Earth-Spec-Map-2k.jpg'),
      specular:0x131313  })
    );

  group.add(earthMesh);
  $.getJSON(pathToData, function(json) {
    console.log(json); // this will show the info it in firebug console
    var geo_obj=json;
    // var geo_obj=JSON.parse(json);
    console.log("geo_obj",geo_obj.length);

    for (var i=0;i<geo_obj.length;i++){

     var center=add_geo_point(geo_obj[i],geo_obj[i].visited);
     geo_obj[i].center=center;
     if(i>0)  addSpline(geo_obj[i].lat, geo_obj[i].lon,geo_obj[i-1].lat, geo_obj[i-1].lon,geo_obj[i].visited);
   }
 });




  function add_geo_point(obj,visited) {
   var radius = 0.5;
   var phi = (obj.lat)*Math.PI/180;
   var theta = (obj.lon-180)*Math.PI/180;

   var size=0.01;
   var x = -(radius+size/2) * Math.cos(phi) * Math.cos(theta);
   var y = (radius+size/2) * Math.sin(phi);
   var z = (radius+size/2) * Math.cos(phi) * Math.sin(theta);


   var segments = 32;

   var map ;


   
   if(visited=="true"){
    console.log("this way",obj);


    visitedMap.anisotropy = 4;

    var geometry   =new THREE.BoxGeometry( marker_size, marker_size, 0.0001 )
    var material   = new THREE.MeshBasicMaterial( { map: visitedMap , transparent: true} );

    var mesh = new THREE.Mesh(geometry, material)

  }
  else {
    console.log("other way");
    
    
    notVisitedMap.anisotropy = 4;

    var geometry   =new THREE.BoxGeometry( marker_size, marker_size, 0.0001 )
    var material   = new THREE.MeshBasicMaterial( { map: notVisitedMap , transparent: true} );

    var mesh = new THREE.Mesh(geometry, material)

  }


  mesh.position.x =x;
  mesh.position.y = y;
  mesh.position.z = z;
  mesh.position.normalize();
  mesh.position.multiplyScalar(0.5 );

  mesh.lookAt(earthMesh.position);
  mesh.my_obj=obj;
  mesh.isGeoPoint=true;

  group.add( mesh );
  geo_points.push(mesh);


  return new THREE.Vector3(x,y,z);
}


function addSpline(lat1, lng1, lat2, lng2,visited){

  var point1=lat2vec(lat1, lng1);
  var point2=lat2vec(lat2, lng2);


var multip=0.997;
  point1.x*=multip;
  point1.y*=multip;
  point1.z*=multip;


  point2.x*=multip;
  point2.y*=multip;
  point2.z*=multip;

  var pointMid= midpoint(lat1, lng1, lat2, lng2);

  pointMid.x*=1.05;
  pointMid.y*=1.05;
  pointMid.z*=1.05;

  var point_dist=dist(point1.x,point1.y,point1.z,point2.x,point2.y,point2.z);

  var curve = new THREE.CatmullRomCurve3( [  point1,pointMid,point2  ] );
  curve.type = 'chordal';
  var geometry = new THREE.Geometry();
  geometry.vertices = curve.getPoints( 100 );


  var object = new THREE.LineSegments( geometry, new THREE.LineDashedMaterial( { color: 0xffffff, dashSize: 3, gapSize: 1, linewidth: 5 } ) );
  object.isSpline=true;

  console.log("point_dist",point_dist);
  if(point_dist<0.04)point_dist=0.04;
  var amount_of_points=Math.floor(1100*point_dist)
  var curve_points= curve.getPoints( amount_of_points );

  var step_counter=0;
  var pause_counter=0;
  var dashSize=5;
  if(visited=="true") var dashSize=40;
  var gapSize=5;
  if(visited=="true") var gapSize=0;



  var splineContainer= new THREE.Object3D();

  for (var i=0;i<curve_points.length;i++){
   var can_draw=true;
  //  if(i<curve_points.length/2){
  //   if(dist(point1.x,point1.y,point1.z,curve_points[i].x,curve_points[i].y,curve_points[i].z)<marker_size/4)can_draw=false;
  // }else{
  //   if(dist(point2.x,point2.y,point2.z,curve_points[i].x,curve_points[i].y,curve_points[i].z)<marker_size/4)can_draw=false;
  // }

  if(can_draw){
    if(step_counter<dashSize){

      // var geometry   = new THREE.SphereGeometry(0.0015, 32, 32);

      // var material  = new THREE.MeshPhongMaterial({ color: 0xffffff});
      // var dashMesh =  new THREE.Mesh(   geometry,   material );

      // splineContainer.add(dashMesh);
      // dashMesh.position=curve_points[i];
      // dashMesh.position.x =curve_points[i].x;
      // dashMesh.position.y =curve_points[i].y;
      // dashMesh.position.z =curve_points[i].z;



      var geometry = new THREE.CylinderGeometry( 0.0015, 0.0015, 0.0015, 8 );
      var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
      if(visited=="true") material= new THREE.MeshBasicMaterial( {color: 0xffffff} );
      var cylinder = new THREE.Mesh( geometry, material );
      // scene.add( cylinder );

      cylinder.position=curve_points[i];
      cylinder.position.x =curve_points[i].x;
      cylinder.position.y =curve_points[i].y;
      cylinder.position.z =curve_points[i].z;

      splineContainer.add(cylinder);



      step_counter++;
    } else{

      pause_counter++;
      if(pause_counter>gapSize){
        pause_counter=0;
        step_counter=0;
      }
    }
  }
}
// new THREE.Object3D(); 
group.add(splineContainer);


}



}