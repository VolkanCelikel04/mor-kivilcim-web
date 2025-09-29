import React from 'react';

const Reiki: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Reiki</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Deneyim, Etik ve Beklenti Yönetimi
            </p>
            <div className="mt-6 flex justify-center">
              <span className="bg-mor-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Enerji Şifası
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Reiki enerji şifası ve meditasyon"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2">TL;DR</h2>
            <p className="text-blue-700">
              Reiki tamamlayıcı bir yaklaşımdır; tıbbi bakımın yerine geçmez. Net sınırlar ve niyet, deneyimi derinleştirir.
            </p>
          </div>

          {/* Important notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold text-yellow-800 mb-3 flex items-center">
              <span className="text-2xl mr-2">⚠️</span>
              Önemli Uyarı
            </h2>
            <p className="text-yellow-700">
              Reiki tamamlayıcı bir yaklaşımdır ve tıbbi bakımın yerine geçmez. Ciddi sağlık sorunlarınız için mutlaka profesyonel tıbbi yardım alın.
            </p>
          </div>

          {/* Before session */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Seans Öncesi</h2>
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Niyet Belirleme</h3>
                <p className="text-green-700">"Bu seansın niyeti nedir?"</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Sınırlar</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Dokunma/mesafe tercihin</li>
                  <li>• Süre</li>
                  <li>• Sessiz/rehberli akış</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Beklenti</h3>
                <p className="text-purple-700">Hedef "mucize" değil, rahatlama ve farkındalık.</p>
              </div>
            </div>
          </div>

          {/* During session */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Seans Sırasında</h2>
            <div className="space-y-6">
              <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-mor-800 mb-3">Nefesi Doğal Bırak</h3>
                <p className="text-mor-700">Bedeninde ısı/karıncalanma/duygu dalgası olabilir ya da hiçbir şey hissedilmeyebilir—ikisi de normal.</p>
              </div>
              
              <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-mor-800 mb-3">Zihin Konuşursa</h3>
                <p className="text-mor-700">"Fark ettim" de ve nefese dön.</p>
              </div>
            </div>
          </div>

          {/* After session */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sonrası</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-3">💧</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Su İç</h3>
                  <p className="text-gray-700">Bol su tüketimi önemli</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">🚶‍♀️</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Hafif Hareket</h3>
                  <p className="text-gray-700">Gün içinde hafif yürüyüş yap</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">📝</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Kısa Not</h3>
                  <p className="text-gray-700">"Şu anda kendimde ne fark ettim?"</p>
                </div>
              </div>
            </div>
          </div>

          {/* What to expect */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ne Beklenmeli?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Olası Deneyimler</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Sıcaklık hissi</li>
                  <li>• Karıncalanma</li>
                  <li>• Derin rahatlama</li>
                  <li>• Duygusal salınım</li>
                  <li>• Görsel imajlar</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Normal Durumlar</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Hiçbir şey hissetmemek</li>
                  <li>• Uykuya dalmak</li>
                  <li>• Zihnin dağılması</li>
                  <li>• Fiziksel rahatsızlık</li>
                  <li>• Duygusal yoğunluk</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Integration tips */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Entegrasyon İpuçları</h2>
            <div className="bg-gradient-to-r from-mor-50 to-purple-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🧘‍♀️</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Meditasyon</h3>
                  <p className="text-gray-600 text-sm">Günlük meditasyon pratiği</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">✍️</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Yazma</h3>
                  <p className="text-gray-600 text-sm">Deneyimleri kaydetme</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🤸‍♀️</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Egzersiz</h3>
                  <p className="text-gray-600 text-sm">Nazik somatik hareket</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mor Kıvılcım note */}
          <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-mor-800 mb-3">💜 Mor Kıvılcım Notu</h3>
            <p className="text-mor-700">
              Reiki'yi; meditasyon, yazma ve nazik somatik egzersizlerle üçlü set hâline getirmek entegrasyonu kolaylaştırır.
            </p>
          </div>

          {/* Related articles */}
          <div className="mt-16 border-t pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">İlgili Makaleler</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/blog/beden-taramasi" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">Beden Taraması</h4>
                <p className="text-gray-600 text-sm">"Yumuşama"yı bedeninle hatırla</p>
              </a>
              <a href="/blog/travma-duyarli-meditasyon" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">Travma-Duyarlı Meditasyon</h4>
                <p className="text-gray-600 text-sm">5 ilke ile güvenlik</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reiki;
