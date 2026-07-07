import { useEffect, useRef } from 'react';

/**
 * Web AdSense bileşeni.
 *
 * Canlıya almadan önce:
 * 1. Google AdSense hesabında siteyi ekleyin.
 * 2. VITE_ADSENSE_CLIENT değerini ca-pub-... formatında tanımlayın.
 * 3. Reklam birimi oluşturup VITE_ADSENSE_SLOT_BANNER değerini girin.
 * 4. public/ads.txt dosyasındaki pub-... değerini kendi yayıncı kimliğinizle değiştirin.
 */
export const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT || '';
export const ADSENSE_SLOT_BANNER = import.meta.env.VITE_ADSENSE_SLOT_BANNER || '';

const isConfigured = ADSENSE_CLIENT.startsWith('ca-pub-') && ADSENSE_SLOT_BANNER.length > 0;
const ADSENSE_SCRIPT_ID = 'google-adsense-script';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdSenseBannerProps {
  slot?: string;
  format?: string;
  className?: string;
}

export function AdSenseBanner({
  slot = ADSENSE_SLOT_BANNER,
  format = 'auto',
  className = '',
}: AdSenseBannerProps) {
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!isConfigured || !slot || pushed.current) return;

    try {
      if (!document.getElementById(ADSENSE_SCRIPT_ID)) {
        const script = document.createElement('script');
        script.id = ADSENSE_SCRIPT_ID;
        script.async = true;
        script.crossOrigin = 'anonymous';
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
        document.head.appendChild(script);
      }

      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch (err) {
      console.warn('AdSense yüklenemedi:', err);
    }
  }, [slot]);

  if (!isConfigured || !slot) {
    return (
      <div
        className={`flex items-center justify-center overflow-hidden rounded-lg border border-amber-800/25 bg-stone-900/35 text-[10px] text-amber-200/35 ${className}`}
        style={{ minHeight: 90 }}
        aria-label="Reklam alanı"
      >
        Reklam alanı
      </div>
    );
  }

  return (
    <ins
      ref={insRef}
      className={`adsbygoogle block ${className}`}
      style={{ display: 'block' }}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
