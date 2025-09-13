import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-mor-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-mor-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-400 rounded-full opacity-25 animate-pulse delay-500"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-mor-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-3xl">🧘‍♀️</span>
              </div>
              <span className="text-mor-200 font-semibold text-lg">Spiritüel Rehberlik</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Hakkımızda</h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-mor-100 leading-relaxed">
              MOR Kıvılcım olarak, ruhsal dönüşüm ve enerji çalışmaları alanında 
              rehberlik sunuyor, iç dünyanızı keşfetmenizde size eşlik ediyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🌟</span>
                <h2 className="text-4xl font-bold text-gray-900">Ruhsal Yolculuğumuz</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                MOR Kıvılcım, ruhsal dönüşüm ve enerji çalışmaları alanında 
                uzmanlaşmış bir rehberlik merkezidir. İç dünyanızı keşfetmenizde 
                ve ruhsal gelişiminizde size eşlik ediyoruz.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Aile dizimi, ThetaHealing, Reiki ve meditasyon gibi çeşitli 
                spiritüel uygulamalarla, yaşamınızda pozitif dönüşümler 
                yaşamanıza yardımcı oluyoruz.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Her bireyin kendine özgü ruhsal yolculuğu olduğuna inanıyor, 
                bu yolculukta size özel rehberlik sunuyoruz.
              </p>
            </div>
            <div className="bg-gradient-to-br from-mor-50 via-purple-50 to-indigo-50 rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-mor-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🧘‍♀️</span>
                  </div>
                  <div className="text-3xl font-bold text-mor-600 mb-2">500+</div>
                  <div className="text-gray-600">Meditasyon Seansı</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🔮</span>
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                  <div className="text-gray-600">Enerji Çalışması</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-mor-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📿</span>
                  </div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">100+</div>
                  <div className="text-gray-600">Spiritüel Danışmanlık</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-mor-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌸</span>
                  </div>
                  <div className="text-3xl font-bold text-mor-600 mb-2">5+</div>
                  <div className="text-gray-600">Yıllık Deneyim</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-mor-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <span className="text-4xl mr-4">💎</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Değerlerimiz</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Spiritüel çalışmalarımızı yönlendiren temel değerlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-mor-100">
              <div className="w-20 h-20 bg-gradient-to-br from-mor-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🤲</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Şefkat ve Anlayış</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Her bireyin kendine özgü ruhsal yolculuğuna saygı duyar, 
                şefkatli bir yaklaşımla rehberlik sunuyoruz.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-mor-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Bütünsel Şifa</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Zihin, beden ve ruhun bütünsel şifasını hedefliyor, 
                enerji dengesini sağlıyoruz.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-mor-100">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-mor-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🕊️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">İç Huzur</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                İç dünyanızda huzur ve denge bulmanızı sağlayarak, 
                yaşamınızda pozitif dönüşümler yaratıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <span className="text-4xl mr-4">👥</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Spiritüel Rehberlerimiz</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deneyimli ve uzman spiritüel rehberlerimizle ruhsal yolculuğunuzda size eşlik ediyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-mor-100">
              <div className="w-32 h-32 bg-gradient-to-br from-mor-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl">🧘‍♀️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Mor Kıvılcım</h3>
              <p className="text-mor-600 mb-4 text-center font-semibold">Kurucu & Baş Spiritüel Rehber</p>
              <p className="text-gray-600 text-center leading-relaxed">
                Aile dizimi, ThetaHealing ve Reiki uzmanı. 10+ yıl spiritüel rehberlik deneyimi.
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <span className="bg-mor-100 text-mor-700 px-3 py-1 rounded-full text-sm">Aile Dizimi</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">ThetaHealing</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-mor-100">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl">🔮</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Enerji Şifacısı</h3>
              <p className="text-purple-600 mb-4 text-center font-semibold">Reiki Ustası & Enerji Terapisti</p>
              <p className="text-gray-600 text-center leading-relaxed">
                Reiki, kristal terapi ve aura temizliği uzmanı. Enerji dengesi ve şifa çalışmaları.
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Reiki</span>
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">Kristal Terapi</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-mor-100">
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-mor-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl">📿</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Meditasyon Rehberi</h3>
              <p className="text-indigo-600 mb-4 text-center font-semibold">Mindfulness & Meditasyon Uzmanı</p>
              <p className="text-gray-600 text-center leading-relaxed">
                Meditasyon, mindfulness ve nefes çalışmaları uzmanı. İç huzur ve farkındalık rehberliği.
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">Meditasyon</span>
                <span className="bg-mor-100 text-mor-700 px-3 py-1 rounded-full text-sm">Mindfulness</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;