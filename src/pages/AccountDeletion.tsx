import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const supportEmail = 'info@morkivilcim.com';

const AccountDeletion: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    reason: '',
    confirmation: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent('DailyPositive Hesap Silme Talebi');
    const body = encodeURIComponent(
      [
        'Merhaba,',
        '',
        'DailyPositive hesabımın ve hesabıma bağlı kişisel verilerimin silinmesini talep ediyorum.',
        '',
        `Hesap e-posta adresim: ${formData.email}`,
        `Silme nedeni: ${formData.reason || 'Belirtilmedi'}`,
        '',
        'Bu talebin geri alınamaz sonuçlar doğurabileceğini ve yasal saklama zorunluluğu bulunan kayıtların yalnızca gerekli süre boyunca saklanabileceğini anlıyorum.',
        '',
        'Teşekkürler.'
      ].join('\n')
    );

    window.location.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-mor-100 font-semibold mb-3">DailyPositive</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Delete Account / Hesap Silme</h1>
            <p className="text-xl max-w-3xl mx-auto">
              DailyPositive hesabınızı ve hesabınıza bağlı uygulama verilerini silme talebinizi buradan başlatabilirsiniz.
            </p>
            <p className="text-lg mt-4 opacity-90">Son güncelleme: 13 Mayıs 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-green-900 mb-2">E-posta taslağı hazırlandı</h2>
              <p className="text-green-800">
                E-posta uygulamanız açıldıysa talebi göndermeniz yeterli. Açılmadıysa aynı bilgileri {supportEmail} adresine "DailyPositive Hesap Silme Talebi" konu satırıyla gönderebilirsiniz.
              </p>
            </div>
          )}

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-10">
            <h2 className="text-xl font-bold text-red-900 mb-3">Önemli uyarı</h2>
            <p className="text-red-800">
              Hesap silme işlemi tamamlandığında DailyPositive profiliniz, uygulama içi tercihleriniz, günlük/aktivite kayıtlarınız, favorileriniz ve hesabınızla ilişkilendirilen kişisel veriler kalıcı olarak silinir veya anonimleştirilir. İşlem tamamlandıktan sonra bu veriler geri getirilemez.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Silinecek veriler</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>DailyPositive hesap ve profil bilgileri</li>
                <li>Uygulama içi tercihler, ayarlar ve favoriler</li>
                <li>Günlük yazımı, olumlama ve meditasyon kullanım kayıtları</li>
                <li>Aktivite/ilerleme geçmişi</li>
                <li>Bildirim tercihleri ve push bildirim tokenları</li>
                <li>Hesapla ilişkilendirilen destek kayıtları</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Saklanabilecek kayıtlar</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Vergi, muhasebe veya ticari mevzuat gereği saklanması zorunlu ödeme ve işlem kayıtları</li>
                <li>Uyuşmazlık, güvenlik ve kötüye kullanım incelemeleri için gerekli sınırlı log kayıtları</li>
                <li>Hesap silme talebinin alındığını ve tamamlandığını gösteren kayıtlar</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Bu kayıtlar yalnızca yasal zorunluluk veya meşru ispat amacıyla, gerekli süre boyunca saklanır.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Süreç nasıl işler?</h2>
            <div className="space-y-5">
              {[
                ['Talep gönderme', 'Aşağıdaki form e-posta uygulamanızda hazır bir silme talebi oluşturur. Talebi gönderdikten sonra destek ekibimiz başvurunuzu alır.'],
                ['Kimlik ve hesap doğrulama', 'Talebin doğru hesaba ait olduğunu teyit etmek için kayıtlı e-posta adresiniz üzerinden ek doğrulama isteyebiliriz.'],
                ['Silme işlemi', 'Doğrulama tamamlandıktan sonra hesabınız ve ilişkili uygulama verileriniz genellikle 7-14 iş günü içinde silinir veya anonimleştirilir.'],
                ['Tamamlanma bildirimi', 'İşlem tamamlandığında kayıtlı e-posta adresiniz üzerinden bilgilendirme yapılır.']
              ].map(([title, text], index) => (
                <div key={title} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-700">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hesap silme talebi oluştur</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  DailyPositive hesabınızda kayıtlı e-posta adresi *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mor-500 focus:border-transparent"
                  placeholder="hesap@ornek.com"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                  Silme nedeni (opsiyonel)
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mor-500 focus:border-transparent"
                  placeholder="Dilerseniz hesabınızı neden silmek istediğinizi yazabilirsiniz."
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="confirmation"
                  name="confirmation"
                  checked={formData.confirmation}
                  onChange={handleChange}
                  required
                  className="mt-1 mr-3 w-4 h-4 text-mor-600 focus:ring-mor-500 border-gray-300 rounded"
                />
                <label htmlFor="confirmation" className="text-sm text-gray-700">
                  Hesabımın ve hesabıma bağlı DailyPositive verilerimin silineceğini; yasal zorunluluk nedeniyle saklanması gereken sınırlı kayıtların yalnızca gerekli süre boyunca tutulabileceğini anlıyorum. *
                </label>
              </div>

              <button
                type="submit"
                disabled={!formData.confirmation}
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                E-posta ile hesap silme talebi oluştur
              </button>
            </form>
          </div>

          <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-mor-900 mb-3">Ek bilgi</h3>
            <p className="text-mor-800 mb-4">
              Kişisel verilerinizle ilgili haklarınız ve veri işleme ayrıntıları için KVKK Aydınlatma Metni ve Gizlilik Politikası sayfalarını inceleyebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/kvkk" className="inline-block bg-mor-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-mor-700 transition-colors text-center">
                KVKK Aydınlatma Metni
              </Link>
              <Link to="/privacy-policy" className="inline-block bg-white text-mor-700 border border-mor-300 px-5 py-3 rounded-lg font-semibold hover:bg-mor-50 transition-colors text-center">
                Gizlilik Politikası
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountDeletion;
