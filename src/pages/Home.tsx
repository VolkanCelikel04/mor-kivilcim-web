import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-mor-600 to-mor-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              MOR Kıvılcım
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Yenilikçi çözümler ve kaliteli hizmetlerle işinizi büyütün. 
              Geleceğin teknolojilerini bugünden keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-white text-mor-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Hizmetlerimizi Keşfedin
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-mor-600 transition-colors"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden MOR Kıvılcım?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Müşterilerimizin başarısı için çalışıyor, en son teknolojileri kullanıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-mor-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-mor-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hızlı Çözümler</h3>
              <p className="text-gray-600">
                Projelerinizi hızlı ve etkili bir şekilde tamamlıyoruz.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-mor-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-mor-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kalite Garantisi</h3>
              <p className="text-gray-600">
                En yüksek kalite standartlarında hizmet sunuyoruz.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-mor-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-mor-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">7/24 Destek</h3>
              <p className="text-gray-600">
                Müşterilerimize kesintisiz destek sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projenizi Hayata Geçirelim
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hemen iletişime geçin ve projeniz için en uygun çözümü birlikte bulalım.
          </p>
          <Link
            to="/contact"
            className="bg-mor-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-mor-700 transition-colors"
          >
            Ücretsiz Danışmanlık Alın
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
