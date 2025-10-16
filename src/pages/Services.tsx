import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();
  
  const spiritualServices = [
    {
      title: 'Meditasyon & Mindfulness',
      description: 'Zihninizi sakinleştirin, iç huzurunuzu bulun ve farkındalığınızı artırın.',
      icon: '🧘‍♀️',
      color: 'from-mor-400 to-purple-500',
      features: [
        'Rehberli Meditasyon Seansları',
        'Mindfulness Egzersizleri',
        'Nefes Alma Teknikleri',
        'Zihin Sakinleştirme Pratikleri',
        'Günlük Meditasyon Rutinleri'
      ],
      benefits: ['Stres Azaltma', 'Odaklanma Artışı', 'İç Huzur', 'Duygusal Denge']
    },
    {
      title: 'Enerji Şifası & Reiki',
      description: 'Enerji alanınızı temizleyin, aura çalışmaları ile güçlenin.',
      icon: '🔮',
      color: 'from-purple-400 to-indigo-500',
      features: [
        'Reiki Seansları',
        'Aura Temizliği',
        'Chakra Dengeleme',
        'Enerji Blokaj Çözümü',
        'Kristal Enerjisi Çalışmaları'
      ],
      benefits: ['Enerji Temizliği', 'Fiziksel Şifa', 'Ruhsal Denge', 'Aura Güçlendirme']
    },
    {
      title: 'Spiritüel Danışmanlık',
      description: 'Yaşam yolculuğunuzda rehberlik, ruhsal gelişim danışmanlığı.',
      icon: '📿',
      color: 'from-indigo-400 to-mor-500',
      features: [
        'Yaşam Yolu Analizi',
        'Ruhsal Rehberlik',
        'Kişisel Dönüşüm',
        'Hedef Belirleme',
        'İç Keşif Çalışmaları'
      ],
      benefits: ['Yaşam Amacı', 'Kişisel Gelişim', 'Dönüşüm', 'İç Görü']
    },
    {
      title: 'Kristal Terapi',
      description: 'Kristallerin şifalı enerjisini kullanarak ruhsal ve fiziksel denge sağlayın.',
      icon: '💎',
      color: 'from-mor-300 to-purple-400',
      features: [
        'Kristal Seçimi ve Temizliği',
        'Chakra Kristalleri',
        'Kristal Meditasyonu',
        'Enerji Şifası',
        'Kristal Ritüelleri'
      ],
      benefits: ['Enerji Dengesi', 'Duygusal Şifa', 'Ruhsal Koruma', 'İç Huzur']
    },
    {
      title: 'Astroloji & Numeroloji',
      description: 'Kozmik enerjileri anlayın, yaşam yolunuzu keşfedin.',
      icon: '⭐',
      color: 'from-purple-300 to-indigo-400',
      features: [
        'Doğum Haritası Analizi',
        'Numeroloji Hesaplaması',
        'Gelecek Yol Haritası',
        'Uyumlu Kristaller',
        'Ritüel Önerileri'
      ],
      benefits: ['Kendini Tanıma', 'Yaşam Yolu', 'Gelecek Rehberliği', 'Uyum']
    },
    {
      title: 'Spiritüel Atölyeler',
      description: 'Gruplar halinde spiritüel gelişim ve öğrenme deneyimleri.',
      icon: '🌸',
      color: 'from-indigo-300 to-mor-400',
      features: [
        'Meditasyon Atölyeleri',
        'Kristal Çalışma Grupları',
        'Enerji Şifası Eğitimi',
        'Ritüel Yaratma',
        'Spiritüel Sanat'
      ],
      benefits: ['Topluluk', 'Öğrenme', 'Paylaşım', 'Büyüme']
    }
  ];

  const dailyPractices = [
    {
      title: 'Sabah Ritüeli',
      time: '06:00 - 08:00',
      icon: '🌅',
      practices: ['Gün doğumu meditasyonu', 'Şükran pratiği', 'Niyet belirleme', 'Enerji temizliği']
    },
    {
      title: 'Öğle Molası',
      time: '12:00 - 13:00',
      icon: '☀️',
      practices: ['Mindful yeme', 'Kısa meditasyon', 'Enerji yenileme', 'Doğa bağlantısı']
    },
    {
      title: 'Akşam Ritüeli',
      time: '18:00 - 20:00',
      icon: '🌙',
      practices: ['Günü değerlendirme', 'Gece meditasyonu', 'Şifa çalışması', 'Günü kapatma']
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-mor-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="text-5xl mr-4">🕯️</span>
              <h1 className="text-4xl md:text-6xl font-bold">{t('services.title')}</h1>
            </div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8">
              {t('services.subtitle')}
            </p>
            <div className="flex justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-2">✨</span>
                <span>Kişisel</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🌟</span>
                <span>Dönüştürücü</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">💫</span>
                <span>Şifalı</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her biri özel olarak tasarlanmış, ruhsal yolculuğunuzu destekleyecek hizmetler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spiritualServices.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-mor-100">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="text-mor-500 mr-2">✨</span>
                    Özellikler:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-mor-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="text-purple-500 mr-2">🌟</span>
                    Faydalar:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <span key={benefitIndex} className="bg-mor-100 text-mor-700 px-3 py-1 rounded-full text-xs font-medium">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-mor-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-mor-600 hover:to-purple-700 transition-all duration-300">
                  Detaylı Bilgi Al
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Practices */}
      <section className="py-20 bg-gradient-to-br from-mor-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Günlük Spiritüel Pratikler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her günü anlamlı kılan, ruhunuzu besleyen günlük ritüeller
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dailyPractices.map((practice, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <span className="text-5xl mb-4 block">{practice.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {practice.title}
                  </h3>
                  <p className="text-mor-600 font-semibold">
                    {practice.time}
                  </p>
                </div>
                <ul className="space-y-3">
                  {practice.practices.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-mor-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-mor-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="text-6xl mb-4 block">🌟</span>
            <h2 className="text-4xl font-bold mb-4">
              Spiritüel Yolculuğunuza Başlayın
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Hangi hizmete ihtiyacınız olduğunu söyleyin, size en uygun çözümü sunalım.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-mor-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-mor-50 transition-all duration-300 transform hover:scale-105"
          >
            {t('services.freeConsultation')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;