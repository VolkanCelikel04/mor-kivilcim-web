import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Blog: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('blog.categories.all'), icon: '🌟' },
    { id: 'breathing', name: t('blog.categories.breathing'), icon: '🫁' },
    { id: 'meditation', name: t('blog.categories.meditation'), icon: '🧘‍♀️' },
    { id: 'healing', name: t('blog.categories.healing'), icon: '💝' },
    { id: 'writing', name: t('blog.categories.writing'), icon: '✍️' },
    { id: 'movement', name: t('blog.categories.movement'), icon: '🚶‍♀️' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: t('blog.posts.breathing444.title'),
      excerpt: t('blog.posts.breathing444.excerpt'),
      content: t('blog.posts.breathing444.content'),
      category: 'breathing',
      date: '2024-01-15',
      readTime: t('blog.posts.breathing444.readTime'),
      image: '🫁',
      tags: [t('blog.posts.breathing444.tags.breath'), t('blog.posts.breathing444.tags.stress'), t('blog.posts.breathing444.tags.relaxation')],
      link: '/blog/444-breathing'
    },
    {
      id: 2,
      title: t('blog.posts.bodyScan.title'),
      excerpt: t('blog.posts.bodyScan.excerpt'),
      content: t('blog.posts.bodyScan.content'),
      category: 'meditation',
      date: '2024-01-14',
      readTime: t('blog.posts.bodyScan.readTime'),
      image: '🧘‍♀️',
      tags: [t('blog.posts.bodyScan.tags.meditation'), t('blog.posts.bodyScan.tags.awareness'), t('blog.posts.bodyScan.tags.body')],
      link: '/blog/beden-taramasi'
    },
    {
      id: 3,
      title: t('blog.posts.hooponopono.title'),
      excerpt: t('blog.posts.hooponopono.excerpt'),
      content: t('blog.posts.hooponopono.content'),
      category: 'healing',
      date: '2024-01-13',
      readTime: t('blog.posts.hooponopono.readTime'),
      image: '💝',
      tags: [t('blog.posts.hooponopono.tags.healing'), t('blog.posts.hooponopono.tags.forgiveness'), t('blog.posts.hooponopono.tags.repair')],
      link: '/blog/hooponopono'
    },
    {
      id: 4,
      title: t('blog.posts.reiki.title'),
      excerpt: t('blog.posts.reiki.excerpt'),
      content: t('blog.posts.reiki.content'),
      category: 'healing',
      date: '2024-01-12',
      readTime: t('blog.posts.reiki.readTime'),
      image: '✨',
      tags: [t('blog.posts.reiki.tags.reiki'), t('blog.posts.reiki.tags.energy'), t('blog.posts.reiki.tags.healing')],
      link: '/blog/reiki'
    },
    {
      id: 5,
      title: t('blog.posts.traumaSensitive.title'),
      excerpt: t('blog.posts.traumaSensitive.excerpt'),
      content: t('blog.posts.traumaSensitive.content'),
      category: 'meditation',
      date: '2024-01-11',
      readTime: t('blog.posts.traumaSensitive.readTime'),
      image: '🛡️',
      tags: [t('blog.posts.traumaSensitive.tags.trauma'), t('blog.posts.traumaSensitive.tags.safety'), t('blog.posts.traumaSensitive.tags.meditation')],
      link: '/blog/travma-duyarli-meditasyon'
    },
    {
      id: 6,
      title: t('blog.posts.sleepMeditation.title'),
      excerpt: t('blog.posts.sleepMeditation.excerpt'),
      content: t('blog.posts.sleepMeditation.content'),
      category: 'meditation',
      date: '2024-01-10',
      readTime: t('blog.posts.sleepMeditation.readTime'),
      image: '🌙',
      tags: [t('blog.posts.sleepMeditation.tags.sleep'), t('blog.posts.sleepMeditation.tags.meditation'), t('blog.posts.sleepMeditation.tags.yogaNidra')],
      link: '/blog/uyku-meditasyonu'
    },
    {
      id: 7,
      title: t('blog.posts.walkingMeditation.title'),
      excerpt: t('blog.posts.walkingMeditation.excerpt'),
      content: t('blog.posts.walkingMeditation.content'),
      category: 'movement',
      date: '2024-01-09',
      readTime: t('blog.posts.walkingMeditation.readTime'),
      image: '🚶‍♀️',
      tags: [t('blog.posts.walkingMeditation.tags.walking'), t('blog.posts.walkingMeditation.tags.awareness'), t('blog.posts.walkingMeditation.tags.movement')],
      link: '/blog/yuruyus-meditasyonu'
    },
    {
      id: 8,
      title: t('blog.posts.gratitudeWriting.title'),
      excerpt: t('blog.posts.gratitudeWriting.excerpt'),
      content: t('blog.posts.gratitudeWriting.content'),
      category: 'writing',
      date: '2024-01-08',
      readTime: t('blog.posts.gratitudeWriting.readTime'),
      image: '✍️',
      tags: [t('blog.posts.gratitudeWriting.tags.writing'), t('blog.posts.gratitudeWriting.tags.gratitude'), t('blog.posts.gratitudeWriting.tags.emotions')],
      link: '/blog/sukran-yazim'
    },
    {
      id: 9,
      title: t('blog.posts.affirmations.title'),
      excerpt: t('blog.posts.affirmations.excerpt'),
      content: t('blog.posts.affirmations.content'),
      category: 'writing',
      date: '2024-01-07',
      readTime: t('blog.posts.affirmations.readTime'),
      image: '💪',
      tags: [t('blog.posts.affirmations.tags.affirmation'), t('blog.posts.affirmations.tags.selfWorth'), t('blog.posts.affirmations.tags.positive')],
      link: '/blog/onaylamalar'
    },
    {
      id: 10,
      title: t('blog.posts.familyConstellation.title'),
      excerpt: t('blog.posts.familyConstellation.excerpt'),
      content: t('blog.posts.familyConstellation.content'),
      category: 'healing',
      date: '2024-01-06',
      readTime: t('blog.posts.familyConstellation.readTime'),
      image: '🌳',
      tags: [t('blog.posts.familyConstellation.tags.family'), t('blog.posts.familyConstellation.tags.systemic'), t('blog.posts.familyConstellation.tags.therapy')],
      link: '/blog/aile-dizimi'
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const dailyAffirmation = {
    text: t('blog.dailyAffirmation.text'),
    author: t('blog.dailyAffirmation.author')
  };

  const energyStatus = {
    level: t('blog.energyStatus.level'),
    color: "text-green-500",
    description: t('blog.energyStatus.description')
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
              <span className="text-mor-200 font-semibold text-lg">{t('blog.hero.subtitle')}</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">{t('blog.hero.title')}</h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-mor-100 leading-relaxed">
              {t('blog.hero.description')}
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
                <h2 className="text-2xl font-bold text-gray-900">{t('blog.dailyAffirmation.title')}</h2>
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
                <h2 className="text-2xl font-bold text-gray-900">{t('blog.energyStatus.title')}</h2>
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
                      {t('blog.readMore')} →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-mor-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-mor-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              {t('blog.loadMore')}
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
              {t('blog.newsletter.title')}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              {t('blog.newsletter.subtitle')}
            </p>
          </div>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder={t('blog.newsletter.placeholder')}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-mor-600 px-6 py-3 rounded-lg font-bold hover:bg-mor-50 transition-all duration-300">
              {t('blog.newsletter.subscribe')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;