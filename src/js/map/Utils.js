
function lat2vec(lat,lon) {
  var radius=0.5;
  var phi = (lat)*Math.PI/180;
  var theta = (lon-180)*Math.PI/180;

  var size=0.01;
  var x = -(radius+size/2) * Math.cos(phi) * Math.cos(theta);
  var y = (radius+size/2) * Math.sin(phi);
  var z = (radius+size/2) * Math.cos(phi) * Math.sin(theta);

  return new THREE.Vector3(x,y,z);
}

function dist(x0,y0,z0,x1,y1,z1){

  deltaX = x1 - x0;
  deltaY = y1 - y0;
  deltaZ = z1 - z0;

  distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);

  return distance;
}

function midpoint (lat1, lng1, lat2, lng2) {

  lat1= toRad(lat1);
  lng1= toRad(lng1);
  lat2= toRad(lat2);
  lng2= toRad(lng2);

  var dlng = lng2 - lng1;
  var Bx = Math.cos(lat2) * Math.cos(dlng);
  var By = Math.cos(lat2) * Math.sin(dlng);
  var lat3 = Math.atan2( Math.sin(lat1)+Math.sin(lat2),
    Math.sqrt((Math.cos(lat1)+Bx)*(Math.cos(lat1)+Bx) + By*By ));
  var lng3 = lng1 + Math.atan2(By, (Math.cos(lat1) + Bx));
  return lat2vec((lat3*180)/Math.PI , (lng3*180)/Math.PI);
}
function toRad(Value) {
  /** Converts numeric degrees to radians */
  return Value * Math.PI / 180;
}


function toScreenPosition(obj, camera)
{
  var vector = new THREE.Vector3();

  var widthHalf = 0.5*renderer.context.canvas.width;
  var heightHalf = 0.5*renderer.context.canvas.height;

  obj.updateMatrixWorld();
  vector.setFromMatrixPosition(obj.matrixWorld);
  vector.project(camera);

  vector.x = ( vector.x * widthHalf ) + widthHalf;
  vector.y = - ( vector.y * heightHalf ) + heightHalf;

  return { 
    x: vector.x,
    y: vector.y
  };

};