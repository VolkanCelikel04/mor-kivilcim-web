import React, { useState } from 'react';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tümü', icon: '🌟' },
    { id: 'daily-energy', name: 'Günlük Enerji', icon: '⚡' },
    { id: 'affirmations', name: 'Affirmasyonlar', icon: '💫' },
    { id: 'meditation', name: 'Meditasyon', icon: '🧘‍♀️' },
    { id: 'crystals', name: 'Kristaller', icon: '💎' },
    { id: 'spiritual-guidance', name: 'Spiritüel Rehberlik', icon: '🔮' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Bugünün Enerjisi: Yeni Başlangıçlar',
      excerpt: 'Bugün evren size yeni fırsatlar sunuyor. İç dünyanızda değişim rüzgarları esiyor.',
      content: 'Bugünün enerjisi yeni başlangıçlar ve dönüşümlerle dolu. Evren size yeni fırsatlar sunuyor ve iç dünyanızda değişim rüzgarları esiyor. Bu enerjiyi en iyi şekilde kullanmak için...',
      category: 'daily-energy',
      date: '2024-01-15',
      readTime: '3 dk',
      image: '🌅',
      tags: ['enerji', 'yeni başlangıç', 'dönüşüm']
    },
    {
      id: 2,
      title: 'Güçlü Affirmasyonlar: İç Huzur',
      excerpt: 'Her gün tekrarlayabileceğiniz, iç huzurunuzu artıracak güçlü affirmasyonlar.',
      content: 'Affirmasyonlar, zihnimizi pozitif düşüncelerle besleyen güçlü araçlardır. İç huzurunuzu artırmak için her gün tekrarlayabileceğiniz affirmasyonlar...',
      category: 'affirmations',
      date: '2024-01-14',
      readTime: '5 dk',
      image: '💫',
      tags: ['affirmasyon', 'iç huzur', 'pozitif düşünce']
    },
    {
      id: 3,
      title: 'Sabah Meditasyonu: Günü Başlatma',
      excerpt: 'Güne pozitif başlamak için yapabileceğiniz basit ama etkili meditasyon teknikleri.',
      content: 'Sabah meditasyonu, güne pozitif ve huzurlu başlamanın en etkili yollarından biridir. İşte günü başlatmak için yapabileceğiniz basit ama etkili teknikler...',
      category: 'meditation',
      date: '2024-01-13',
      readTime: '7 dk',
      image: '🧘‍♀️',
      tags: ['meditasyon', 'sabah rutini', 'mindfulness']
    },
    {
      id: 4,
      title: 'Ametist Kristali: Ruhsal Koruma',
      excerpt: 'Ametist kristalinin güçlü enerjisi ve ruhsal koruma özellikleri hakkında bilmeniz gerekenler.',
      content: 'Ametist, en güçlü ruhsal koruma kristallerinden biridir. Bu mor renkli kristal, negatif enerjileri temizler ve ruhsal gelişiminizi destekler...',
      category: 'crystals',
      date: '2024-01-12',
      readTime: '6 dk',
      image: '💎',
      tags: ['kristal', 'ametist', 'ruhsal koruma']
    },
    {
      id: 5,
      title: 'Chakra Dengeleme: Kök Chakra',
      excerpt: 'Kök chakranızı dengelemek ve güçlendirmek için pratik yöntemler.',
      content: 'Kök chakra, güvenlik ve topraklanma ile ilgili enerji merkezimizdir. Bu chakranın dengesi, yaşamımızda güvenlik ve istikrar hissi yaratır...',
      category: 'spiritual-guidance',
      date: '2024-01-11',
      readTime: '8 dk',
      image: '🔮',
      tags: ['chakra', 'dengeleme', 'topraklanma']
    },
    {
      id: 6,
      title: 'Ayın Enerjisi: Dolunay Ritüeli',
      excerpt: 'Dolunay enerjisini kullanarak yapabileceğiniz güçlü ritüeller ve pratikler.',
      content: 'Dolunay, güçlü enerjisiyle dönüşüm ve tamamlanma zamanıdır. Bu dönemde yapabileceğiniz ritüeller ve pratikler...',
      category: 'spiritual-guidance',
      date: '2024-01-10',
      readTime: '10 dk',
      image: '🌕',
      tags: ['dolunay', 'ritüel', 'dönüşüm']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const dailyAffirmation = {
    text: "Bugün kendime şefkatle yaklaşıyorum ve iç huzurumu besliyorum.",
    author: "MOR Kıvılcım"
  };

  const energyStatus = {
    level: "Yüksek",
    color: "text-green-500",
    description: "Bugünün enerjisi yaratıcılık ve ilhamla dolu. Yeni projeler başlatmak için mükemmel bir gün."
  };

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
                <span className="text-white text-3xl">📚</span>
              </div>
              <span className="text-mor-200 font-semibold text-lg">Spiritüel Blog</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Ruhsal Kaynaklar</h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-mor-100 leading-relaxed">
              Günlük enerji durumu, affirmasyonlar, meditasyon rehberleri ve spiritüel tavsiyeler
            </p>
          </div>
        </div>
      </section>

      {/* Daily Status Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Daily Affirmation */}
            <div className="bg-gradient-to-br from-mor-50 to-purple-50 rounded-3xl p-8 shadow-xl border border-mor-100">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">💫</span>
                <h2 className="text-2xl font-bold text-gray-900">Günün Affirmasyonu</h2>
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-4 leading-relaxed">
                "{dailyAffirmation.text}"
              </blockquote>
              <p className="text-mor-600 font-semibold">— {dailyAffirmation.author}</p>
            </div>

            {/* Energy Status */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 shadow-xl border border-purple-100">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">⚡</span>
                <h2 className="text-2xl font-bold text-gray-900">Günün Enerjisi</h2>
              </div>
              <div className="mb-4">
                <span className={`text-3xl font-bold ${energyStatus.color}`}>
                  {energyStatus.level}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {energyStatus.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-mor-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-mor-300 hover:text-mor-600'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-mor-100 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{post.image}</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">⏱️</span>
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="bg-mor-100 text-mor-700 px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      📅 {new Date(post.date).toLocaleDateString('tr-TR')}
                    </span>
                    <button className="text-mor-600 font-semibold hover:text-mor-700 transition-colors">
                      Devamını Oku →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-mor-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-mor-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Daha Fazla İçerik Yükle
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-mor-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="text-6xl mb-4 block">📧</span>
            <h2 className="text-4xl font-bold mb-4">
              Spiritüel Bülten
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Günlük affirmasyonlar, enerji durumu ve spiritüel tavsiyeler için bültenimize abone olun.
            </p>
          </div>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-mor-600 px-6 py-3 rounded-lg font-bold hover:bg-mor-50 transition-all duration-300">
              Abone Ol
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;