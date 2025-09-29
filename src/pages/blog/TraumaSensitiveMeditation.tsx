import React from 'react';

const TraumaSensitiveMeditation: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Travma-Duyarlı Meditasyon</h1>
            <p className="text-xl max-w-3xl mx-auto">
              5 İlke ile Güvenlik
            </p>
            <div className="mt-6 flex justify-center">
              <span className="bg-mor-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🛡️ Güvenli Pratik
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
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Travma-duyarlı meditasyon ve güvenli pratik"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2">TL;DR</h2>
            <p className="text-blue-700">
              Hızını sen belirlersin. Topraklama önce, yoğunlaşırsa durma izni hep açık.
            </p>
          </div>

          {/* Important notice */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold text-red-800 mb-3 flex items-center">
              <span className="text-2xl mr-2">⚠️</span>
              Önemli Uyarı
            </h2>
            <p className="text-red-700">
              Travma geçmişiniz varsa, meditasyon pratiğine başlamadan önce lisanslı bir terapist veya travma uzmanıyla konuşmanız önerilir.
            </p>
          </div>

          {/* 5 basic principles */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5 Temel İlke</h2>
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">1. Öznellik</h3>
                <p className="text-green-700">Zihninin ve bedeninin bugün için uygun hızını sen bilirsin.</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">2. Topraklama</h3>
                <p className="text-blue-700">Ayak tabanları, sandalye/sırt teması, odadaki üç eşyayı görme.</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">3. Pencere Yaklaşımı</h3>
                <p className="text-purple-700">Aşırı uyarılmada süreyi kısalt; gerekirse gözler açık.</p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">4. Seçim</h3>
                <p className="text-orange-700">Rehber önerir; sen seçersin. Durdurma hakkı "hep açık".</p>
              </div>
              
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-pink-800 mb-3">5. Sonrası Bakım</h3>
                <p className="text-pink-700">Su, hafif yürüyüş, kısa not; zorlanma sürerse profesyonel destek.</p>
              </div>
            </div>
          </div>

          {/* Grounding techniques */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Topraklama Teknikleri</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">🦶</div>
                <h3 className="font-semibold text-gray-900 mb-2">Ayak Teması</h3>
                <p className="text-gray-600 text-sm">Ayak tabanlarını yere bastır, zemini hisset</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">🪑</div>
                <h3 className="font-semibold text-gray-900 mb-2">Sandalye Desteği</h3>
                <p className="text-gray-600 text-sm">Sırtını sandalyeye yasla, güvenli hisset</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">👁️</div>
                <h3 className="font-semibold text-gray-900 mb-2">5-4-3-2-1</h3>
                <p className="text-gray-600 text-sm">5 görülen, 4 dokunulan, 3 duyulan, 2 koklanan, 1 tadılan</p>
              </div>
            </div>
          </div>

          {/* 8 minute safe practice */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">8 Dakikalık Güvenli Pratik</h2>
            <div className="bg-gradient-to-r from-mor-50 to-purple-50 rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🌱</span>
                    <span className="font-semibold text-gray-700">Topraklama</span>
                  </div>
                  <div className="text-sm text-gray-500 bg-green-100 px-3 py-1 rounded-full">2 dk</div>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🫁</span>
                    <span className="font-semibold text-gray-700">Nefes (4-2-6)</span>
                  </div>
                  <div className="text-sm text-gray-500 bg-blue-100 px-3 py-1 rounded-full">3 dk</div>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🧘‍♀️</span>
                    <span className="font-semibold text-gray-700">Beden Taraması</span>
                  </div>
                  <div className="text-sm text-gray-500 bg-purple-100 px-3 py-1 rounded-full">2 dk</div>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💝</span>
                    <span className="font-semibold text-gray-700">Kapanış</span>
                  </div>
                  <div className="text-sm text-gray-500 bg-pink-100 px-3 py-1 rounded-full">1 dk</div>
                </div>
              </div>
            </div>
          </div>

          {/* Window of tolerance */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tolerans Penceresi</h2>
            <div className="bg-gradient-to-r from-red-50 via-yellow-50 to-green-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-red-100 rounded-lg p-6">
                  <div className="text-3xl mb-3">📉</div>
                  <h3 className="font-semibold text-red-800 mb-2">Hipouyarılma</h3>
                  <p className="text-red-700 text-sm">Donma, uyuşma, boşluk hissi</p>
                </div>
                <div className="bg-green-100 rounded-lg p-6">
                  <div className="text-3xl mb-3">✅</div>
                  <h3 className="font-semibold text-green-800 mb-2">Tolerans Penceresi</h3>
                  <p className="text-green-700 text-sm">Güvenli, öğrenmeye açık alan</p>
                </div>
                <div className="bg-yellow-100 rounded-lg p-6">
                  <div className="text-3xl mb-3">📈</div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Hiperuyarılma</h3>
                  <p className="text-yellow-700 text-sm">Kaygı, öfke, panik</p>
                </div>
              </div>
            </div>
          </div>

          {/* Self-compassion reminder */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Şefkat Hatırlatması</h2>
            <div className="bg-mor-50 border border-mor-200 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">💜</div>
              <h3 className="text-2xl font-semibold text-mor-800 mb-4">"Bugün için bu kadar"</h3>
              <p className="text-mor-700 text-lg">
                Demeyi öğren: Şefkattir.
              </p>
            </div>
          </div>

          {/* Warning signs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Durdurma İşaretleri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Fiziksel İşaretler</h3>
                <ul className="text-red-700 space-y-2">
                  <li>• Hızlı kalp atışı</li>
                  <li>• Nefes darlığı</li>
                  <li>• Baş dönmesi</li>
                  <li>• Mide bulantısı</li>
                  <li>• Aşırı terleme</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Duygusal İşaretler</h3>
                <ul className="text-orange-700 space-y-2">
                  <li>• Yoğun kaygı</li>
                  <li>• Panik hissi</li>
                  <li>• Öfke patlaması</li>
                  <li>• Donma hissi</li>
                  <li>• Aşırı üzüntü</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mor Kıvılcım note */}
          <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-mor-800 mb-3">💜 Mor Kıvılcım Notu</h3>
            <p className="text-mor-700">
              Uyarıcı içeriklerden kaçın; kalpte mor kıvılcım görsellemesi yeterince "nötr ve nazik"tir.
            </p>
          </div>

          {/* Related articles */}
          <div className="mt-16 border-t pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">İlgili Makaleler</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/blog/444-breathing" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">4-4-4 Nefes</h4>
                <p className="text-gray-600 text-sm">2–5 dakikada sinir sistemini yatıştır</p>
              </a>
              <a href="/blog/beden-taramasi" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">Beden Taraması</h4>
                <p className="text-gray-600 text-sm">"Yumuşama"yı bedeninle hatırla</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TraumaSensitiveMeditation;
