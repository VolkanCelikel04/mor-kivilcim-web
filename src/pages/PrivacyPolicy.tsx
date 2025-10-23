import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const sections = [
    {
      id: 1,
      title: t('privacyPolicy.section1Title'),
      content: (
        <div className="space-y-4">
          <p><strong>{t('privacyPolicy.dataController')}:</strong> Mor Kıvılcım</p>
          <p><strong>{t('privacyPolicy.address')}:</strong> Bostancı, İstanbul, Türkiye</p>
          <p><strong>{t('privacyPolicy.email')}:</strong> info@morkivilcim.com</p>
          <p><strong>{t('privacyPolicy.phone')}:</strong> 0501 127 25 33</p>
          <p>{t('privacyPolicy.section1Text')}</p>
        </div>
      )
    },
    {
      id: 2,
      title: t('privacyPolicy.section2Title'),
      content: (
        <div className="space-y-4">
          <p>{t('privacyPolicy.section2Text1')}</p>
          <p>{t('privacyPolicy.section2Text2')}</p>
        </div>
      )
    },
    {
      id: 3,
      title: t('privacyPolicy.section3Title'),
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.identityContact')}:</h4>
            <p>{t('privacyPolicy.identityContactDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.transactionInfo')}:</h4>
            <p>{t('privacyPolicy.transactionInfoDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.contentPreferences')}:</h4>
            <p>{t('privacyPolicy.contentPreferencesDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.technicalData')}:</h4>
            <p>{t('privacyPolicy.technicalDataDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sensitiveData')}:</h4>
            <p>{t('privacyPolicy.sensitiveDataDesc')}</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: t('privacyPolicy.section4Title'),
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.requiredCookies')}:</h4>
            <p>{t('privacyPolicy.requiredCookiesDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.analyticsCookies')}:</h4>
            <p>{t('privacyPolicy.analyticsCookiesDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.functionalCookies')}:</h4>
            <p>{t('privacyPolicy.functionalCookiesDesc')}</p>
          </div>
          <p>{t('privacyPolicy.cookieManagement')}</p>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.exampleCookies')}:</h4>
            <p>{t('privacyPolicy.exampleCookiesDesc')}</p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: t('privacyPolicy.section5Title'),
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.serviceDelivery')}:</h4>
            <p>{t('privacyPolicy.serviceDeliveryDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.businessProcesses')}:</h4>
            <p>{t('privacyPolicy.businessProcessesDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.developmentSecurity')}:</h4>
            <p>{t('privacyPolicy.developmentSecurityDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.marketing')}:</h4>
            <p>{t('privacyPolicy.marketingDesc')}</p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: t('privacyPolicy.section6Title'),
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>{t('privacyPolicy.legalBasis1')}</li>
            <li>{t('privacyPolicy.legalBasis2')}</li>
            <li>{t('privacyPolicy.legalBasis3')}</li>
            <li>{t('privacyPolicy.legalBasis4')}</li>
          </ul>
          <p>{t('privacyPolicy.consentWithdrawal')}</p>
        </div>
      )
    },
    {
      id: 7,
      title: t('privacyPolicy.section7Title'),
      content: (
        <div className="space-y-4">
          <p>{t('privacyPolicy.dataSharingIntro')}</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>{t('privacyPolicy.hostingInfrastructure')}:</strong> Vercel/Azure</li>
            <li><strong>{t('privacyPolicy.emailNotifications')}:</strong> SendGrid/FCM</li>
            <li><strong>{t('privacyPolicy.paymentReservation')}:</strong> iyzico/Stripe vb.</li>
            <li><strong>{t('privacyPolicy.analyticsErrorTracking')}:</strong> Google Analytics/Sentry</li>
            <li><strong>{t('privacyPolicy.legalAccounting')}:</strong> {t('privacyPolicy.legalAccountingDesc')}</li>
          </ul>
          <p>{t('privacyPolicy.serviceProviders')}</p>
        </div>
      )
    },
    {
      id: 8,
      title: t('privacyPolicy.section8Title'),
      content: (
        <div className="space-y-4">
          <p>{t('privacyPolicy.internationalTransfer')}</p>
        </div>
      )
    },
    {
      id: 9,
      title: t('privacyPolicy.section9Title'),
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>{t('privacyPolicy.contractualData')}:</strong> {t('privacyPolicy.contractualDataDesc')}</li>
            <li><strong>{t('privacyPolicy.communicationNewsletter')}:</strong> {t('privacyPolicy.communicationNewsletterDesc')}</li>
            <li><strong>{t('privacyPolicy.analyticsCookieData')}:</strong> {t('privacyPolicy.analyticsCookieDataDesc')}</li>
          </ul>
          <p>{t('privacyPolicy.dataRetentionEnd')}</p>
        </div>
      )
    },
    {
      id: 10,
      title: t('privacyPolicy.section10Title'),
      content: (
        <div className="space-y-4">
          <p>{t('privacyPolicy.security')}</p>
        </div>
      )
    },
    {
      id: 11,
      title: t('privacyPolicy.section11Title'),
      content: (
        <div className="space-y-4">
          <p>{t('privacyPolicy.rightsIntro')}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t('privacyPolicy.right1')}</li>
            <li>{t('privacyPolicy.right2')}</li>
            <li>{t('privacyPolicy.right3')}</li>
            <li>{t('privacyPolicy.right4')}</li>
            <li>{t('privacyPolicy.right5')}</li>
            <li>{t('privacyPolicy.right6')}</li>
          </ul>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.applicationChannels')}:</h4>
            <p><strong>{t('privacyPolicy.email')}:</strong> info@morkivilcim.com ({t('privacyPolicy.emailSubject')})</p>
            <p><strong>{t('privacyPolicy.mail')}:</strong> Bostancı, İstanbul, Türkiye</p>
          </div>
          <p>{t('privacyPolicy.responseTime')}</p>
        </div>
      )
    },
    {
      id: 12,
      title: t('privacyPolicy.section12Title'),
      content: (
        <div className="space-y-4">
          <p>{t('privacyPolicy.childrenData')}</p>
        </div>
      )
    },
    {
      id: 13,
      title: t('privacyPolicy.section13Title'),
      content: (
        <div className="space-y-4">
          <p>{t('privacyPolicy.changes')}</p>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('privacyPolicy.title')}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t('privacyPolicy.subtitle')}
            </p>
            <p className="text-lg mt-4 opacity-90">
              {t('privacyPolicy.lastUpdated')}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('privacyPolicy.introduction')}
            </p>
          </div>

          {/* Quick Summary */}
          <div className="bg-mor-50 border border-mor-200 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacyPolicy.quickSummary')}</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• {t('privacyPolicy.summary1')}</li>
              <li>• {t('privacyPolicy.summary2')}</li>
              <li>• {t('privacyPolicy.summary3')}</li>
              <li>• {t('privacyPolicy.summary4')}</li>
            </ul>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.id} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {section.id}) {section.title}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      expandedSections.includes(section.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSections.includes(section.id) && (
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <div className="pt-4">
                      {section.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('privacyPolicy.contact')}</h3>
            <p className="text-gray-700 mb-2">
              {t('privacyPolicy.contactText')}
            </p>
            <p className="text-gray-700">
              <strong>{t('privacyPolicy.email')}:</strong> info@morkivilcim.com<br />
              <strong>{t('privacyPolicy.phone')}:</strong> 0501 127 25 33
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
