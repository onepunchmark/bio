
const toast = document.querySelector('[data-toast]');
let toastTimer;

function showToast(message, duration = 2200) {
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), duration);
}

// Coupon
document.querySelector('[data-copy]')?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('ONEPUNCHMARK');
    showToast('⚡ Chakra aufgeladen: 15 % freigeschaltet!');
  } catch {
    showToast('Code: ONEPUNCHMARK');
  }
});

// One Punch profile Easter egg
const profile = document.querySelector('[data-profile]');
const impact = document.querySelector('[data-impact]');
let impactRunning = false;

profile?.addEventListener('click', () => {
  if (impactRunning) return;
  impactRunning = true;

  profile.classList.remove('one-punch-charge');
  void profile.offsetWidth;
  profile.classList.add('one-punch-charge');

  window.setTimeout(() => {
    impact?.classList.add('active');
    impact?.setAttribute('aria-hidden', 'false');
  }, 380);

  window.setTimeout(() => {
    impact?.classList.remove('active');
    impact?.setAttribute('aria-hidden', 'true');
    profile.classList.remove('one-punch-charge');
    impactRunning = false;
  }, 3300);
});

// Community heart rain
const heartLayer = document.querySelector('[data-heart-layer]');
const community = document.querySelector('[data-community]');

function launchHeartRain() {
  if (!heartLayer) return;
  const symbols = ['💜', '💖', '💗', '✨', '💜'];
  const amount = window.innerWidth < 500 ? 30 : 46;

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement('span');
    heart.className = 'flying-heart';
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${15 + Math.random() * 25}px`;
    heart.style.setProperty('--duration', `${3.4 + Math.random() * 3}s`);
    heart.style.setProperty('--drift', `${-80 + Math.random() * 160}px`);
    heart.style.setProperty('--spin', `${-180 + Math.random() * 360}deg`);
    heart.style.animationDelay = `${Math.random() * .9}s`;
    heartLayer.appendChild(heart);
    window.setTimeout(() => heart.remove(), 7600);
  }
  showToast('💜 Ohne euch wäre das alles nicht möglich. Danke für euren Support!', 3600);
}

community?.addEventListener('click', launchHeartRain);

// Hidden Leaf Club: tap the hidden Dragon Ball five times
const orb = document.querySelector('[data-orb]');
const clubModal = document.querySelector('[data-club-modal]');
const closeClub = document.querySelector('[data-close-club]');
let orbTaps = 0;
let orbTimer;

function openClub() {
  clubModal?.classList.add('open');
  clubModal?.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeClubModal() {
  clubModal?.classList.remove('open');
  clubModal?.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

orb?.addEventListener('click', () => {
  orbTaps += 1;
  clearTimeout(orbTimer);
  orb.style.opacity = String(Math.min(.35 + orbTaps * .13, 1));
  orb.style.transform = `scale(${1 + orbTaps * .05}) rotate(${orbTaps * 35}deg)`;

  if (orbTaps < 7) {
    showToast(`Dragon Ball Energie: ${orbTaps}/7`);
  } else {
    orbTaps = 0;
    orb.style.opacity = '';
    orb.style.transform = '';
    showToast('🍜 Geheimer Zugang freigeschaltet!');
    window.setTimeout(openClub, 420);
  }

  orbTimer = window.setTimeout(() => {
    orbTaps = 0;
    orb.style.opacity = '';
    orb.style.transform = '';
  }, 2200);
});

closeClub?.addEventListener('click', closeClubModal);
clubModal?.addEventListener('click', (event) => {
  if (event.target === clubModal) closeClubModal();
});

// Developer mode: click footer ten times
const devButton = document.querySelector('[data-dev]');
const devOverlay = document.querySelector('[data-dev-overlay]');
let devTaps = 0;
let devTimer;

devButton?.addEventListener('click', () => {
  devTaps += 1;
  clearTimeout(devTimer);

  if (devTaps === 5) showToast('Noch 5 Taps bis zum Developer Mode … 👀');

  if (devTaps >= 10) {
    devTaps = 0;
    devOverlay?.classList.remove('active');
    void devOverlay?.offsetWidth;
    devOverlay?.classList.add('active');
    devOverlay?.setAttribute('aria-hidden', 'false');
    window.setTimeout(() => {
      devOverlay?.classList.remove('active');
      devOverlay?.setAttribute('aria-hidden', 'true');
    }, 3900);
  }

  devTimer = window.setTimeout(() => { devTaps = 0; }, 1900);
});

// Keyboard accessibility
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeClubModal();
});
