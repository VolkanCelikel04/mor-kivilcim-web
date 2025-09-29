import React, { useState } from 'react';

const CookiePolicy: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const cookieTable = [
    {
      name: "__Host-session / mkv_session",
      provider: "Mor Kıvılcım",
      purpose: "Oturumun sürdürülmesi, güvenlik",
      type: "Zorunlu",
      duration: "Oturum"
    },
    {
      name: "cookie_consent",
      provider: "Mor Kıvılcım",
      purpose: "Rıza tercihlerini saklama",
      type: "İşlevsel",
      duration: "6–12 ay"
    },
    {
      name: "_ga, _ga_*",
      provider: "Google Analytics",
      purpose: "Ziyaret & etkileşim ölçümü (IP anon.)",
      type: "Analitik",
      duration: "13 ay"
    },
    {
      name: "_gid",
      provider: "Google Analytics",
      purpose: "Günlük oturum ayrımı",
      type: "Analitik",
      duration: "24 saat"
    },
    {
      name: "_gcl_au",
      provider: "Google Ads (varsa)",
      purpose: "Dönüşüm ölçümü",
      type: "Pazarlama",
      duration: "90 gün"
    },
    {
      name: "_fbp",
      provider: "Meta Pixel (varsa)",
      purpose: "Pazarlama/yeniden hedefleme",
      type: "Pazarlama",
      duration: "90 gün"
    },
    {
      name: "_clck, _clsk",
      provider: "Microsoft Clarity/Hotjar (varsa)",
      purpose: "Isı haritası & UX analizi",
      type: "Analitik",
      duration: "13 ay / 1 gün"
    }
  ];

  const sections = [
    {
      id: 1,
      title: "Çerez nedir?",
      content: (
        <div className="space-y-4">
          <p>Çerez (cookie), bir web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük bir metin dosyasıdır. Çerezler siteyi çalıştırmak, tercihlerinizi hatırlamak, site performansını ölçmek ve (rızanız varsa) pazarlama amaçları için kullanılabilir.</p>
        </div>
      )
    },
    {
      id: 2,
      title: "Hangi tür çerezleri kullanıyoruz?",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 text-green-700">Zorunlu (Gerekli) Çerezler:</h4>
            <p>Site güvenliği ve temel işlevler için şarttır; kapatılamaz.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-blue-700">İşlevsel Çerezler (opsiyonel):</h4>
            <p>Tercihlerinizi (dil, tema vb.) hatırlar.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-orange-700">Analitik/Performans Çerezleri (rızaya bağlı):</h4>
            <p>Siteyi nasıl kullandığınızı anonim/psödonim şekilde ölçer, geliştirir.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-purple-700">Reklam/Pazarlama Çerezleri (rızaya bağlı):</h4>
            <p>İlgi alanına dayalı içerik ve kampanyalar göstermek için kullanılır.</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">
              <strong>Not:</strong> Analitik ve reklam/pazarlama çerezleri sadece açık rızanızla yerleştirilir. Rızayı dilediğiniz an geri çekebilirsiniz.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Kullandığımız çerezlere örnekler",
      content: (
        <div className="space-y-4">
          <p>Aşağıdaki tablo kullandığımız çerezlerin örneklerini göstermektedir:</p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Çerez Adı</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sağlayıcı</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Amaç</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Tür</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Süre</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cookieTable.map((cookie, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 font-mono">{cookie.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{cookie.provider}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{cookie.purpose}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        cookie.type === 'Zorunlu' ? 'bg-green-100 text-green-800' :
                        cookie.type === 'İşlevsel' ? 'bg-blue-100 text-blue-800' :
                        cookie.type === 'Analitik' ? 'bg-orange-100 text-orange-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {cookie.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">{cookie.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-600">
              <strong>Not:</strong> Bu araçları kullanmıyorsanız ilgili satırlar güncellenir. Yeni bir araç eklerken tablo güncellenir.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Çerezler aracılığıyla işlenen veriler",
      content: (
        <div className="space-y-4">
          <p>Cihaz/tarayıcı tanımlayıcısı, IP (maskelenmiş/anonimleştirilmiş), oturum bilgisi, tıklama, görüntüleme ve gezinme verileri gibi teknik veriler işlenebilir.</p>
          <p>Kişisel verilerin işlenmesi ve haklarınız için <a href="/privacy-policy" className="text-mor-600 hover:text-mor-700 underline">Gizlilik Politikası</a>'na bakınız.</p>
        </div>
      )
    },
    {
      id: 5,
      title: "Çerez ayarları ve rıza yönetimi",
      content: (
        <div className="space-y-4">
          <p>İlk ziyarette görünen çerez banner'ı üzerinden tercihlerinizi belirleyebilirsiniz.</p>
          <p>Daha sonra da sayfa altındaki "Çerez Ayarları" bağlantısından rızanızı güncelleyebilir veya geri çekebilirsiniz.</p>
          <p>Tarayıcınızın ayarlarından çerezleri silebilir/engelleyebilirsiniz; fakat zorunlu çerezler olmadan sitenin bazı bölümleri çalışmayabilir.</p>
        </div>
      )
    },
    {
      id: 6,
      title: "Üçüncü kişiler ve yurt dışına aktarım",
      content: (
        <div className="space-y-4">
          <p>Analitik, reklam ve altyapı sağlayıcılarımız (ör. Google, Meta, Microsoft, Vercel/Azure) Türkiye dışında sunucular kullanabilir. Yurt dışına aktarım, KVKK m.9 çerçevesinde uygun güvence mekanizmaları (standart sözleşme hükümleri vb.) ile yapılır.</p>
        </div>
      )
    },
    {
      id: 7,
      title: "Saklama süreleri",
      content: (
        <div className="space-y-4">
          <p>Çerez bazında tabloda belirtilen süreler geçerlidir. Süre sonunda çerez süresi dolar; yerel kayıtlarda saklanan rıza tercihleri ise "güncelleme" yapana kadar korunur.</p>
        </div>
      )
    },
    {
      id: 8,
      title: "Politika değişiklikleri",
      content: (
        <div className="space-y-4">
          <p>Bu politika zaman zaman güncellenebilir. En güncel sürümü her zaman bu sayfada bulabilirsiniz.</p>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Çerez Politikası</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Web sitemizde çerezleri ve benzer teknolojileri nasıl kullandığımızı öğrenin.
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
              Bu Çerez Politikası, Mor Kıvılcım olarak web sitemizde çerezleri ve benzer teknolojileri nasıl kullandığımızı açıklar. Bu politika, <a href="/privacy-policy" className="text-mor-600 hover:text-mor-700 underline">Gizlilik Politikası</a> ve <a href="/terms-of-service" className="text-mor-600 hover:text-mor-700 underline">Kullanım Şartları</a> ile birlikte değerlendirilmelidir.
            </p>
          </div>

          {/* Quick Summary */}
          <div className="bg-mor-50 border border-mor-200 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kısa Özet</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Zorunlu çerezler:</strong> Site çalışması için gerekli, kapatılamaz</li>
              <li>• <strong>İşlevsel çerezler:</strong> Tercihlerinizi hatırlar (opsiyonel)</li>
              <li>• <strong>Analitik çerezler:</strong> Site geliştirme için (rızaya bağlı)</li>
              <li>• <strong>Pazarlama çerezleri:</strong> Kişiselleştirilmiş içerik için (rızaya bağlı)</li>
              <li>• <strong>Rıza yönetimi:</strong> Dilediğiniz an tercihlerinizi değiştirebilirsiniz</li>
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

          {/* Cookie Settings Button */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Çerez Ayarlarınızı Yönetin</h3>
            <p className="text-gray-700 mb-4">
              Çerez tercihlerinizi istediğiniz zaman değiştirebilirsiniz.
            </p>
            <button className="bg-mor-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-mor-700 transition-colors">
              Çerez Ayarları
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">İletişim</h3>
            <p className="text-gray-700 mb-2">
              Çerez politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
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

export default CookiePolicy;
