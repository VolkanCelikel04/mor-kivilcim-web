import React from 'react';

const BodyScan: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Beden Taraması</h1>
            <p className="text-xl max-w-3xl mx-auto">
              "Yumuşama"yı Bedeninle Hatırla
            </p>
            <div className="mt-6 flex justify-center">
              <span className="bg-mor-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🧘‍♀️ Farkındalık Meditasyonu
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
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Beden taraması ve farkındalık meditasyonu"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2">TL;DR</h2>
            <p className="text-blue-700">
              Dikkati ayaktan başa gezdir; değiştirmeye çalışma—yalnızca fark et ve nefesle eşlik et.
            </p>
          </div>

          {/* Why it works */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Neden İşe Yarar?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Zihin "anlatır", beden "anlar". Tarama, beden duyumlarını görünür kılar; fark edilen gerilim zaten gevşemenin ilk adımıdır. Düzenli uygulama, gün içindeki mikro gerginlikleri daha hızlı yakalamayı öğretir.
            </p>
          </div>

          {/* Step by step */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Adım Adım (10–12 dk)</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">1 dk: Duruşu Ayarla</h3>
                  <p className="text-gray-700">Duruşu ayarla, nefesi doğal bırak.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">6–8 dk: Beden Taraması</h3>
                  <p className="text-gray-700 mb-3">Ayak tabanları → baldır → diz → kalça → karın → göğüs → omuz → boyun → yüz.</p>
                  <p className="text-gray-600 italic">Her bölgede 3 nefes kal.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">1–2 dk: Kapanış</h3>
                  <p className="text-gray-700">Genel his; teşekkür ve kapanış.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Body scan visualization */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Beden Tarama Sırası</h3>
            <div className="bg-gradient-to-b from-mor-50 to-purple-50 rounded-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">🦶</div>
                  <p className="text-sm font-semibold text-gray-700">Ayak Tabanları</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">🦵</div>
                  <p className="text-sm font-semibold text-gray-700">Baldır</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">🦴</div>
                  <p className="text-sm font-semibold text-gray-700">Diz</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">🍑</div>
                  <p className="text-sm font-semibold text-gray-700">Kalça</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">🫁</div>
                  <p className="text-sm font-semibold text-gray-700">Karın</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">💪</div>
                  <p className="text-sm font-semibold text-gray-700">Göğüs</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">🤷‍♀️</div>
                  <p className="text-sm font-semibold text-gray-700">Omuz</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">👤</div>
                  <p className="text-sm font-semibold text-gray-700">Boyun & Yüz</p>
                </div>
              </div>
            </div>
          </div>

          {/* Common mistakes */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sık Yapılan Hatalar</h2>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">"Gevşe!" Komutu</h3>
                <p className="text-red-700">Zorlama ters etki yaratır. "%2 yumuşama niyeti" de yeter.</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">Hızlı Geçiş</h3>
                <p className="text-red-700">Duyumu "yakalamak" için en az 2–3 nefes kal.</p>
              </div>
            </div>
          </div>

          {/* Daily integration */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gündelik Entegrasyon</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">💼</span>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-1">Toplantı Öncesi</h3>
                    <p className="text-green-700">90 saniye "omuz–çene–göğüs" üçgeni taraması</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🚗</span>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-1">Araba Kullanmadan Önce</h3>
                    <p className="text-green-700">"Ayak tabanları" taraması</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mor Kıvılcım note */}
          <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-mor-800 mb-3">💜 Mor Kıvılcım Notu</h3>
            <p className="text-mor-700">
              Her verişte "mor kıvılcım" o bölgenin kenarlarını yumuşatıyor gibi hayal et. Gerekirse gözleri açık uygula.
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
              <a href="/blog/uyku-meditasyonu" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">Uyku İçin Meditasyon</h4>
                <p className="text-gray-600 text-sm">Yoga Nidra'dan ilhamla</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BodyScan;
