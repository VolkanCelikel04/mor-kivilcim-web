import React from 'react';
import { useTranslation } from 'react-i18next';

const SpiritualWellbeing: React.FC = () => {
  const { t } = useTranslation();
  
  const spiritualApps = [
    {
      title: t('spiritualWellbeing.apps.mindfulness.title'),
      description: t('spiritualWellbeing.apps.mindfulness.description'),
      apps: [
        {
          name: 'Headspace',
          description: t('spiritualWellbeing.apps.mindfulness.headspace.description'),
          features: [
            t('spiritualWellbeing.apps.mindfulness.headspace.features.anxiety'),
            t('spiritualWellbeing.apps.mindfulness.headspace.features.stress'),
            t('spiritualWellbeing.apps.mindfulness.headspace.features.focus'),
            t('spiritualWellbeing.apps.mindfulness.headspace.features.sleep')
          ]
        },
        {
          name: 'Calm',
          description: t('spiritualWellbeing.apps.mindfulness.calm.description'),
          features: [
            t('spiritualWellbeing.apps.mindfulness.calm.features.stories'),
            t('spiritualWellbeing.apps.mindfulness.calm.features.nature'),
            t('spiritualWellbeing.apps.mindfulness.calm.features.meditations')
          ]
        },
        {
          name: 'Insight Timer',
          description: t('spiritualWellbeing.apps.mindfulness.insightTimer.description'),
          features: [
            t('spiritualWellbeing.apps.mindfulness.insightTimer.features.free'),
            t('spiritualWellbeing.apps.mindfulness.insightTimer.features.community'),
            t('spiritualWellbeing.apps.mindfulness.insightTimer.features.progress')
          ]
        }
      ]
    },
    {
      title: t('spiritualWellbeing.apps.personalDevelopment.title'),
      description: t('spiritualWellbeing.apps.personalDevelopment.description'),
      apps: [
        {
          name: 'Day One',
          description: t('spiritualWellbeing.apps.personalDevelopment.dayOne.description'),
          features: [
            t('spiritualWellbeing.apps.personalDevelopment.dayOne.features.awareness'),
            t('spiritualWellbeing.apps.personalDevelopment.dayOne.features.gratitude'),
            t('spiritualWellbeing.apps.personalDevelopment.dayOne.features.reflection')
          ]
        },
        {
          name: '365 Gratitude',
          description: t('spiritualWellbeing.apps.personalDevelopment.gratitude365.description'),
          features: [
            t('spiritualWellbeing.apps.personalDevelopment.gratitude365.features.daily'),
            t('spiritualWellbeing.apps.personalDevelopment.gratitude365.features.mood'),
            t('spiritualWellbeing.apps.personalDevelopment.gratitude365.features.challenges')
          ]
        },
        {
          name: 'Habitica',
          description: t('spiritualWellbeing.apps.personalDevelopment.habitica.description'),
          features: [
            t('spiritualWellbeing.apps.personalDevelopment.habitica.features.gamification'),
            t('spiritualWellbeing.apps.personalDevelopment.habitica.features.goals'),
            t('spiritualWellbeing.apps.personalDevelopment.habitica.features.tracking')
          ]
        }
      ]
    }
  ];

  const wellbeingResources = [
    {
      title: t('spiritualWellbeing.resources.innerPeace.title'),
      description: t('spiritualWellbeing.resources.innerPeace.description'),
      items: [
        t('spiritualWellbeing.resources.innerPeace.items.breathing'),
        t('spiritualWellbeing.resources.innerPeace.items.nature'),
        t('spiritualWellbeing.resources.innerPeace.items.gratitude'),
        t('spiritualWellbeing.resources.innerPeace.items.walking'),
        t('spiritualWellbeing.resources.innerPeace.items.creative')
      ]
    },
    {
      title: t('spiritualWellbeing.resources.stressManagement.title'),
      description: t('spiritualWellbeing.resources.stressManagement.description'),
      items: [
        t('spiritualWellbeing.resources.stressManagement.items.breathing'),
        t('spiritualWellbeing.resources.stressManagement.items.muscle'),
        t('spiritualWellbeing.resources.stressManagement.items.visualization'),
        t('spiritualWellbeing.resources.stressManagement.items.routine'),
        t('spiritualWellbeing.resources.stressManagement.items.support')
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('spiritualWellbeing.title')}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t('spiritualWellbeing.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('spiritualWellbeing.recommendedApps')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('spiritualWellbeing.appsDescription')}
            </p>
          </div>

          <div className="space-y-16">
            {spiritualApps.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.apps.map((app, appIndex) => (
                    <div key={appIndex} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        {app.name}
                      </h4>
                      <p className="text-gray-600 mb-4">{app.description}</p>
                      <ul className="space-y-2">
                        {app.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-mor-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('spiritualWellbeing.wellbeingResources')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('spiritualWellbeing.resourcesDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wellbeingResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <ul className="space-y-3">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-mor-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('spiritualWellbeing.discoverInnerPeace')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('spiritualWellbeing.ctaDescription')}
          </p>
          <button className="bg-mor-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-mor-700 transition-colors">
            {t('spiritualWellbeing.getPersonalConsultation')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default SpiritualWellbeing;
