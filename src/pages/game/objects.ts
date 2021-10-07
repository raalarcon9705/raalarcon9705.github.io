import * as THREE from 'three';

export class Rabbit {
  s;
  status: string;
  runningCycle: number;
  mesh: THREE.Group;
  body: THREE.Group;
  torso: THREE.Mesh;
  pants: THREE.Mesh;
  tail: THREE.Mesh;
  head: THREE.Mesh;
  cheekR: THREE.Mesh;
  cheekL: THREE.Mesh;
  nose: THREE.Mesh;
  mouth: THREE.Mesh;
  pawFR: THREE.Mesh;
  pawFL: THREE.Mesh;
  pawBR: THREE.Mesh;
  pawBL: THREE.Mesh;
  earL: THREE.Mesh;
  earR: THREE.Mesh;
  eyeL: THREE.Mesh;
  eyeR: THREE.Mesh;
  iris: THREE.Mesh;

  constructor() {
    this.build();
  }

  private build() {
    this.status = 'running';
    this.runningCycle = 0;
    this.mesh = new THREE.Group();
    this.body = new THREE.Group();
    this.mesh.add(this.body);

    var torsoGeom = new THREE.BoxGeometry(7, 7, 10, 1);

    this.torso = new THREE.Mesh(torsoGeom, brownMat);
    this.torso.position.z = 0;
    this.torso.position.y = 7;
    this.torso.castShadow = true;
    this.body.add(this.torso);

    var pantsGeom = new THREE.BoxGeometry(9, 9, 5, 1);
    this.pants = new THREE.Mesh(pantsGeom, whiteMat);
    this.pants.position.z = -3;
    this.pants.position.y = 0;
    this.pants.castShadow = true;
    this.torso.add(this.pants);

    var tailGeom = new THREE.BoxGeometry(3, 3, 3, 1);
    tailGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0, -2));
    this.tail = new THREE.Mesh(tailGeom, lightBrownMat);
    this.tail.position.z = -4;
    this.tail.position.y = 5;
    this.tail.castShadow = true;
    this.torso.add(this.tail);

    this.torso.rotation.x = -Math.PI / 8;

    var headGeom = new THREE.BoxGeometry(10, 10, 13, 1);

    headGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0, 7.5));
    this.head = new THREE.Mesh(headGeom, brownMat);
    this.head.position.z = 2;
    this.head.position.y = 11;
    this.head.castShadow = true;
    this.body.add(this.head);

    var cheekGeom = new THREE.BoxGeometry(1, 4, 4, 1);
    this.cheekR = new THREE.Mesh(cheekGeom, pinkMat);
    this.cheekR.position.x = -5;
    this.cheekR.position.z = 7;
    this.cheekR.position.y = -2.5;
    this.cheekR.castShadow = true;
    this.head.add(this.cheekR);

    this.cheekL = this.cheekR.clone();
    this.cheekL.position.x = -this.cheekR.position.x;
    this.head.add(this.cheekL);

    var noseGeom = new THREE.BoxGeometry(6, 6, 3, 1);
    this.nose = new THREE.Mesh(noseGeom, lightBrownMat);
    this.nose.position.z = 13.5;
    this.nose.position.y = 2.6;
    this.nose.castShadow = true;
    this.head.add(this.nose);

    var mouthGeom = new THREE.BoxGeometry(4, 2, 4, 1);
    mouthGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0, 3));
    mouthGeom.applyMatrix4(new THREE.Matrix4().makeRotationX(Math.PI / 12));
    this.mouth = new THREE.Mesh(mouthGeom, brownMat);
    this.mouth.position.z = 8;
    this.mouth.position.y = -4;
    this.mouth.castShadow = true;
    this.head.add(this.mouth);

    var pawFGeom = new THREE.BoxGeometry(3, 3, 3, 1);
    this.pawFR = new THREE.Mesh(pawFGeom, lightBrownMat);
    this.pawFR.position.x = -2;
    this.pawFR.position.z = 6;
    this.pawFR.position.y = 1.5;
    this.pawFR.castShadow = true;
    this.body.add(this.pawFR);

    this.pawFL = this.pawFR.clone();
    this.pawFL.position.x = -this.pawFR.position.x;
    this.pawFL.castShadow = true;
    this.body.add(this.pawFL);

    var pawBGeom = new THREE.BoxGeometry(3, 3, 6, 1);
    this.pawBL = new THREE.Mesh(pawBGeom, lightBrownMat);
    this.pawBL.position.y = 1.5;
    this.pawBL.position.z = 0;
    this.pawBL.position.x = 5;
    this.pawBL.castShadow = true;
    this.body.add(this.pawBL);

    this.pawBR = this.pawBL.clone();
    this.pawBR.position.x = -this.pawBL.position.x;
    this.pawBR.castShadow = true;
    this.body.add(this.pawBR);

    var earGeom = new THREE.BoxGeometry(7, 18, 2, 1);
    // earGeom.vertices[6].x += 2;
    // earGeom.vertices[6].z += 0.5;

    // earGeom.vertices[7].x += 2;
    // earGeom.vertices[7].z -= 0.5;

    // earGeom.vertices[2].x -= 2;
    // earGeom.vertices[2].z -= 0.5;

    // earGeom.vertices[3].x -= 2;
    // earGeom.vertices[3].z += 0.5;
    earGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 9, 0));

    this.earL = new THREE.Mesh(earGeom, brownMat);
    this.earL.position.x = 2;
    this.earL.position.z = 2.5;
    this.earL.position.y = 5;
    this.earL.rotation.z = -Math.PI / 12;
    this.earL.castShadow = true;
    this.head.add(this.earL);

    this.earR = this.earL.clone();
    this.earR.position.x = -this.earL.position.x;
    this.earR.rotation.z = -this.earL.rotation.z;
    this.earR.castShadow = true;
    this.head.add(this.earR);

    var eyeGeom = new THREE.BoxGeometry(2, 4, 4);

    this.eyeL = new THREE.Mesh(eyeGeom, whiteMat);
    this.eyeL.position.x = 5;
    this.eyeL.position.z = 5.5;
    this.eyeL.position.y = 2.9;
    this.eyeL.castShadow = true;
    this.head.add(this.eyeL);

    var irisGeom = new THREE.BoxGeometry(0.6, 2, 2);

    this.iris = new THREE.Mesh(irisGeom, blackMat);
    this.iris.position.x = 1.2;
    this.iris.position.y = 1;
    this.iris.position.z = 1;
    this.eyeL.add(this.iris);

    this.eyeR = this.eyeL.clone();
    this.eyeR.children[0].position.x = -this.iris.position.x;

    this.eyeR.position.x = -this.eyeL.position.x;
    this.head.add(this.eyeR);

    this.body.traverse(function (object) {
      if (object instanceof THREE.Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }

  nod() {
    var _this = this;
    var sp = .5 + Math.random();

    // HEAD
    var tHeadRotY = -Math.PI / 6 + Math.random() * Math.PI / 3;
    TweenMax.to(this.head.rotation, sp, { y: tHeadRotY, ease: Power4.easeInOut, onComplete: function () { _this.nod() } });

    // EARS
    var tEarLRotX = Math.PI / 4 + Math.random() * Math.PI / 6;
    var tEarRRotX = Math.PI / 4 + Math.random() * Math.PI / 6;

    TweenMax.to(this.earL.rotation, sp, { x: tEarLRotX, ease: Power4.easeInOut });
    TweenMax.to(this.earR.rotation, sp, { x: tEarRRotX, ease: Power4.easeInOut });


    // PAWS BACK LEFT

    var tPawBLRot = Math.random() * Math.PI / 2;
    var tPawBLY = -4 + Math.random() * 8;

    TweenMax.to(this.pawBL.rotation, sp / 2, { x: tPawBLRot, ease: Power1.easeInOut, yoyo: true, repeat: 2 });
    TweenMax.to(this.pawBL.position, sp / 2, { y: tPawBLY, ease: Power1.easeInOut, yoyo: true, repeat: 2 });


    // PAWS BACK RIGHT

    var tPawBRRot = Math.random() * Math.PI / 2;
    var tPawBRY = -4 + Math.random() * 8;
    TweenMax.to(this.pawBR.rotation, sp / 2, { x: tPawBRRot, ease: Power1.easeInOut, yoyo: true, repeat: 2 });
    TweenMax.to(this.pawBR.position, sp / 2, { y: tPawBRY, ease: Power1.easeInOut, yoyo: true, repeat: 2 });

    // PAWS FRONT LEFT

    var tPawFLRot = Math.random() * Math.PI / 2;
    var tPawFLY = -4 + Math.random() * 8;

    TweenMax.to(this.pawFL.rotation, sp / 2, { x: tPawFLRot, ease: Power1.easeInOut, yoyo: true, repeat: 2 });

    TweenMax.to(this.pawFL.position, sp / 2, { y: tPawFLY, ease: Power1.easeInOut, yoyo: true, repeat: 2 });

    // PAWS FRONT RIGHT

    var tPawFRRot = Math.random() * Math.PI / 2;
    var tPawFRY = -4 + Math.random() * 8;

    TweenMax.to(this.pawFR.rotation, sp / 2, { x: tPawFRRot, ease: Power1.easeInOut, yoyo: true, repeat: 2 });

    TweenMax.to(this.pawFR.position, sp / 2, { y: tPawFRY, ease: Power1.easeInOut, yoyo: true, repeat: 2 });

    // MOUTH
    var tMouthRot = Math.random() * Math.PI / 8;
    TweenMax.to(this.mouth.rotation, sp, { x: tMouthRot, ease: Power1.easeInOut });
    // IRIS
    var tIrisY = -1 + Math.random() * 2;
    var tIrisZ = -1 + Math.random() * 2;
    var iris1 = this.iris;
    var iris2 = this.eyeR.children[0];
    TweenMax.to([iris1.position, iris2.position], sp, { y: tIrisY, z: tIrisZ, ease: Power1.easeInOut });

    //EYES
    if (Math.random() > .2) TweenMax.to([this.eyeR.scale, this.eyeL.scale], sp / 8, { y: 0, ease: Power1.easeInOut, yoyo: true, repeat: 1 });

  }
}
