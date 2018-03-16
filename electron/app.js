
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshNormalMaterial({
  light: true,
});

var light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);
var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);


function createCell(sizeMap = 11) {
  var cells = [];
  for (let x = -5; x < sizeMap - 1; x++) {
    for (let y = -5; y < sizeMap - 1; y++) {
      var cube = new THREE.Mesh(geometry, material);
      cube.position.set(x, y, 0);
      cells.push(cube);
    }
  }
  return cells;
};

var cells = createCell()

cells.forEach(cell => scene.add(cell));

camera.position.z = 20;
camera.position.y = 5; 
function growCell(cell) {
  cell.scale.z += .01;
  cell.translateZ(.01/2);
  return cell
}

scene.rotation.x = 30

function animate() {
  requestAnimationFrame( animate );
  scene.rotation.z += 0.01;
  cells[0] = growCell(cells[0]);
  renderer.render(scene, camera);
}

animate()
