import React from 'react';
import { useTranslation } from 'react-i18next';

const SpiritualJourney: React.FC = () => {
  const { t } = useTranslation();
  
  const journeySteps = [
    {
      step: 1,
      title: t('spiritualJourney.journeySteps.step1.title'),
      icon: '🌱',
      description: t('spiritualJourney.journeySteps.step1.description'),
      practices: t('spiritualJourney.journeySteps.step1.practices', { returnObjects: true }) as string[],
      color: 'from-green-400 to-emerald-500'
    },
    {
      step: 2,
      title: t('spiritualJourney.journeySteps.step2.title'),
      icon: '🧹',
      description: t('spiritualJourney.journeySteps.step2.description'),
      practices: t('spiritualJourney.journeySteps.step2.practices', { returnObjects: true }) as string[],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      step: 3,
      title: t('spiritualJourney.journeySteps.step3.title'),
      icon: '⚖️',
      description: t('spiritualJourney.journeySteps.step3.description'),
      practices: t('spiritualJourney.journeySteps.step3.practices', { returnObjects: true }) as string[],
      color: 'from-purple-400 to-violet-500'
    },
    {
      step: 4,
      title: t('spiritualJourney.journeySteps.step4.title'),
      icon: '💪',
      description: t('spiritualJourney.journeySteps.step4.description'),
      practices: t('spiritualJourney.journeySteps.step4.practices', { returnObjects: true }) as string[],
      color: 'from-orange-400 to-red-500'
    },
    {
      step: 5,
      title: t('spiritualJourney.journeySteps.step5.title'),
      icon: '🌟',
      description: t('spiritualJourney.journeySteps.step5.description'),
      practices: t('spiritualJourney.journeySteps.step5.practices', { returnObjects: true }) as string[],
      color: 'from-yellow-400 to-amber-500'
    },
    {
      step: 6,
      title: t('spiritualJourney.journeySteps.step6.title'),
      icon: '✨',
      description: t('spiritualJourney.journeySteps.step6.description'),
      practices: t('spiritualJourney.journeySteps.step6.practices', { returnObjects: true }) as string[],
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  const chakras = [
    { name: t('spiritualJourney.chakras.root.name'), color: 'bg-red-500', location: t('spiritualJourney.chakras.root.location'), element: t('spiritualJourney.chakras.root.element'), emoji: '🔴' },
    { name: t('spiritualJourney.chakras.sacral.name'), color: 'bg-orange-500', location: t('spiritualJourney.chakras.sacral.location'), element: t('spiritualJourney.chakras.sacral.element'), emoji: '🟠' },
    { name: t('spiritualJourney.chakras.solarPlexus.name'), color: 'bg-yellow-500', location: t('spiritualJourney.chakras.solarPlexus.location'), element: t('spiritualJourney.chakras.solarPlexus.element'), emoji: '🟡' },
    { name: t('spiritualJourney.chakras.heart.name'), color: 'bg-green-500', location: t('spiritualJourney.chakras.heart.location'), element: t('spiritualJourney.chakras.heart.element'), emoji: '🟢' },
    { name: t('spiritualJourney.chakras.throat.name'), color: 'bg-blue-500', location: t('spiritualJourney.chakras.throat.location'), element: t('spiritualJourney.chakras.throat.element'), emoji: '🔵' },
    { name: t('spiritualJourney.chakras.thirdEye.name'), color: 'bg-indigo-500', location: t('spiritualJourney.chakras.thirdEye.location'), element: t('spiritualJourney.chakras.thirdEye.element'), emoji: '🟣' },
    { name: t('spiritualJourney.chakras.crown.name'), color: 'bg-purple-500', location: t('spiritualJourney.chakras.crown.location'), element: t('spiritualJourney.chakras.crown.element'), emoji: '⚪' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-mor-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="text-5xl mr-4">🦋</span>
              <h1 className="text-4xl md:text-6xl font-bold">{t('spiritualJourney.title')}</h1>
            </div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8">
              {t('spiritualJourney.subtitle')}
            </p>
            <div className="flex justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-2">🌱</span>
                <span>{t('spiritualJourney.growth')}</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🔄</span>
                <span>{t('spiritualJourney.transformation')}</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">✨</span>
                <span>{t('spiritualJourney.enlightenment')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('spiritualJourney.journeySteps.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('spiritualJourney.journeySteps.subtitle')}
            </p>
          </div>

          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className={`w-32 h-32 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl`}>
                    <span className="text-4xl">{step.icon}</span>
                  </div>
                  
                  <div className="flex-1 bg-white rounded-3xl p-8 shadow-xl">
                    <div className="flex items-center mb-4">
                      <span className="bg-mor-100 text-mor-600 px-4 py-2 rounded-full font-bold text-lg mr-4">
                        {t('common.step')} {step.step}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-lg mb-6">
                      {step.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="text-mor-500 mr-2">✨</span>
                        {t('spiritualJourney.practices')}:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.practices.map((practice, practiceIndex) => (
                          <div key={practiceIndex} className="flex items-center text-gray-700">
                            <svg className="w-4 h-4 text-mor-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {practice}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connection Line */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute left-16 top-32 w-1 h-12 bg-gradient-to-b from-mor-300 to-purple-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chakras Section */}
      <section className="py-20 bg-gradient-to-br from-mor-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('spiritualJourney.chakras.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('spiritualJourney.chakras.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {chakras.map((chakra, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 ${chakra.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-2xl">{chakra.emoji}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {chakra.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {chakra.location}
                  </p>
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {chakra.element}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meditation Guide */}
      <section className="py-20 bg-gradient-to-r from-mor-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {t('spiritualJourney.meditation.title')}
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              {t('spiritualJourney.meditation.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">🧘‍♀️</span>
                <h3 className="text-2xl font-bold mb-2">{t('spiritualJourney.meditation.preparation.title')}</h3>
              </div>
              <ul className="space-y-3 text-sm">
                {t('spiritualJourney.meditation.preparation.steps', { returnObjects: true }).map((step: string, index: number) => (
                  <li key={index}>• {step}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">🌬️</span>
                <h3 className="text-2xl font-bold mb-2">{t('spiritualJourney.meditation.breathing.title')}</h3>
              </div>
              <ul className="space-y-3 text-sm">
                {t('spiritualJourney.meditation.breathing.steps', { returnObjects: true }).map((step: string, index: number) => (
                  <li key={index}>• {step}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">✨</span>
                <h3 className="text-2xl font-bold mb-2">{t('spiritualJourney.meditation.awareness.title')}</h3>
              </div>
              <ul className="space-y-3 text-sm">
                {t('spiritualJourney.meditation.awareness.steps', { returnObjects: true }).map((step: string, index: number) => (
                  <li key={index}>• {step}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-mor-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-mor-50 transition-all duration-300 transform hover:scale-105">
              {t('spiritualJourney.meditation.downloadGuide')}
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-mor-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="text-6xl mb-4 block">🦋</span>
            <h2 className="text-4xl font-bold mb-4">
              {t('spiritualJourney.cta.title')}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              {t('spiritualJourney.cta.subtitle')}
            </p>
          </div>
          <button className="bg-gradient-to-r from-mor-500 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-xl hover:from-mor-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-block shadow-2xl">
            {t('spiritualJourney.cta.getPersonalGuidance')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default SpiritualJourney;
