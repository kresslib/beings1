export function createMeshSpace(){
    const geometry = new THREE.IcosahedronGeometry(1000, 1);
    geometry.scale(-1, 1, 1); // flip the geometry to the inside
    const texture = new THREE.TextureLoader().load("../src/img/starrysky5.png");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        combine: THREE.MultiplyOperation
    });
    material.repeat = true;
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
}