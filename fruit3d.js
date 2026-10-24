/**
 * FRUIT 3D ENGINE (Three.js Powered)
 * Menghasilkan model 3D buah interaktif (Rotasi, Zoom, Belah / Cross-Section, PBR Lighting & Partikel Segar)
 */

class Fruit3DEngine {
  constructor() {
    this.heroCanvas = null;
    this.heroRenderer = null;
    this.heroScene = null;
    this.heroCamera = null;
    this.heroFruitGroup = null;
    this.heroAnimationId = null;

    // Modal / Inspector 3D Viewer
    this.modalCanvas = null;
    this.modalRenderer = null;
    this.modalScene = null;
    this.modalCamera = null;
    this.modalControls = null;
    this.modalFruitMesh = null;
    this.modalAnimationId = null;
    this.currentFruitId = 'jeruk';
    this.isSliced = false;
    this.autoRotate = true;

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  }

  // Inisialisasi Hero Background / Floating 3D Scene
  initHeroScene(canvasElement) {
    if (!canvasElement) return;
    this.heroCanvas = canvasElement;

    const width = canvasElement.clientWidth || 400;
    const height = canvasElement.clientHeight || 400;

    this.heroScene = new THREE.Scene();
    this.heroCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.heroCamera.position.set(0, 0, 7);

    this.heroRenderer = new THREE.WebGLRenderer({
      canvas: canvasElement,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.heroRenderer.setSize(width, height);
    this.heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.heroRenderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.heroRenderer.toneMappingExposure = 1.2;

    // Pencahayaan Segar (Studio Fruit Lighting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    this.heroScene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfff5e6, 2.0);
    dirLight1.position.set(5, 8, 5);
    this.heroScene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x6ee7b7, 0.8);
    dirLight2.position.set(-6, -4, 4);
    this.heroScene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xff7a00, 2.5, 12);
    pointLight.position.set(2, 3, 3);
    this.heroScene.add(pointLight);

    // Group Buah Mengambang
    this.heroFruitGroup = new THREE.Group();
    this.heroScene.add(this.heroFruitGroup);

    // Buah Utama Hero: Jeruk Sunkist Juicy 3D
    const mainOrange = this.createProceduralFruit('jeruk', false);
    mainOrange.scale.set(1.4, 1.4, 1.4);
    this.heroFruitGroup.add(mainOrange);

    // Buah Pengiring 1: Apel Merah
    const companionApple = this.createProceduralFruit('apel', false);
    companionApple.position.set(-2.5, 1.4, -1);
    companionApple.scale.set(0.9, 0.9, 0.9);
    companionApple.rotation.set(0.3, 0.4, 0.2);
    this.heroFruitGroup.add(companionApple);

    // Buah Pengiring 2: Irisan Semangka Segar
    const companionWatermelon = this.createProceduralFruit('semangka', true);
    companionWatermelon.position.set(2.4, -1.2, -0.5);
    companionWatermelon.scale.set(1.1, 1.1, 1.1);
    companionWatermelon.rotation.set(-0.3, 0.6, -0.4);
    this.heroFruitGroup.add(companionWatermelon);

    // Partikel Gelembung / Tetes Air Segar (Dew Drops)
    const particleGeo = new THREE.SphereGeometry(0.04, 8, 8);
    const particleMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.9,
      opacity: 0.85,
      transparent: true,
      roughness: 0.1,
      ior: 1.33
    });
    this.particles = new THREE.Group();
    for (let i = 0; i < 40; i++) {
      const p = new THREE.Mesh(particleGeo, particleMat);
      p.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4
      );
      p.userData = {
        speedY: 0.003 + Math.random() * 0.008,
        origY: p.position.y
      };
      this.particles.add(p);
    }
    this.heroScene.add(this.particles);

    // Mouse Listeners
    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      this.mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    });

    window.addEventListener('resize', () => this.onHeroResize());

    this.animateHero();
  }

  onHeroResize() {
    if (!this.heroCanvas || !this.heroRenderer || !this.heroCamera) return;
    const width = this.heroCanvas.clientWidth;
    const height = this.heroCanvas.clientHeight;
    this.heroCamera.aspect = width / height;
    this.heroCamera.updateProjectionMatrix();
    this.heroRenderer.setSize(width, height);
  }

  animateHero() {
    this.heroAnimationId = requestAnimationFrame(() => this.animateHero());

    // Lerp smooth mouse reaction
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    if (this.heroFruitGroup) {
      this.heroFruitGroup.rotation.y += 0.008;
      this.heroFruitGroup.rotation.x = this.mouse.y * 0.4;
      this.heroFruitGroup.rotation.z = -this.mouse.x * 0.2;

      // Floating wave animation
      const time = performance.now() * 0.0015;
      this.heroFruitGroup.position.y = Math.sin(time) * 0.15;
    }

    if (this.particles) {
      this.particles.children.forEach((p) => {
        p.position.y += p.userData.speedY;
        if (p.position.y > 3) p.position.y = -3;
      });
      this.particles.rotation.y += 0.002;
    }

    this.heroRenderer.render(this.heroScene, this.heroCamera);
  }

  // Inisialisasi 3D Fruit Inspector Modal
  initModalViewer(canvasElement, fruitId = 'jeruk') {
    if (!canvasElement) return;
    this.modalCanvas = canvasElement;
    this.currentFruitId = fruitId;
    this.isSliced = false;

    const width = canvasElement.clientWidth || 360;
    const height = canvasElement.clientHeight || 360;

    this.modalScene = new THREE.Scene();
    this.modalCamera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    this.modalCamera.position.set(0, 0, 5.5);

    this.modalRenderer = new THREE.WebGLRenderer({
      canvas: canvasElement,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.modalRenderer.setSize(width, height);
    this.modalRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.modalRenderer.toneMapping = THREE.ACESFilmicToneMapping;

    // OrbitControls jika tersedia di Three.js
    if (typeof THREE.OrbitControls !== 'undefined') {
      this.modalControls = new THREE.OrbitControls(this.modalCamera, this.modalCanvas);
      this.modalControls.enableDamping = true;
      this.modalControls.dampingFactor = 0.05;
      this.modalControls.maxDistance = 8;
      this.modalControls.minDistance = 2.5;
      this.modalControls.enablePan = false;
    }

    // Modal Lighting
    const amb = new THREE.AmbientLight(0xffffff, 1.2);
    this.modalScene.add(amb);

    const dir1 = new THREE.DirectionalLight(0xfff8ed, 2.4);
    dir1.position.set(4, 6, 4);
    this.modalScene.add(dir1);

    const dir2 = new THREE.DirectionalLight(0x80d8ff, 1.2);
    dir2.position.set(-4, -3, 2);
    this.modalScene.add(dir2);

    this.loadFruitInModal(fruitId, this.isSliced);

    window.addEventListener('resize', () => this.onModalResize());

    this.animateModal();
  }

  onModalResize() {
    if (!this.modalCanvas || !this.modalRenderer || !this.modalCamera) return;
    const width = this.modalCanvas.clientWidth;
    const height = this.modalCanvas.clientHeight;
    this.modalCamera.aspect = width / height;
    this.modalCamera.updateProjectionMatrix();
    this.modalRenderer.setSize(width, height);
  }

  loadFruitInModal(fruitId, sliced = false) {
    this.currentFruitId = fruitId;
    this.isSliced = sliced;

    if (this.modalFruitMesh) {
      this.modalScene.remove(this.modalFruitMesh);
      this.modalFruitMesh = null;
    }

    this.modalFruitMesh = this.createProceduralFruit(fruitId, sliced);
    this.modalFruitMesh.scale.set(1.4, 1.4, 1.4);
    this.modalScene.add(this.modalFruitMesh);
  }

  toggleSlice() {
    this.isSliced = !this.isSliced;
    this.loadFruitInModal(this.currentFruitId, this.isSliced);
    return this.isSliced;
  }

  toggleRotate() {
    this.autoRotate = !this.autoRotate;
    return this.autoRotate;
  }

  animateModal() {
    this.modalAnimationId = requestAnimationFrame(() => this.animateModal());

    if (this.modalControls) {
      this.modalControls.update();
    }

    if (this.modalFruitMesh && this.autoRotate) {
      this.modalFruitMesh.rotation.y += 0.012;
      this.modalFruitMesh.rotation.x = Math.sin(performance.now() * 0.001) * 0.1;
    }

    this.modalRenderer.render(this.modalScene, this.modalCamera);
  }

  /**
   * PROCEDURAL 3D FRUIT BUILDER
   * Menciptakan mesh 3D buah yang kaya visual dengan material PBR realistis & cross-section slice
   */
  createProceduralFruit(fruitId, sliced = false) {
    const group = new THREE.Group();

    switch (fruitId) {
      case 'apel': {
        if (!sliced) {
          // Apel Utuh Glossy
          const appleGeo = new THREE.SphereGeometry(1, 32, 32);
          const pos = appleGeo.attributes.position;
          for (let i = 0; i < pos.count; i++) {
            let y = pos.getY(i);
            let x = pos.getX(i);
            let z = pos.getZ(i);
            // Lekukan atas & bawah khas apel
            if (y > 0.6) {
              pos.setY(i, y - (1 - Math.hypot(x, z)) * 0.3);
            }
            if (y < -0.7) {
              pos.setY(i, y + (1 - Math.hypot(x, z)) * 0.25);
            }
          }
          appleGeo.computeVertexNormals();

          const appleMat = new THREE.MeshPhysicalMaterial({
            color: 0xee2c2c,
            roughness: 0.2,
            metalness: 0.05,
            clearcoat: 0.8,
            clearcoatRoughness: 0.15,
            reflectivity: 0.6
          });
          const appleMesh = new THREE.Mesh(appleGeo, appleMat);
          group.add(appleMesh);

          // Tangkai Apel
          const stemCurve = new THREE.CubicBezierCurve3(
            new THREE.Vector3(0, 0.7, 0),
            new THREE.Vector3(0.05, 1.1, 0.05),
            new THREE.Vector3(0.12, 1.25, 0.1),
            new THREE.Vector3(0.18, 1.4, 0.15)
          );
          const stemGeo = new THREE.TubeGeometry(stemCurve, 16, 0.04, 8, false);
          const stemMat = new THREE.MeshStandardMaterial({ color: 0x3d2817, roughness: 0.8 });
          group.add(new THREE.Mesh(stemGeo, stemMat));

          // Daun Apel Hijau Segar
          const leafGeo = new THREE.SphereGeometry(0.35, 16, 8);
          leafGeo.scale(1, 0.15, 0.5);
          const leafMat = new THREE.MeshStandardMaterial({ color: 0x4caf50, roughness: 0.4 });
          const leaf = new THREE.Mesh(leafGeo, leafMat);
          leaf.position.set(0.2, 1.1, 0.1);
          leaf.rotation.set(0.3, 0.5, 0.8);
          group.add(leaf);
        } else {
          // Apel Dibelah (Cross Section)
          const halfGeo = new THREE.SphereGeometry(1, 32, 32, 0, Math.PI);
          const peelMat = new THREE.MeshPhysicalMaterial({ color: 0xee2c2c, roughness: 0.2, clearcoat: 0.7 });
          const halfMesh = new THREE.Mesh(halfGeo, peelMat);
          group.add(halfMesh);

          // Daging Buah Apel Putih Kekuningan Segar
          const fleshGeo = new THREE.CircleGeometry(1, 32);
          const fleshMat = new THREE.MeshStandardMaterial({ color: 0xfffae8, roughness: 0.5 });
          const flesh = new THREE.Mesh(fleshGeo, fleshMat);
          flesh.rotation.y = Math.PI / 2;
          group.add(flesh);

          // Biji Apel Coklat
          const seedGeo = new THREE.ConeGeometry(0.08, 0.2, 8);
          const seedMat = new THREE.MeshStandardMaterial({ color: 0x3e2723, roughness: 0.3 });
          const seed1 = new THREE.Mesh(seedGeo, seedMat);
          seed1.position.set(0.02, 0.1, 0.12);
          seed1.rotation.z = Math.PI / 4;
          const seed2 = new THREE.Mesh(seedGeo, seedMat);
          seed2.position.set(0.02, -0.05, -0.1);
          seed2.rotation.z = -Math.PI / 3;
          group.add(seed1, seed2);
        }
        break;
      }

      case 'jeruk': {
        if (!sliced) {
          // Jeruk Utuh dengan Pori-Pori Kulit PBR
          const orangeGeo = new THREE.SphereGeometry(1, 32, 32);
          const orangeMat = new THREE.MeshPhysicalMaterial({
            color: 0xff7b00,
            roughness: 0.35,
            clearcoat: 0.4,
            sheen: 0.5,
            sheenColor: 0xffa726
          });
          const orangeMesh = new THREE.Mesh(orangeGeo, orangeMat);
          group.add(orangeMesh);

          // Pangkal Jeruk & Daun Zest
          const calyxGeo = new THREE.CylinderGeometry(0.08, 0.12, 0.08, 6);
          const calyxMat = new THREE.MeshStandardMaterial({ color: 0x33691e });
          const calyx = new THREE.Mesh(calyxGeo, calyxMat);
          calyx.position.y = 0.98;
          group.add(calyx);

          const leafGeo = new THREE.SphereGeometry(0.3, 16, 8);
          leafGeo.scale(1, 0.12, 0.45);
          const leafMat = new THREE.MeshStandardMaterial({ color: 0x2e7d32, roughness: 0.3 });
          const leaf = new THREE.Mesh(leafGeo, leafMat);
          leaf.position.set(0.18, 0.98, 0.08);
          leaf.rotation.set(0.2, 0.3, 0.6);
          group.add(leaf);
        } else {
          // Irisan Jeruk Segar / Roda Jeruk (Orange Wheel Slice)
          const sliceCyl = new THREE.CylinderGeometry(1, 1, 0.22, 32);
          const peelMat = new THREE.MeshStandardMaterial({ color: 0xff6f00, roughness: 0.4 });
          const topFaceMat = new THREE.MeshStandardMaterial({ color: 0xffb74d, roughness: 0.3 }); // Bulir jus
          const sliceMesh = new THREE.Mesh(sliceCyl, [peelMat, topFaceMat, topFaceMat]);
          sliceMesh.rotation.x = Math.PI / 2;
          group.add(sliceMesh);

          // Pusat Putih Albedo & Segmen Bulir
          const centerGeo = new THREE.CircleGeometry(0.18, 16);
          const albedoMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
          const center = new THREE.Mesh(centerGeo, albedoMat);
          center.position.z = 0.115;
          group.add(center);

          // Segmen Jeruk (8 Garis Albedo Memancar)
          for (let i = 0; i < 8; i++) {
            const rad = (i * Math.PI * 2) / 8;
            const lineGeo = new THREE.PlaneGeometry(0.03, 0.85);
            const line = new THREE.Mesh(lineGeo, albedoMat);
            line.position.set(Math.cos(rad) * 0.45, Math.sin(rad) * 0.45, 0.116);
            line.rotation.z = rad - Math.PI / 2;
            group.add(line);
          }
        }
        break;
      }

      case 'pisang': {
        // Pisang Lengkung Elegan (Procedural Curved Cylinder)
        const bananaCurve = new THREE.CubicBezierCurve3(
          new THREE.Vector3(-1.3, -0.6, 0),
          new THREE.Vector3(-0.5, -0.1, 0),
          new THREE.Vector3(0.5, 0.2, 0),
          new THREE.Vector3(1.3, 0.9, 0)
        );
        const bananaGeo = new THREE.TubeGeometry(bananaCurve, 32, 0.28, 8, false);
        const bananaMat = new THREE.MeshStandardMaterial({
          color: sliced ? 0xfff9c4 : 0xffd600,
          roughness: 0.35,
          metalness: 0.05
        });
        const bananaMesh = new THREE.Mesh(bananaGeo, bananaMat);
        group.add(bananaMesh);

        // Ujung Hijau & Cokelat Pisang
        const tipGeo = new THREE.ConeGeometry(0.12, 0.3, 8);
        const tipMat = new THREE.MeshStandardMaterial({ color: 0x33691e });
        const tip = new THREE.Mesh(tipGeo, tipMat);
        tip.position.set(1.4, 1.0, 0);
        tip.rotation.z = -Math.PI / 3;
        group.add(tip);

        const stemEndGeo = new THREE.CylinderGeometry(0.08, 0.15, 0.3, 8);
        const stemEndMat = new THREE.MeshStandardMaterial({ color: 0x4e342e });
        const stemEnd = new THREE.Mesh(stemEndGeo, stemEndMat);
        stemEnd.position.set(-1.4, -0.72, 0);
        stemEnd.rotation.z = Math.PI / 3;
        group.add(stemEnd);
        break;
      }

      case 'alpukat': {
        if (!sliced) {
          // Alpukat Utuh Bertekstur Kulit Hijau Gelap Kasar
          const avoGeo = new THREE.SphereGeometry(1, 32, 32);
          avoGeo.scale(0.85, 1.3, 0.85);
          const avoMat = new THREE.MeshStandardMaterial({
            color: 0x1b5e20,
            roughness: 0.8,
            metalness: 0.1
          });
          group.add(new THREE.Mesh(avoGeo, avoMat));
        } else {
          // Alpukat Belah Dua dengan Biji Cokelat Mengkilap
          const halfGeo = new THREE.SphereGeometry(1, 32, 32, 0, Math.PI);
          halfGeo.scale(0.85, 1.3, 0.85);
          const skinMat = new THREE.MeshStandardMaterial({ color: 0x1b5e20, roughness: 0.7 });
          const halfAvo = new THREE.Mesh(halfGeo, skinMat);
          group.add(halfAvo);

          // Daging Alpukat Kuning Kehijauan Creamy
          const fleshGeo = new THREE.CircleGeometry(1, 32);
          fleshGeo.scale(0.85, 1.3, 1);
          const fleshMat = new THREE.MeshStandardMaterial({
            color: 0xdce775,
            roughness: 0.4
          });
          const flesh = new THREE.Mesh(fleshGeo, fleshMat);
          flesh.rotation.y = Math.PI / 2;
          group.add(flesh);

          // Biji Alpukat Bulat Besar Mengkilap
          const seedGeo = new THREE.SphereGeometry(0.42, 24, 24);
          const seedMat = new THREE.MeshPhysicalMaterial({
            color: 0x4e342e,
            roughness: 0.25,
            clearcoat: 0.6
          });
          const seed = new THREE.Mesh(seedGeo, seedMat);
          seed.position.set(0.12, -0.1, 0);
          group.add(seed);
        }
        break;
      }

      case 'semangka': {
        // Irisan Semangka Merah Segar (Watermelon Wedge)
        const wedgeGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.28, 32, 1, false, 0, Math.PI / 3);
        const redMat = new THREE.MeshStandardMaterial({ color: 0xff1744, roughness: 0.35 });
        const rindMat = new THREE.MeshStandardMaterial({ color: 0x2e7d32, roughness: 0.5 });
        const whiteMat = new THREE.MeshStandardMaterial({ color: 0xe8f5e9, roughness: 0.4 });

        const wedge = new THREE.Mesh(wedgeGeo, [rindMat, redMat, redMat]);
        wedge.rotation.x = Math.PI / 2;
        wedge.rotation.z = -Math.PI / 6;
        group.add(wedge);

        // Biji Semangka Hitam Kecil Menempel
        const seedMat = new THREE.MeshBasicMaterial({ color: 0x212121 });
        const seedGeo = new THREE.ConeGeometry(0.04, 0.09, 6);
        for (let i = 0; i < 6; i++) {
          const s = new THREE.Mesh(seedGeo, seedMat);
          const r = 0.4 + (i % 3) * 0.25;
          const th = 0.2 + (i * 0.12);
          s.position.set(Math.cos(th) * r, Math.sin(th) * r, 0.15);
          s.rotation.z = Math.PI / 2 + th;
          group.add(s);
        }
        break;
      }

      case 'kiwi': {
        if (!sliced) {
          // Kiwi Berbulu Cokelat
          const kiwiGeo = new THREE.SphereGeometry(0.85, 32, 32);
          kiwiGeo.scale(0.9, 1.2, 0.9);
          const kiwiMat = new THREE.MeshStandardMaterial({ color: 0x6d4c41, roughness: 0.9 });
          group.add(new THREE.Mesh(kiwiGeo, kiwiMat));
        } else {
          // Irisan Kiwi Hijau Cerah dengan Biji Bintang Hitam
          const sliceCyl = new THREE.CylinderGeometry(0.9, 0.9, 0.2, 32);
          const skinMat = new THREE.MeshStandardMaterial({ color: 0x6d4c41, roughness: 0.8 });
          const greenFleshMat = new THREE.MeshStandardMaterial({ color: 0x7cb342, roughness: 0.3 });
          const kiwiSlice = new THREE.Mesh(sliceCyl, [skinMat, greenFleshMat, greenFleshMat]);
          kiwiSlice.rotation.x = Math.PI / 2;
          group.add(kiwiSlice);

          // Inti Kiwi Putih
          const centerGeo = new THREE.CircleGeometry(0.25, 16);
          const centerMat = new THREE.MeshBasicMaterial({ color: 0xf1f8e9 });
          const center = new THREE.Mesh(centerGeo, centerMat);
          center.position.z = 0.105;
          group.add(center);

          // Biji Kiwi Hitam Mengitari Inti
          const seedMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
          const seedGeo = new THREE.SphereGeometry(0.025, 6, 6);
          for (let i = 0; i < 18; i++) {
            const rad = (i * Math.PI * 2) / 18;
            const dist = 0.38 + Math.sin(i * 3) * 0.05;
            const seed = new THREE.Mesh(seedGeo, seedMat);
            seed.position.set(Math.cos(rad) * dist, Math.sin(rad) * dist, 0.108);
            group.add(seed);
          }
        }
        break;
      }

      case 'naga': {
        // Buah Naga Merah Merona
        const dragonGeo = new THREE.SphereGeometry(1, 32, 32);
        dragonGeo.scale(0.85, 1.25, 0.85);
        const dragonMat = new THREE.MeshPhysicalMaterial({
          color: sliced ? 0x880e4f : 0xc2185b,
          roughness: 0.3,
          clearcoat: 0.5
        });
        const dragonMesh = new THREE.Mesh(dragonGeo, dragonMat);
        group.add(dragonMesh);

        // Sisik Hijau Khas Buah Naga (Scales)
        const scaleGeo = new THREE.ConeGeometry(0.2, 0.5, 6);
        scaleGeo.scale(1, 1, 0.3);
        const scaleMat = new THREE.MeshStandardMaterial({ color: 0x43a047, roughness: 0.4 });
        for (let i = 0; i < 12; i++) {
          const sc = new THREE.Mesh(scaleGeo, scaleMat);
          const phi = (i / 12) * Math.PI * 2;
          const y = -0.5 + (i % 4) * 0.35;
          sc.position.set(Math.cos(phi) * 0.85, y, Math.sin(phi) * 0.85);
          sc.rotation.set(-y, phi, 0.8);
          group.add(sc);
        }
        break;
      }

      case 'nanas': {
        // Nanas Madu Bertekstur Silinder & Mahkota Daun
        const pineGeo = new THREE.CylinderGeometry(0.75, 0.85, 1.6, 24);
        const pineMat = new THREE.MeshStandardMaterial({
          color: 0xff8f00,
          roughness: 0.6,
          metalness: 0.1
        });
        const pineMesh = new THREE.Mesh(pineGeo, pineMat);
        group.add(pineMesh);

        // Mahkota Daun Nanas Tajam
        const crownLeafGeo = new THREE.ConeGeometry(0.18, 0.8, 6);
        const crownMat = new THREE.MeshStandardMaterial({ color: 0x2e7d32, roughness: 0.4 });
        for (let j = 0; j < 8; j++) {
          const l = new THREE.Mesh(crownLeafGeo, crownMat);
          const angle = (j * Math.PI * 2) / 8;
          l.position.set(Math.cos(angle) * 0.25, 1.1, Math.sin(angle) * 0.25);
          l.rotation.set(Math.sin(angle) * 0.4, 0, Math.cos(angle) * 0.4);
          group.add(l);
        }
        break;
      }

      case 'delima': {
        // Delima Merah Ruby
        const pomGeo = new THREE.SphereGeometry(0.95, 32, 32);
        const pomMat = new THREE.MeshPhysicalMaterial({
          color: 0x880e4f,
          roughness: 0.25,
          clearcoat: 0.7
        });
        group.add(new THREE.Mesh(pomGeo, pomMat));

        // Mahkota Calyx Delima
        const crownGeo = new THREE.CylinderGeometry(0.15, 0.05, 0.3, 6);
        const crownMat = new THREE.MeshStandardMaterial({ color: 0xad1457 });
        const cr = new THREE.Mesh(crownGeo, crownMat);
        cr.position.y = 0.95;
        group.add(cr);
        break;
      }

      case 'blueberry': {
        // Berry Ungu Biru Halus
        const blueGeo = new THREE.SphereGeometry(0.85, 32, 32);
        const blueMat = new THREE.MeshStandardMaterial({
          color: 0x283593,
          roughness: 0.35,
          metalness: 0.1
        });
        group.add(new THREE.Mesh(blueGeo, blueMat));

        const rimGeo = new THREE.TorusGeometry(0.18, 0.04, 8, 16);
        const rimMat = new THREE.MeshBasicMaterial({ color: 0x1a237e });
        const rim = new THREE.Mesh(rimGeo, rimMat);
        rim.position.y = 0.84;
        rim.rotation.x = Math.PI / 2;
        group.add(rim);
        break;
      }

      case 'pepaya': {
        if (!sliced) {
          // Pepaya California Utuh Memanjang Oranye Kehijauan
          const pepayaGeo = new THREE.SphereGeometry(1, 32, 32);
          pepayaGeo.scale(0.8, 1.45, 0.8);
          const pepayaMat = new THREE.MeshPhysicalMaterial({
            color: 0xff6d00,
            roughness: 0.35,
            clearcoat: 0.5
          });
          group.add(new THREE.Mesh(pepayaGeo, pepayaMat));

          const stem = new THREE.CylinderGeometry(0.08, 0.1, 0.3, 8);
          const stemMat = new THREE.MeshStandardMaterial({ color: 0x33691e });
          const stemMesh = new THREE.Mesh(stem, stemMat);
          stemMesh.position.y = 1.45;
          group.add(stemMesh);
        } else {
          // Pepaya Belah Dua Memperlihatkan Rongga Berbiji Hitam
          const halfGeo = new THREE.SphereGeometry(1, 32, 32, 0, Math.PI);
          halfGeo.scale(0.8, 1.45, 0.8);
          const skinMat = new THREE.MeshStandardMaterial({ color: 0xff6d00, roughness: 0.4 });
          group.add(new THREE.Mesh(halfGeo, skinMat));

          // Daging Pepaya Jingga Menyala
          const fleshGeo = new THREE.CircleGeometry(1, 32);
          fleshGeo.scale(0.8, 1.45, 1);
          const fleshMat = new THREE.MeshStandardMaterial({ color: 0xff3d00, roughness: 0.3 });
          const flesh = new THREE.Mesh(fleshGeo, fleshMat);
          flesh.rotation.y = Math.PI / 2;
          group.add(flesh);

          // Biji-Biji Pepaya Hitam Mengkilap di Tengah
          const seedMat = new THREE.MeshPhysicalMaterial({ color: 0x1a1a1a, roughness: 0.2, clearcoat: 0.8 });
          const seedGeo = new THREE.SphereGeometry(0.045, 8, 8);
          for (let i = 0; i < 24; i++) {
            const s = new THREE.Mesh(seedGeo, seedMat);
            const y = (Math.random() - 0.5) * 1.6;
            const z = (Math.random() - 0.5) * 0.45;
            s.position.set(0.04, y, z);
            group.add(s);
          }
        }
        break;
      }

      case 'jambu': {
        // Jambu Biji Merah (Guava) Hijau Segar di Luar, Merah Muda di Dalam
        if (!sliced) {
          const guavaGeo = new THREE.SphereGeometry(0.95, 32, 32);
          guavaGeo.scale(0.95, 1.15, 0.95);
          const guavaMat = new THREE.MeshPhysicalMaterial({
            color: 0x558b2f,
            roughness: 0.45,
            clearcoat: 0.3
          });
          group.add(new THREE.Mesh(guavaGeo, guavaMat));

          const calyxGeo = new THREE.TorusGeometry(0.12, 0.05, 8, 16);
          const calyxMat = new THREE.MeshStandardMaterial({ color: 0x33691e });
          const calyx = new THREE.Mesh(calyxGeo, calyxMat);
          calyx.position.y = -1.1;
          calyx.rotation.x = Math.PI / 2;
          group.add(calyx);
        } else {
          const halfGeo = new THREE.SphereGeometry(0.95, 32, 32, 0, Math.PI);
          halfGeo.scale(0.95, 1.15, 0.95);
          const skinMat = new THREE.MeshStandardMaterial({ color: 0x558b2f, roughness: 0.4 });
          group.add(new THREE.Mesh(halfGeo, skinMat));

          const fleshGeo = new THREE.CircleGeometry(0.95, 32);
          fleshGeo.scale(0.95, 1.15, 1);
          const pinkFleshMat = new THREE.MeshStandardMaterial({ color: 0xe91e63, roughness: 0.35 });
          const flesh = new THREE.Mesh(fleshGeo, pinkFleshMat);
          flesh.rotation.y = Math.PI / 2;
          group.add(flesh);

          // Biji Jambu Halus
          const seedMat = new THREE.MeshStandardMaterial({ color: 0xffecb3 });
          const seedGeo = new THREE.SphereGeometry(0.03, 6, 6);
          for (let i = 0; i < 16; i++) {
            const s = new THREE.Mesh(seedGeo, seedMat);
            const ang = (i / 16) * Math.PI * 2;
            const dist = 0.2 + (i % 3) * 0.12;
            s.position.set(0.03, Math.sin(ang) * dist * 1.2, Math.cos(ang) * dist);
            group.add(s);
          }
        }
        break;
      }

      default: {
        // Default Sphere Segar
        const defGeo = new THREE.SphereGeometry(1, 32, 32);
        const defMat = new THREE.MeshPhysicalMaterial({
          color: 0xff5722,
          roughness: 0.3,
          clearcoat: 0.6
        });
        group.add(new THREE.Mesh(defGeo, defMat));
      }
    }

    return group;
  }
}

// Inisialisasi global instance
window.fruit3D = new Fruit3DEngine();
