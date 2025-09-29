import React from 'react';

const WalkingMeditation: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Yürüyüş Meditasyonu</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Her Adımda Farkındalık
            </p>
            <div className="mt-6 flex justify-center">
              <span className="bg-mor-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🚶‍♀️ Hareket Meditasyonu
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
              alt="Yürüyüş meditasyonu ve doğada farkındalık"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2">TL;DR</h2>
            <p className="text-blue-700">
              20 dakikalık yürüyüşte adım-nefes senkronu ve çevresel farkındalık; sonunda tek cümlelik şükran.
            </p>
          </div>

          {/* Flow */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Akış</h2>
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Duruş</h3>
                <p className="text-green-700">Bakış 2–3 m önde, omuzlar gevşek, eller serbest.</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Ritim</h3>
                <p className="text-blue-700">2 adımda al, 2 adımda ver (parkura göre 3-3 ya da 4-4 olabilir).</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Duyular</h3>
                <p className="text-purple-700">Ayak tabanlarının zeminle teması, rüzgâr, kuş sesi, koku…</p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Zihin Dağıldıysa</h3>
                <p className="text-orange-700">"Fark ettim." Duyulara ve adıma dön.</p>
              </div>
            </div>
          </div>

          {/* Step-breath synchronization */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Adım-Nefes Senkronu</h2>
            <div className="bg-gradient-to-r from-mor-50 to-purple-50 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">👣</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">2-2 Ritim</h3>
                <p className="text-gray-600">2 adımda nefes al, 2 adımda nefes ver</p>
              </div>
              
              <div className="flex justify-center items-center space-x-4 mb-6">
                <div className="bg-blue-200 rounded-full p-4">
                  <span className="text-blue-800 font-bold">Adım 1</span>
                </div>
                <div className="bg-blue-200 rounded-full p-4">
                  <span className="text-blue-800 font-bold">Adım 2</span>
                </div>
                <span className="text-gray-500">→</span>
                <div className="bg-green-200 rounded-full p-4">
                  <span className="text-green-800 font-bold">Adım 3</span>
                </div>
                <div className="bg-green-200 rounded-full p-4">
                  <span className="text-green-800 font-bold">Adım 4</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  <strong>Mavi:</strong> Nefes al | <strong>Yeşil:</strong> Nefes ver
                </p>
              </div>
            </div>
          </div>

          {/* Sensory awareness */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Duyusal Farkındalık</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-4xl mb-3 text-center">🦶</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dokunma</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Ayak tabanlarının zemine teması</li>
                  <li>• Toprak, çim, asfalt farkı</li>
                  <li>• Sıcaklık ve doku</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-4xl mb-3 text-center">👂</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">İşitme</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Kuş sesleri</li>
                  <li>• Rüzgârın sesi</li>
                  <li>• Uzak trafik gürültüsü</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-4xl mb-3 text-center">👁️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Görme</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Renkler ve şekiller</li>
                  <li>• Işık ve gölge oyunları</li>
                  <li>• Doğa detayları</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-4xl mb-3 text-center">👃</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Koku</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Çiçek kokuları</li>
                  <li>• Toprak kokusu</li>
                  <li>• Temiz hava</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5 minute closing */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5 Dakikalık Kapanış</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-3">💓</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Nabız Düşsün</h3>
                  <p className="text-gray-700">Yavaş yürüyüş veya duruş</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">🧘‍♀️</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Kısa Beden Taraması</h3>
                  <p className="text-gray-700">Ayaklardan başa doğru hızlıca gezin</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">📝</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Günlük Not</h3>
                  <p className="text-gray-700">"Bugün benden akan şefkat neye dokundu?"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Faydaları</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">💪</div>
                <h3 className="font-semibold text-green-800 mb-2">Fiziksel</h3>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• Kardiyovasküler sağlık</li>
                  <li>• Kas güçlendirme</li>
                  <li>• Denge ve koordinasyon</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">🧠</div>
                <h3 className="font-semibold text-blue-800 mb-2">Zihinsel</h3>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• Odaklanma artışı</li>
                  <li>• Stres azalması</li>
                  <li>• Yaratıcılık artışı</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">💝</div>
                <h3 className="font-semibold text-purple-800 mb-2">Duygusal</h3>
                <ul className="text-purple-700 space-y-1 text-sm">
                  <li>• Ruh hali iyileşmesi</li>
                  <li>• Şükran duygusu</li>
                  <li>• İç huzur</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tips for different environments */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Farklı Ortamlar İçin İpuçları</h2>
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">🌳 Doğa Yürüyüşü</h3>
                <p className="text-green-700">Park, orman veya sahilde. Doğal sesler ve kokularla zenginleştirin.</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">🏙️ Şehir Yürüyüşü</h3>
                <p className="text-blue-700">Caddelerde, gürültüyü arka plan sesi olarak kabul edin.</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">🏠 Ev İçi</h3>
                <p className="text-purple-700">Küçük alanlarda dairesel yürüyüş yapabilirsiniz.</p>
              </div>
            </div>
          </div>

          {/* Mor Kıvılcım note */}
          <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-mor-800 mb-3">💜 Mor Kıvılcım Notu</h3>
            <p className="text-mor-700">
              Aynı rotayı haftada en az bir kez "sessizlik yürüyüşü" yap; bazen kulaklık-müzik yok.
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
              <a href="/blog/sukran-yazim" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">Şükran & Duygusal Yazım</h4>
                <p className="text-gray-600 text-sm">5 dakikada regülasyon</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WalkingMeditation;
