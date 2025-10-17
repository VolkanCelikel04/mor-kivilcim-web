import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();
  
  const spiritualServices = [
    {
      title: t('services.meditation.title'),
      description: t('services.meditation.description'),
      icon: '🧘‍♀️',
      color: 'from-mor-400 to-purple-500',
      features: [
        t('services.meditation.features.guided'),
        t('services.meditation.features.mindfulness'),
        t('services.meditation.features.breathing'),
        t('services.meditation.features.calming'),
        t('services.meditation.features.routines')
      ],
      benefits: [t('services.meditation.benefits.stress'), t('services.meditation.benefits.focus'), t('services.meditation.benefits.peace'), t('services.meditation.benefits.balance')]
    },
    {
      title: t('services.energy.title'),
      description: t('services.energy.description'),
      icon: '🔮',
      color: 'from-purple-400 to-indigo-500',
      features: [
        t('services.energy.features.reiki'),
        t('services.energy.features.aura'),
        t('services.energy.features.chakra'),
        t('services.energy.features.blockage'),
        t('services.energy.features.crystal')
      ],
      benefits: [t('services.energy.benefits.cleansing'), t('services.energy.benefits.healing'), t('services.energy.benefits.balance'), t('services.energy.benefits.strengthening')]
    },
    {
      title: t('services.counseling.title'),
      description: t('services.counseling.description'),
      icon: '📿',
      color: 'from-indigo-400 to-mor-500',
      features: [
        t('services.counseling.features.lifePath'),
        t('services.counseling.features.guidance'),
        t('services.counseling.features.transformation'),
        t('services.counseling.features.goals'),
        t('services.counseling.features.discovery')
      ],
      benefits: [t('services.counseling.benefits.purpose'), t('services.counseling.benefits.development'), t('services.counseling.benefits.transformation'), t('services.counseling.benefits.insight')]
    },
    {
      title: t('services.crystal.title'),
      description: t('services.crystal.description'),
      icon: '💎',
      color: 'from-mor-300 to-purple-400',
      features: [
        t('services.crystal.features.selection'),
        t('services.crystal.features.chakra'),
        t('services.crystal.features.meditation'),
        t('services.crystal.features.healing'),
        t('services.crystal.features.rituals')
      ],
      benefits: [t('services.crystal.benefits.balance'), t('services.crystal.benefits.healing'), t('services.crystal.benefits.protection'), t('services.crystal.benefits.peace')]
    },
    {
      title: t('services.astrology.title'),
      description: t('services.astrology.description'),
      icon: '⭐',
      color: 'from-purple-300 to-indigo-400',
      features: [
        t('services.astrology.features.birthChart'),
        t('services.astrology.features.numerology'),
        t('services.astrology.features.future'),
        t('services.astrology.features.crystals'),
        t('services.astrology.features.rituals')
      ],
      benefits: [t('services.astrology.benefits.self'), t('services.astrology.benefits.path'), t('services.astrology.benefits.guidance'), t('services.astrology.benefits.harmony')]
    },
    {
      title: t('services.workshops.title'),
      description: t('services.workshops.description'),
      icon: '🌸',
      color: 'from-indigo-300 to-mor-400',
      features: [
        t('services.workshops.features.meditation'),
        t('services.workshops.features.crystal'),
        t('services.workshops.features.healing'),
        t('services.workshops.features.ritual'),
        t('services.workshops.features.art')
      ],
      benefits: [t('services.workshops.benefits.community'), t('services.workshops.benefits.learning'), t('services.workshops.benefits.sharing'), t('services.workshops.benefits.growth')]
    }
  ];

  const dailyPractices = [
    {
      title: t('services.practices.morning.title'),
      time: t('services.practices.morning.time'),
      icon: '🌅',
      practices: [t('services.practices.morning.sunrise'), t('services.practices.morning.gratitude'), t('services.practices.morning.intention'), t('services.practices.morning.cleansing')]
    },
    {
      title: t('services.practices.noon.title'),
      time: t('services.practices.noon.time'),
      icon: '☀️',
      practices: [t('services.practices.noon.mindful'), t('services.practices.noon.meditation'), t('services.practices.noon.renewal'), t('services.practices.noon.nature')]
    },
    {
      title: t('services.practices.evening.title'),
      time: t('services.practices.evening.time'),
      icon: '🌙',
      practices: [t('services.practices.evening.reflection'), t('services.practices.evening.meditation'), t('services.practices.evening.healing'), t('services.practices.evening.closure')]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-mor-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="text-5xl mr-4">🕯️</span>
              <h1 className="text-4xl md:text-6xl font-bold">{t('services.title')}</h1>
            </div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8">
              {t('services.subtitle')}
            </p>
            <div className="flex justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-2">✨</span>
                <span>{t('services.hero.personal')}</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🌟</span>
                <span>{t('services.hero.transformative')}</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">💫</span>
                <span>{t('services.hero.healing')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('services.ourServices.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.ourServices.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spiritualServices.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-mor-100">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="text-mor-500 mr-2">✨</span>
                    {t('services.features')}:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-mor-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="text-purple-500 mr-2">🌟</span>
                    {t('services.benefits')}:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <span key={benefitIndex} className="bg-mor-100 text-mor-700 px-3 py-1 rounded-full text-xs font-medium">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-mor-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-mor-600 hover:to-purple-700 transition-all duration-300">
                  {t('services.details')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Practices */}
      <section className="py-20 bg-gradient-to-br from-mor-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('services.dailyPractices.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.dailyPractices.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dailyPractices.map((practice, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <span className="text-5xl mb-4 block">{practice.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {practice.title}
                  </h3>
                  <p className="text-mor-600 font-semibold">
                    {practice.time}
                  </p>
                </div>
                <ul className="space-y-3">
                  {practice.practices.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-mor-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-mor-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="text-6xl mb-4 block">🌟</span>
            <h2 className="text-4xl font-bold mb-4">
              {t('services.cta.title')}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              {t('services.cta.subtitle')}
            </p>
          </div>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-mor-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-mor-50 transition-all duration-300 transform hover:scale-105"
          >
            {t('services.freeConsultation')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;