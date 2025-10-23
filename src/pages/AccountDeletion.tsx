import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AccountDeletion: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    reason: '',
    confirmation: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prosedür burada çalıştırılacak
    console.log('Hesap silme talebi:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white min-h-screen">
        <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('accountDeletion.requestReceived')}</h1>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('accountDeletion.requestReceivedDesc')}</h2>
              <p className="text-gray-700 mb-6">
                {t('accountDeletion.requestReceivedText', { email: formData.email })}
              </p>
              <p className="text-gray-600 text-sm">
                {t('accountDeletion.processingTime')}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('accountDeletion.title')}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t('accountDeletion.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Important Notice */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-red-800 mb-3 flex items-center">
              <span className="text-2xl mr-2">⚠️</span>
              {t('accountDeletion.importantWarning')}
            </h2>
            <p className="text-red-700">
              {t('accountDeletion.warningText')}
            </p>
          </div>

          {/* Process Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('accountDeletion.deletionProcess')}</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('accountDeletion.step1')}</h3>
                  <p className="text-gray-700">{t('accountDeletion.step1Desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('accountDeletion.step2')}</h3>
                  <p className="text-gray-700">{t('accountDeletion.step2Desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('accountDeletion.step3')}</h3>
                  <p className="text-gray-700">{t('accountDeletion.step3Desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-mor-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('accountDeletion.step4')}</h3>
                  <p className="text-gray-700">{t('accountDeletion.step4Desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('accountDeletion.dataToBeDeleted')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">{t('accountDeletion.permanentlyDeleted')}</h3>
                <ul className="text-red-700 space-y-2">
                  <li>• {t('accountDeletion.userProfileInfo')}</li>
                  <li>• {t('accountDeletion.appContent')}</li>
                  <li>• {t('accountDeletion.preferences')}</li>
                  <li>• {t('accountDeletion.activityHistory')}</li>
                  <li>• {t('accountDeletion.contactInfo')}</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">{t('accountDeletion.legalRetention')}</h3>
                <ul className="text-yellow-700 space-y-2">
                  <li>• {t('accountDeletion.paymentRecords')}</li>
                  <li>• {t('accountDeletion.commercialRecords')}</li>
                  <li>• {t('accountDeletion.securityLogs')}</li>
                </ul>
                <p className="text-yellow-600 text-sm mt-3">
                  {t('accountDeletion.autoDeletionNote')}
                </p>
              </div>
            </div>
          </div>

          {/* Deletion Form */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('accountDeletion.createDeletionRequest')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('accountDeletion.emailAddress')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mor-500 focus:border-transparent"
                  placeholder={t('accountDeletion.emailPlaceholder')}
                />
                <p className="text-sm text-gray-500 mt-1">
                  {t('accountDeletion.emailNote')}
                </p>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('accountDeletion.deletionReason')}
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mor-500 focus:border-transparent"
                  placeholder={t('accountDeletion.reasonPlaceholder')}
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="confirmation"
                  name="confirmation"
                  checked={formData.confirmation}
                  onChange={handleChange}
                  required
                  className="mt-1 mr-3 w-4 h-4 text-mor-600 focus:ring-mor-500 border-gray-300 rounded"
                />
                <label htmlFor="confirmation" className="text-sm text-gray-700">
                  {t('accountDeletion.confirmationText')} *
                </label>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-700 text-sm">
                  <strong>{t('accountDeletion.note')}:</strong> {t('accountDeletion.noteText')}
                </p>
              </div>

              <button
                type="submit"
                disabled={!formData.confirmation}
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
{t('accountDeletion.submitRequest')}
              </button>
            </form>
          </div>

          {/* Support Section */}
          <div className="mt-12 bg-mor-50 border border-mor-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-mor-800 mb-3">{t('accountDeletion.needHelp')}</h3>
            <p className="text-mor-700 mb-4">
              {t('accountDeletion.helpText')}
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-mor-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-mor-700 transition-colors"
            >
{t('accountDeletion.contactUs')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountDeletion;
