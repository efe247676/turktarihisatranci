import { useEffect, useRef } from 'react';

/**
 * Google AdSense reklam bileşeni (web için).
 *
 * KURULUM:
 * 1. AdSense hesabı aç: https://www.google.com/adsense
 * 2. Sitenizi ekleyin ve onay bekleyin (birkaç gün)
 * 3. Onaylandıktan sonra Publisher ID'nizi (ca-pub-XXXXX) aşağıya girin
 * 4. Reklam birimi oluşturun ve slot ID'sini girin
 * 5. index.html'deki AdSense script'i publisher ID ile güncelleyin
 */

// TODO: AdSense onayından sonra bu değerleri güncelleyin
export const ADSENSE_CLIENT = 'ca-pub-XXXXXXXXXXXXXXXX'; // Publisher ID
export const ADSENSE_SLOT_BANNER = 'XXXXXXXXXX'; // Banner reklam birimi slot ID

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdSenseBannerProps {
  /** Reklam slot ID (varsayılan: banner) */
  slot?: string;
  /** Responsive format */
  format?: string;
  /** Ekstra sınıf */
  className?: string;
  /** Test/placeholder modu — AdSense onayı gelmeden gerçek reklam yerine kutu gösterir */
  placeholder?: boolean;
}

export function AdSenseBanner({
  slot = ADSENSE_SLOT_BANNER,
  format = 'auto',
  className = '',
  placeholder = true,
}: AdSenseBannerProps) {
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    // Publisher ID henüz ayarlanmadıysa gerçek reklam yükleme
    if (ADSENSE_CLIENT.includes('XXXX')) return;
    if (pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch (err) {
      console.warn('AdSense yüklenemedi:', err);
    }
  }, []);

  // AdSense onayı gelmeden önce yer tutucu göster
  if (placeholder && ADSENSE_CLIENT.includes('XXXX')) {
    return (
      <div
        className={`flex items-center justify-center overflow-hidden rounded-lg border border-amber-800/30 bg-stone-900/50 text-[10px] text-amber-200/30 ${className}`}
        style={{ minHeight: 90 }}
        aria-hidden="true"
      >
        <span>📢 Reklam Alanı</span>
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
