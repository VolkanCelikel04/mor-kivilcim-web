import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const summaryItems = t('privacyPolicy.summaryItems', { returnObjects: true }) as string[];
  const legalBasisItems = t('privacyPolicy.sections.legalBasisContent.items', { returnObjects: true }) as string[];
  const dataSharingItems = t('privacyPolicy.sections.dataSharingContent.items', { returnObjects: true }) as string[];
  const retentionItems = t('privacyPolicy.sections.retentionPeriodsContent.items', { returnObjects: true }) as string[];
  const rightsItems = t('privacyPolicy.sections.rightsContent.items', { returnObjects: true }) as string[];
  const dailyPositiveItems = t('privacyPolicy.sections.dailyPositiveContent.items', { returnObjects: true }) as string[];

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
      title: t('privacyPolicy.sections.dataController'),
      content: (
        <div className="space-y-4">
          <p><strong>{t('privacyPolicy.sections.dataControllerContent.dataController')}</strong> {t('privacyPolicy.sections.dataControllerContent.dataControllerValue')}</p>
          <p><strong>{t('privacyPolicy.sections.dataControllerContent.address')}</strong> {t('privacyPolicy.sections.dataControllerContent.addressValue')}</p>
          <p><strong>{t('privacyPolicy.sections.dataControllerContent.email')}</strong> {t('privacyPolicy.sections.dataControllerContent.emailValue')}</p>
          <p><strong>{t('privacyPolicy.sections.dataControllerContent.phone')}</strong> {t('privacyPolicy.sections.dataControllerContent.phoneValue')}</p>
          <p>{t('privacyPolicy.sections.dataControllerContent.rightsText')}</p>
        </div>
      )
    },
    {
      id: 2,
      title: t('privacyPolicy.sections.policyScope'),
      content: (
        <div className="space-y-4">
          <p>{t('privacyPolicy.sections.policyScopeContent.covered')}</p>
          <p>{t('privacyPolicy.sections.policyScopeContent.notCovered')}</p>
        </div>
      )
    },
    {
      id: 3,
      title: t('privacyPolicy.sections.dataCategories'),
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sections.dataCategoriesContent.identity')}</h4>
            <p>{t('privacyPolicy.sections.dataCategoriesContent.identityDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sections.dataCategoriesContent.transaction')}</h4>
            <p>{t('privacyPolicy.sections.dataCategoriesContent.transactionDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sections.dataCategoriesContent.content')}</h4>
            <p>{t('privacyPolicy.sections.dataCategoriesContent.contentDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sections.dataCategoriesContent.appAccount')}</h4>
            <p>{t('privacyPolicy.sections.dataCategoriesContent.appAccountDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sections.dataCategoriesContent.appUsage')}</h4>
            <p>{t('privacyPolicy.sections.dataCategoriesContent.appUsageDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sections.dataCategoriesContent.notifications')}</h4>
            <p>{t('privacyPolicy.sections.dataCategoriesContent.notificationsDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sections.dataCategoriesContent.technical')}</h4>
            <p>{t('privacyPolicy.sections.dataCategoriesContent.technicalDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sections.dataCategoriesContent.sensitive')}</h4>
            <p>{t('privacyPolicy.sections.dataCategoriesContent.sensitiveDesc')}</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: t('privacyPolicy.sections.cookies'),
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sections.cookiesContent.mandatory')}</h4>
            <p>{t('privacyPolicy.sections.cookiesContent.mandatoryDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sections.cookiesContent.analytical')}</h4>
            <p>{t('privacyPolicy.sections.cookiesContent.analyticalDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sections.cookiesContent.functional')}</h4>
            <p>{t('privacyPolicy.sections.cookiesContent.functionalDesc')}</p>
          </div>
          <p>{t('privacyPolicy.sections.cookiesContent.management')}</p>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sections.cookiesContent.examples')}</h4>
            <p>{t('privacyPolicy.sections.cookiesContent.examplesDesc')}</p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: t('privacyPolicy.sections.processingPurposes'),
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sections.processingPurposesContent.service')}</h4>
            <p>{t('privacyPolicy.sections.processingPurposesContent.serviceDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sections.processingPurposesContent.dailyPositiveService')}</h4>
            <p>{t('privacyPolicy.sections.processingPurposesContent.dailyPositiveServiceDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sections.processingPurposesContent.business')}</h4>
            <p>{t('privacyPolicy.sections.processingPurposesContent.businessDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sections.processingPurposesContent.development')}</h4>
            <p>{t('privacyPolicy.sections.processingPurposesContent.developmentDesc')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sections.processingPurposesContent.marketing')}</h4>
            <p>{t('privacyPolicy.sections.processingPurposesContent.marketingDesc')}</p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: t('privacyPolicy.sections.legalBasis'),
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            {legalBasisItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{t('privacyPolicy.sections.legalBasisContent.consentNote')}</p>
        </div>
      )
    },
    {
      id: 7,
      title: t('privacyPolicy.sections.dataSharing'),
      content: (
        <div className="space-y-4">
          <p>{t('privacyPolicy.sections.dataSharingContent.intro')}</p>
          <ul className="list-disc list-inside space-y-2">
            {dataSharingItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{t('privacyPolicy.sections.dataSharingContent.note')}</p>
        </div>
      )
    },
    {
      id: 8,
      title: t('privacyPolicy.sections.internationalTransfer'),
      content: (
        <div className="space-y-4">
          <p>{t('privacyPolicy.sections.internationalTransferContent')}</p>
        </div>
      )
    },
    {
      id: 9,
      title: t('privacyPolicy.sections.retentionPeriods'),
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            {retentionItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{t('privacyPolicy.sections.retentionPeriodsContent.note')}</p>
        </div>
      )
    },
    {
      id: 10,
      title: t('privacyPolicy.sections.security'),
      content: (
        <div className="space-y-4">
          <p>{t('privacyPolicy.sections.securityContent')}</p>
        </div>
      )
    },
    {
      id: 11,
      title: t('privacyPolicy.sections.rights'),
      content: (
        <div className="space-y-4">
          <p>{t('privacyPolicy.sections.rightsContent.intro')}</p>
          <ul className="list-disc list-inside space-y-2">
            {rightsItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div>
            <h4 className="font-semibold mb-2">{t('privacyPolicy.sections.rightsContent.channels')}</h4>
            <p><strong>{t('privacyPolicy.sections.rightsContent.email')}</strong> {t('privacyPolicy.sections.rightsContent.emailValue')}</p>
            <p><strong>{t('privacyPolicy.sections.rightsContent.mail')}</strong> {t('privacyPolicy.sections.rightsContent.mailValue')}</p>
          </div>
          <p>{t('privacyPolicy.sections.rightsContent.response')}</p>
        </div>
      )
    },
    {
      id: 12,
      title: t('privacyPolicy.sections.childrenData'),
      content: (
        <div className="space-y-4">
          <p>{t('privacyPolicy.sections.childrenDataContent')}</p>
        </div>
      )
    },
    {
      id: 13,
      title: t('privacyPolicy.sections.dailyPositive'),
      content: (
        <div className="space-y-4">
          <p>{t('privacyPolicy.sections.dailyPositiveContent.intro')}</p>
          <ul className="list-disc list-inside space-y-2">
            {dailyPositiveItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{t('privacyPolicy.sections.dailyPositiveContent.accountDeletion')}</p>
        </div>
      )
    },
    {
      id: 14,
      title: t('privacyPolicy.sections.changes'),
      content: (
        <div className="space-y-4">
          <p>{t('privacyPolicy.sections.changesContent')}</p>
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
              {summaryItems.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
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
              <strong>{t('privacyPolicy.sections.dataControllerContent.email')}</strong> {t('privacyPolicy.sections.dataControllerContent.emailValue')}<br />
              <strong>{t('privacyPolicy.sections.dataControllerContent.phone')}</strong> {t('privacyPolicy.sections.dataControllerContent.phoneValue')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
