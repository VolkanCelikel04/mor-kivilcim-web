import React from 'react';

const FamilyConstellation: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Aile Dizimi</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Nedir, Ne Değildir? Güvenli Çerçeve
            </p>
            <div className="mt-6 flex justify-center">
              <span className="bg-mor-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🌳 Sistemik Terapi
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
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Aile dizimi ve sistemik terapi"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2">TL;DR</h2>
            <p className="text-blue-700">
              Aile Dizimi bir temsil çalışmasıdır; bilimsel geçerliliği tartışmalıdır. Güvenli alan ve entegrasyon şart.
            </p>
          </div>

          {/* Important notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold text-yellow-800 mb-3 flex items-center">
              <span className="text-2xl mr-2">⚠️</span>
              Önemli Uyarı
            </h2>
            <p className="text-yellow-700">
              Aile Dizimi bilimsel olarak kanıtlanmış bir terapi yöntemi değildir. Ciddi psikolojik sorunlar için lisanslı bir terapist veya psikolog ile çalışmanız önerilir.
            </p>
          </div>

          {/* Expectation setting */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Beklentiyi Ayarla</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Ne Değildir?</h3>
                <ul className="text-red-700 space-y-2">
                  <li>• Mucize çözümler</li>
                  <li>• Tek seansla "her şey bitti" vaadi</li>
                  <li>• Bilimsel olarak kanıtlanmış terapi</li>
                  <li>• Tıbbi tedavinin alternatifi</li>
                  <li>• Geçmişi değiştirme aracı</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Ne Olabilir?</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• İlişkisel temalara farkındalık</li>
                  <li>• Aile dinamiklerini görme</li>
                  <li>• Duygusal salınım</li>
                  <li>• Yeni perspektifler</li>
                  <li>• Deneyimsel bir alan</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Safe framework */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Güvenli Çerçeve</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Bilgilendirilmiş Onam</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Çalışmanın doğası açıklanmalı</li>
                  <li>• Rol alma süreci net olmalı</li>
                  <li>• Durdurma hakkı her zaman mevcut</li>
                  <li>• Beklentiler gerçekçi olmalı</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Sınırlar</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Kişisel paylaşım zorunlu değil</li>
                  <li>• "Hayır" diyebilmek teşvik edilir</li>
                  <li>• Fiziksel temas sınırları net</li>
                  <li>• Duygusal güvenlik öncelik</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Sonrası Destek</h3>
                <ul className="text-purple-700 space-y-2">
                  <li>• Günlük, hafif yürüyüş</li>
                  <li>• Güvenilir biriyle debrief</li>
                  <li>• Profesyonel destek gerekebilir</li>
                  <li>• Entegrasyon süreci önemli</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What happens in a session */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Seans Süreci</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Açılış</h3>
                  <p className="text-gray-700">Güvenli alan oluşturma, sınırlar belirleme, niyet paylaşma.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Temsil Seçimi</h3>
                  <p className="text-gray-700">Aile üyelerini temsil edecek kişiler seçilir (isteğe bağlı).</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Dizim</h3>
                  <p className="text-gray-700">Temsilciler aile dinamiklerini yansıtacak şekilde yerleştirilir.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Gözlem</h3>
                  <p className="text-gray-700">Duygular, hareketler ve enerji alanı gözlemlenir.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Kapanış</h3>
                  <p className="text-gray-700">Entegrasyon, destek ve sonraki adımlar konuşulur.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Integration questions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Entegrasyon Soruları</h2>
            <div className="space-y-4">
              <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-mor-800 mb-2">"Şu anda bedenimde ne hissediyorum?"</h3>
                <p className="text-mor-700">Fiziksel duyumları fark etmek önemli.</p>
              </div>
              
              <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-mor-800 mb-2">"Bunu yaşarken bana iyi gelen en küçük adım ne?"</h3>
                <p className="text-mor-700">Kendi ihtiyaçlarını tanımlamak.</p>
              </div>
              
              <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-mor-800 mb-2">"Neye 'hayır' demek istiyorum?"</h3>
                <p className="text-mor-700">Sınırları belirlemek ve korumak.</p>
              </div>
            </div>
          </div>

          {/* Red flags */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kırmızı Bayraklar</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4">Bu Durumlarda Seansı Bırakın:</h3>
              <ul className="text-red-700 space-y-2">
                <li>• Zorla paylaşım yapmaya zorlanma</li>
                <li>• Fiziksel temas sınırlarının aşılması</li>
                <li>• "Mucize" vaatleri</li>
                <li>• Tıbbi tedaviye alternatif olarak sunulması</li>
                <li>• Duygusal manipülasyon</li>
                <li>• Sır tutma zorunluluğu</li>
                <li>• Profesyonel destek almayı engelleme</li>
              </ul>
            </div>
          </div>

          {/* Benefits and limitations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Faydalar ve Sınırlar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Olası Faydalar</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Aile dinamiklerini görme</li>
                  <li>• Duygusal salınım</li>
                  <li>• Yeni perspektifler</li>
                  <li>• Grup desteği hissi</li>
                  <li>• Farkındalık artışı</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Sınırlar</h3>
                <ul className="text-orange-700 space-y-2">
                  <li>• Bilimsel kanıt yetersiz</li>
                  <li>• Herkes için uygun değil</li>
                  <li>• Travma geçmişi olanlar için riskli</li>
                  <li>• Profesyonel terapi değil</li>
                  <li>• Kalıcı değişim garantisi yok</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Who should avoid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kimler Kaçınmalı?</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <ul className="text-red-700 space-y-2">
                <li>• Aktif travma yaşayanlar</li>
                <li>• Ciddi psikiyatrik rahatsızlığı olanlar</li>
                <li>• Sınır koymakta zorlananlar</li>
                <li>• Grup baskısına duyarlı olanlar</li>
                <li>• 18 yaş altı (veli izni olmadan)</li>
                <li>• Hamilelik döneminde</li>
                <li>• Alkol/uyuşturucu etkisinde</li>
              </ul>
            </div>
          </div>

          {/* Mor Kıvılcım note */}
          <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-mor-800 mb-3">💜 Mor Kıvılcım Notu</h3>
            <p className="text-mor-700">
              Aile Dizimi'ni; meditasyon, yazım ve gerektiğinde lisanslı uzman desteğiyle birlikte düşünmek, deneyimi daha güvenli ve faydalı kılar.
            </p>
          </div>

          {/* Related articles */}
          <div className="mt-16 border-t pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">İlgili Makaleler</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/blog/travma-duyarli-meditasyon" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">Travma-Duyarlı Meditasyon</h4>
                <p className="text-gray-600 text-sm">5 ilke ile güvenlik</p>
              </a>
              <a href="/blog/sukran-yazim" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">Şükran & Duygusal Yazım</h4>
                <p className="text-gray-600 text-sm">5 dakikada regülasyon</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FamilyConstellation;
