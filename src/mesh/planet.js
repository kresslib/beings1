//const TREE = import('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js');

export function createMeshPlanet(){
    const geometry = new THREE.IcosahedronGeometry(200, 16);
    const texture = new THREE.TextureLoader().load("../src/img/planet.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        combine: THREE.MultiplyOperation
    });
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
}


export function createMeshPlanetA(){
    const geometry = new THREE.IcosahedronGeometry(205, 16);
    const texture = new THREE.TextureLoader().load("../src/img/2k_neptune.jpeg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        combine: THREE.MultiplyOperation,
        transparent: true,
        opacity: 0.6
    });
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
}