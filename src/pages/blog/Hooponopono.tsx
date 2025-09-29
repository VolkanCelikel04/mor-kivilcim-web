import React from 'react';

const Hooponopono: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ho'oponopono</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Nazik Onarımın Dört Cümlesi
            </p>
            <div className="mt-6 flex justify-center">
              <span className="bg-mor-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                💝 Şifa Teknikleri
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
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Ho'oponopono şifa ve onarım pratiği"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2">TL;DR</h2>
            <p className="text-blue-700">
              "Özür dilerim. Lütfen beni affet. Teşekkür ederim. Seni seviyorum."—kalp çevresinde, nefesle birlikte.
            </p>
          </div>

          {/* Short frame */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kısa Çerçeve</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ho'oponopono, ilişkileri ve iç dünyayı "uyum" hâline getirme niyetiyle yapılan bir onarım pratiği. Modern bireysel versiyonlarında dört cümle içe doğru söylenir.
            </p>
          </div>

          {/* The four sentences */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dört Cümle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-3">1. Özür Dilerim</h3>
                <p className="text-red-700">Farkında olmadan yarattığım acıyı kabul ediyorum.</p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">2. Lütfen Beni Affet</h3>
                <p className="text-orange-700">İçimdeki kırılgan parçayı şefkatle kucaklıyorum.</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">3. Teşekkür Ederim</h3>
                <p className="text-green-700">Bu deneyimin bana öğrettiği dersi takdir ediyorum.</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">4. Seni Seviyorum</h3>
                <p className="text-purple-700">Sevgiyle bağ kuruyorum ve şifayı davet ediyorum.</p>
              </div>
            </div>
          </div>

          {/* 7 minute practice */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">7 Dakikalık Uygulama</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">1 dk: Hazırlık</h3>
                  <p className="text-gray-700">Kalp çevresine nazik dikkat.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">4 dk: Dört Cümle</h3>
                  <p className="text-gray-700 mb-3">Her cümleyi bir nefesle eşleştir:</p>
                  <ul className="text-gray-600 space-y-1 ml-4">
                    <li>• Alırken içinden söyle</li>
                    <li>• Verirken yankısını dinle</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2 dk: Kapanış</h3>
                  <p className="text-gray-700">Sessiz kalp dinleme ve kapanış.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Breathing pattern visualization */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nefes-Cümle Eşleştirmesi</h3>
            <div className="bg-gradient-to-r from-mor-50 to-purple-50 rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💔</span>
                    <span className="font-semibold text-gray-700">Özür dilerim</span>
                  </div>
                  <div className="text-sm text-gray-500">Nefes al</div>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🤲</span>
                    <span className="font-semibold text-gray-700">Lütfen beni affet</span>
                  </div>
                  <div className="text-sm text-gray-500">Nefes al</div>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🙏</span>
                    <span className="font-semibold text-gray-700">Teşekkür ederim</span>
                  </div>
                  <div className="text-sm text-gray-500">Nefes al</div>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💝</span>
                    <span className="font-semibold text-gray-700">Seni seviyorum</span>
                  </div>
                  <div className="text-sm text-gray-500">Nefes al</div>
                </div>
              </div>
            </div>
          </div>

          {/* Common mistakes */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sık Yapılan Hatalar</h2>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">Kendini Zorlayarak Affetmeye Çalışma</h3>
                <p className="text-red-700">Niyet yeter; süreç zaman alabilir.</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">"Bir Turda Bitmeli" Beklentisi</h3>
                <p className="text-red-700">Onarım, tekrar eden bir ilişki hâlidir.</p>
              </div>
            </div>
          </div>

          {/* When to use */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ne Zaman Kullanılır?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">İç Çatışmalar</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Kendine karşı öfke</li>
                  <li>• Geçmişe takılma</li>
                  <li>• Suçluluk duyguları</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">İlişki Sorunları</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Aile içi gerginlik</li>
                  <li>• Arkadaşlık sorunları</li>
                  <li>• İş yerinde çatışma</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mor Kıvılcım note */}
          <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-mor-800 mb-3">💜 Mor Kıvılcım Notu</h3>
            <p className="text-mor-700">
              Cümleleri bir kişiye, bir olaya ya da yalnızca içindeki kırılgan parçaya yöneltebilirsin. Kalp bölgesindeki "mor kıvılcım"ı referans al.
            </p>
          </div>

          {/* Related articles */}
          <div className="mt-16 border-t pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">İlgili Makaleler</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/blog/sukran-yazim" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">Şükran & Duygusal Yazım</h4>
                <p className="text-gray-600 text-sm">5 dakikada regülasyon</p>
              </a>
              <a href="/blog/onaylamalar" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">Onaylamalar</h4>
                <p className="text-gray-600 text-sm">Ne zaman, nasıl?</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hooponopono;
