(() => {
  const toast = document.querySelector('[data-toast]');
  const copyButton = document.querySelector('[data-copy-code]');
  const avatar = document.querySelector('[data-avatar]');
  const secret = document.querySelector('[data-secret]');
  const closeSecret = document.querySelector('[data-close-secret]');
  let taps = 0;
  let tapTimer;

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 1800);
  };

  copyButton?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('ONEPUNCHMARK');
      showToast('Code ONEPUNCHMARK kopiert 👊');
    } catch {
      showToast('Code: ONEPUNCHMARK');
    }
  });

  avatar?.addEventListener('click', () => {
    taps += 1;
    clearTimeout(tapTimer);
    tapTimer = setTimeout(() => taps = 0, 1800);
    if (taps >= 5) {
      secret?.classList.add('show');
      taps = 0;
    }
  });

  closeSecret?.addEventListener('click', () => secret?.classList.remove('show'));
  secret?.addEventListener('click', (event) => {
    if (event.target === secret) secret.classList.remove('show');
  });
})();
