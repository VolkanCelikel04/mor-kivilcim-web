import React from 'react';

const Affirmations: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Onaylamalar</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Ne Zaman, Nasıl?
            </p>
            <div className="mt-6 flex justify-center">
              <span className="bg-mor-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                💪 Öz-Onaylama
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
              alt="Onaylamalar ve öz-onaylama pratiği"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2">TL;DR</h2>
            <p className="text-blue-700">
              "Ben iyiyim" yerine, kendi değerlerin üzerinden öz-onaylama daha etkili olur.
            </p>
          </div>

          {/* Framework */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Çerçeve</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Onaylamanın gücü, "gerçekten inandığın" değerlerle bağ kurmasında. Zorlandığın günlerde "ben değerliyim" demek zor geliyorsa, değer mektubu yaz: "Benim için en önemli değer hangi davranışımda göründü?"
            </p>
          </div>

          {/* 10 minute practice */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">10 Dakikalık Pratik</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3 dk: Değerini Seç</h3>
                  <p className="text-gray-700">Şefkat, öğrenme, cesaret, dürüstlük, yaratıcılık...</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">5 dk: Değeri Yaşatma</h3>
                  <p className="text-gray-700">Bugün bu değeri nasıl yaşattığını yaz; 1 örnek yeter.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2 dk: Cümle Üret</h3>
                  <p className="text-gray-700">Değere uygun bir cümle üret ve gün boyunca fısılda.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Value-based affirmations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Değer-Temelli Onaylamalar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Şefkat</h3>
                <p className="text-green-700 italic">"Bugün küçük bir adım da şefkattir."</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Öğrenme</h3>
                <p className="text-blue-700 italic">"Öğrenmeye açık olmak, hatayı dönüştürür."</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Cesaret</h3>
                <p className="text-purple-700 italic">"Korku ile birlikte adım atabilirim."</p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Dürüstlük</h3>
                <p className="text-orange-700 italic">"Kendime karşı dürüst olmak güç verir."</p>
              </div>
            </div>
          </div>

          {/* Personal values exercise */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kişisel Değerler Egzersizi</h2>
            <div className="bg-gradient-to-r from-mor-50 to-purple-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hangi Değerler Seni Tanımlar?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl mb-2">💝</div>
                  <p className="text-sm font-semibold text-gray-700">Şefkat</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl mb-2">🎓</div>
                  <p className="text-sm font-semibold text-gray-700">Öğrenme</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl mb-2">🦁</div>
                  <p className="text-sm font-semibold text-gray-700">Cesaret</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl mb-2">🎨</div>
                  <p className="text-sm font-semibold text-gray-700">Yaratıcılık</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl mb-2">🤝</div>
                  <p className="text-sm font-semibold text-gray-700">Adalet</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl mb-2">🌱</div>
                  <p className="text-sm font-semibold text-gray-700">Büyüme</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl mb-2">⚖️</div>
                  <p className="text-sm font-semibold text-gray-700">Dürüstlük</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl mb-2">🌟</div>
                  <p className="text-sm font-semibold text-gray-700">Mükemmellik</p>
                </div>
              </div>
            </div>
          </div>

          {/* When to use */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ne Zaman Kullanılır?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Sabah Rutini</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Gün başlangıcında niyet belirleme</li>
                  <li>• Güne pozitif başlama</li>
                  <li>• Hedef odaklı düşünme</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Zor Anlarda</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Stresli durumlarda</li>
                  <li>• Özgüven düşüklüğünde</li>
                  <li>• Değişim süreçlerinde</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common mistakes */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sık Yapılan Hatalar</h2>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">Gerçeklikten Kopuk Cümleler</h3>
                <p className="text-red-700">Zihin itiraz eder. Değer-temelli cümleler daha inandırıcıdır.</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">Çokluk</h3>
                <p className="text-red-700">1–2 cümle seç, gün boyu aynılarını kullan.</p>
              </div>
            </div>
          </div>

          {/* How to create effective affirmations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Etkili Onaylama Oluşturma</h2>
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Doğru Yaklaşım</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Kişisel değerlerinle uyumlu</li>
                  <li>• Mevcut durumunu kabul eden</li>
                  <li>• Pozitif ve yapıcı</li>
                  <li>• Şimdiki zaman kullanımı</li>
                  <li>• Kısa ve net</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Kaçınılacak Yaklaşım</h3>
                <ul className="text-red-700 space-y-2">
                  <li>• Gerçekçi olmayan iddialar</li>
                  <li>• Gelecek zaman kullanımı</li>
                  <li>• Olumsuz kelimeler</li>
                  <li>• Çok uzun cümleler</li>
                  <li>• Başkalarıyla karşılaştırma</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Örnekler</h2>
            <div className="space-y-6">
              <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-mor-800 mb-3">Şefkat Değeri</h3>
                <div className="space-y-3">
                  <p className="text-mor-700 italic">"Bugün kendime şefkat gösterebilirim."</p>
                  <p className="text-mor-700 italic">"Küçük adımlar da değerlidir."</p>
                  <p className="text-mor-700 italic">"Hata yapmak öğrenmenin bir parçasıdır."</p>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Cesaret Değeri</h3>
                <div className="space-y-3">
                  <p className="text-blue-700 italic">"Korku ile birlikte ilerleyebilirim."</p>
                  <p className="text-blue-700 italic">"Yeni deneyimlere açığım."</p>
                  <p className="text-blue-700 italic">"Güçlü yanlarımı kullanabilirim."</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mor Kıvılcım note */}
          <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-mor-800 mb-3">💜 Mor Kıvılcım Notu</h3>
            <p className="text-mor-700">
              Onaylamayı "bedende" tut: cümleyi kalp çevresinde bir mor halka gibi dolaştır.
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

export default Affirmations;
