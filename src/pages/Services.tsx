import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Geliştirme',
      description: 'Modern ve responsive web siteleri, e-ticaret platformları ve web uygulamaları geliştiriyoruz.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: ['React & Next.js', 'Node.js & Express', 'E-ticaret Çözümleri', 'API Geliştirme']
    },
    {
      title: 'Mobil Uygulama',
      description: 'iOS ve Android platformları için native ve cross-platform mobil uygulamalar geliştiriyoruz.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      features: ['React Native', 'Flutter', 'iOS Development', 'Android Development']
    },
    {
      title: 'Dijital Pazarlama',
      description: 'SEO, sosyal medya yönetimi ve dijital reklamcılık ile markanızı büyütün.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: ['SEO Optimizasyonu', 'Sosyal Medya', 'Google Ads', 'İçerik Pazarlama']
    },
    {
      title: 'UI/UX Tasarım',
      description: 'Kullanıcı deneyimini ön planda tutan modern ve etkileyici tasarımlar oluşturuyoruz.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      features: ['Wireframe & Prototyping', 'UI Tasarım', 'UX Araştırma', 'Brand Identity']
    },
    {
      title: 'Bulut Çözümleri',
      description: 'AWS, Azure ve Google Cloud ile ölçeklenebilir bulut altyapıları kuruyoruz.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      features: ['AWS Services', 'Azure Cloud', 'DevOps', 'Serverless Architecture']
    },
    {
      title: 'Danışmanlık',
      description: 'Teknoloji stratejisi ve dijital dönüşüm konularında uzman danışmanlık hizmeti.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: ['Teknoloji Stratejisi', 'Dijital Dönüşüm', 'Proje Yönetimi', 'Teknik Danışmanlık']
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hizmetlerimiz</h1>
            <p className="text-xl max-w-3xl mx-auto">
              İşletmenizin dijital dönüşümü için kapsamlı teknoloji çözümleri sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-mor-100 rounded-lg flex items-center justify-center mb-4 text-mor-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Çalışma Sürecimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Projelerinizi nasıl hayata geçirdiğimizi keşfedin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-mor-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analiz</h3>
              <p className="text-gray-600">
                İhtiyaçlarınızı analiz ediyor, en uygun çözümü planlıyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-mor-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tasarım</h3>
              <p className="text-gray-600">
                Kullanıcı deneyimini ön planda tutan tasarımlar oluşturuyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-mor-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Geliştirme</h3>
              <p className="text-gray-600">
                En son teknolojilerle projenizi geliştiriyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-mor-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Teslimat</h3>
              <p className="text-gray-600">
                Projenizi test edip canlıya alıyor, destek sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Projenizi Hayata Geçirelim
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hangi hizmete ihtiyacınız olduğunu söyleyin, size en uygun çözümü sunalım.
          </p>
          <button className="bg-mor-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-mor-700 transition-colors">
            Ücretsiz Danışmanlık Alın
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
