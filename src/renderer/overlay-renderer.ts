declare global {
  interface Window {
    muteBorder: {
      onMuteStateChanged: (callback: (isMuted: boolean) => void) => void;
    };
  }
}

const overlay = document.getElementById('border-overlay');
const badge = document.getElementById('muted-badge');

if (overlay && badge) {
  const platformString =
    ((navigator as any).userAgentData?.platform as string | undefined) ??
    navigator.userAgent;
  const isMac = platformString.toLowerCase().includes('mac');
  if (isMac) {
    overlay.classList.add('rounded-corners');
  }

  window.muteBorder.onMuteStateChanged((isMuted) => {
    if (isMuted) {
      overlay.classList.add('muted');
      badge.classList.add('visible');
    } else {
      overlay.classList.remove('muted');
      badge.classList.remove('visible');
    }
  });
} else {
  console.error('[Renderer] Elements not found');
}

export {};