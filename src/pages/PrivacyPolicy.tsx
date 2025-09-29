import React, { useState } from 'react';

const PrivacyPolicy: React.FC = () => {
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
      title: "Veri Sorumlusu ve İletişim",
      content: (
        <div className="space-y-4">
          <p><strong>Veri Sorumlusu:</strong> Mor Kıvılcım</p>
          <p><strong>Adres:</strong> Bostancı, İstanbul, Türkiye</p>
          <p><strong>E-posta:</strong> info@morkiviilm.com</p>
          <p><strong>Telefon:</strong> 0501 127 25 33</p>
          <p>Kişisel verilerinizle ilgili talepleriniz için aşağıdaki "Haklarınız ve Başvuru" bölümündeki kanalları kullanabilirsiniz.</p>
        </div>
      )
    },
    {
      id: 2,
      title: "Bu Politika Neleri Kapsar?",
      content: (
        <div className="space-y-4">
          <p>Web sitemiz, iletişim/rezervasyon formlarımız, bülten aboneliği, etkinlik kayıtları, atölye/çalışma başvuruları ve (kullanıyorsanız) mobil uygulama bildirimleri.</p>
          <p>Sosyal medya hesaplarımıza yönlenen bağlantılar bu politikaya tabi değildir; ilgili platformların kendi politikaları geçerlidir.</p>
        </div>
      )
    },
    {
      id: 3,
      title: "Topladığımız Veri Kategorileri",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Kimlik ve İletişim:</h4>
            <p>Ad-soyad, e-posta, telefon.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">İşlem Bilgisi:</h4>
            <p>Rezervasyon/etkinlik kaydı, ödeme durumu (tutar, tarih; kart bilgileri ödeme sağlayıcıda işlenir).</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">İçerik & Tercihler:</h4>
            <p>Bülten/mesajlaşma tercihleri, atölye seçimi, randevu saati.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Teknik Veriler:</h4>
            <p>IP, cihaz/çerez tanımlayıcıları, tarayıcı/OS, sayfa etkileşimi (analitik çerezler açık rızaya bağlıdır).</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Hassas/Özel Nitelikli Veriler:</h4>
            <p>Form/mesajlarda paylaşırsanız sağlık/iyilik hâli gibi veriler yalnızca açık rızanızla ve belirtilen amaçla işlenir.</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Çerezler ve Benzer Teknolojiler",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Zorunlu çerezler:</h4>
            <p>Oturum ve güvenlik (kapatılamaz).</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Analitik/performans çerezleri:</h4>
            <p>Siteyi geliştirmek için (yalnızca rızayla).</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">İşlevsel/reklam çerezleri:</h4>
            <p>Tercihler ve kampanyalar (yalnızca rızayla).</p>
          </div>
          <p>Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz. Çerez tercih paneli (varsa) üzerinden dilediğiniz an onayınızı değiştirebilirsiniz.</p>
          <div>
            <h4 className="font-semibold mb-2">Örnek çerezler (kullanıyorsanız):</h4>
            <p>_ga, _ga_* (Google Analytics – 13 ay); _gid (24 saat); __Host-* (oturum/güvenlik).</p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "İşleme Amaçlarımız",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Hizmet sunumu:</h4>
            <p>Rezervasyon/etkinlik kaydı, iletişim taleplerine dönüş, dijital içerik sağlama.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">İşletme süreçleri:</h4>
            <p>Faturalama, muhasebe, yükümlülüklere uyum.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Geliştirme ve güvenlik:</h4>
            <p>Performans/analiz, hata ayıklama, dolandırıcılık önleme.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Pazarlama (isteğe bağlı):</h4>
            <p>Bülten, etkinlik duyurusu, kampanya iletişimi (her zaman vazgeçebilirsiniz).</p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Hukuki Sebepler (KVKK m.5, m.6)",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Sözleşmenin kurulması/ifası (örn. rezervasyon işlemleri).</li>
            <li>Hukuki yükümlülüklerimizin yerine getirilmesi (muhasebe/vergi).</li>
            <li>Meşru menfaat (güvenlik, dolandırıcılık önleme, temel analitik).</li>
            <li>Açık rıza (pazarlama iletişimi, analitik çerezler, özel nitelikli veriler).</li>
          </ul>
          <p>Açık rıza geri çekilebilir; geri çekme, geçmiş işlemenin hukukiliğini etkilemez.</p>
        </div>
      )
    },
    {
      id: 7,
      title: "Veri Paylaşımı / Alıcı Grupları",
      content: (
        <div className="space-y-4">
          <p>Aşağıdaki tedarikçilerle hizmet sağlama amacıyla sınırlı ve gerekli ölçüde veri paylaşabiliriz:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Barındırma ve altyapı:</strong> Vercel/Azure</li>
            <li><strong>E-posta ve bildirim:</strong> SendGrid/FCM</li>
            <li><strong>Ödeme/Rezervasyon altyapısı:</strong> iyzico/Stripe vb.</li>
            <li><strong>Analitik ve hata izleme:</strong> Google Analytics/Sentry</li>
            <li><strong>Hukuk/muhasebe/denetim:</strong> mevzuat yükümlülükleri kapsamında.</li>
          </ul>
          <p>Bu hizmet sağlayıcılar veri işleyen sıfatıyla sözleşmeyle yükümlülük altına alınır.</p>
        </div>
      )
    },
    {
      id: 8,
      title: "Yurt Dışına Aktarım",
      content: (
        <div className="space-y-4">
          <p>Sunucularımız veya hizmet sağlayıcılarımız Türkiye dışında olabilir. Bu durumda aktarım KVKK m.9 kapsamında Kurul kararları, yeterlilik kararı veya taahhütname/özel hükümler ile gerçekleştirilir. Ayrıntı talep ederseniz size yazılı bilgi sunarız.</p>
        </div>
      )
    },
    {
      id: 9,
      title: "Saklama Süreleri",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Sözleşmesel/işlem verileri:</strong> ilgili mevzuat süreleri (örn. ticari defter/vergi yükümlülükleri).</li>
            <li><strong>İletişim/bülten verileri:</strong> üyelik/abonelik süresi + 2 yıl.</li>
            <li><strong>Analitik/çerez verileri:</strong> çerez yaşam süresi kadar (rızaya bağlı).</li>
          </ul>
          <p>Süre dolduğunda veriler silinir, anonimleştirilir veya imha edilir.</p>
        </div>
      )
    },
    {
      id: 10,
      title: "Güvenlik",
      content: (
        <div className="space-y-4">
          <p>Uygun idari ve teknik tedbirler (erişim kontrolü, şifreleme, en az veri ilkesi, loglama) uygularız. İnternet üzerinden hiçbir aktarımın %100 güvenli olmadığını hatırlatırız.</p>
        </div>
      )
    },
    {
      id: 11,
      title: "Haklarınız ve Başvuru (KVKK m.11)",
      content: (
        <div className="space-y-4">
          <p>Şunları talep edebilirsiniz:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>İşlenip işlenmediğini öğrenme ve bilgi talebi,</li>
            <li>Amacına uygun kullanılıp kullanılmadığını ve aktarım yapılan tarafları öğrenme,</li>
            <li>Eksik/yanlış ise düzeltilmesini isteme,</li>
            <li>KVKK ve ilgili mevzuata göre silme/unutulma talebi,</li>
            <li>Otomatik işleme sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz,</li>
            <li>Açık rızayı geri çekme; pazarlama iletilerini reddetme.</li>
          </ul>
          <div>
            <h4 className="font-semibold mb-2">Başvuru kanalları:</h4>
            <p><strong>E-posta:</strong> info@morkiviilm.com (konu satırı: KVKK Başvuru)</p>
            <p><strong>Posta:</strong> Bostancı, İstanbul, Türkiye</p>
          </div>
          <p>Başvurularınızı mevzuattaki süreler içinde yanıtlarız. Olumsuz yanıt almanız hâlinde KVKK Kurumu'na şikâyet hakkınız saklıdır.</p>
        </div>
      )
    },
    {
      id: 12,
      title: "Çocukların Verileri",
      content: (
        <div className="space-y-4">
          <p>Hizmetlerimiz yetişkinlere yöneliktir. 18 yaş altı kullanıcıların verileri, veli/vasi onayı olmaksızın bilerek işlenmez.</p>
        </div>
      )
    },
    {
      id: 13,
      title: "Değişiklikler",
      content: (
        <div className="space-y-4">
          <p>Bu politika güncellenebilir. En güncel sürümü her zaman bu sayfada bulabilirsiniz. Önemli değişikliklerde bildirim yaparız.</p>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gizlilik Politikası</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Kişisel verilerinizin korunması bizim için önemlidir.
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
              Bu Gizlilik Politikası, Mor Kıvılcım ("Biz") tarafından işletilen web sitemizi ve çevrimiçi hizmetlerimizi kullandığınızda kişisel verilerinizin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklar. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve ilgili mevzuata uyarız. AB/AEA'dan erişen kullanıcılar için GDPR ilkeleri de gözetilir.
            </p>
          </div>

          {/* Quick Summary */}
          <div className="bg-mor-50 border border-mor-200 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kısa Özet</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Zorunlu çerezler olmadan site çalışmaz; analitik/pazarlama çerezleri rızaya bağlıdır.</li>
              <li>• Rezervasyon ve iletişim için temel verileri alır, sadece hizmeti sağlamak için kullanırız.</li>
              <li>• Pazarlama mesajlarını dilediğiniz an iptal edebilirsiniz.</li>
              <li>• KVKK kapsamındaki haklarınız için info@morkiviilm.com adresine yazın.</li>
            </ul>
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
              Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
            </p>
            <p className="text-gray-700">
              <strong>E-posta:</strong> info@morkiviilm.com<br />
              <strong>Telefon:</strong> 0501 127 25 33
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
