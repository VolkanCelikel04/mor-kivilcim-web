import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tümü', icon: '🌟' },
    { id: 'breathing', name: 'Nefes Teknikleri', icon: '🫁' },
    { id: 'meditation', name: 'Meditasyon', icon: '🧘‍♀️' },
    { id: 'healing', name: 'Şifa Teknikleri', icon: '💝' },
    { id: 'writing', name: 'Yazı Terapisi', icon: '✍️' },
    { id: 'movement', name: 'Hareket Meditasyonu', icon: '🚶‍♀️' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: '4-4-4 Nefes (Kutu Nefesi)',
      excerpt: '2–5 Dakikada Sinir Sistemini Yatıştır',
      content: 'Burnundan 4 sayıda al, 4 sayıda tut, 4 sayıda ver. 3–6 tur. Çene ve omuzlar yumuşak.',
      category: 'breathing',
      date: '2024-01-15',
      readTime: '5 dk',
      image: '🫁',
      tags: ['nefes', 'stres', 'rahatlama'],
      link: '/blog/444-breathing'
    },
    {
      id: 2,
      title: 'Beden Taraması',
      excerpt: '"Yumuşama"yı Bedeninle Hatırla',
      content: 'Dikkati ayaktan başa gezdir; değiştirmeye çalışma—yalnızca fark et ve nefesle eşlik et.',
      category: 'meditation',
      date: '2024-01-14',
      readTime: '10 dk',
      image: '🧘‍♀️',
      tags: ['meditasyon', 'farkındalık', 'beden'],
      link: '/blog/beden-taramasi'
    },
    {
      id: 3,
      title: 'Ho\'oponopono',
      excerpt: 'Nazik Onarımın Dört Cümlesi',
      content: '"Özür dilerim. Lütfen beni affet. Teşekkür ederim. Seni seviyorum."—kalp çevresinde, nefesle birlikte.',
      category: 'healing',
      date: '2024-01-13',
      readTime: '7 dk',
      image: '💝',
      tags: ['şifa', 'affetme', 'onarım'],
      link: '/blog/hooponopono'
    },
    {
      id: 4,
      title: 'Reiki',
      excerpt: 'Deneyim, Etik ve Beklenti Yönetimi',
      content: 'Reiki tamamlayıcı bir yaklaşımdır; tıbbi bakımın yerine geçmez. Net sınırlar ve niyet, deneyimi derinleştirir.',
      category: 'healing',
      date: '2024-01-12',
      readTime: '8 dk',
      image: '✨',
      tags: ['reiki', 'enerji', 'şifa'],
      link: '/blog/reiki'
    },
    {
      id: 5,
      title: 'Travma-Duyarlı Meditasyon',
      excerpt: '5 İlke ile Güvenlik',
      content: 'Hızını sen belirlersin. Topraklama önce, yoğunlaşırsa durma izni hep açık.',
      category: 'meditation',
      date: '2024-01-11',
      readTime: '8 dk',
      image: '🛡️',
      tags: ['travma', 'güvenlik', 'meditasyon'],
      link: '/blog/travma-duyarli-meditasyon'
    },
    {
      id: 6,
      title: 'Uyku İçin Meditasyon',
      excerpt: 'Yoga Nidra\'dan İlhamla',
      content: '10–15 dakikalık beden taraması + nefes + nazik imgeleme, uykuya geçişi kolaylaştırabilir.',
      category: 'meditation',
      date: '2024-01-10',
      readTime: '12 dk',
      image: '🌙',
      tags: ['uyku', 'meditasyon', 'yoga nidra'],
      link: '/blog/uyku-meditasyonu'
    },
    {
      id: 7,
      title: 'Yürüyüş Meditasyonu',
      excerpt: 'Her Adımda Farkındalık',
      content: '20 dakikalık yürüyüşte adım-nefes senkronu ve çevresel farkındalık; sonunda tek cümlelik şükran.',
      category: 'movement',
      date: '2024-01-09',
      readTime: '15 dk',
      image: '🚶‍♀️',
      tags: ['yürüyüş', 'farkındalık', 'hareket'],
      link: '/blog/yuruyus-meditasyonu'
    },
    {
      id: 8,
      title: 'Şükran & Duygusal Yazım',
      excerpt: '5 Dakikada Regülasyon',
      content: '3 küçük iyi şeyi yaz + haftada bir kez 10 dakikalık ifade edici yazım.',
      category: 'writing',
      date: '2024-01-08',
      readTime: '5 dk',
      image: '✍️',
      tags: ['yazım', 'şükran', 'duygular'],
      link: '/blog/sukran-yazim'
    },
    {
      id: 9,
      title: 'Onaylamalar',
      excerpt: 'Ne Zaman, Nasıl?',
      content: '"Ben iyiyim" yerine, kendi değerlerin üzerinden öz-onaylama daha etkili olur.',
      category: 'writing',
      date: '2024-01-07',
      readTime: '10 dk',
      image: '💪',
      tags: ['onaylama', 'öz-değer', 'pozitif'],
      link: '/blog/onaylamalar'
    },
    {
      id: 10,
      title: 'Aile Dizimi',
      excerpt: 'Nedir, Ne Değildir? Güvenli Çerçeve',
      content: 'Aile Dizimi bir temsil çalışmasıdır; bilimsel geçerliliği tartışmalıdır. Güvenli alan ve entegrasyon şart.',
      category: 'healing',
      date: '2024-01-06',
      readTime: '12 dk',
      image: '🌳',
      tags: ['aile', 'sistemik', 'terapi'],
      link: '/blog/aile-dizimi'
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
                    <Link 
                      to={post.link} 
                      className="text-mor-600 font-semibold hover:text-mor-700 transition-colors"
                    >
                      Devamını Oku →
                    </Link>
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