import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Spiritüel Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-mor-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-mor-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-400 rounded-full opacity-25 animate-pulse delay-500"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-mor-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-2xl">🧘‍♀️</span>
                </div>
                <span className="text-mor-200 font-semibold">Spiritüel Rehberlik</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                MOR
                <span className="block text-mor-200">Kıvılcım</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-mor-100 leading-relaxed">
                İç dünyanızı keşfedin, ruhsal yolculuğunuzda rehberlik bulun. 
                Evrensel enerji ile bağlantı kurun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/spiritual-journey"
                  className="bg-gradient-to-r from-mor-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-mor-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Ruhsal Yolculuğa Başla
                </Link>
                <Link
                  to="/meditation"
                  className="border-2 border-mor-300 text-mor-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-mor-300 hover:text-white transition-all duration-300"
                >
                  Meditasyon Rehberi
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-mor-400 via-purple-500 to-indigo-600 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-30"></div>
                <div className="text-center text-white relative z-10">
                  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <span className="text-6xl">🌸</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">İç Huzur</h3>
                  <p className="text-lg opacity-90">Ruhsal Gelişim Merkezi</p>
                </div>
                {/* Floating Spiritüel Elementler */}
                <div className="absolute top-8 left-8 text-2xl opacity-60 animate-bounce">✨</div>
                <div className="absolute top-12 right-12 text-xl opacity-50 animate-pulse">🕉️</div>
                <div className="absolute bottom-16 left-16 text-xl opacity-40 animate-bounce delay-1000">🌙</div>
                <div className="absolute bottom-8 right-8 text-2xl opacity-60 animate-pulse delay-500">⭐</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritüel Hizmetler */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <span className="text-4xl mr-4">🕯️</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Spiritüel Hizmetlerimiz
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ruhsal gelişiminiz ve iç huzurunuz için özel olarak tasarlanmış programlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-mor-100">
              <div className="w-20 h-20 bg-gradient-to-br from-mor-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🧘‍♀️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Meditasyon & Mindfulness</h3>
              <p className="text-gray-600 mb-6 text-center">
                Zihninizi sakinleştirin, iç huzurunuzu bulun ve farkındalığınızı artırın.
              </p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center"><span className="text-mor-500 mr-2">✨</span> Rehberli Meditasyonlar</li>
                <li className="flex items-center"><span className="text-mor-500 mr-2">🌸</span> Mindfulness Egzersizleri</li>
                <li className="flex items-center"><span className="text-mor-500 mr-2">🕉️</span> Chakra Dengeleme</li>
                <li className="flex items-center"><span className="text-mor-500 mr-2">🌙</span> Gece Ritüelleri</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-mor-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🔮</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Enerji Çalışmaları</h3>
              <p className="text-gray-600 mb-6 text-center">
                Enerji alanınızı temizleyin, aura çalışmaları ile güçlenin.
              </p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center"><span className="text-purple-500 mr-2">⚡</span> Aura Temizliği</li>
                <li className="flex items-center"><span className="text-purple-500 mr-2">💎</span> Kristal Enerjisi</li>
                <li className="flex items-center"><span className="text-purple-500 mr-2">🔥</span> Reiki Seansları</li>
                <li className="flex items-center"><span className="text-purple-500 mr-2">🌟</span> Enerji Şifası</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-mor-100">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-mor-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">📿</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Spiritüel Danışmanlık</h3>
              <p className="text-gray-600 mb-6 text-center">
                Yaşam yolculuğunuzda rehberlik, ruhsal gelişim danışmanlığı.
              </p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center"><span className="text-indigo-500 mr-2">🗝️</span> Yaşam Yolu Analizi</li>
                <li className="flex items-center"><span className="text-indigo-500 mr-2">🦋</span> Dönüşüm Rehberliği</li>
                <li className="flex items-center"><span className="text-indigo-500 mr-2">🌱</span> Kişisel Gelişim</li>
                <li className="flex items-center"><span className="text-indigo-500 mr-2">💫</span> Ruhsal Aydınlanma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritüel İçerikler */}
      <section className="py-20 bg-gradient-to-br from-mor-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <span className="text-4xl mr-4">📚</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Spiritüel Kaynaklar
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ruhsal yolculuğunuzda size rehberlik edecek bilgiler ve pratikler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">🌅</span>
                <h3 className="text-2xl font-bold text-gray-900">Günlük Ritüeller</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Her günü anlamlı kılan, ruhunuzu besleyen günlük pratikler.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="text-mor-500 mr-3">🌅</span>
                  Sabah Meditasyonu ve Şükran Pratiği
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-mor-500 mr-3">🌿</span>
                  Doğa ile Bağlantı Kurma
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-mor-500 mr-3">📖</span>
                  Spiritüel Okuma ve Refleksiyon
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-mor-500 mr-3">🌙</span>
                  Gece Ritüeli ve Günü Kapatma
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">🔍</span>
                <h3 className="text-2xl font-bold text-gray-900">İç Keşif Yolları</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Kendinizi daha iyi tanımak ve potansiyelinizi keşfetmek için yöntemler.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="text-purple-500 mr-3">📝</span>
                  Günlük Yazma ve İç Dünya Keşfi
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-purple-500 mr-3">🎨</span>
                  Yaratıcı İfade ve Sanat Terapisi
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-purple-500 mr-3">🌊</span>
                  Duygusal Temizlik ve Şifa
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-purple-500 mr-3">🌟</span>
                  Vizyon Çalışması ve Hedef Belirleme
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram & Sosyal Medya */}
      <section className="py-20 bg-gradient-to-r from-mor-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <span className="text-4xl mr-4">📱</span>
              <h2 className="text-4xl lg:text-5xl font-bold">
                Spiritüel Topluluk
              </h2>
            </div>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Instagram'da spiritüel yolculuğumuzu paylaşıyor, topluluk oluşturuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { emoji: '🧘‍♀️', title: 'Meditasyon', desc: 'Günlük pratikler' },
              { emoji: '🌸', title: 'İç Huzur', desc: 'Sakinlik teknikleri' },
              { emoji: '🔮', title: 'Enerji', desc: 'Şifa çalışmaları' },
              { emoji: '📿', title: 'Rehberlik', desc: 'Spiritüel danışmanlık' }
            ].map((item, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-2xl p-6 text-center backdrop-blur-sm">
                <span className="text-4xl mb-4 block">{item.emoji}</span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.instagram.com/mor_kivilcim/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-mor-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-mor-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram'da Takip Et
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-mor-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="text-6xl mb-4 block">🌟</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ruhsal Yolculuğunuza Başlayın
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              İç dünyanızı keşfetmek, ruhsal gelişiminizi desteklemek için bizimle iletişime geçin.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-mor-500 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-xl hover:from-mor-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-block shadow-2xl"
          >
            Spiritüel Rehberlik Al
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;