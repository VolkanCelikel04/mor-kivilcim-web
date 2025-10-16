import React from 'react';
import { useTranslation } from 'react-i18next';

const SpiritualWellbeing: React.FC = () => {
  const { t } = useTranslation();
  
  const spiritualApps = [
    {
      title: 'Mindfulness & Meditasyon',
      description: 'Günlük hayatınızda iç huzuru bulmanız için rehberlik eden uygulamalar',
      apps: [
        {
          name: 'Headspace',
          description: 'Nefes alma, meditasyon ve mindful yaşam teknikleri öğretir',
          features: ['Kaygı yönetimi', 'Stres azaltma', 'Odaklanma', 'Uyku kalitesi']
        },
        {
          name: 'Calm',
          description: 'Rahatlatıcı müzikler, meditasyonlar ve uyku hikayeleri',
          features: ['Uyku hikayeleri', 'Doğa sesleri', 'Günlük meditasyonlar']
        },
        {
          name: 'Insight Timer',
          description: 'Ücretsiz meditasyon uygulaması, binlerce rehberli meditasyon',
          features: ['Ücretsiz içerik', 'Topluluk özellikleri', 'İlerleme takibi']
        }
      ]
    },
    {
      title: 'Kişisel Gelişim',
      description: 'Kendinizi keşfetmeniz ve potansiyelinizi açığa çıkarmanız için',
      apps: [
        {
          name: 'Day One',
          description: 'Hayatınızı kaydetmek ve düşünmek için günlük uygulaması',
          features: ['Farkındalık geliştirme', 'Şükran pratiği', 'Yansıtma becerileri']
        },
        {
          name: '365 Gratitude',
          description: 'Hayatınızdaki iyi şeylere odaklanmanızı sağlar',
          features: ['Günlük teşekkür pratiği', 'Ruh hali takibi', 'Günlük zorluklar']
        },
        {
          name: 'Habitica',
          description: 'Alışkanlıklarınızı oyunlaştırarak geliştirin',
          features: ['Oyunlaştırma', 'Hedef belirleme', 'İlerleme takibi']
        }
      ]
    }
  ];

  const wellbeingResources = [
    {
      title: 'İç Huzur Teknikleri',
      description: 'Günlük hayatta iç huzuru bulmanın yolları',
      items: [
        'Derin nefes alma egzersizleri',
        'Doğa ile bağlantı kurma',
        'Şükran pratiği',
        'Mindful yürüyüş',
        'Yaratıcı ifade yolları'
      ]
    },
    {
      title: 'Stres Yönetimi',
      description: 'Stresli durumlarla başa çıkma stratejileri',
      items: [
        '4-7-8 nefes tekniği',
        'Progresif kas gevşetme',
        'Görselleştirme teknikleri',
        'Günlük rutin oluşturma',
        'Sosyal destek ağları'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ruhsal İyilik Hali</h1>
            <p className="text-xl max-w-3xl mx-auto">
              İç huzurunuzu bulmanız, kişisel gelişiminizi desteklemeniz için 
              özenle seçilmiş kaynaklar ve uygulamalar.
            </p>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Önerilen Uygulamalar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ruhsal gelişiminizi destekleyecek, kanıtlanmış uygulamalar
            </p>
          </div>

          <div className="space-y-16">
            {spiritualApps.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.apps.map((app, appIndex) => (
                    <div key={appIndex} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        {app.name}
                      </h4>
                      <p className="text-gray-600 mb-4">{app.description}</p>
                      <ul className="space-y-2">
                        {app.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-mor-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              İyilik Hali Kaynakları
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Günlük hayatınızda uygulayabileceğiniz pratik teknikler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wellbeingResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <ul className="space-y-3">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-mor-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            İç Huzurunuzu Keşfedin
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ruhsal gelişim yolculuğunuzda size rehberlik etmek için buradayız.
          </p>
          <button className="bg-mor-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-mor-700 transition-colors">
            Kişisel Danışmanlık Alın
          </button>
        </div>
      </section>
    </div>
  );
};

export default SpiritualWellbeing;
