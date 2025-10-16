import React, { useState } from 'react';

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
    // Prosedür burada çalıştırılacak
    console.log('Hesap silme talebi:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white min-h-screen">
        <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Talebiniz Alındı</h1>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hesap Silme Talebiniz Alındı</h2>
              <p className="text-gray-700 mb-6">
                Talebiniz {formData.email} adresine gönderilmiştir. En kısa sürede işleme alınacaktır.
              </p>
              <p className="text-gray-600 text-sm">
                İşlem süresi: 7-14 iş günü
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hesap İşlemleri</h1>
            <p className="text-xl max-w-3xl mx-auto">
              DailyPositive - Hesap Silme Talebi
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Important Notice */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-red-800 mb-3 flex items-center">
              <span className="text-2xl mr-2">⚠️</span>
              Önemli Uyarı
            </h2>
            <p className="text-red-700">
              Hesabınızı sildiğinizde, tüm verileriniz kalıcı olarak silinecektir. Bu işlem geri alınamaz.
            </p>
          </div>

          {/* Process Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hesap Silme Süreci</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Talep Oluşturma</h3>
                  <p className="text-gray-700">Aşağıdaki formu doldurun ve talebinizi gönderin.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">İnceleme</h3>
                  <p className="text-gray-700">Talebiniz destek ekibimiz tarafından incelenecektir (3-5 iş günü).</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Onay E-postası</h3>
                  <p className="text-gray-700">E-posta adresinize bir onay linki gönderilecektir.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Hesap Silme</h3>
                  <p className="text-gray-700">Onayladıktan sonra hesabınız ve verileriniz 7-14 iş günü içinde silinecektir.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Silinecek Veriler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Kalıcı Olarak Silinecek:</h3>
                <ul className="text-red-700 space-y-2">
                  <li>• Kullanıcı profil bilgileri</li>
                  <li>• Uygulama içi içerikler ve kayıtlar</li>
                  <li>• Tercihler ve ayarlar</li>
                  <li>• Günlük ve aktivite geçmişi</li>
                  <li>• İletişim bilgileri</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Yasal Saklama Gerekliliği:</h3>
                <ul className="text-yellow-700 space-y-2">
                  <li>• Ödeme kayıtları (vergi mevzuatı gereği 10 yıl)</li>
                  <li>• Ticari kayıtlar (yasal yükümlülükler)</li>
                  <li>• Güvenlik logları (30 gün)</li>
                </ul>
                <p className="text-yellow-600 text-sm mt-3">
                  Bu veriler yasal saklama süreleri sonunda otomatik olarak silinecektir.
                </p>
              </div>
            </div>
          </div>

          {/* Deletion Form */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hesap Silme Talebi Oluştur</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-posta Adresi *
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
                <p className="text-sm text-gray-500 mt-1">
                  DailyPositive hesabınızda kayıtlı e-posta adresinizi girin.
                </p>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                  Silme Nedeni (Opsiyonel)
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mor-500 focus:border-transparent"
                  placeholder="Hesabınızı neden silmek istediğinizi belirtebilirsiniz (zorunlu değil)"
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
                  Hesabımın ve tüm verilerimin kalıcı olarak silineceğini ve bu işlemin geri alınamayacağını anlıyorum ve onaylıyorum. *
                </label>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-700 text-sm">
                  <strong>Not:</strong> Talep gönderdikten sonra e-posta adresinize bir onay linki gönderilecektir. İşlemi tamamlamak için bu linke tıklamanız gerekmektedir.
                </p>
              </div>

              <button
                type="submit"
                disabled={!formData.confirmation}
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Hesap Silme Talebi Gönder
              </button>
            </form>
          </div>

          {/* Support Section */}
          <div className="mt-12 bg-mor-50 border border-mor-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-mor-800 mb-3">Yardıma mı ihtiyacınız var?</h3>
            <p className="text-mor-700 mb-4">
              Hesap silme işlemi hakkında sorularınız varsa, lütfen destek ekibimizle iletişime geçin.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-mor-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-mor-700 transition-colors"
            >
              İletişime Geç
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountDeletion;
