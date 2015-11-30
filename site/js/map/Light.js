


function addLight(){

 var light_m  = new THREE.DirectionalLight( 0xdfdfdf, 0.4)


 light_m.position.set(  -0.8708482827604527,  6.162400168407747, 5.972050161833489);
 light_m.target.position.set( 0, 0, 0 );
 scene.add( light_m );


 var light_k  = new THREE.DirectionalLight( 0xdfdfdf, 0.4);
 light_k.position.set( 0.15905494115968608,  6.162400168407747, 6.082723542139604);
 light_k.target.position.set( 0, 0, 0 );
 scene.add( light_k );

 var light = new THREE.PointLight( new THREE.Color("rgb(255,255,255)"), 0.1);
 var light2 = new THREE.PointLight( new THREE.Color("rgb(255,255,255)"), 0.1);
 light.position.set( 0, -100, 1000 );
 light2.position.set( 50, 50, 1000 );

 var spotLight = new THREE.SpotLight( 0xf6ce48, 0.5 );
 spotLight.position.set(  17090.830840971503, 65302.61200581861, 241362.74021974122 );
 spotLight.color.setHSL( 0.6, 1, 1 );
 spotLight.position.multiplyScalar( 500 );
 spotLight.castShadow = true;
 spotLight.shadowCameraVisible = true;
 spotLight.shadowMapWidth = 2048;
 spotLight.shadowMapHeight = 2048;
 spotLight.shadowCameraNear = 200;
 spotLight.shadowCameraFar = 1500;
 spotLight.shadowCameraFov = 40;
 spotLight.shadowBias = -0.005;
 spotLight.shadowDarkness = 0.15;
 scene.add( spotLight );
 renderer.shadowMap.enabled = true;
 renderer.shadowMap.cullFace = THREE.CullFaceBack;
 renderer.gammaInput = true;
 renderer.gammaOutput = true;


 



renderer.shadowMap.enabled = true;
renderer.shadowMap.cullFace = THREE.CullFaceBack;

renderer.gammaInput = true;
renderer.gammaOutput = true;




}