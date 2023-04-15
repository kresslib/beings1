export function createVing() {
    const geometry = new THREE.BoxGeometry(5, 3, 20);
    const material = new THREE.MeshBasicMaterial({color: 0xc7c9ca});
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
}

export function createVingShooting() {
    const arrayMeshLaserRShooting = [];
    for (let i = 0; i < 10; i++) {
        const laserRShooting = new THREE.BoxGeometry(0.3, 0.3, 18);
        const materialLaserRShooting = new THREE.MeshBasicMaterial(
            {
                color: 0xff0000,
                transparent: true,
                opacity: 0.6
            });
        const meshLaserRShooting = new THREE.Mesh(laserRShooting, materialLaserRShooting);


        //meshLaserRShooting.position.set(-100, 0, -300 - (i * 50));
        //meshLaserRShooting.rotation.x = 0.5 * Math.PI;
        //meshLaserRShooting.applyQuaternion(meshLaserRShooting.quaternion);
        //meshLaserRShooting.rotation.y += -0.9;
        //meshLaserRShooting.rotation.z += -0.1;
        //scene.add(meshLaserRShooting);
        arrayMeshLaserRShooting.push(meshLaserRShooting)
    }
    return arrayMeshLaserRShooting;
}

export function moveVingShooting(camera, vingMesh, arrayMeshLaserRShooting) {
    //ving 0 //-100, 0, -250
    let i = 0;
    for (const shooting of arrayMeshLaserRShooting) {


        const worldPosition = new THREE.Vector3();
        worldPosition.setFromMatrixPosition(vingMesh.matrixWorld);

        // Получаем направление взгляда первого объекта
        const lookAt = new THREE.Vector3();
        lookAt.setFromMatrixPosition(vingMesh.matrixWorld);
        //lookAt.sub(camera.position);
        //lookAt.normalize();

        //
        // // Задаем ось
        // var axis = new THREE.Vector3(1, 1, 1);
        // var angle = Math.PI / 2; // Угол поворота в радианах (90 градусов)
        // lookAt.applyAxisAngle(axis, angle); // Поворачиваем вектор на 90 градусов по оси z

        // Поворачиваем второй объект в направлении первого объекта
        shooting.lookAt(lookAt);
        lookAt.setFromMatrixPosition(shooting.matrixWorld);


        // Размещаем второй объект перед первым объектом с небольшим отступом
        const offset = new THREE.Vector3(0, 0, -20 - (i * 30));
        offset.applyQuaternion(vingMesh.quaternion);
        // Поверните второй объект на 90 градусов по оси z в локальных координатах
        //shooting.rotateX(Math.PI / 2);

        // Переведите повернутый второй объект в мировые координаты с помощью матрицы первого объекта
        //shooting.applyMatrix4(vingMesh.matrixWorld);

        shooting.position.copy(worldPosition).add(offset);

        //shooting.rotation.z = 0.5 * Math.PI;
        // var localAxis = new THREE.Vector3(1, 1, 0); // Y-axis
        // var angle = 0.5 * Math.PI; // 90 degrees
        // shooting.rotateOnAxis(localAxis, angle);
        //
        // // Convert the camera rotation to global coordinates
        // var quaternion = new THREE.Quaternion();
        // shooting.getWorldQuaternion(quaternion);
        // shooting.setRotationFromQuaternion(quaternion);
        i++;
        // shooting.position.set(
        //     ving.position.x, ving.position.y, ving.position.z - 50 - (i * 50));
        // // Rotate the camera in local coordinates
        // //const localAxisX = new THREE.Vector3(1, 0, 0); // Y-axis
        // //shooting.rotateOnAxis(localAxisX, ving.rotation.x);
        // //const localAxisY = new THREE.Vector3(0, 1, 0); // Y-axis
        // //shooting.rotateOnAxis(localAxisY, ving.rotation.y);
        // const localAxisZ = new THREE.Vector3(0, 0, 1); // Y-axis
        // shooting.rotateOnAxis(localAxisZ, ving.rotation.y)
        //
        // const quaternion = new THREE.Quaternion();
        // shooting.getWorldQuaternion(quaternion);
        // shooting.setRotationFromQuaternion(quaternion);
        // i++;
        //shooting.rotation.x = 0.5 * Math.PI + ving.rotation;
    }
}