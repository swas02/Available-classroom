import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

const scene = new THREE.Scene();

//  ██████╗ █████╗ ███╗   ███╗███████╗██████╗  █████╗     ███████╗███████╗████████╗██╗   ██╗██████╗
// ██╔════╝██╔══██╗████╗ ████║██╔════╝██╔══██╗██╔══██╗    ██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗
// ██║     ███████║██╔████╔██║█████╗  ██████╔╝███████║    ███████╗█████╗     ██║   ██║   ██║██████╔╝
// ██║     ██╔══██║██║╚██╔╝██║██╔══╝  ██╔══██╗██╔══██║    ╚════██║██╔══╝     ██║   ██║   ██║██╔═══╝
// ╚██████╗██║  ██║██║ ╚═╝ ██║███████╗██║  ██║██║  ██║    ███████║███████╗   ██║   ╚██████╔╝██║
//  ╚═════╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝

const screenDim = {
  height: threeJScanvas.height,
  width: threeJScanvas.width,
};

const cameraSettings = {
  aspectRatio: screenDim.width / screenDim.height,
  width: 1000,
  near: 0,
  far: 1,
};

cameraSettings.height = cameraSettings.width / cameraSettings.aspectRatio;

const camera = new THREE.OrthographicCamera(
  -cameraSettings.width,
  cameraSettings.width,
  cameraSettings.height,
  -cameraSettings.height,
  cameraSettings.near,
  cameraSettings.far
);

camera.position.set(0, 0, 1);
camera.lookAt(0, 0, 0);

// ██╗     ██╗ ██████╗ ██╗  ██╗████████╗    ███████╗███████╗████████╗██╗   ██╗██████╗
// ██║     ██║██╔════╝ ██║  ██║╚══██╔══╝    ██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗
// ██║     ██║██║  ███╗███████║   ██║       ███████╗█████╗     ██║   ██║   ██║██████╔╝
// ██║     ██║██║   ██║██╔══██║   ██║       ╚════██║██╔══╝     ██║   ██║   ██║██╔═══╝
// ███████╗██║╚██████╔╝██║  ██║   ██║       ███████║███████╗   ██║   ╚██████╔╝██║
// ╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝       ╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝

// const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(ambientLight);
const light = new THREE.PointLight(0xff0000, 1, 100);
light.position.set(50, 50, 50);
scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 1);
scene.add(directionalLight);

// ██╗    ██╗███████╗██████╗     ██████╗ ███████╗███╗   ██╗██████╗ ███████╗██████╗ ███████╗██████╗
// ██║    ██║██╔════╝██╔══██╗    ██╔══██╗██╔════╝████╗  ██║██╔══██╗██╔════╝██╔══██╗██╔════╝██╔══██╗
// ██║ █╗ ██║█████╗  ██████╔╝    ██████╔╝█████╗  ██╔██╗ ██║██║  ██║█████╗  ██████╔╝█████╗  ██████╔╝
// ██║███╗██║██╔══╝  ██╔══██╗    ██╔══██╗██╔══╝  ██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗██╔══╝  ██╔══██╗
// ╚███╔███╔╝███████╗██████╔╝    ██║  ██║███████╗██║ ╚████║██████╔╝███████╗██║  ██║███████╗██║  ██║
//  ╚══╝╚══╝ ╚══════╝╚═════╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("threeJScanvas"),
  antialias: true,
});
renderer.setSize(screen.width, screen.height);
renderer.setClearColor(0x000000, 1);
renderer.render(scene, camera);

//  ██████╗ ██████╗ ██╗██████╗     ███████╗███████╗████████╗██╗   ██╗██████╗
// ██╔════╝ ██╔══██╗██║██╔══██╗    ██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗
// ██║  ███╗██████╔╝██║██║  ██║    ███████╗█████╗     ██║   ██║   ██║██████╔╝
// ██║   ██║██╔══██╗██║██║  ██║    ╚════██║██╔══╝     ██║   ██║   ██║██╔═══╝
// ╚██████╔╝██║  ██║██║██████╔╝    ███████║███████╗   ██║   ╚██████╔╝██║
//  ╚═════╝ ╚═╝  ╚═╝╚═╝╚═════╝     ╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝

const gridHelper = new THREE.GridHelper(100000, 500, 0x07eeb3, 0x07eeb3);
gridHelper.rotation.x = -Math.PI / 2;
// scene.add(gridHelper);

//  ██████╗ ██████╗ ██████╗ ██╗████████╗    ███████╗███████╗████████╗██╗   ██╗██████╗
// ██╔═══██╗██╔══██╗██╔══██╗██║╚══██╔══╝    ██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗
// ██║   ██║██████╔╝██████╔╝██║   ██║       ███████╗█████╗     ██║   ██║   ██║██████╔╝
// ██║   ██║██╔══██╗██╔══██╗██║   ██║       ╚════██║██╔══╝     ██║   ██║   ██║██╔═══╝
// ╚██████╔╝██║  ██║██████╔╝██║   ██║       ███████║███████╗   ██║   ╚██████╔╝██║
//  ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝   ╚═╝       ╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableRotate = false;
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.enablePan = true;
controls.mouseButtons = {
  RIGHT: THREE.MOUSE.PAN,
  MIDDLE: THREE.MOUSE.PAN,
  LEFT: THREE.MOUSE.PAN,
};
controls.minZoom = 0;
controls.maxZoom = 1000;

// ███████╗ ██████╗ ███╗   ██╗████████╗    ███████╗███████╗████████╗██╗   ██╗██████╗
// ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝    ██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗
// █████╗  ██║   ██║██╔██╗ ██║   ██║       ███████╗█████╗     ██║   ██║   ██║██████╔╝
// ██╔══╝  ██║   ██║██║╚██╗██║   ██║       ╚════██║██╔══╝     ██║   ██║   ██║██╔═══╝
// ██║     ╚██████╔╝██║ ╚████║   ██║       ███████║███████╗   ██║   ╚██████╔╝██║
// ╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝       ╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝

const fontLoader = new FontLoader();

function createText(text, position, width, color = 0x000000) {
  fontLoader.load(
    "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
    function (font) {
      const textOptions = {
        font: font,
        size: 20,
        depth: 0,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      };

      const textGeometry = new TextGeometry(text, textOptions);
      const textBoundingBox = new THREE.Box3().setFromObject(
        new THREE.Mesh(textGeometry)
      ); // Get the bounding box of the text
      const textWidth = textBoundingBox.max.x - textBoundingBox.min.x;
      textGeometry.center();

      // Scale the text geometry
      const textMaterial = new THREE.MeshPhongMaterial({
        color: color,
      });

      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(position.x, position.y, position.z);

      // Calculate the scale factor to adjust the width
      // const margin = width / 10;
      // const scaleFactor = (width - margin) / textWidth;
      // Apply the scaling to the text mesh
      // textMesh.scale.set(scaleFactor, scaleFactor, 1); // Only scale on x and y axes

      scene.add(textMesh);
    }
  );
}

// Example usage:
//   createText("Hello, Three.js!", { x: 0, y: 0, z: 0 }, 200);

// ████████╗ ██████╗  ██████╗ ██╗  ████████╗██╗██████╗
// ╚══██╔══╝██╔═══██╗██╔═══██╗██║  ╚══██╔══╝██║██╔══██╗
//    ██║   ██║   ██║██║   ██║██║     ██║   ██║██████╔╝
//    ██║   ██║   ██║██║   ██║██║     ██║   ██║██╔═══╝
//    ██║   ╚██████╔╝╚██████╔╝███████╗██║   ██║██║
//    ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝╚═╝   ╚═╝╚═╝

// Create a raycaster and mouse vector
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
// Modified addRectangle function
var geometriesData = [];

const tooltip = document.getElementById("tooltip"); // The tooltip element

function onMouseMove(event) {
  // Normalize mouse position to (-1, 1) range for both axes
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse.clone(), camera);

  var objects = raycaster.intersectObjects(scene.children);

  if (objects.length) {
    console.log(objects.length);
    const objectUuid = objects[0].object.uuid;

    // Check if the uuid is in geometriesData
    const found = geometriesData.find((rect) => rect.uuid === objectUuid);
    if (found) {
      tooltip.style.display = "block";
      tooltip.textContent = `Rectangle at (${found.position.x}, ${found.position.y}, ${found.position.z}), Width: ${found.width}, Height: ${found.height}`;
      tooltip.style.left = `${event.clientX + 10}px`; // 10px offset from the mouse
      tooltip.style.top = `${event.clientY + 10}px`; // 10px offset from the mouse
    }
  } else {
    // Hide the tooltip if no object is intersected
    tooltip.style.display = "none";
  }
}

// ██████╗ ██╗      █████╗ ███╗   ██╗
// ██╔══██╗██║     ██╔══██╗████╗  ██║
// ██████╔╝██║     ███████║██╔██╗ ██║
// ██╔═══╝ ██║     ██╔══██║██║╚██╗██║
// ██║     ███████╗██║  ██║██║ ╚████║
// ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝

function addRectangle(center, width, height, color = 0x00ff00, text) {
  if (text.length) createText(text, center, 100);
  let margin = 0.5;
  const geometry = new THREE.PlaneGeometry(width - margin, height - margin);
  const material = new THREE.MeshBasicMaterial({
    color: color,
    side: THREE.DoubleSide,
  });
  const rectangle = new THREE.Mesh(geometry, material);

  // Add custom userData to store additional information (optional)
  rectangle.userData = { type: "rectangle", info: "This is a rectangle" };

  rectangle.position.set(center.x, center.y, center.z);
  scene.add(rectangle);

  // Create a rectangle data object and add it to the array
  const rectangleData = {
    uuid: rectangle.uuid,
    position: { x: center.x, y: center.y, z: center.z },
    width: width,
    height: height,
    color: color,
  };

  geometriesData.push(rectangleData);

  return rectangle;
}

// ███████╗██╗███╗   ██╗██████╗     ██████╗  ██████╗  ██████╗ ███╗   ███╗     ██████╗ ███╗   ██╗    ███╗   ███╗ █████╗ ██████╗
// ██╔════╝██║████╗  ██║██╔══██╗    ██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║    ██╔═══██╗████╗  ██║    ████╗ ████║██╔══██╗██╔══██╗
// █████╗  ██║██╔██╗ ██║██║  ██║    ██████╔╝██║   ██║██║   ██║██╔████╔██║    ██║   ██║██╔██╗ ██║    ██╔████╔██║███████║██████╔╝
// ██╔══╝  ██║██║╚██╗██║██║  ██║    ██╔══██╗██║   ██║██║   ██║██║╚██╔╝██║    ██║   ██║██║╚██╗██║    ██║╚██╔╝██║██╔══██║██╔═══╝
// ██║     ██║██║ ╚████║██████╔╝    ██║  ██║╚██████╔╝╚██████╔╝██║ ╚═╝ ██║    ╚██████╔╝██║ ╚████║    ██║ ╚═╝ ██║██║  ██║██║
// ╚═╝     ╚═╝╚═╝  ╚═══╝╚═════╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═╝     ╚═════╝ ╚═╝  ╚═══╝    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝

function softBlinkRect(
  name,
  targetColor = 0xffff00,
  duration = 2000,
  cycles = 3
) {
  const uuid = name.uuid;
  const rectData = geometriesData.find((data) => data.uuid === uuid);
  if (rectData) {
    const rect = scene.getObjectByProperty("uuid", uuid); // Get the mesh by uuid
    if (rect) {
      const originalColor = rectData.color;
      const colorStart = new THREE.Color(originalColor);
      const colorEnd = new THREE.Color(targetColor);

      // Set material properties for smooth blending
      rect.material.transparent = true;
      rect.material.opacity = 1;

      let elapsedTime = 0;
      let cycleCount = 0;

      // Function to animate the color fade
      const animateColorFade = () => {
        elapsedTime += 16; // approx. 60fps
        let progress = Math.sin((elapsedTime / duration) * Math.PI); // smooth sinusoidal progress

        // Blend the colors based on the progress
        rect.material.color.lerpColors(colorStart, colorEnd, progress);

        if (elapsedTime < duration) {
          requestAnimationFrame(animateColorFade);
        } else {
          elapsedTime = 0; // Reset elapsed time for next cycle
          cycleCount++;

          if (cycleCount < cycles) {
            animateColorFade(); // Continue the animation for the next cycle
          } else {
            rect.material.transparent = false; // Stop transparency after the final cycle
            rect.material.color.set(originalColor); // Reset the color to original
          }
        }
      };

      // Start the soft blinking animation
      animateColorFade();
    }
  } else {
    console.log("Rectangle not found!");
  }
}
window.softBlinkRect = softBlinkRect;




// ██████╗ ██████╗  █████╗ ██╗    ██╗     ██████╗ ███████╗ ██████╗ ███╗   ███╗███████╗████████╗██████╗ ██╗███████╗███████╗
// ██╔══██╗██╔══██╗██╔══██╗██║    ██║    ██╔════╝ ██╔════╝██╔═══██╗████╗ ████║██╔════╝╚══██╔══╝██╔══██╗██║██╔════╝██╔════╝
// ██║  ██║██████╔╝███████║██║ █╗ ██║    ██║  ███╗█████╗  ██║   ██║██╔████╔██║█████╗     ██║   ██████╔╝██║█████╗  ███████╗
// ██║  ██║██╔══██╗██╔══██║██║███╗██║    ██║   ██║██╔══╝  ██║   ██║██║╚██╔╝██║██╔══╝     ██║   ██╔══██╗██║██╔══╝  ╚════██║
// ██████╔╝██║  ██║██║  ██║╚███╔███╔╝    ╚██████╔╝███████╗╚██████╔╝██║ ╚═╝ ██║███████╗   ██║   ██║  ██║██║███████╗███████║
// ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚══╝╚══╝      ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝
                                                                                                                       
const colorCode = { Road: 0xbababa, lab: 0xef476f, classRoom: 0x00b4d8 };

const AM_1_1 = addRectangle(
  { x: 500, y: 0, z: 0 },
  200,
  100,
  colorCode.classRoom,
  "AM.1.1"
);
window.AM_1_1 = AM_1_1;

const AM_0_2 = addRectangle(
  { x: 0, y: 0, z: 0 },
  200,
  100,
  colorCode.classRoom,
  "AM.0.2"
);
window.AM_0_2 = AM_0_2;

const AM_1_2 = addRectangle(
  { x: -200, y: 0, z: 0 },
  200,
  100,
  colorCode.classRoom,
  "AM.1.2"
);
window.AM_1_2 = AM_1_2;

const rect4 = addRectangle(
  { x: 100, y: 100, z: 0 },
  800,
  100,
  colorCode.Road,
  "Parking"
);
const lab = addRectangle(
  { x: 250, y: 0, z: 0 },
  300,
  100,
  colorCode.lab,
  "Lab 1"
);

// Make sure to call onMouseMove for mouse movement detection
window.addEventListener("mousemove", onMouseMove, false);

//  █████╗ ███╗   ██╗██╗███╗   ███╗ █████╗ ████████╗██╗ ██████╗ ███╗   ██╗    ██╗      ██████╗  ██████╗ ██████╗
// ██╔══██╗████╗  ██║██║████╗ ████║██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║    ██║     ██╔═══██╗██╔═══██╗██╔══██╗
// ███████║██╔██╗ ██║██║██╔████╔██║███████║   ██║   ██║██║   ██║██╔██╗ ██║    ██║     ██║   ██║██║   ██║██████╔╝
// ██╔══██║██║╚██╗██║██║██║╚██╔╝██║██╔══██║   ██║   ██║██║   ██║██║╚██╗██║    ██║     ██║   ██║██║   ██║██╔═══╝
// ██║  ██║██║ ╚████║██║██║ ╚═╝ ██║██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║    ███████╗╚██████╔╝╚██████╔╝██║
// ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// ██████╗ ███████╗███████╗██╗███████╗███████╗
// ██╔══██╗██╔════╝██╔════╝██║╚══███╔╝██╔════╝
// ██████╔╝█████╗  ███████╗██║  ███╔╝ █████╗
// ██╔══██╗██╔══╝  ╚════██║██║ ███╔╝  ██╔══╝
// ██║  ██║███████╗███████║██║███████╗███████╗
// ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚══════╝╚══════╝

// window.addEventListener("resize", function () {
//   const newWidth = screenDim.width;
//   const newHeight = screenDim.height;
//   camera.aspect = newWidth / newHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(newWidth, newHeight);
// });
