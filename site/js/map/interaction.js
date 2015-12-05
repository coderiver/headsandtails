
var onCity;


var targetRotationX = 0;
var targetRotationOnMouseDownX = 0;

var targetRotationY = 0;
var targetRotationOnMouseDownY = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;

var mouseY = 0;
var mouseYOnMouseDown = 0;

var dragging_earth;

var finalRotationYdragg;


var  offset_y  ;
var  offset_x  ;


function addInteraction(){
  mouse=new Object();




  mouse.x = 0;
  mouse.y = 0;  



  document.getElementById("globeHolder").addEventListener( 'mousedown', onDocumentMouseDown, false );
  document.getElementById("globeHolder").addEventListener( 'touchstart', onDocumentTouchStart, false );
  document.getElementById("globeHolder").addEventListener( 'touchmove', onDocumentTouchMove, false );

  document.getElementById("globeHolder").addEventListener( 'mousemove', onMouseMove, false );

  document.addEventListener("click", function(){

    if( onCity){
      console.log(last_object.my_obj);
      alert(last_object.my_obj.name);


      check_the_ray();
    }
  });

  function onMouseMove( event ) {

    // console.log(event.clientX,event.clientY);

    var realPos=new Object();

    var bodyRect = document.body.getBoundingClientRect();
    var  elemRect = document.getElementById("globeHolder").getBoundingClientRect();

    offset_y   = elemRect.top - bodyRect.top;
    offset_x   = elemRect.left - bodyRect.left;

    realPos.x=event.clientX-offset_x;
    realPos.y=event.clientY-offset_y;
    mouse.x = ( realPos.x / window.globe_w ) * 2 - 1;
    mouse.y = - (realPos.y/ window.globe_h ) * 2 + 1;  
    // console.log(offset_x,offset_y);
    // console.log(mouse);
    check_the_ray();

  }




  function onDocumentMouseDown( event ) {

    event.preventDefault();
    if(active_objects.length>0) dragging_earth=true;

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    document.addEventListener( 'mouseup', onDocumentMouseUp, false );
    document.addEventListener( 'mouseout', onDocumentMouseOut, false );

    mouseXOnMouseDown = event.clientX - windowHalfX;
    targetRotationOnMouseDownX = targetRotationX;

    mouseYOnMouseDown = event.clientY - windowHalfY;
    targetRotationOnMouseDownY = targetRotationY;

  }

  function onDocumentMouseMove( event ) {

    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;

    targetRotationY = targetRotationOnMouseDownY + (mouseY - mouseYOnMouseDown) * 0.02;
    targetRotationX = targetRotationOnMouseDownX + (mouseX - mouseXOnMouseDown) * 0.02;

  }

  function onDocumentMouseUp( event ) {

    dragging_earth=false;
    hide_info();

    document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
    document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
    document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

  }

  function onDocumentMouseOut( event ) {

    document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
    document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
    document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

  }

  function onDocumentTouchStart( event ) {

    if ( event.touches.length == 1 ) {



      event.preventDefault();

      mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
      targetRotationOnMouseDownX = targetRotationX;

      mouseYOnMouseDown = event.touches[ 0 ].pageY - windowHalfY;
      targetRotationOnMouseDownY = targetRotationY;

    }

  }

  function onDocumentTouchMove( event ) {

    if ( event.touches.length == 1 ) {

      event.preventDefault();

      mouseX = event.touches[ 0 ].pageX - windowHalfX;
      targetRotationX = targetRotationOnMouseDownX + ( mouseX - mouseXOnMouseDown ) * 0.05;

      mouseY = event.touches[ 0 ].pageY - windowHalfY;
      targetRotationY = targetRotationOnMouseDownY + (mouseY - mouseYOnMouseDown) * 0.05;

    }

  }





  var active_objects=[];
  function check_the_ray(){

    raycaster.setFromCamera( mouse, camera );
    var intersects = raycaster.intersectObjects( group.children );

    var last_touch_objects=[];
    for ( var i = 0; i < intersects.length; i++ ) {
      // console.log('intersect',i,intersects[i].object.isGeoPoint);

      if(intersects[i].object.isGeoPoint&&i==0){
       onCity=true;
       intersects[ i ].object.material.color.set( 0xff0000 ,0.2);
       intersects[ i ].object.material .opacity = 0;
       active_objects.push(intersects[ i ].object);
       last_touch_objects.push(intersects[ i ].object);

     }

   }

   for ( var i = 0; i < active_objects.length; i++ ) {


    var  iamhere=false;
    for ( var j = 0; j < last_touch_objects.length; j++ ) {
      if(last_touch_objects[j]==active_objects[i])iamhere=true;

    }
    if(!iamhere){
      active_objects[i].material.color.set( 0xffffff );
      active_objects[i].material.opacity = 1;

    }else{
      update_info(active_objects[i]);
    }
  }
  active_objects=last_touch_objects;

  if(active_objects.length==0){
    hide_info();
    onCity=false;
  }


}





}