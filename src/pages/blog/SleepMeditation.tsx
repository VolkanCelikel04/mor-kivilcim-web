import React from 'react';

const SleepMeditation: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Uyku İçin Meditasyon</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Yoga Nidra'dan İlhamla
            </p>
            <div className="mt-6 flex justify-center">
              <span className="bg-mor-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🌙 Uyku Hijyeni
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
              src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Uyku meditasyonu ve yoga nidra"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2">TL;DR</h2>
            <p className="text-blue-700">
              10–15 dakikalık beden taraması + nefes + nazik imgeleme, uykuya geçişi kolaylaştırabilir.
            </p>
          </div>

          {/* Evening routine */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Akşam Rutini (20–30 dk önce)</h2>
            <div className="space-y-6">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Işıkları Kıs</h3>
                <p className="text-purple-700">Ekranları kapat. Ilık duş/bitki çayı destek olabilir.</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Yatakta Sırtüstü</h3>
                <p className="text-blue-700">Topraklama—omuzlar gevşek, çene yumuşak.</p>
              </div>
            </div>
          </div>

          {/* Flow */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Akış (10–12 dk)</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3 dk: Beden Taraması</h3>
                  <p className="text-gray-700">Ayaklardan başa doğru nazikçe gezin.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3–4 dk: Nefes (4-6)</h3>
                  <p className="text-gray-700">Veriş uzun, sakin ve derin.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3–4 dk: Kalpte Mor Kıvılcım</h3>
                  <p className="text-gray-700">Işık her verişte "bir ton" kısılıyor; zihin de sönümleniyor.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visualization guide */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mor Kıvılcım Görsellemesi</h2>
            <div className="bg-gradient-to-r from-mor-50 to-purple-50 rounded-lg p-8">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-6xl mb-4">💜</div>
                  <h3 className="text-xl font-semibold text-mor-800 mb-2">Kalp Merkezinde</h3>
                  <p className="text-mor-700">Yumuşak, sıcak bir mor ışık hayal et</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl mb-2">💫</div>
                    <p className="text-sm text-gray-700">Nefes alırken parlaklaşır</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl mb-2">✨</div>
                    <p className="text-sm text-gray-700">Nefes verirken yumuşar</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl mb-2">🌙</div>
                    <p className="text-sm text-gray-700">Her nefeste biraz daha söner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Common mistakes */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sık Yapılan Hatalar</h2>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">Son Ana Kadar Telefona Bakmak</h3>
                <p className="text-red-700">Mavi ışık ritmi bozar.</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">Çabalı Uyku</h3>
                <p className="text-red-700">"Uykuyu yapmak" değil, koşullarını kurmak hedef.</p>
              </div>
            </div>
          </div>

          {/* Sleep environment tips */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Uyku Ortamı İpuçları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Oda Koşulları</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Serin sıcaklık (18-20°C)</li>
                  <li>• Karanlık ortam</li>
                  <li>• Sessizlik veya beyaz gürültü</li>
                  <li>• Rahat yatak ve yastık</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Elektronik Cihazlar</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Telefonu yatak odası dışında tut</li>
                  <li>• Mavi ışık filtresi kullan</li>
                  <li>• Bildirimleri kapat</li>
                  <li>• Uyku modu aktif et</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Night awakening */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gece Uyanırsan</h2>
            <div className="bg-mor-50 border border-mor-200 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-semibold text-mor-800 mb-3">Tavanda "Mor Kıvılcımın Yumuşak Halkası"</h3>
              <p className="text-mor-700">
                Hayal edip verişi uzat. Zorlamadan, nazikçe uykuya dön.
              </p>
            </div>
          </div>

          {/* Breathing pattern for sleep */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Uyku İçin Nefes Deseni</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🫁</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">4-6 Nefes Deseni</h3>
                <p className="text-gray-600">4 sayıda al, 6 sayıda ver</p>
              </div>
              
              <div className="flex justify-center items-center space-x-4">
                <div className="bg-blue-200 rounded-full p-4">
                  <span className="text-blue-800 font-bold">4</span>
                </div>
                <span className="text-gray-500">→</span>
                <div className="bg-purple-200 rounded-full p-4">
                  <span className="text-purple-800 font-bold">6</span>
                </div>
              </div>
              
              <p className="text-center text-gray-600 mt-4">
                Verişi uzatmak parasempatik sistemi aktive eder
              </p>
            </div>
          </div>

          {/* Mor Kıvılcım note */}
          <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-mor-800 mb-3">💜 Mor Kıvılcım Notu</h3>
            <p className="text-mor-700">
              Gece uyanırsan, tavanda "mor kıvılcımın yumuşak halkası"nı hayal edip verişi uzat.
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
              <a href="/blog/444-breathing" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">4-4-4 Nefes</h4>
                <p className="text-gray-600 text-sm">2–5 dakikada sinir sistemini yatıştır</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SleepMeditation;
