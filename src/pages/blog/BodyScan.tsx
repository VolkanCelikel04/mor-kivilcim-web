import React from 'react';
import { useTranslation } from 'react-i18next';

const BodyScan: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('blogPosts.bodyScan.title')}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t('blogPosts.bodyScan.excerpt')}
            </p>
            <div className="mt-6 flex justify-center">
              <span className="bg-mor-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🧘‍♀️ {t('blogPosts.bodyScan.category')}
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
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Beden taraması ve farkındalık meditasyonu"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-2">{t('blogPosts.bodyScan.tldr')}</h2>
            <p className="text-blue-700">
              {t('blogPosts.bodyScan.tldrContent')}
            </p>
          </div>

          {/* Why it works */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('blogPosts.bodyScan.whyItWorks')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t('blogPosts.bodyScan.whyItWorksContent')}
            </p>
          </div>

          {/* Step by step */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('blogPosts.bodyScan.stepByStep')}</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('blogPosts.bodyScan.step1Title')}</h3>
                  <p className="text-gray-700">{t('blogPosts.bodyScan.step1Content')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('blogPosts.bodyScan.step2Title')}</h3>
                  <p className="text-gray-700 mb-3">{t('blogPosts.bodyScan.step2Content')}</p>
                  <p className="text-gray-600 italic">{t('blogPosts.bodyScan.step2Note')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('blogPosts.bodyScan.step3Title')}</h3>
                  <p className="text-gray-700">{t('blogPosts.bodyScan.step3Content')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Body scan visualization */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('blogPosts.bodyScan.scanOrder')}</h3>
            <div className="bg-gradient-to-b from-mor-50 to-purple-50 rounded-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">🦶</div>
                  <p className="text-sm font-semibold text-gray-700">{t('blogPosts.bodyScan.feet')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">🦵</div>
                  <p className="text-sm font-semibold text-gray-700">{t('blogPosts.bodyScan.calves')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">🦴</div>
                  <p className="text-sm font-semibold text-gray-700">{t('blogPosts.bodyScan.knees')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">🍑</div>
                  <p className="text-sm font-semibold text-gray-700">{t('blogPosts.bodyScan.hips')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">🫁</div>
                  <p className="text-sm font-semibold text-gray-700">{t('blogPosts.bodyScan.belly')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">💪</div>
                  <p className="text-sm font-semibold text-gray-700">{t('blogPosts.bodyScan.chest')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">🤷‍♀️</div>
                  <p className="text-sm font-semibold text-gray-700">{t('blogPosts.bodyScan.shoulders')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">👤</div>
                  <p className="text-sm font-semibold text-gray-700">{t('blogPosts.bodyScan.neckFace')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Common mistakes */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('blogPosts.bodyScan.commonMistakes')}</h2>
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">{t('blogPosts.bodyScan.mistake1Title')}</h3>
                <p className="text-red-700">{t('blogPosts.bodyScan.mistake1Content')}</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">{t('blogPosts.bodyScan.mistake2Title')}</h3>
                <p className="text-red-700">{t('blogPosts.bodyScan.mistake2Content')}</p>
              </div>
            </div>
          </div>

          {/* Daily integration */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('blogPosts.bodyScan.dailyIntegration')}</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">💼</span>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-1">{t('blogPosts.bodyScan.integration1Title')}</h3>
                    <p className="text-green-700">{t('blogPosts.bodyScan.integration1Content')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🚗</span>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-1">{t('blogPosts.bodyScan.integration2Title')}</h3>
                    <p className="text-green-700">{t('blogPosts.bodyScan.integration2Content')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mor Kıvılcım note */}
          <div className="bg-mor-50 border border-mor-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-mor-800 mb-3">💜 {t('blogPosts.bodyScan.noteTitle')}</h3>
            <p className="text-mor-700">
              {t('blogPosts.bodyScan.noteContent')}
            </p>
          </div>

          {/* Related articles */}
          <div className="mt-16 border-t pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('blogPosts.bodyScan.relatedArticles')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/blog/444-breathing" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">{t('blogPosts.bodyScan.related1Title')}</h4>
                <p className="text-gray-600 text-sm">{t('blogPosts.bodyScan.related1Desc')}</p>
              </a>
              <a href="/blog/uyku-meditasyonu" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">{t('blogPosts.bodyScan.related2Title')}</h4>
                <p className="text-gray-600 text-sm">{t('blogPosts.bodyScan.related2Desc')}</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BodyScan;
