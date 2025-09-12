import React from 'react';

const SpiritualJourney: React.FC = () => {
  const journeySteps = [
    {
      step: 1,
      title: 'Farkındalık',
      icon: '🌱',
      description: 'İç dünyanızı keşfetmeye başlayın, duygularınızı ve düşüncelerinizi gözlemleyin.',
      practices: ['Günlük meditasyon', 'Mindful nefes alma', 'Duygu takibi', 'Düşünce gözlemi'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      step: 2,
      title: 'Temizlik',
      icon: '🧹',
      description: 'Enerji alanınızı temizleyin, geçmişten gelen blokajları çözün.',
      practices: ['Enerji temizliği', 'Aura temizleme', 'Kristal şifa', 'Ritüel banyolar'],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      step: 3,
      title: 'Dengeleme',
      icon: '⚖️',
      description: 'Chakra sisteminizi dengeleyin, enerji akışını optimize edin.',
      practices: ['Chakra meditasyonu', 'Kristal dengeleme', 'Reiki seansları', 'Enerji çalışması'],
      color: 'from-purple-400 to-violet-500'
    },
    {
      step: 4,
      title: 'Güçlendirme',
      icon: '💪',
      description: 'Ruhsal gücünüzü artırın, koruma alanınızı güçlendirin.',
      practices: ['Enerji koruması', 'Aura güçlendirme', 'Ruhsal kalkan', 'Pozitif enerji'],
      color: 'from-orange-400 to-red-500'
    },
    {
      step: 5,
      title: 'Bağlantı',
      icon: '🌟',
      description: 'Evrensel enerjilerle bağlantı kurun, rehberlik alın.',
      practices: ['Spiritüel rehberlik', 'Meditasyon', 'Doğa bağlantısı', 'Kozmik enerji'],
      color: 'from-yellow-400 to-amber-500'
    },
    {
      step: 6,
      title: 'Aydınlanma',
      icon: '✨',
      description: 'İç ışığınızı keşfedin, ruhsal potansiyelinizi açığa çıkarın.',
      practices: ['İç keşif', 'Ruhsal gelişim', 'Yaratıcılık', 'Sezgisel güç'],
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  const chakras = [
    { name: 'Kök Chakra', color: 'bg-red-500', location: 'Omurga tabanı', element: 'Toprak', emoji: '🔴' },
    { name: 'Sakral Chakra', color: 'bg-orange-500', location: 'Alt karın', element: 'Su', emoji: '🟠' },
    { name: 'Solar Plexus', color: 'bg-yellow-500', location: 'Üst karın', element: 'Ateş', emoji: '🟡' },
    { name: 'Kalp Chakra', color: 'bg-green-500', location: 'Göğüs', element: 'Hava', emoji: '🟢' },
    { name: 'Boğaz Chakra', color: 'bg-blue-500', location: 'Boğaz', element: 'Eter', emoji: '🔵' },
    { name: 'Üçüncü Göz', color: 'bg-indigo-500', location: 'Alın', element: 'Işık', emoji: '🟣' },
    { name: 'Taç Chakra', color: 'bg-purple-500', location: 'Tepe', element: 'Düşünce', emoji: '⚪' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-mor-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="text-5xl mr-4">🦋</span>
              <h1 className="text-4xl md:text-6xl font-bold">Spiritüel Yolculuk</h1>
            </div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8">
              Ruhsal gelişiminizin her aşamasında size rehberlik edecek, 
              dönüştürücü bir yolculuğa hazır mısınız?
            </p>
            <div className="flex justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-2">🌱</span>
                <span>Büyüme</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🔄</span>
                <span>Dönüşüm</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">✨</span>
                <span>Aydınlanma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Yolculuk Aşamaları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her adım, ruhsal gelişiminizde yeni bir kapı açacak
            </p>
          </div>

          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className={`w-32 h-32 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl`}>
                    <span className="text-4xl">{step.icon}</span>
                  </div>
                  
                  <div className="flex-1 bg-white rounded-3xl p-8 shadow-xl">
                    <div className="flex items-center mb-4">
                      <span className="bg-mor-100 text-mor-600 px-4 py-2 rounded-full font-bold text-lg mr-4">
                        Adım {step.step}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-lg mb-6">
                      {step.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="text-mor-500 mr-2">✨</span>
                        Pratikler:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.practices.map((practice, practiceIndex) => (
                          <div key={practiceIndex} className="flex items-center text-gray-700">
                            <svg className="w-4 h-4 text-mor-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {practice}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connection Line */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute left-16 top-32 w-1 h-12 bg-gradient-to-b from-mor-300 to-purple-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chakras Section */}
      <section className="py-20 bg-gradient-to-br from-mor-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Chakra Sistemi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enerji merkezlerinizi tanıyın ve dengeleyin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {chakras.map((chakra, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 ${chakra.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-2xl">{chakra.emoji}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {chakra.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {chakra.location}
                  </p>
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {chakra.element}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meditation Guide */}
      <section className="py-20 bg-gradient-to-r from-mor-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Başlangıç Meditasyonu
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Spiritüel yolculuğunuza başlamak için basit bir meditasyon rehberi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">🧘‍♀️</span>
                <h3 className="text-2xl font-bold mb-2">Hazırlık</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li>• Rahat bir pozisyon alın</li>
                <li>• Gözlerinizi kapatın</li>
                <li>• Derin nefes alın</li>
                <li>• Zihninizi boşaltın</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">🌬️</span>
                <h3 className="text-2xl font-bold mb-2">Nefes</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li>• 4 saniye nefes alın</li>
                <li>• 4 saniye tutun</li>
                <li>• 4 saniye verin</li>
                <li>• Ritmi koruyun</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">✨</span>
                <h3 className="text-2xl font-bold mb-2">Farkındalık</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li>• Duygularınızı gözlemleyin</li>
                <li>• Düşünceleri serbest bırakın</li>
                <li>• İç huzuru hissedin</li>
                <li>• Anın tadını çıkarın</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-mor-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-mor-50 transition-all duration-300 transform hover:scale-105">
              Meditasyon Rehberini İndir
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-mor-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="text-6xl mb-4 block">🦋</span>
            <h2 className="text-4xl font-bold mb-4">
              Yolculuğunuza Başlayın
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Spiritüel gelişiminizde size rehberlik etmek için buradayız. 
              İlk adımı birlikte atalım.
            </p>
          </div>
          <button className="bg-gradient-to-r from-mor-500 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-xl hover:from-mor-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-block shadow-2xl">
            Kişisel Rehberlik Al
          </button>
        </div>
      </section>
    </div>
  );
};

export default SpiritualJourney;
