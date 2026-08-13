const vehicles = {
  sakura: {
    name: 'Nissan Sakura', length: 3395, width: 1475,
    source: 'Nissan Motor Co., Ltd. (2022)',
    sourceUrl: 'https://history.nissan.co.jp/ARCHIVES/PDF/SAKURA/KE0/20220520/sakura_specsheet.pdf',
    outlineCitation: 'CarCadBlocks (no date); 3DModels.org (no date b)',
    outlineText: 'Illustrative silhouette checked against a top-view CAD block and model-specific 3D reference.',
    outlineLinks: [
      ['Top-view CAD reference', 'https://carcadblocks.com/nissan-sakura'],
      ['3D model reference', 'https://3dmodels.org/3d-models/nissan-sakura-2023/']
    ],
    bodyPath: 'M18 2Q50-1 82 2Q94 7 96 23L97 172Q96 191 81 198Q50 202 19 198Q4 191 3 172L4 23Q6 7 18 2Z',
    glassPath: 'M17 32Q50 17 83 32L85 70Q50 60 15 70ZM14 132Q50 142 86 132L80 170Q50 184 20 170Z'
  },
  ioniq6: {
    name: 'Hyundai IONIQ 6', length: 4925, width: 1880,
    source: 'Hyundai Motor Europe (no date)',
    sourceUrl: 'https://www.hyundai.com/eu/en/models/ioniq-6/technical-data-downloads.html',
    outlineCitation: 'Hyundai Motor Nederland (no date); 3D CAD Browser (no date)',
    outlineText: 'Illustrative silhouette checked against official Hyundai imagery and a model-specific 3D reference.',
    outlineLinks: [
      ['Official image reference', 'https://stage-aem.hyundai.com/nl/nl/modellen/ioniq-6.html'],
      ['3D model reference', 'https://www.3dcadbrowser.com/3d-model/hyundai-ioniq-6']
    ],
    bodyPath: 'M50 0C73 0 90 13 94 38C98 78 99 135 93 169C89 188 73 200 50 200C27 200 11 188 7 169C1 135 2 78 6 38C10 13 27 0 50 0Z',
    glassPath: 'M18 41Q50 17 82 41L86 78Q50 65 14 78ZM13 126Q50 139 87 126L79 165Q50 183 21 165Z'
  },
  ev3: {
    name: 'Kia EV3 Air', length: 4300, width: 1850,
    source: 'Kia UK (no date)',
    sourceUrl: 'https://www.kia.com/uk/new-cars/ev3/specification/',
    outlineCitation: 'Kia Global Media Center (no date); 3DModels.org (no date a)',
    outlineText: 'Illustrative silhouette checked against Kia media imagery and a model-specific 3D reference.',
    outlineLinks: [
      ['Official media image', 'https://www.kianewscenter.com/images-and-videos/image/kia-ev3/a/acdb5e4e-dd80-48a9-be5a-567577b17ce7'],
      ['3D model reference', 'https://3dmodels.org/3d-models/kia-ev3-with-hq-interior-2024/']
    ],
    bodyPath: 'M20 1Q50-2 80 1Q92 7 95 28L96 171Q94 190 78 198Q50 203 22 198Q6 190 4 171L5 28Q8 7 20 1Z',
    glassPath: 'M18 34Q50 17 82 34L84 71Q50 61 16 71ZM16 130Q50 141 84 130L79 168Q50 182 21 168Z'
  },
  vf9: {
    name: 'VinFast VF 9 Eco', length: 5119, width: 2004,
    source: 'VinFast (no date a)',
    sourceUrl: 'https://vinfastauto.com/vn_vi/cau-hoi-thuong-gap/cau-hoi-xe-o-to/san-pham/vf-9',
    outlineCitation: 'VinFast (no date b); Giang Trần (2024)',
    outlineText: 'Illustrative silhouette checked against official VinFast imagery and a downloadable CC Attribution 3D reference.',
    outlineLinks: [
      ['Official image reference', 'https://shop.vinfastauto.com/vn_en/dat-coc-xe-vf9.html'],
      ['CC BY 3D model', 'https://sketchfab.com/3d-models/vinfast-vf9-model-no-interior-cac6cb95b9084d0abee37dccb46fa10b']
    ],
    bodyPath: 'M21 1Q50-2 79 1Q91 7 94 27L97 168Q96 189 78 198Q50 202 22 198Q4 189 3 168L6 27Q9 7 21 1Z',
    glassPath: 'M19 34Q50 16 81 34L85 72Q50 61 15 72ZM15 129Q50 140 85 129L80 169Q50 183 20 169Z'
  },
  x9: {
    name: 'XPeng X9', length: 5316, width: 1988,
    source: 'XPeng (2026)',
    sourceUrl: 'https://www.xiaopeng.com/x9_2026/configuration.html?forcePlat=h5',
    outlineCitation: 'XPeng Malaysia (no date); 3DModels.org (no date c)',
    outlineText: 'Illustrative silhouette checked against official XPeng imagery and a model-specific 3D reference.',
    outlineLinks: [
      ['Official image reference', 'https://www.xpeng.com.my/x9.php'],
      ['3D model reference', 'https://3dmodels.org/3d-models/xpeng-x9-2025/']
    ],
    bodyPath: 'M28 1Q50-2 72 1Q88 7 93 31L97 165Q97 187 76 198Q50 203 24 198Q3 187 3 165L7 31Q12 7 28 1Z',
    glassPath: 'M21 34Q50 15 79 34L85 74Q50 61 15 74ZM14 127Q50 141 86 127L79 169Q50 184 21 169Z'
  }
};

const layerContent = {
  physical: {
    status: 'Official data', title: 'Physical boundary',
    description: 'The solid outline uses published overall dimensions and an illustrative model-specific silhouette.',
    method: 'Manufacturer dimensions define the scale; cited top-view, CAD or 3D imagery informs the silhouette.',
    limitation: 'This is not manufacturer engineering CAD. Published width may exclude mirrors.',
    sourceMode: 'vehicle'
  },
  reported: {
    status: 'Primary research', title: 'Rear corners',
    description: 'Rear corners were repeatedly identified as difficult to judge across four EV-driver interviews.',
    source: 'Vehicle Boundary Visual System (2026)',
    method: 'Interview notes were categorised and clustered through affinity mapping.',
    limitation: 'The two nodes mark a reported topic—not the size or severity of a measured blind zone.'
  },
  parking: {
    status: 'Calculated information', title: 'Parking space',
    description: 'The rectangle and four labels compare a selected vehicle with an adjustable parking space.',
    method: 'The vehicle is centred; each clearance is half the difference between bay and body dimensions.',
    limitation: 'This is a geometric comparison, not a safe-distance recommendation. Mirrors and movement are excluded.',
    sourceMode: 'vehicle'
  },
  visible: {
    status: 'Measurement required', title: 'Visible boundary',
    description: 'The hatched framework locates visibility within the system without claiming a measured field of view.',
    source: 'International Organization for Standardization (2022)',
    sourceUrl: 'https://www.iso.org/standard/72001.html',
    method: 'A result requires a defined eye location, seat position and vehicle-specific measurement.',
    limitation: 'ISO 4513:2022 provides an eye-location method, not a ready-made blind-zone map.',
    message: 'Visible · Measurement required'
  },
  digital: {
    status: 'Coverage unavailable', title: 'Digital boundary',
    description: 'The dashed ring organises digital information but does not claim a sensor detection zone.',
    source: 'International Organization for Standardization (2023); United Nations Economic Commission for Europe (2021)',
    sourceUrl: 'https://www.iso.org/standard/82952.html',
    method: 'Relevant performance frameworks were reviewed; exact vehicle-specific coverage would require testing.',
    limitation: 'A listed camera or sensor does not establish its exact spatial coverage.',
    message: 'Digital · Coverage unavailable'
  },
  all: {
    status: 'Combined view', title: 'Complete system',
    description: 'Available, reported, calculated and unavailable information is placed around one vehicle.',
    source: 'Manufacturer data; author’s primary research; ISO 4513:2022; ISO 17386:2023',
    method: 'All five evidence states are shown together while retaining distinct line languages.',
    limitation: 'Displaying layers together does not turn the hatched or dashed frameworks into measured areas.'
  }
};

let selectedVehicle = 'sakura';
let selectedLayer = 'physical';
let motionEnabled = false;

const el = {
  tabs: [...document.querySelectorAll('.vehicle-tab')],
  layerTabs: [...document.querySelectorAll('.layer-tab')],
  stage: document.querySelector('#mapStage'),
  car: document.querySelector('#vehicleGraphic'),
  outline: document.querySelector('#vehicleOutline'),
  glass: document.querySelector('#vehicleGlass'),
  dimensions: document.querySelector('#selectedDimensions'),
  outlineEvidence: document.querySelector('#outlineEvidence'),
  outlineLinks: document.querySelector('#outlineLinks'),
  parkingBay: document.querySelector('#parkingBay'),
  parkingControls: document.querySelector('#parkingControls'),
  bayLength: document.querySelector('#bayLength'),
  bayWidth: document.querySelector('#bayWidth'),
  bayLengthOutput: document.querySelector('#bayLengthOutput'),
  bayWidthOutput: document.querySelector('#bayWidthOutput'),
  clearances: {
    front: document.querySelector('#frontClearance'), rear: document.querySelector('#rearClearance'),
    left: document.querySelector('#leftClearance'), right: document.querySelector('#rightClearance')
  },
  rearLeft: document.querySelector('#rearPointLeft'),
  rearRight: document.querySelector('#rearPointRight'),
  rearConnectorLeft: document.querySelector('#rearConnectorLeft'),
  rearConnectorRight: document.querySelector('#rearConnectorRight'),
  stateMessage: document.querySelector('#stateMessageText'),
  panelStatus: document.querySelector('#panelStatus'),
  panelTitle: document.querySelector('#panelTitle'),
  panelDescription: document.querySelector('#panelDescription'),
  panelSource: document.querySelector('#panelSource'),
  panelMethod: document.querySelector('#panelMethod'),
  panelLimitation: document.querySelector('#panelLimitation'),
  panelLinks: document.querySelector('#panelLinks')
};

function mm(value) {
  return `${Math.round(value).toLocaleString('en-GB')} mm`;
}

function createLink(label, url) {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noreferrer';
  link.textContent = `${label} ↗`;
  return link;
}

function updateVehicle() {
  const vehicle = vehicles[selectedVehicle];
  el.dimensions.textContent = `${vehicle.length.toLocaleString('en-GB')} × ${vehicle.width.toLocaleString('en-GB')} mm`;
  el.outlineEvidence.textContent = `${vehicle.outlineText} (${vehicle.outlineCitation}).`;
  el.outlineLinks.replaceChildren(...vehicle.outlineLinks.map(([label, url]) => createLink(label, url)));
  el.outline.setAttribute('d', vehicle.bodyPath);
  el.glass.setAttribute('d', vehicle.glassPath);
  renderGeometry();
  updatePanel();
}

function updateLayer(layer) {
  selectedLayer = layer;
  el.stage.dataset.layer = layer;
  el.layerTabs.forEach((button) => {
    const active = button.dataset.layer === layer;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });
  el.parkingControls.classList.toggle('is-active', layer === 'parking' || layer === 'all');
  updatePanel();
  animateLayerSelection(layer);
}

function updatePanel() {
  const vehicle = vehicles[selectedVehicle];
  const layer = layerContent[selectedLayer];
  el.panelStatus.textContent = layer.status;
  el.panelTitle.textContent = layer.title;
  el.panelDescription.textContent = layer.description;
  el.panelSource.textContent = layer.sourceMode === 'vehicle' ? `${vehicle.source}; ${vehicle.outlineCitation}` : layer.source;
  el.panelMethod.textContent = layer.method;
  el.panelLimitation.textContent = layer.limitation;
  el.stateMessage.textContent = layer.message || '';
  const url = layer.sourceMode === 'vehicle' ? vehicle.sourceUrl : layer.sourceUrl;
  el.panelLinks.replaceChildren(...(url ? [createLink('Open source', url)] : []));
}

function clearance(value) {
  return value >= 0 ? mm(value) : `−${mm(Math.abs(value))}`;
}

function renderGeometry() {
  const vehicle = vehicles[selectedVehicle];
  const bayLength = Number(el.bayLength.value);
  const bayWidth = Number(el.bayWidth.value);
  const scale = .095;
  const carHeight = vehicle.length * scale;
  const carWidth = vehicle.width * scale;
  const bayHeight = bayLength * scale;
  const bayPixelWidth = bayWidth * scale;
  const cx = 450;
  const cy = 350;
  const scaleX = carWidth / 100;
  const scaleY = carHeight / 200;

  el.car.setAttribute('transform', `translate(${cx} ${cy}) scale(${scaleX} ${scaleY}) translate(-50 -100)`);
  el.parkingBay.setAttribute('x', cx - bayPixelWidth / 2);
  el.parkingBay.setAttribute('y', cy - bayHeight / 2);
  el.parkingBay.setAttribute('width', bayPixelWidth);
  el.parkingBay.setAttribute('height', bayHeight);

  const rearY = cy + carHeight / 2;
  const leftX = cx - carWidth / 2;
  const rightX = cx + carWidth / 2;
  el.rearLeft.setAttribute('transform', `translate(${leftX} ${rearY - 7})`);
  el.rearRight.setAttribute('transform', `translate(${rightX} ${rearY - 7})`);
  el.rearConnectorLeft.setAttribute('d', `M${leftX} ${rearY + 14}Q${leftX - 18} ${rearY + 36} ${leftX - 5} 638`);
  el.rearConnectorRight.setAttribute('d', `M${rightX} ${rearY + 14}Q${rightX + 18} ${rearY + 36} ${rightX + 5} 638`);

  const longitudinal = (bayLength - vehicle.length) / 2;
  const lateral = (bayWidth - vehicle.width) / 2;
  const bayTop = cy - bayHeight / 2;
  const bayBottom = cy + bayHeight / 2;
  const bayLeft = cx - bayPixelWidth / 2;
  const bayRight = cx + bayPixelWidth / 2;
  const carTop = cy - carHeight / 2;
  const carBottom = cy + carHeight / 2;

  Object.assign(el.clearances.front, { textContent: clearance(longitudinal) });
  Object.assign(el.clearances.rear, { textContent: clearance(longitudinal) });
  Object.assign(el.clearances.left, { textContent: clearance(lateral) });
  Object.assign(el.clearances.right, { textContent: clearance(lateral) });
  el.clearances.front.setAttribute('x', cx); el.clearances.front.setAttribute('y', (bayTop + carTop) / 2 + 4);
  el.clearances.rear.setAttribute('x', cx); el.clearances.rear.setAttribute('y', (bayBottom + carBottom) / 2 + 4);
  el.clearances.left.setAttribute('x', (bayLeft + leftX) / 2); el.clearances.left.setAttribute('y', cy + 4);
  el.clearances.right.setAttribute('x', (bayRight + rightX) / 2); el.clearances.right.setAttribute('y', cy + 4);
  el.parkingBay.classList.toggle('is-overflow', longitudinal < 0 || lateral < 0);
  el.bayLengthOutput.textContent = mm(bayLength);
  el.bayWidthOutput.textContent = mm(bayWidth);
}

function selectVehicle(key) {
  selectedVehicle = key;
  el.tabs.forEach((button) => {
    const active = button.dataset.vehicle === key;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });
  updateVehicle();
  animateVehicleSelection();
}

el.tabs.forEach((button) => button.addEventListener('click', () => selectVehicle(button.dataset.vehicle)));
el.layerTabs.forEach((button) => button.addEventListener('click', () => updateLayer(button.dataset.layer)));
document.querySelectorAll('[data-layer-jump]').forEach((target) => {
  const activate = () => updateLayer(target.dataset.layerJump);
  target.addEventListener('click', activate);
  target.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(); }
  });
});
el.bayLength.addEventListener('input', renderGeometry);
el.bayWidth.addEventListener('input', renderGeometry);

function animateVehicleSelection() {
  if (!motionEnabled || !window.gsap) return;

  gsap.fromTo(
    ['#selectedDimensions', '#outlineEvidence', '#outlineLinks'],
    { autoAlpha: 0, y: 10 },
    { autoAlpha: 1, y: 0, duration: .42, stagger: .045, ease: 'power2.out', overwrite: 'auto', clearProps: 'transform,opacity,visibility' }
  );
  gsap.fromTo(
    '#vehicleGraphic',
    { autoAlpha: .2 },
    { autoAlpha: 1, duration: .52, ease: 'power2.out', overwrite: 'auto', clearProps: 'opacity,visibility' }
  );
}

function animateLayerSelection(layer) {
  if (!motionEnabled || !window.gsap) return;

  const targets = layer === 'all'
    ? [...document.querySelectorAll('#boundaryMap .map-layer:not(.vehicle-layer)')]
    : [...document.querySelectorAll(`#boundaryMap [data-layer-jump="${layer}"]`)].filter((target) => !target.classList.contains('vehicle-layer'));

  if (targets.length) {
    gsap.fromTo(
      targets,
      { autoAlpha: .18 },
      { autoAlpha: 1, duration: .46, stagger: .04, ease: 'power2.out', overwrite: 'auto', clearProps: 'opacity,visibility' }
    );
  }

  gsap.fromTo(
    ['#panelStatus', '#panelTitle', '#panelDescription', '.information-panel dl', '#panelLinks'],
    { autoAlpha: 0, y: 8 },
    { autoAlpha: 1, y: 0, duration: .34, stagger: .035, ease: 'power2.out', overwrite: 'auto', clearProps: 'transform,opacity,visibility' }
  );
}

function createHeroPixelTransition(isCompact) {
  const canvas = document.querySelector('#heroPixelTransition');
  if (!canvas) return null;

  const context = canvas.getContext('2d', { alpha: false });
  const sampleCanvas = document.createElement('canvas');
  const sampleContext = sampleCanvas.getContext('2d', { alpha: false });
  const image = new Image();
  let ready = false;
  let progress = 0;
  let frame = 0;

  const resize = () => {
    const pixelRatio = isCompact ? 1 : Math.min(window.devicePixelRatio || 1, 1.25);
    canvas.width = Math.max(1, Math.round(canvas.clientWidth * pixelRatio));
    canvas.height = Math.max(1, Math.round(canvas.clientHeight * pixelRatio));
  };

  const drawImageCover = (targetContext, targetWidth, targetHeight) => {
    const imageRatio = image.naturalWidth / image.naturalHeight;
    const targetRatio = targetWidth / targetHeight;
    let sourceWidth = image.naturalWidth;
    let sourceHeight = image.naturalHeight;
    let sourceX = 0;
    let sourceY = 0;

    if (imageRatio > targetRatio) {
      sourceWidth = image.naturalHeight * targetRatio;
      sourceX = (image.naturalWidth - sourceWidth) / 2;
    } else {
      sourceHeight = image.naturalWidth / targetRatio;
      sourceY = (image.naturalHeight - sourceHeight) / 2;
    }

    targetContext.drawImage(
      image,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      0,
      0,
      targetWidth,
      targetHeight
    );
  };

  const render = () => {
    frame = 0;
    if (!ready || !canvas.width || !canvas.height) return;

    const maximumPixel = isCompact ? 38 : 58;
    const pixelSize = Math.max(1, Math.round(1 + maximumPixel * Math.pow(1 - progress, 1.65)));
    const sampleWidth = Math.max(1, Math.ceil(canvas.width / pixelSize));
    const sampleHeight = Math.max(1, Math.ceil(canvas.height / pixelSize));
    if (sampleCanvas.width !== sampleWidth) sampleCanvas.width = sampleWidth;
    if (sampleCanvas.height !== sampleHeight) sampleCanvas.height = sampleHeight;

    sampleContext.imageSmoothingEnabled = true;
    sampleContext.fillStyle = '#000';
    sampleContext.fillRect(0, 0, sampleWidth, sampleHeight);
    drawImageCover(sampleContext, sampleWidth, sampleHeight);

    context.imageSmoothingEnabled = false;
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(sampleCanvas, 0, 0, canvas.width, canvas.height);
  };

  const requestRender = () => {
    if (!frame) frame = requestAnimationFrame(render);
  };

  const setProgress = (value) => {
    progress = Math.max(0, Math.min(1, value));
    requestRender();
  };

  const handleResize = () => {
    resize();
    requestRender();
  };

  image.addEventListener('load', () => {
    ready = true;
    resize();
    requestRender();
  }, { once: true });
  image.addEventListener('error', () => {
    canvas.style.display = 'none';
  }, { once: true });
  image.src = 'assets/images/disappearing-bumper-transition-vector.svg';
  window.addEventListener('resize', handleResize, { passive: true });

  return {
    canvas,
    setProgress,
    destroy() {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  };
}

function initMotion() {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: 'power2.out' });

  const media = gsap.matchMedia();
  media.add(
    {
      isDesktop: '(min-width: 900px)',
      isCompact: '(max-width: 899px)',
      reduceMotion: '(prefers-reduced-motion: reduce)'
    },
    (context) => {
      const { isDesktop, reduceMotion } = context.conditions;
      if (reduceMotion) {
        motionEnabled = false;
        gsap.set(['.hero-title-wrap', '.intro-block'], { clearProps: 'all' });
        return;
      }

      motionEnabled = true;
      const distance = isDesktop ? 52 : 28;
      const smallDistance = isDesktop ? 28 : 16;
      const pixelTransition = createHeroPixelTransition(!isDesktop);
      const pixelState = { progress: 0 };
      const historyHoverCleanups = [];

      if (pixelTransition) gsap.set(pixelTransition.canvas, { autoAlpha: 0 });

      gsap.from('.micro-nav a', {
        autoAlpha: 0,
        y: -10,
        duration: .65,
        stagger: .07,
        ease: 'power2.out',
        clearProps: 'transform,opacity,visibility'
      });
      gsap.from('#hero-title', {
        autoAlpha: 0,
        y: 34,
        duration: .95,
        delay: .08,
        ease: 'power3.out',
        clearProps: 'transform,opacity,visibility'
      });

      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.hero-story',
          start: 'top top',
          end: 'bottom bottom',
          scrub: .4,
          refreshPriority: -10
        }
      })
        .to('.hero-title-wrap', { autoAlpha: 0, y: -distance, duration: .28, ease: 'none' }, .06)
        .fromTo('.intro-block', { autoAlpha: 0, y: smallDistance }, { autoAlpha: 1, y: 0, duration: .22, ease: 'none' }, .36)
        .to('.intro-block', { autoAlpha: 0, y: -smallDistance, duration: .14, ease: 'none' }, .62)
        .to('.micro-nav', { autoAlpha: 0, y: -10, duration: .12, ease: 'none' }, .64);

      if (pixelTransition) {
        heroTimeline
          .fromTo(
            pixelTransition.canvas,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: .08, ease: 'none' },
            .66
          )
          .to(pixelState, {
            progress: 1,
            duration: .20,
            ease: 'none',
            onUpdate: () => pixelTransition.setProgress(pixelState.progress)
          }, .66)
          .to(pixelTransition.canvas, {
            autoAlpha: 0,
            duration: .10,
            ease: 'none'
          }, .86)
          .to('.hero-stage', {
            backgroundColor: '#f5f5f7',
            duration: .10,
            ease: 'none'
          }, .86)
          .fromTo(
            '.hero-history-reveal',
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: .08, ease: 'none' },
            .88
          )
          .fromTo(
            '#history-title',
            { autoAlpha: 0, y: distance },
            { autoAlpha: 1, y: 0, duration: .14, ease: 'none' },
            .88
          )
          .fromTo(
            '.hero-history-reveal .section-note',
            { autoAlpha: 0, y: smallDistance },
            { autoAlpha: 1, y: 0, duration: .12, ease: 'none' },
            .91
          );
      }

      const headingReveals = [
        ['#explore-title', '.explore-intro', distance],
        ['#about-title', '.about', distance],
        ['#references-title', '.reference-section', distance]
      ];

      headingReveals.forEach(([target, trigger, y]) => {
        gsap.fromTo(
          target,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration: .9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger,
              start: 'top 78%',
              toggleActions: 'play none none reverse'
            },
            clearProps: 'transform,opacity,visibility'
          }
        );
      });

      gsap.utils.toArray('.section-note').filter((note) => !note.closest('.hero-history-reveal')).forEach((note) => {
        gsap.fromTo(
          note,
          { autoAlpha: 0, y: smallDistance },
          {
            autoAlpha: 1,
            y: 0,
            duration: .7,
            scrollTrigger: {
              trigger: note,
              start: 'top 88%',
              toggleActions: 'play none none reverse'
            },
            clearProps: 'transform,opacity,visibility'
          }
        );
      });

      gsap.utils.toArray('.history-card').forEach((card, index) => {
        const image = card.querySelector('img');
        const copy = card.querySelectorAll('p, cite');
        const cardTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 86%',
            toggleActions: 'play none none reverse'
          }
        });

        cardTimeline
          .fromTo(card.querySelector('h3'), { autoAlpha: 0, x: index % 2 ? smallDistance : -smallDistance }, { autoAlpha: 1, x: 0, duration: .55, clearProps: 'transform,opacity,visibility' })
          .fromTo(image, { autoAlpha: 0, scale: 1.045 }, { autoAlpha: 1, scale: 1, duration: .8, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, '-=.28')
          .fromTo(copy, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: .5, stagger: .07, clearProps: 'transform,opacity,visibility' }, '-=.42');
      });

      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        gsap.utils.toArray('.history-card').forEach((card, index) => {
          const image = card.querySelector('img');
          if (!image) return;

          let bounds;
          let clearWillChangeCall;
          const xTo = gsap.quickTo(image, 'x', { duration: .34, ease: 'power3.out' });
          const yTo = gsap.quickTo(image, 'y', { duration: .34, ease: 'power3.out' });
          const rotationTo = gsap.quickTo(image, 'rotation', { duration: .42, ease: 'power3.out' });
          const scaleTo = gsap.quickTo(image, 'scale', { duration: .42, ease: 'power3.out' });

          const onPointerEnter = () => {
            bounds = image.getBoundingClientRect();
            clearWillChangeCall?.kill();
            gsap.set(image, { willChange: 'transform' });
            yTo(-6);
            scaleTo(1.045);
          };

          const onPointerMove = (event) => {
            if (!bounds) return;
            const horizontal = (event.clientX - bounds.left) / bounds.width - .5;
            const vertical = (event.clientY - bounds.top) / bounds.height - .5;
            xTo(horizontal * 16);
            yTo(-6 + vertical * 6);
            rotationTo(horizontal * (index % 2 ? 1 : -1) * 1.8);
          };

          const onPointerLeave = () => {
            bounds = null;
            xTo(0);
            yTo(0);
            rotationTo(0);
            scaleTo(1);
            clearWillChangeCall = gsap.delayedCall(.55, () => {
              gsap.set(image, { clearProps: 'willChange' });
            });
          };

          image.addEventListener('pointerenter', onPointerEnter);
          image.addEventListener('pointermove', onPointerMove);
          image.addEventListener('pointerleave', onPointerLeave);

          historyHoverCleanups.push(() => {
            clearWillChangeCall?.kill();
            image.removeEventListener('pointerenter', onPointerEnter);
            image.removeEventListener('pointermove', onPointerMove);
            image.removeEventListener('pointerleave', onPointerLeave);
            gsap.killTweensOf(image);
            gsap.set(image, { clearProps: 'transform,willChange' });
          });
        });
      }

      const labTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#boundaryLab',
          start: 'top 78%',
          toggleActions: 'play none none reverse'
        }
      });
      labTimeline
        .fromTo('.vehicle-tab .display', { autoAlpha: 0, y: smallDistance }, { autoAlpha: 1, y: 0, duration: .5, stagger: .055, clearProps: 'transform,opacity,visibility' })
        .fromTo('.layer-tab', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: .46, stagger: .04, clearProps: 'transform,opacity,visibility' }, '-=.24')
        .fromTo('.map-stage', { autoAlpha: 0, scale: .975 }, { autoAlpha: 1, scale: 1, duration: .85, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, '-=.18')
        .fromTo(['.vehicle-summary', '.information-panel'], { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: .5, stagger: .08, clearProps: 'transform,opacity,visibility' }, '-=.5');

      gsap.fromTo(
        '.about-copy > *',
        { autoAlpha: 0, y: smallDistance },
        {
          autoAlpha: 1,
          y: 0,
          duration: .62,
          stagger: .09,
          scrollTrigger: {
            trigger: '.about-copy',
            start: 'top 82%',
            toggleActions: 'play none none reverse'
          },
          clearProps: 'transform,opacity,visibility'
        }
      );

      const references = gsap.utils.toArray('.reference-list li');
      gsap.set(references, { autoAlpha: 0, y: 18 });
      ScrollTrigger.batch(references, {
        start: 'top 92%',
        end: 'bottom 8%',
        interval: .08,
        batchMax: isDesktop ? 4 : 2,
        onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, duration: .48, stagger: .055, overwrite: true }),
        onLeaveBack: (batch) => gsap.to(batch, { autoAlpha: 0, y: 18, duration: .3, stagger: .025, overwrite: true })
      });

      gsap.fromTo(
        '.project-colophon > div',
        { autoAlpha: 0, y: smallDistance },
        {
          autoAlpha: 1,
          y: 0,
          duration: .55,
          stagger: .08,
          scrollTrigger: {
            trigger: '.project-colophon',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          },
          clearProps: 'transform,opacity,visibility'
        }
      );

      return () => {
        motionEnabled = false;
        historyHoverCleanups.forEach((cleanup) => cleanup());
        pixelTransition?.destroy();
        if (pixelTransition) gsap.set(pixelTransition.canvas, { clearProps: 'all' });
      };
    }
  );

  const refreshMotion = () => ScrollTrigger.refresh();
  if (document.fonts?.ready) document.fonts.ready.then(refreshMotion);
  window.addEventListener('load', refreshMotion, { once: true });
}

updateVehicle();
updateLayer('physical');
initMotion();
