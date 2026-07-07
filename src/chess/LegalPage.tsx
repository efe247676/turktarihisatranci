type LegalPageKind = 'privacy' | 'terms' | 'contact';

interface LegalPageProps {
  page: LegalPageKind;
  onBack: () => void;
}

const pageContent: Record<
  LegalPageKind,
  {
    title: string;
    updated: string;
    sections: Array<{ heading: string; body: string }>;
  }
> = {
  privacy: {
    title: 'Gizlilik Politikası',
    updated: 'Son güncelleme: 8 Temmuz 2026',
    sections: [
      {
        heading: 'Toplanan bilgiler',
        body: 'Türk Tarihi Satrancı üyelik gerektirmeyen bir tarayıcı oyunudur. Oyunu oynamak için ad, e-posta, telefon veya ödeme bilgisi istemeyiz.',
      },
      {
        heading: 'Çevrimiçi oyun',
        body: 'Davet bağlantısı ve oda kodu özellikleri, oyuncuları aynı maça bağlamak için kullanılır. Bu bilgiler kalıcı profil oluşturmak için kullanılmaz.',
      },
      {
        heading: 'Reklamlar ve çerezler',
        body: 'Site Google AdSense reklamları gösterebilir. Google ve iş ortakları, reklam ölçümü ve kişiselleştirme için çerez veya benzer teknolojiler kullanabilir. Kullanıcılar tarayıcı ayarlarından çerez tercihlerini yönetebilir.',
      },
      {
        heading: 'Analiz ve güvenlik',
        body: 'Hosting sağlayıcısı teknik güvenlik ve performans için IP adresi, tarayıcı türü ve hata kayıtları gibi standart günlükleri tutabilir.',
      },
      {
        heading: 'İletişim',
        body: 'Gizlilik talepleri ve sorular için iletişim sayfasındaki e-posta adresinden bize ulaşabilirsiniz.',
      },
    ],
  },
  terms: {
    title: 'Kullanım Şartları',
    updated: 'Son güncelleme: 8 Temmuz 2026',
    sections: [
      {
        heading: 'Hizmetin amacı',
        body: 'Türk Tarihi Satrancı, eğitim ve eğlence amacıyla hazırlanmış ücretsiz bir strateji oyunudur. Tarihi tema, satranç deneyimini zenginleştirmek için kullanılır.',
      },
      {
        heading: 'Kabul edilebilir kullanım',
        body: 'Oyunu kötüye kullanmak, hizmeti bozacak otomatik trafik üretmek veya diğer oyuncuların deneyimini kasıtlı olarak engellemek yasaktır.',
      },
      {
        heading: 'İçerik ve doğruluk',
        body: 'Oyundaki tarihi anlatımlar genel bilgilendirme niteliğindedir. Akademik kaynak yerine geçmez.',
      },
      {
        heading: 'Sorumluluk',
        body: 'Oyun olduğu gibi sunulur. Teknik kesinti, tarayıcı uyumsuzluğu veya üçüncü taraf hizmetlerden kaynaklanan sorunlar yaşanabilir.',
      },
    ],
  },
  contact: {
    title: 'İletişim',
    updated: 'Yanıt süresi yoğunluğa göre değişebilir.',
    sections: [
      {
        heading: 'Site sahibiyle iletişim',
        body: 'Geri bildirim, gizlilik talepleri, reklam ve iş birliği konuları için e-posta: iletisim@turktarihsatranc.com',
      },
      {
        heading: 'Hata bildirimi',
        body: 'Bir oyun hatası bildirirken cihaz türünüzü, tarayıcınızı ve hatanın hangi ekranda oluştuğunu yazmanız sorunu daha hızlı incelememize yardımcı olur.',
      },
      {
        heading: 'Reklam ve politika',
        body: 'Reklam yerleşimleri, kullanıcı deneyimini bozmayacak ve oyun kontrollerini kapatmayacak şekilde düzenlenir.',
      },
    ],
  },
};

export function LegalPage({ page, onBack }: LegalPageProps) {
  const content = pageContent[page];

  return (
    <main className="min-h-screen bg-stone-950 px-4 py-8 text-amber-50 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <button
          onClick={onBack}
          className="mb-8 rounded-lg border border-amber-700/50 bg-stone-900 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-500 hover:text-amber-300"
        >
          Ana sayfaya dön
        </button>

        <article className="rounded-lg border border-amber-900/40 bg-stone-900/70 p-6 shadow-xl sm:p-8">
          <h1 className="text-3xl font-black text-amber-100 sm:text-4xl">{content.title}</h1>
          <p className="mt-2 text-sm text-amber-200/55">{content.updated}</p>

          <div className="mt-8 space-y-7">
            {content.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-lg font-bold text-amber-200">{section.heading}</h2>
                <p className="mt-2 leading-7 text-amber-100/70">{section.body}</p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
