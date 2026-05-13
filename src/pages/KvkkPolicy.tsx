import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Section = {
  id: number;
  title: string;
  content: React.ReactNode;
};

const KvkkPolicy: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([1, 2, 8]);

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
      title: 'Veri Sorumlusu',
      content: (
        <div className="space-y-4">
          <p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu Mor Kıvılcım'dır.</p>
          <p><strong>Adres:</strong> Bostancı, İstanbul, Türkiye</p>
          <p><strong>E-posta:</strong> info@morkivilcim.com</p>
          <p><strong>Telefon:</strong> 0501 127 25 33</p>
        </div>
      )
    },
    {
      id: 2,
      title: 'Aydınlatma Metninin Kapsamı',
      content: (
        <div className="space-y-4">
          <p>Bu metin; Mor Kıvılcım web sitesi, iletişim ve rezervasyon kanalları, etkinlik/atölye başvuruları, destek talepleri, DailyPositive mobil uygulaması, DailyPositive hesap işlemleri, bildirimler ve hesap silme talepleri kapsamında işlenen kişisel verilere ilişkindir.</p>
          <p>Gizlilik Politikası, Çerez Politikası ve Kullanım Şartları bu metinle birlikte değerlendirilmelidir.</p>
        </div>
      )
    },
    {
      id: 3,
      title: 'İşlenen Kişisel Veri Kategorileri',
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Kimlik ve iletişim:</strong> Ad-soyad, e-posta adresi, telefon numarası.</li>
            <li><strong>DailyPositive hesap verileri:</strong> Hesap e-postası, profil bilgileri, hesap durumu, oturum ve doğrulama kayıtları.</li>
            <li><strong>Uygulama içi veriler:</strong> Tercihler, favoriler, günlük yazımı, olumlama/meditasyon kullanım bilgileri, ilerleme ve aktivite geçmişi.</li>
            <li><strong>İşlem verileri:</strong> Rezervasyon, etkinlik/atölye başvurusu, ödeme durumu, talep ve işlem tarihleri.</li>
            <li><strong>Destek ve talep verileri:</strong> Mesaj içerikleri, destek kayıtları, hesap silme talepleri, talep sonuçlandırma bilgileri.</li>
            <li><strong>Teknik veriler:</strong> IP adresi, cihaz ve tarayıcı bilgileri, işletim sistemi, uygulama sürümü, log kayıtları, çerez ve cihaz tanımlayıcıları.</li>
            <li><strong>Bildirim verileri:</strong> Bildirim izni, push bildirim tokenları ve bildirim tercihleri.</li>
            <li><strong>Özel nitelikli veriler:</strong> Sağlık, iyi oluş veya benzeri hassas bilgiler yalnızca sizin açıkça paylaşmanız ve gerekli hukuki şartların bulunması halinde işlenir.</li>
          </ul>
        </div>
      )
    },
    {
      id: 4,
      title: 'Kişisel Verilerin İşlenme Amaçları',
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Web sitesi ve DailyPositive hizmetlerini sunmak, hesap oluşturmak ve oturum güvenliğini sağlamak.</li>
            <li>DailyPositive içinde tercihlerinizi, favorilerinizi, ilerlemenizi ve uygulama deneyiminizi kişiselleştirmek.</li>
            <li>Push bildirimleri, hesap doğrulama, destek yanıtları ve hizmet bilgilendirmeleri göndermek.</li>
            <li>Rezervasyon, etkinlik, atölye, randevu ve ödeme süreçlerini yürütmek.</li>
            <li>Hesap silme ve KVKK başvurularınızı almak, doğrulamak, sonuçlandırmak ve kayıt altına almak.</li>
            <li>Hata ayıklama, güvenlik, kötüye kullanımın önlenmesi, dolandırıcılık tespiti ve hizmet kalitesini iyileştirmek.</li>
            <li>Yasal yükümlülükleri, muhasebe/vergi süreçlerini ve uyuşmazlık yönetimini yerine getirmek.</li>
            <li>Açık rızanız varsa bülten, etkinlik duyurusu veya pazarlama iletişimi yapmak.</li>
          </ul>
        </div>
      )
    },
    {
      id: 5,
      title: 'Toplama Yöntemi ve Hukuki Sebep',
      content: (
        <div className="space-y-4">
          <p>Kişisel verileriniz; web formları, DailyPositive uygulaması, e-posta, telefon, destek kanalları, çerezler, cihaz/uygulama logları, uygulama mağazaları, ödeme altyapıları ve hizmet sağlayıcı entegrasyonları aracılığıyla elektronik veya fiziki yöntemlerle toplanabilir.</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Sözleşmenin kurulması veya ifası:</strong> Hesap oluşturma, uygulama kullanımı, rezervasyon ve hizmet sunumu.</li>
            <li><strong>Hukuki yükümlülük:</strong> Vergi, muhasebe, resmi kurum talepleri ve mevzuat gereği saklama.</li>
            <li><strong>Meşru menfaat:</strong> Güvenlik, hata ayıklama, hizmet kalitesi, kötüye kullanımın önlenmesi ve temel operasyonlar.</li>
            <li><strong>Bir hakkın tesisi, kullanılması veya korunması:</strong> Talep, itiraz, uyuşmazlık ve ispat süreçleri.</li>
            <li><strong>Açık rıza:</strong> Pazarlama iletişimi, analitik çerezler ve özel nitelikli veriler gibi rızaya bağlı işlemler.</li>
          </ul>
        </div>
      )
    },
    {
      id: 6,
      title: 'Aktarılan Taraflar ve Aktarım Amaçları',
      content: (
        <div className="space-y-4">
          <p>Kişisel verileriniz, yalnızca gerekli ve ölçülü olmak kaydıyla aşağıdaki alıcı gruplarıyla paylaşılabilir:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Barındırma ve altyapı sağlayıcıları:</strong> Web sitesi, DailyPositive API, veritabanı ve yedekleme süreçleri.</li>
            <li><strong>E-posta ve bildirim sağlayıcıları:</strong> Hesap doğrulama, destek yanıtları, sistem iletileri ve push bildirimleri.</li>
            <li><strong>Ödeme ve uygulama mağazası sağlayıcıları:</strong> Ödeme, faturalama, mağaza dağıtımı ve abonelik süreçleri varsa.</li>
            <li><strong>Analitik ve hata izleme sağlayıcıları:</strong> Hizmet kalitesini ölçmek, teknik sorunları gidermek ve güvenliği sağlamak.</li>
            <li><strong>Hukuk, muhasebe ve yetkili kamu kurumları:</strong> Yasal yükümlülükler, başvurular ve uyuşmazlık süreçleri.</li>
          </ul>
        </div>
      )
    },
    {
      id: 7,
      title: 'Yurt Dışına Aktarım',
      content: (
        <div className="space-y-4">
          <p>Kullandığımız bulut, bildirim, analitik, hata izleme, e-posta, uygulama mağazası veya ödeme hizmetlerinin sunucuları Türkiye dışında bulunabilir. Bu durumda kişisel veriler, KVKK m.9 ve ilgili mevzuatta öngörülen uygun güvenceler, sözleşmesel hükümler, Kurul kararları veya açık rıza gereklilikleri dikkate alınarak aktarılır.</p>
          <p>Yurt dışı aktarım detayları hakkında info@morkivilcim.com adresinden bilgi talep edebilirsiniz.</p>
        </div>
      )
    },
    {
      id: 8,
      title: 'Saklama ve İmha',
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>DailyPositive hesap ve uygulama verileri, hesap aktif olduğu sürece saklanır.</li>
            <li>Hesap silme talebi tamamlandığında hesap ve uygulama verileri silinir veya anonimleştirilir.</li>
            <li>Ödeme, ticari işlem, vergi ve muhasebe kayıtları ilgili mevzuatta öngörülen süreler boyunca saklanabilir.</li>
            <li>Destek ve hesap silme talebi kayıtları, talebin sonuçlandırılması ve ispat amacıyla makul süre boyunca tutulabilir.</li>
            <li>Güvenlik logları ve teknik kayıtlar, güvenlik ve kötüye kullanım incelemeleri için gerekli süreyle sınırlı saklanır.</li>
          </ul>
          <p>Saklama amacı ortadan kalktığında veriler silinir, yok edilir veya anonim hale getirilir.</p>
        </div>
      )
    },
    {
      id: 9,
      title: 'KVKK m.11 Kapsamındaki Haklarınız',
      content: (
        <div className="space-y-4">
          <p>KVKK m.11 kapsamında aşağıdaki haklara sahipsiniz:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme.</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme.</li>
            <li>İşleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme.</li>
            <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme.</li>
            <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme.</li>
            <li>KVKK kapsamında silinmesini veya yok edilmesini isteme.</li>
            <li>Düzeltme, silme veya yok etme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme.</li>
            <li>Otomatik sistemlerce analiz sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme.</li>
            <li>Kanuna aykırı işleme sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme.</li>
          </ul>
        </div>
      )
    },
    {
      id: 10,
      title: 'Başvuru Kanalları',
      content: (
        <div className="space-y-4">
          <p>KVKK haklarınız için info@morkivilcim.com adresine "KVKK Başvuru" konu satırıyla yazabilirsiniz. Başvurunuzda kimliğinizi doğrulamaya yarayacak bilgileri, talebinizi ve yanıt için tercih ettiğiniz iletişim kanalını belirtmeniz gerekir.</p>
          <p>DailyPositive hesap silme talebi için ayrıca <Link to="/dailypositive/hesap-silme" className="text-mor-600 hover:text-mor-700 underline">Delete Account / Hesap Silme</Link> sayfasını kullanabilirsiniz.</p>
          <p>Başvurularınız mevzuatta öngörülen süreler içinde değerlendirilir. Talebin niteliğine göre ek doğrulama bilgisi istenebilir.</p>
        </div>
      )
    },
    {
      id: 11,
      title: 'Güvenlik Tedbirleri',
      content: (
        <div className="space-y-4">
          <p>Kişisel verilerin korunması için erişim kontrolü, yetkilendirme, şifreleme, loglama, veri minimizasyonu, yedekleme, güvenlik izleme ve tedarikçi yönetimi gibi uygun idari ve teknik tedbirler uygulanır.</p>
          <p>İnternet üzerinden yapılan hiçbir aktarımın mutlak güvenli olduğu garanti edilemez; bu nedenle hesap bilgilerinizi ve cihaz erişiminizi korumanız önemlidir.</p>
        </div>
      )
    },
    {
      id: 12,
      title: 'Değişiklikler',
      content: (
        <div className="space-y-4">
          <p>Bu KVKK Aydınlatma Metni ihtiyaç halinde güncellenebilir. En güncel sürüm bu sayfada yayımlanır. Önemli değişikliklerde uygun kanallar üzerinden bilgilendirme yapılabilir.</p>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">KVKK Aydınlatma Metni</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Mor Kıvılcım ve DailyPositive kapsamında kişisel verilerinizin işlenmesine ilişkin bilgilendirme.
            </p>
            <p className="text-lg mt-4 opacity-90">Son güncelleme: 13 Mayıs 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Bu aydınlatma metni, KVKK'nın aydınlatma yükümlülüğü çerçevesinde veri sorumlusu, işleme amaçları, veri kategorileri, aktarım, saklama ve başvuru haklarınız hakkında şeffaf bilgi sunmak için hazırlanmıştır.
            </p>
          </div>

          <div className="bg-mor-50 border border-mor-200 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kısa Özet</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• DailyPositive hesap, uygulama, bildirim, destek ve hesap silme verileri bu metin kapsamındadır.</li>
              <li>• Veriler hizmet sunumu, güvenlik, destek, yasal yükümlülük ve açık rızaya bağlı iletişim amaçlarıyla işlenir.</li>
              <li>• Hesap silme talebi tamamlandığında DailyPositive verileri silinir veya anonimleştirilir; zorunlu kayıtlar gerekli süreyle saklanır.</li>
              <li>• KVKK m.11 kapsamındaki haklarınız için info@morkivilcim.com adresinden başvurabilirsiniz.</li>
            </ul>
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">İlgili Sayfalar</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/privacy-policy" className="inline-block bg-white border border-gray-300 text-gray-800 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
                Gizlilik Politikası
              </Link>
              <Link to="/dailypositive/hesap-silme" className="inline-block bg-white border border-gray-300 text-gray-800 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
                Delete Account
              </Link>
              <Link to="/terms-of-service" className="inline-block bg-white border border-gray-300 text-gray-800 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KvkkPolicy;
