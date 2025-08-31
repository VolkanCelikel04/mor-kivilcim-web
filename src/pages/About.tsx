import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hakkımızda</h1>
            <p className="text-xl max-w-3xl mx-auto">
              MOR Kıvılcım olarak, teknoloji ve inovasyonun gücüyle işletmelerin dijital dönüşümüne öncülük ediyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
              <p className="text-lg text-gray-600 mb-4">
                2020 yılında kurulan MOR Kıvılcım, teknoloji dünyasındaki yenilikleri 
                işletmelere ulaştırma misyonuyla yola çıktı.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Deneyimli ekibimiz ve müşteri odaklı yaklaşımımızla, 
                her projede en yüksek kaliteyi hedefliyoruz.
              </p>
              <p className="text-lg text-gray-600">
                Bugüne kadar 100+ başarılı proje tamamladık ve 
                müşterilerimizin güvenini kazandık.
              </p>
            </div>
            <div className="bg-mor-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-mor-600 mb-2">100+</div>
                  <div className="text-gray-600">Tamamlanan Proje</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mor-600 mb-2">50+</div>
                  <div className="text-gray-600">Mutlu Müşteri</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mor-600 mb-2">4</div>
                  <div className="text-gray-600">Yıllık Deneyim</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mor-600 mb-2">24/7</div>
                  <div className="text-gray-600">Destek</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Çalışma prensiplerimizi oluşturan temel değerlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-mor-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-mor-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kalite</h3>
              <p className="text-gray-600">
                Her projede en yüksek kalite standartlarını koruyor, 
                müşteri memnuniyetini ön planda tutuyoruz.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-mor-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-mor-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">İnovasyon</h3>
              <p className="text-gray-600">
                En son teknolojileri takip ediyor, 
                yenilikçi çözümler geliştiriyoruz.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-mor-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-mor-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Güven</h3>
              <p className="text-gray-600">
                Müşterilerimizle uzun vadeli güven ilişkileri kuruyor, 
                şeffaf iletişim sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ekibimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deneyimli ve uzman ekibimizle projelerinizi hayata geçiriyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-mor-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-mor-600">AK</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ahmet Kaya</h3>
              <p className="text-mor-600 mb-2">Kurucu & CEO</p>
              <p className="text-gray-600">
                10+ yıl teknoloji sektörü deneyimi
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-mor-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-mor-600">AY</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ayşe Yılmaz</h3>
              <p className="text-mor-600 mb-2">Teknik Direktör</p>
              <p className="text-gray-600">
                Full-stack geliştirme uzmanı
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-mor-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-mor-600">MD</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mehmet Demir</h3>
              <p className="text-mor-600 mb-2">Proje Yöneticisi</p>
              <p className="text-gray-600">
                Proje yönetimi ve müşteri ilişkileri
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
