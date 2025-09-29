import React from 'react';

const GratitudeWriting: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Şükran & Duygusal Yazım</h1>
            <p className="text-xl max-w-3xl mx-auto">
              5 Dakikada Regülasyon
            </p>
            <div className="mt-6 flex justify-center">
              <span className="bg-mor-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                ✍️ Yazı Terapisi
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
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Şükran yazımı ve duygusal ifade"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2">TL;DR</h2>
            <p className="text-blue-700">
              3 küçük iyi şeyi yaz + haftada bir kez 10 dakikalık ifade edici yazım.
            </p>
          </div>

          {/* Why it works */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Neden İşe Yarar?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Zihnin tehdit haritasını genişletmeden, "iyi olana" mikroskop tutmak sinir sistemine denge sinyali verir. Yazmak, düşünceleri bedenden güvenli bir mesafeye yerleştirir.
            </p>
          </div>

          {/* Practice */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Uygulama</h2>
            <div className="space-y-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Günlük 3'lü</h3>
                <p className="text-green-700 mb-4">Bugünün üç küçük hediyesi:</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">😊</span>
                    <span className="text-green-700">Bir tebessüm</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🌅</span>
                    <span className="text-green-700">Mor bir gökyüzü</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">☕</span>
                    <span className="text-green-700">Sıcak çay</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Haftalık 10 dk</h3>
                <p className="text-blue-700 mb-4">Zorlayıcı bir konu hakkında serbest yaz—yargısız; yayınlamak için değil, boşaltmak için.</p>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <p className="text-blue-600 italic text-sm">
                    "Bugün iş yerinde yaşadığım zorluk hakkında yazıyorum. Kendimi nasıl hissettim? Neler düşündüm? Bu deneyimden ne öğrendim?"
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Kapanış Cümlesi</h3>
                <p className="text-purple-700">"Şu anda ihtiyacım olan en şefkatli adım nedir?"</p>
              </div>
            </div>
          </div>

          {/* Writing prompts */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Yazım İpuçları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Şükran İpuçları</h3>
                <ul className="text-yellow-700 space-y-2 text-sm">
                  <li>• Bugün kiminle güzel vakit geçirdim?</li>
                  <li>• Hangi küçük an beni mutlu etti?</li>
                  <li>• Hangi zorluk bana güç verdi?</li>
                  <li>• Doğada hangi güzelliği fark ettim?</li>
                  <li>• Kendimde hangi iyi özelliği gördüm?</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Duygusal İfade İpuçları</h3>
                <ul className="text-red-700 space-y-2 text-sm">
                  <li>• Bugün en zor anım neydi?</li>
                  <li>• Hangi duygu bende yoğun?</li>
                  <li>• Neye öfkeliyim ve neden?</li>
                  <li>• Hangi korku beni rahatsız ediyor?</li>
                  <li>• Geçmişteki hangi anı bugünü etkiliyor?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common mistakes */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sık Yapılan Hatalar</h2>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">Kusursuz Yazma Takıntısı</h3>
                <p className="text-red-700">Bu terapi metni değil, "iç dökümü".</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">Çok Uzun Tutmak</h3>
                <p className="text-red-700">5–10 dakika yetiyor; düzenlilik asıl güç.</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Faydaları</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">🧠</div>
                <h3 className="font-semibold text-green-800 mb-2">Zihinsel</h3>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• Stres azalması</li>
                  <li>• Odaklanma artışı</li>
                  <li>• Problem çözme</li>
                  <li>• Yaratıcılık artışı</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">💝</div>
                <h3 className="font-semibold text-blue-800 mb-2">Duygusal</h3>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• Duygu regülasyonu</li>
                  <li>• Şükran duygusu</li>
                  <li>• Öz-farkındalık</li>
                  <li>• İç huzur</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="font-semibold text-purple-800 mb-2">Sosyal</h3>
                <ul className="text-purple-700 space-y-1 text-sm">
                  <li>• İlişki kalitesi</li>
                  <li>• Empati artışı</li>
                  <li>• İletişim becerileri</li>
                  <li>• Sosyal bağlantı</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Writing tools */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Yazım Araçları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Geleneksel</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Kağıt ve kalem</li>
                  <li>• Günlük defteri</li>
                  <li>• Not defteri</li>
                  <li>• Mektup kağıdı</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Dijital</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Not alma uygulamaları</li>
                  <li>• Google Docs</li>
                  <li>• Evernote</li>
                  <li>• Voice-to-text</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sample entries */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Örnek Girişler</h2>
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Şükran Girişi</h3>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <p className="text-green-700 italic">
                    "Bugün üç şey için şükran duyuyorum: 1) Sabah kahvemi içerken güneşin pencereden süzülmesi, 2) Arkadaşımın beni arayıp nasıl olduğumu sorması, 3) İş yerinde bir projeyi başarıyla tamamlamam. Bu küçük anlar bana huzur verdi."
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Duygusal İfade Girişi</h3>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <p className="text-blue-700 italic">
                    "Bugün toplantıda kendimi yetersiz hissettim. Öfke ve hayal kırıklığı karışık duygular yaşıyorum. Bu duyguları kabul ediyorum ve kendime şefkat gösteriyorum. Şu anda ihtiyacım olan en şefkatli adım: kendimi eleştirmek yerine, bugün yaptığım iyi şeyleri hatırlamak."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mor Kıvılcım note */}
          <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-mor-800 mb-3">💜 Mor Kıvılcım Notu</h3>
            <p className="text-mor-700">
              Bitirirken kalpte mor kıvılcımı bir nefes süre parlat; "teşekkür ederim" de.
            </p>
          </div>

          {/* Related articles */}
          <div className="mt-16 border-t pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">İlgili Makaleler</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/blog/onaylamalar" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">Onaylamalar</h4>
                <p className="text-gray-600 text-sm">Ne zaman, nasıl?</p>
              </a>
              <a href="/blog/hooponopono" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">Ho'oponopono</h4>
                <p className="text-gray-600 text-sm">Nazik onarımın dört cümlesi</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GratitudeWriting;
