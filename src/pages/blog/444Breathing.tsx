import React from 'react';

const FourFourFourBreathing: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">4-4-4 Nefes (Kutu Nefesi)</h1>
            <p className="text-xl max-w-3xl mx-auto">
              2–5 Dakikada Sinir Sistemini Yatıştır
            </p>
            <div className="mt-6 flex justify-center">
              <span className="bg-mor-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🧘‍♀️ Nefes Teknikleri
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
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Meditasyon ve nefes çalışması"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2">TL;DR</h2>
            <p className="text-blue-700">
              Burnundan 4 sayıda al, 4 sayıda tut, 4 sayıda ver. 3–6 tur. Çene ve omuzlar yumuşak.
            </p>
          </div>

          {/* Why it works */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Neden İşe Yarar?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nefesin ritmini bilinçli yavaşlatmak, kalp atım aralığındaki değişkenliği artırır; bu da "tehlike yok" sinyalini güçlendirir. Özellikle gün içinde küçük gerilim dalgalarını hızlıca yumuşatmak için güvenli ve pratiktir.
            </p>
          </div>

          {/* Step by step */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Adım Adım</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Duruş</h3>
                  <p className="text-gray-700">Ayak tabanların yerde, omurgan uzun; bedeninle kavga etmeden.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Al</h3>
                  <p className="text-gray-700">4 sayıda, burundan, nazikçe.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tut</h3>
                  <p className="text-gray-700">4 sayıda; kasmadan, bekler gibi.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ver</h3>
                  <p className="text-gray-700">4 sayıda, sanki bir mumu söndürmeden titretiyormuş gibi.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sürdür</h3>
                  <p className="text-gray-700">3–6 tur sürdür; iyi gelirse 2–3 dakikaya uzat.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Common mistakes */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sık Yapılan Hatalar</h2>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">Zorlayıcı Tutuş</h3>
                <p className="text-red-700">Baş dönmesi yapabilir. Zor gelirse 4-4-6 veya 4-2-6 dene.</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">Göğüsten Nefes</h3>
                <p className="text-red-700">Nefesi karına indir; omuzlar kalkmasın.</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">Hızla "Çok İyi Hissetmeliyim" Beklentisi</h3>
                <p className="text-red-700">Duygu dalgası nazikçe söner, süre tanı.</p>
              </div>
            </div>
          </div>

          {/* 5 minute practice */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5 Dakikalık Mini Pratik</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">1 dk</span>
                  <span className="text-green-800">Hazırlık</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">3 dk</span>
                  <span className="text-green-800">4-4-4 Nefes</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">1 dk</span>
                  <span className="text-green-800">Serbest nefes ve gözlem</span>
                </div>
              </div>
              <p className="text-green-700 mt-4">
                <strong>Duygu ölçeği 0–10:</strong> Öncesini ve sonrasını not et.
              </p>
            </div>
          </div>

          {/* Mor Kıvılcım note */}
          <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-mor-800 mb-3">💜 Mor Kıvılcım Notu</h3>
            <p className="text-mor-700">
              Verişi 1–2 sayı uzatmak (4-4-6) parasempatik sistemi daha hızlı devreye alır. Dilersen "kalpte mor kıvılcım" imgelemesini verişe eşlik ettir.
            </p>
          </div>

          {/* Related articles */}
          <div className="mt-16 border-t pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">İlgili Makaleler</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/blog/beden-taramasi" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">Beden Taraması</h4>
                <p className="text-gray-600 text-sm">"Yumuşama"yı bedeninle hatırla</p>
              </a>
              <a href="/blog/travma-duyarli-meditasyon" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">Travma-Duyarlı Meditasyon</h4>
                <p className="text-gray-600 text-sm">5 ilke ile güvenlik</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FourFourFourBreathing;
