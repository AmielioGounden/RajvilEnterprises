const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const backToTopButton = document.querySelector('.back-to-top');

if (backToTopButton) {
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

const galleryData = {
  aircon: {
    title: 'Aircon Installations',
    description: 'Air-conditioning installations, outdoor units, power connections and electrical support.',
    images: [
      'assets/projects/aircon/A1.jpeg',
      'assets/projects/aircon/A2.jpeg',
      'assets/projects/aircon/A3.jpeg',
      'assets/projects/aircon/A4.jpeg'
    ]
  },

  db: {
    title: 'Distribution Board Building & Replacement',
    description: 'Distribution board building, replacement, inspection, testing and safe electrical upgrades.',
    images: [
      'assets/projects/distribution-board/DBB1.jpeg',
      'assets/projects/distribution-board/DBB2.jpeg',
      'assets/projects/distribution-board/DBB3.jpeg',
      'assets/projects/distribution-board/DBB4.jpeg',
      'assets/projects/distribution-board/DBB5.jpeg',
      'assets/projects/distribution-board/DBB6.jpeg',
      'assets/projects/distribution-board/DBB7.jpeg',
      'assets/projects/distribution-board/DBB8.jpeg',
      'assets/projects/distribution-board/DBB9.jpeg',
      'assets/projects/distribution-board/DBB10.jpeg',
      'assets/projects/distribution-board/DBB11.jpeg',
      'assets/projects/distribution-board/DBB12.jpeg',
      'assets/projects/distribution-board/DBB13.jpeg',
      'assets/projects/distribution-board/DBB14.jpeg',
      'assets/projects/distribution-board/DBB15.jpeg'
    ]
  },

  solar: {
    title: 'Solar & Backup Power',
    description: 'Solar panels, inverter wiring, backup power support and solar-ready electrical work.',
    images: [
      'assets/projects/solar/S1.jpeg',
      'assets/projects/solar/S2.jpeg',
      'assets/projects/solar/S3.jpeg',
      'assets/projects/solar/S4.jpeg',
      'assets/projects/solar/S5.jpeg',
      'assets/projects/solar/S6.jpeg',
      'assets/projects/solar/S7.jpeg',
      'assets/projects/solar/S8.jpeg',
      'assets/projects/solar/S9.jpeg',
      'assets/projects/solar/S10.jpeg',
      'assets/projects/solar/S11.jpeg',
      'assets/projects/solar/S12.jpeg',
      'assets/projects/solar/S13.jpeg'
    ]
  },

  lighting: {
    title: 'Down Lighting Installations',
    description: 'Downlights, LED fittings, ceiling lighting and practical lighting upgrades.',
    images: [
      'assets/project-downlights-1.jpeg',
      'assets/project-downlights-2.jpeg',
      'assets/project-downlights-3.jpeg'
    ]
  },

  inspection: {
    title: 'Inspection & Testing',
    description: 'Electrical inspection, testing, meter readings and fault-checking work.',
    images: [
      'assets/projects/inspection-testing/I1.jpeg',
      'assets/projects/inspection-testing/I2.jpeg',
      'assets/projects/inspection-testing/I3.jpeg',
      'assets/projects/inspection-testing/I4.jpeg'
    ]
  },

  industrialLighting: {
    title: 'Solar & Industrial Lighting',
    description: 'Solar lighting, industrial lighting and practical site lighting installations.',
    images: [
      'assets/projects/solar-industrial-lighting/SI1.jpeg',
      'assets/projects/solar-industrial-lighting/SI2.jpeg',
      'assets/projects/solar-industrial-lighting/SI3.jpeg',
      'assets/projects/solar-industrial-lighting/SI4.jpeg'
    ]
  },

  motorStarter: {
    title: 'VSD, Soft Starters & Motor Starter Work',
    description: 'VSDs, soft starters, motor starter replacement, fault finding and industrial electrical support.',
    images: [
      'assets/projects/motor-starter/V1.jpeg',
      'assets/projects/motor-starter/V2.jpeg',
      'assets/projects/motor-starter/V3.jpeg',
      'assets/projects/motor-starter/V4.jpeg',
      'assets/projects/motor-starter/V5.jpeg',
      'assets/projects/motor-starter/V6.jpeg',
      'assets/projects/motor-starter/V7.jpeg'
    ]
  }
};

const galleryCards = document.querySelectorAll('.category-card');
const galleryModal = document.getElementById('galleryModal');
const galleryTitle = document.getElementById('galleryTitle');
const galleryDescription = document.getElementById('galleryDescription');
const galleryModalGrid = document.getElementById('galleryModalGrid');
const galleryClose = document.querySelector('.gallery-close');

function openGallery(category) {
  const selectedGallery = galleryData[category];

  if (!selectedGallery || !galleryModal || !galleryTitle || !galleryDescription || !galleryModalGrid) {
    return;
  }

  galleryTitle.textContent = selectedGallery.title;
  galleryDescription.textContent = selectedGallery.description;

  galleryModalGrid.innerHTML = selectedGallery.images
    .map((image) => `<img src="${image}" alt="${selectedGallery.title} project image">`)
    .join('');

  galleryModal.classList.add('active');
  document.body.classList.add('modal-open');
}

function closeGallery() {
  if (!galleryModal) {
    return;
  }

  galleryModal.classList.remove('active');
  document.body.classList.remove('modal-open');
}

galleryCards.forEach((card) => {
  card.addEventListener('click', () => {
    openGallery(card.dataset.category);
  });
});

if (galleryClose) {
  galleryClose.addEventListener('click', closeGallery);
}

if (galleryModal) {
  galleryModal.addEventListener('click', (event) => {
    if (event.target === galleryModal) {
      closeGallery();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeGallery();
  }
});
