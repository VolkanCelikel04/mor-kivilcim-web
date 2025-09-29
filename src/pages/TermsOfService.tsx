import React, { useState } from 'react';

const TermsOfService: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const sections = [
    {
      id: 1,
      title: "Tanımlar",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Şirket/İşletme:</h4>
            <p>Mor Kıvılcım, Adres: Bostancı, İstanbul, Türkiye, E-posta: info@morkiviilm.com, Tel: 0501 127 25 33</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Hizmetler:</h4>
            <p>Meditasyon içerikleri, enerji çalışmaları, atölye/etkinlikler, randevu/rezervasyon, bülten, duyuru ve benzeri dijital/çevrimdışı hizmetler.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Kullanıcı:</h4>
            <p>Siteyi ziyaret eden, kayıt olan, form dolduran veya Hizmetlerden yararlanan gerçek/tüzel kişi.</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Şartların Kapsamı ve Değişiklik",
      content: (
        <div className="space-y-4">
          <p>Mor Kıvılcım, Şartları tek taraflı olarak güncelleyebilir. En güncel sürüm sitede yayımlandığı anda yürürlüğe girer. Önemli değişiklikleri makul ölçüde bildirmek için çaba gösteririz. Kullanımın sürmesi, değişikliklerin kabulü anlamına gelir.</p>
        </div>
      )
    },
    {
      id: 3,
      title: "Uygunluk ve Hesap",
      content: (
        <div className="space-y-4">
          <p>Site ve Hizmetler, kural olarak 18 yaş ve üzeri içindir. 18 yaş altı kullanım veli/vasi onayıyla mümkündür.</p>
          <p>Hesap açılırsa, erişim bilgilerini gizli tutmak Kullanıcı'nın sorumluluğundadır. Hesap üzerinden yapılan tüm işlemler Kullanıcıya aittir.</p>
          <p>Mor Kıvılcım, uygun görmediği hesapları askıya alma veya sonlandırma hakkını saklı tutar.</p>
        </div>
      )
    },
    {
      id: 4,
      title: "İçerikler ve Fikri Mülkiyet",
      content: (
        <div className="space-y-4">
          <p>Sitedeki tüm metin, görsel, logo, ses, video, marka, tasarım ve kod dâhil içerikler Mor Kıvılcım'a veya lisans verenlerine aittir.</p>
          <p>Ön yazılı izin olmaksızın kopyalama, çoğaltma, değiştirme, dağıtma, halka iletim yasaktır.</p>
          <p>Kullanıcı tarafından gönderilen içerik/testimonial (metin, fotoğraf vb.) için Mor Kıvılcım'a dünya çapında, devredilebilir, alt lisanslanabilir, ücretsiz kullanım, çoğaltma, yayımlama ve gösterim lisansı verilir. Kişisel verileriniz Gizlilik Politikasına tabidir.</p>
        </div>
      )
    },
    {
      id: 5,
      title: "Kabul Edilebilir Kullanım",
      content: (
        <div className="space-y-4">
          <p>Kullanıcı:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Yürürlükteki mevzuata, üçüncü kişi haklarına ve genel ahlaka aykırı eylemlerde bulunamaz,</li>
            <li>Virüs, kötü amaçlı yazılım, otomatik erişim (scraping, bot vb.) veya sisteme yetkisiz giriş girişiminde bulunamaz,</li>
            <li>Hakaret, nefret söylemi, taciz, spam içerik paylaşamaz,</li>
            <li>Hizmetlerin kaynak kodunu geri mühendislik (reverse engineering) amacıyla kullanamaz.</li>
          </ul>
          <p>Aykırı kullanım tespitinde erişim sınırlanabilir, hesap kapatılabilir; hukuki ve cezai yollara başvurulabilir.</p>
        </div>
      )
    },
    {
      id: 6,
      title: "Randevu, Etkinlik ve Ödemeler",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Randevu/Etkinlik:</h4>
            <p>Rezervasyon koşulları, tarih ve kontenjanlar sitede/iletişimde belirtilir.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">İptal/Erteleme:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Kullanıcı iptali için öneri: ≥24 saat öncesine kadar ücretsiz erteleme/iptal; &lt;24 saat no-show sayılabilir.</li>
              <li>Etkinliklerde bilet/devre dışı bırakma, erteleme ve iade koşulları etkinlik sayfasında ayrıca duyurulur.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Dijital İçerik:</h4>
            <p>İndirilebilir/erişilebilir dijital içeriklerde, mevzuat gereği cayma istisnaları uygulanabilir.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Ödemeler:</h4>
            <p>Ödemeler (ör. Iyzico/Stripe vb. sağlayıcılarla) güvenli ödeme altyapısı üzerinden yapılır; kart verileri Mor Kıvılcım tarafından saklanmaz.</p>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Sağlık/Refah ve Acil Durum Uyarısı",
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="font-semibold text-yellow-800 mb-2">⚠️ Önemli Uyarı:</p>
            <p>Mor Kıvılcım'ın sunduğu meditasyon, enerji çalışmaları ve benzeri Hizmetler tıbbi/psikolojik tanı ve tedavi değildir; profesyonel sağlık hizmetlerinin alternatifi olarak kullanılmamalıdır.</p>
          </div>
          <p>Acil durumda 112'yi arayın veya en yakın sağlık kuruluşuna başvurun. Herhangi bir rahatsızlık/rahatsız edici duygu halinde çalışmayı durdurmanız ve uzman görüşü almanız önerilir.</p>
        </div>
      )
    },
    {
      id: 8,
      title: "Üçüncü Taraf Bağlantılar ve Araçlar",
      content: (
        <div className="space-y-4">
          <p>Site, üçüncü taraf web sitelerine/araçlarına yönlendirebilir (örn. rezervasyon, ödeme, analitik). Bu sitelerin içerik ve politikalarından Mor Kıvılcım sorumlu değildir; kullanım kendi koşullarına tabidir.</p>
        </div>
      )
    },
    {
      id: 9,
      title: "Gizlilik ve Çerezler",
      content: (
        <div className="space-y-4">
          <p>Kişisel verilerinizin işlenmesine ilişkin ayrıntılar Gizlilik Politikası'nda; çerez kullanım detayları Çerez Politikası'nda yer alır. KVKK ve, uygulanabiliyorsa, GDPR kapsamındaki haklarınızı kullanabilirsiniz: info@morkiviilm.com</p>
        </div>
      )
    },
    {
      id: 10,
      title: "Sorumluluk Reddi ve Sınırı",
      content: (
        <div className="space-y-4">
          <p>Site "olduğu gibi" ve "müsait oldukça" sunulur; kesintisizlik, hatasızlık, belirli amaca uygunluk garantisi verilmez.</p>
          <p>Dolaylı, sonuçsal veya kâr kaybı gibi zararlardan Mor Kıvılcım sorumlu değildir. Zorunlu tüketici mevzuatı kapsamındaki haklarınız saklıdır.</p>
          <p>Mücbir sebep (doğal afet, savaş, grev, altyapı kesintisi vb.) hallerinde sorumluluk doğmaz.</p>
        </div>
      )
    },
    {
      id: 11,
      title: "Askıya Alma ve Fesih",
      content: (
        <div className="space-y-4">
          <p>Mor Kıvılcım; Şartlara aykırılık, güvenlik riski veya hukuki zorunluluk hâllerinde Hizmetleri askıya alabilir veya sonlandırabilir. Kullanıcı da hesabını dilediği zaman kapatabilir. Fesih, yürürlükteki borç ve yükümlülükleri sona erdirmez.</p>
        </div>
      )
    },
    {
      id: 12,
      title: "Uygulanacak Hukuk ve Yetkili Mahkeme",
      content: (
        <div className="space-y-4">
          <p>Bu Şartlar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda İstanbul Merkez Mahkemeleri ve İcra Daireleri yetkilidir. Tüketici sıfatını haiz kullanıcılar, kendi yerleşim yerlerindeki Tüketici Mahkemeleri/Heyetlerine de başvurabilir.</p>
        </div>
      )
    },
    {
      id: 13,
      title: "Bildirimler ve İletişim",
      content: (
        <div className="space-y-4">
          <p>Resmî bildirimler info@morkiviilm.com adresine e-posta ile yapılabilir. Mor Kıvılcım, Kullanıcı'nın sağladığı iletişim bilgileri üzerinden bilgilendirme yapabilir (bülten için açık rıza gerekir ve her zaman vazgeçebilirsiniz).</p>
        </div>
      )
    },
    {
      id: 14,
      title: "Hükümlerin Ayrılabilirliği",
      content: (
        <div className="space-y-4">
          <p>Şartların herhangi bir hükmü geçersiz/uygulanamaz sayılırsa, kalan hükümler yürürlükte kalır.</p>
        </div>
      )
    },
    {
      id: 15,
      title: "Yürürlük",
      content: (
        <div className="space-y-4">
          <p>Bu Şartlar 29 Eylül 2025 tarihi itibarıyla yürürlüktedir ve Site'de yayımlandığı sürece geçerlidir.</p>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kullanım Şartları</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Web sitemizi ve hizmetlerimizi kullanım koşulları.
            </p>
            <p className="text-lg mt-4 opacity-90">
              Son güncelleme: 29 Eylül 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Bu Kullanım Şartları ("Şartlar"), Mor Kıvılcım tarafından işletilen web sitemiz ve ilişkili hizmetlerin ("Hizmetler") kullanım koşullarını düzenler. Siteye giren ve/veya Hizmetleri kullanan herkes ("Kullanıcı") bu Şartları okumuş, anlamış ve kabul etmiş sayılır.
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center">
              <span className="text-2xl mr-2">⚠️</span>
              Önemli Uyarı
            </h2>
            <p className="text-red-700">
              Mor Kıvılcım'ın sunduğu meditasyon, enerji çalışmaları ve benzeri hizmetler tıbbi/psikolojik tanı ve tedavi değildir. Acil durumda 112'yi arayın veya en yakın sağlık kuruluşuna başvurun.
            </p>
          </div>

          {/* Sections */}
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
                    <div className="pt-4">
                      {section.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">İletişim</h3>
            <p className="text-gray-700 mb-2">
              Kullanım şartları hakkında sorularınız için bizimle iletişime geçebilirsiniz:
            </p>
            <p className="text-gray-700">
              <strong>E-posta:</strong> info@morkiviilm.com<br />
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

