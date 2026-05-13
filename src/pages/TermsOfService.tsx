import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Section = {
  id: number;
  title: string;
  content: React.ReactNode;
};

const TermsOfService: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([1, 2, 7]);

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const sections: Section[] = [
    {
      id: 1,
      title: 'Taraflar, Kapsam ve Kabul',
      content: (
        <div className="space-y-4">
          <p>Bu Kullanım Şartları, Mor Kıvılcım tarafından sunulan web sitesi, çevrimiçi hizmetler, iletişim ve rezervasyon kanalları ile DailyPositive mobil uygulamasının kullanım koşullarını düzenler.</p>
          <p>Siteyi, DailyPositive uygulamasını veya ilgili hizmetleri kullanan herkes bu şartları okumuş ve kabul etmiş sayılır. Bu şartları kabul etmiyorsanız hizmetleri kullanmamalısınız.</p>
          <p><strong>İletişim:</strong> Mor Kıvılcım, Bostancı, İstanbul, Türkiye, info@morkivilcim.com, 0501 127 25 33</p>
        </div>
      )
    },
    {
      id: 2,
      title: 'DailyPositive Hesabı ve Uygulama Kullanımı',
      content: (
        <div className="space-y-4">
          <p>DailyPositive hesabı oluştururken doğru ve güncel bilgi vermeniz gerekir. Hesap güvenliğinizden, cihazınıza erişimden ve hesabınız üzerinden yapılan işlemlerden siz sorumlusunuz.</p>
          <p>DailyPositive; günlük olumlamalar, meditasyon destekleri, günlük yazımı, tercih ve ilerleme özellikleri, bildirimler ve destek kanalları sunabilir. Özellikler zaman içinde değişebilir, askıya alınabilir veya geliştirilebilir.</p>
          <p>Hesabınızı dilediğiniz zaman <Link to="/dailypositive/hesap-silme" className="text-mor-600 hover:text-mor-700 underline">Delete Account / Hesap Silme</Link> sayfasından veya info@morkivilcim.com üzerinden silme talebiyle kapatabilirsiniz.</p>
        </div>
      )
    },
    {
      id: 3,
      title: 'Kullanıcı Yükümlülükleri',
      content: (
        <div className="space-y-4">
          <p>Kullanıcı, hizmetleri hukuka, iyi niyet kurallarına, üçüncü kişi haklarına ve bu şartlara uygun kullanmayı kabul eder.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Yetkisiz erişim, tersine mühendislik, güvenlik testi, bot, scraping veya hizmeti bozacak otomasyon kullanamazsınız.</li>
            <li>Hakaret, tehdit, nefret söylemi, taciz, spam, zararlı yazılım veya hukuka aykırı içerik paylaşamazsınız.</li>
            <li>Başkasına ait hesap, kimlik veya iletişim bilgilerini izinsiz kullanamazsınız.</li>
            <li>DailyPositive içinde oluşturduğunuz günlük, tercih veya benzeri içeriklerden siz sorumlusunuz.</li>
          </ul>
        </div>
      )
    },
    {
      id: 4,
      title: 'Sağlık, Refah ve Acil Durum Uyarısı',
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="font-semibold text-yellow-900 mb-2">Önemli uyarı</p>
            <p className="text-yellow-900">Mor Kıvılcım ve DailyPositive içerikleri tıbbi, psikolojik veya psikiyatrik tanı, tedavi ya da acil destek hizmeti değildir. Profesyonel sağlık hizmetlerinin yerine kullanılmamalıdır.</p>
          </div>
          <p>Kendinize veya bir başkasına zarar verme riski, panik, kriz, ağır kaygı, travma tetiklenmesi ya da acil sağlık durumu varsa 112'yi arayın veya en yakın sağlık kuruluşuna başvurun.</p>
          <p>Uygulama ya da içerikler sizde rahatsızlık yaratırsa kullanımı durdurmanız ve uygun bir uzmandan destek almanız önerilir.</p>
        </div>
      )
    },
    {
      id: 5,
      title: 'İçerik, Fikri Mülkiyet ve Lisans',
      content: (
        <div className="space-y-4">
          <p>Web sitesi, DailyPositive uygulaması, metinler, tasarımlar, logolar, görseller, yazılım, marka unsurları ve diğer içerikler Mor Kıvılcım'a veya lisans verenlerine aittir.</p>
          <p>Size, hizmetleri kişisel ve hukuka uygun kullanımınız için sınırlı, devredilemez, münhasır olmayan bir kullanım hakkı verilir. İçerikleri izinsiz kopyalayamaz, çoğaltamaz, dağıtamaz, satamaz veya ticari amaçla kullanamazsınız.</p>
          <p>DailyPositive içinde sizin oluşturduğunuz günlük notları ve benzeri kullanıcı içerikleri size aittir. Bu içerikler, hizmeti sunmak, senkronize etmek, yedeklemek, güvenliği sağlamak ve destek taleplerinizi çözmek için gerekli ölçüde işlenebilir.</p>
        </div>
      )
    },
    {
      id: 6,
      title: 'Ödemeler, Randevular ve Dijital Hizmetler',
      content: (
        <div className="space-y-4">
          <p>Mor Kıvılcım web sitesi üzerinden randevu, etkinlik, atölye veya dijital içerik sunulabilir. Ücret, kapsam, iptal, erteleme ve iade koşulları ilgili hizmet sayfasında veya iletişim kanalında ayrıca belirtilir.</p>
          <p>Ödeme alınan hizmetlerde kart bilgileri Mor Kıvılcım tarafından saklanmaz; ödeme sağlayıcısının güvenli altyapısı üzerinden işlenir. App Store veya Google Play üzerinden sunulan işlemlerde ilgili mağaza koşulları da uygulanabilir.</p>
        </div>
      )
    },
    {
      id: 7,
      title: 'Hesap Silme, Askıya Alma ve Sonlandırma',
      content: (
        <div className="space-y-4">
          <p>DailyPositive hesabınızı uygulama içinden sunulan yol, <Link to="/dailypositive/hesap-silme" className="text-mor-600 hover:text-mor-700 underline">web hesap silme sayfası</Link> veya info@morkivilcim.com üzerinden kapatmayı talep edebilirsiniz.</p>
          <p>Hesap silme talebi tamamlandığında profil, uygulama içi tercihler, günlük/aktivite kayıtları ve hesapla ilişkilendirilen kişisel veriler silinir veya anonimleştirilir. Vergi, muhasebe, uyuşmazlık, güvenlik ve yasal yükümlülük kapsamında tutulması gereken kayıtlar yalnızca gerekli süre boyunca saklanır.</p>
          <p>Mor Kıvılcım; güvenlik riski, hukuka aykırı kullanım, kötüye kullanım, teknik zorunluluk veya şartların ihlali halinde hesabı ya da hizmet erişimini askıya alabilir veya sonlandırabilir.</p>
        </div>
      )
    },
    {
      id: 8,
      title: 'Gizlilik, KVKK ve Bildirimler',
      content: (
        <div className="space-y-4">
          <p>Kişisel verilerin işlenmesine ilişkin ayrıntılar <Link to="/privacy-policy" className="text-mor-600 hover:text-mor-700 underline">Gizlilik Politikası</Link>, <Link to="/kvkk" className="text-mor-600 hover:text-mor-700 underline">KVKK Aydınlatma Metni</Link> ve <Link to="/cookie-policy" className="text-mor-600 hover:text-mor-700 underline">Çerez Politikası</Link> içinde açıklanır.</p>
          <p>DailyPositive bildirimlerini cihaz ayarlarınızdan kapatabilirsiniz. Pazarlama veya duyuru iletişimleri açık rızaya bağlıdır ve her zaman geri çekilebilir.</p>
        </div>
      )
    },
    {
      id: 9,
      title: 'Üçüncü Taraf Hizmetler',
      content: (
        <div className="space-y-4">
          <p>Hizmetler; barındırma, analitik, hata izleme, ödeme, e-posta, push bildirimleri, uygulama mağazaları veya sosyal medya bağlantıları gibi üçüncü taraf hizmetlerle çalışabilir. Bu hizmetlerin kendi koşulları ve gizlilik politikaları geçerli olabilir.</p>
          <p>Üçüncü taraf bağlantıların içeriğinden veya bu platformlardaki işlemlerden Mor Kıvılcım sorumlu değildir.</p>
        </div>
      )
    },
    {
      id: 10,
      title: 'Sorumluluğun Sınırı',
      content: (
        <div className="space-y-4">
          <p>Hizmetler "olduğu gibi" ve "müsait oldukça" sunulur. Kesintisizlik, hatasızlık, belirli bir sonuca ulaşma veya belirli bir amaca uygunluk garantisi verilmez.</p>
          <p>Zorunlu tüketici mevzuatından doğan haklarınız saklı kalmak kaydıyla, dolaylı zarar, kâr kaybı, veri kaybı, hizmet kesintisi veya üçüncü taraf işlemlerinden doğan zararlardan sorumluluk kabul edilmez.</p>
        </div>
      )
    },
    {
      id: 11,
      title: 'Değişiklikler',
      content: (
        <div className="space-y-4">
          <p>Bu şartlar zaman zaman güncellenebilir. Güncel sürüm web sitesinde yayımlandığı anda yürürlüğe girer. Önemli değişikliklerde makul yöntemlerle bilgilendirme yapılabilir.</p>
          <p>Değişikliklerden sonra hizmetleri kullanmaya devam etmeniz güncel şartları kabul ettiğiniz anlamına gelir.</p>
        </div>
      )
    },
    {
      id: 12,
      title: 'Uygulanacak Hukuk ve İletişim',
      content: (
        <div className="space-y-4">
          <p>Bu şartlar Türkiye Cumhuriyeti hukukuna tabidir. Tüketici sıfatından doğan zorunlu başvuru haklarınız saklıdır.</p>
          <p>Sorularınız için info@morkivilcim.com adresine yazabilir veya 0501 127 25 33 numarasından bize ulaşabilirsiniz.</p>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kullanım Şartları</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Mor Kıvılcım web sitesi ve DailyPositive mobil uygulaması kullanım koşulları.
            </p>
            <p className="text-lg mt-4 opacity-90">Son güncelleme: 13 Mayıs 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Bu metin, Mor Kıvılcım hizmetlerini ve DailyPositive uygulamasını güvenli, şeffaf ve hukuka uygun şekilde kullanmanız için hazırlanmıştır.
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.id} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {section.id}) {section.title}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      expandedSections.includes(section.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSections.includes(section.id) && (
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <div className="pt-4 text-gray-700">
                      {section.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">İletişim</h3>
            <p className="text-gray-700">
              <strong>E-posta:</strong> info@morkivilcim.com<br />
              <strong>Telefon:</strong> 0501 127 25 33<br />
              <strong>Adres:</strong> Bostancı, İstanbul, Türkiye
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
