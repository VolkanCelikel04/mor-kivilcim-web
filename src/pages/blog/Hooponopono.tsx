import React from 'react';
import { useTranslation } from 'react-i18next';

const Hooponopono: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('blogPosts.hooponopono.title')}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t('blogPosts.hooponopono.excerpt')}
            </p>
            <div className="mt-6 flex justify-center">
              <span className="bg-mor-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                💝 {t('blogPosts.hooponopono.category')}
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
              alt="Ho'oponopono şifa ve onarım pratiği"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2">{t('blogPosts.hooponopono.tldr')}</h2>
            <p className="text-blue-700">
              {t('blogPosts.hooponopono.tldrContent')}
            </p>
          </div>

          {/* Short frame */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('blogPosts.hooponopono.shortFrame')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t('blogPosts.hooponopono.shortFrameContent')}
            </p>
          </div>

          {/* The four sentences */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('blogPosts.hooponopono.fourSentences')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-3">{t('blogPosts.hooponopono.sentence1Title')}</h3>
                <p className="text-red-700">{t('blogPosts.hooponopono.sentence1Content')}</p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">{t('blogPosts.hooponopono.sentence2Title')}</h3>
                <p className="text-orange-700">{t('blogPosts.hooponopono.sentence2Content')}</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">{t('blogPosts.hooponopono.sentence3Title')}</h3>
                <p className="text-green-700">{t('blogPosts.hooponopono.sentence3Content')}</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">{t('blogPosts.hooponopono.sentence4Title')}</h3>
                <p className="text-purple-700">{t('blogPosts.hooponopono.sentence4Content')}</p>
              </div>
            </div>
          </div>

          {/* 7 minute practice */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('blogPosts.hooponopono.practice7min')}</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('blogPosts.hooponopono.step1Title')}</h3>
                  <p className="text-gray-700">{t('blogPosts.hooponopono.step1Content')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('blogPosts.hooponopono.step2Title')}</h3>
                  <p className="text-gray-700 mb-3">{t('blogPosts.hooponopono.step2Content')}</p>
                  <ul className="text-gray-600 space-y-1 ml-4">
                    <li>• {t('blogPosts.hooponopono.step2Point1')}</li>
                    <li>• {t('blogPosts.hooponopono.step2Point2')}</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('blogPosts.hooponopono.step3Title')}</h3>
                  <p className="text-gray-700">{t('blogPosts.hooponopono.step3Content')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Breathing pattern visualization */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('blogPosts.hooponopono.breathPattern')}</h3>
            <div className="bg-gradient-to-r from-mor-50 to-purple-50 rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💔</span>
                    <span className="font-semibold text-gray-700">{t('blogPosts.hooponopono.breath1')}</span>
                  </div>
                  <div className="text-sm text-gray-500">{t('blogPosts.hooponopono.inhale')}</div>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🤲</span>
                    <span className="font-semibold text-gray-700">{t('blogPosts.hooponopono.breath2')}</span>
                  </div>
                  <div className="text-sm text-gray-500">{t('blogPosts.hooponopono.inhale')}</div>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🙏</span>
                    <span className="font-semibold text-gray-700">{t('blogPosts.hooponopono.breath3')}</span>
                  </div>
                  <div className="text-sm text-gray-500">{t('blogPosts.hooponopono.inhale')}</div>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💝</span>
                    <span className="font-semibold text-gray-700">{t('blogPosts.hooponopono.breath4')}</span>
                  </div>
                  <div className="text-sm text-gray-500">{t('blogPosts.hooponopono.inhale')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Common mistakes */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('blogPosts.hooponopono.commonMistakes')}</h2>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">{t('blogPosts.hooponopono.mistake1Title')}</h3>
                <p className="text-red-700">{t('blogPosts.hooponopono.mistake1Content')}</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">{t('blogPosts.hooponopono.mistake2Title')}</h3>
                <p className="text-red-700">{t('blogPosts.hooponopono.mistake2Content')}</p>
              </div>
            </div>
          </div>

          {/* When to use */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('blogPosts.hooponopono.whenToUse')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">{t('blogPosts.hooponopono.innerConflicts')}</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• {t('blogPosts.hooponopono.conflict1')}</li>
                  <li>• {t('blogPosts.hooponopono.conflict2')}</li>
                  <li>• {t('blogPosts.hooponopono.conflict3')}</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">{t('blogPosts.hooponopono.relationshipIssues')}</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• {t('blogPosts.hooponopono.issue1')}</li>
                  <li>• {t('blogPosts.hooponopono.issue2')}</li>
                  <li>• {t('blogPosts.hooponopono.issue3')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mor Kıvılcım note */}
          <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-mor-800 mb-3">💜 {t('blogPosts.hooponopono.noteTitle')}</h3>
            <p className="text-mor-700">
              {t('blogPosts.hooponopono.noteContent')}
            </p>
          </div>

          {/* Related articles */}
          <div className="mt-16 border-t pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('blogPosts.hooponopono.relatedArticles')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/blog/sukran-yazim" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">{t('blogPosts.hooponopono.related1Title')}</h4>
                <p className="text-gray-600 text-sm">{t('blogPosts.hooponopono.related1Desc')}</p>
              </a>
              <a href="/blog/onaylamalar" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">{t('blogPosts.hooponopono.related2Title')}</h4>
                <p className="text-gray-600 text-sm">{t('blogPosts.hooponopono.related2Desc')}</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hooponopono;
