import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DailyPositive: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mor-600 to-mor-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('dailyPositive.title')}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t('dailyPositive.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Account Deletion */}
            <Link 
              to="/dailypositive/hesap-silme"
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border-2 border-gray-100 hover:border-mor-300"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('dailyPositive.accountOperations')}</h3>
                <p className="text-gray-600">
                  {t('dailyPositive.accountOperationsDesc')}
                </p>
              </div>
            </Link>

            {/* Privacy Policy */}
            <Link 
              to="/privacy-policy"
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border-2 border-gray-100 hover:border-mor-300"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('dailyPositive.privacyPolicy')}</h3>
                <p className="text-gray-600">
                  {t('dailyPositive.privacyPolicyDesc')}
                </p>
              </div>
            </Link>

            {/* Support */}
            <Link 
              to="/contact"
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border-2 border-gray-100 hover:border-mor-300"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('dailyPositive.support')}</h3>
                <p className="text-gray-600">
                  {t('dailyPositive.supportDesc')}
                </p>
              </div>
            </Link>
          </div>

          {/* Information Section */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('dailyPositive.about')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('dailyPositive.aboutDescription')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('dailyPositive.aboutDescription2')}
            </p>
          </div>

          {/* Mobile App Section */}
          <section className="mt-16">
            <div className="bg-gradient-to-br from-mor-500 via-mor-600 to-mor-700 rounded-2xl shadow-2xl overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {t('dailyPositive.mobileApp.title')}
                  </h2>
                  <p className="text-xl text-mor-100 mb-2">
                    {t('dailyPositive.mobileApp.subtitle')}
                  </p>
                  <p className="text-mor-50 max-w-3xl mx-auto mt-4">
                    {t('dailyPositive.mobileApp.description')}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {/* Feature 1 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-yellow-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t('dailyPositive.mobileApp.features.dailyQuotes.title')}
                    </h3>
                    <p className="text-mor-50 text-sm">
                      {t('dailyPositive.mobileApp.features.dailyQuotes.description')}
                    </p>
                  </div>

                  {/* Feature 2 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t('dailyPositive.mobileApp.features.meditation.title')}
                    </h3>
                    <p className="text-mor-50 text-sm">
                      {t('dailyPositive.mobileApp.features.meditation.description')}
                    </p>
                  </div>

                  {/* Feature 3 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t('dailyPositive.mobileApp.features.journaling.title')}
                    </h3>
                    <p className="text-mor-50 text-sm">
                      {t('dailyPositive.mobileApp.features.journaling.description')}
                    </p>
                  </div>

                  {/* Feature 4 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t('dailyPositive.mobileApp.features.progress.title')}
                    </h3>
                    <p className="text-mor-50 text-sm">
                      {t('dailyPositive.mobileApp.features.progress.description')}
                    </p>
                  </div>

                  {/* Feature 5 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-pink-400 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-pink-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t('dailyPositive.mobileApp.features.notifications.title')}
                    </h3>
                    <p className="text-mor-50 text-sm">
                      {t('dailyPositive.mobileApp.features.notifications.description')}
                    </p>
                  </div>

                  {/* Feature 6 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-indigo-400 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-indigo-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t('dailyPositive.mobileApp.features.offline.title')}
                    </h3>
                    <p className="text-mor-50 text-sm">
                      {t('dailyPositive.mobileApp.features.offline.description')}
                    </p>
                  </div>
                </div>

                {/* App Examples Section */}
                <div className="mb-12">
                  <h3 className="text-3xl font-bold text-white text-center mb-8">
                    {t('dailyPositive.mobileApp.examples.title')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Example 1 */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                      <div className="w-32 h-56 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center border-2 border-white/30">
                        <div className="text-center p-4">
                          <div className="w-16 h-16 bg-white/30 rounded-full mx-auto mb-3"></div>
                          <div className="h-2 bg-white/20 rounded w-24 mx-auto mb-2"></div>
                          <div className="h-2 bg-white/20 rounded w-20 mx-auto"></div>
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {t('dailyPositive.mobileApp.examples.homeScreen.title')}
                      </h4>
                      <p className="text-mor-50 text-sm">
                        {t('dailyPositive.mobileApp.examples.homeScreen.description')}
                      </p>
                    </div>

                    {/* Example 2 */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                      <div className="w-32 h-56 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center border-2 border-white/30">
                        <div className="text-center p-4 w-full">
                          <div className="h-3 bg-white/30 rounded w-full mb-2"></div>
                          <div className="h-3 bg-white/30 rounded w-3/4 mb-2"></div>
                          <div className="h-3 bg-white/30 rounded w-full mb-2"></div>
                          <div className="h-3 bg-white/30 rounded w-5/6"></div>
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {t('dailyPositive.mobileApp.examples.meditationScreen.title')}
                      </h4>
                      <p className="text-mor-50 text-sm">
                        {t('dailyPositive.mobileApp.examples.meditationScreen.description')}
                      </p>
                    </div>

                    {/* Example 3 */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                      <div className="w-32 h-56 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center border-2 border-white/30">
                        <div className="text-center p-4 w-full">
                          <div className="h-8 bg-white/30 rounded mb-3"></div>
                          <div className="h-16 bg-white/20 rounded mb-2"></div>
                          <div className="h-2 bg-white/30 rounded w-20 mx-auto"></div>
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {t('dailyPositive.mobileApp.examples.journalScreen.title')}
                      </h4>
                      <p className="text-mor-50 text-sm">
                        {t('dailyPositive.mobileApp.examples.journalScreen.description')}
                      </p>
                    </div>

                    {/* Example 4 */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                      <div className="w-32 h-56 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center border-2 border-white/30">
                        <div className="text-center p-4 w-full">
                          <div className="w-20 h-20 bg-white/30 rounded-full mx-auto mb-3"></div>
                          <div className="h-2 bg-white/20 rounded w-16 mx-auto mb-1"></div>
                          <div className="h-2 bg-white/20 rounded w-12 mx-auto"></div>
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {t('dailyPositive.mobileApp.examples.progressScreen.title')}
                      </h4>
                      <p className="text-mor-50 text-sm">
                        {t('dailyPositive.mobileApp.examples.progressScreen.description')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Download Section */}
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {t('dailyPositive.mobileApp.download.title')}
                  </h3>
                  <p className="text-mor-100 mb-8">
                    {t('dailyPositive.mobileApp.download.subtitle')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-white text-mor-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-mor-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-2.24-1.01-3.89-1.75-4.95-2.23C2.21 16.3 1.5 15.7 1.5 14.4c0-1.1.7-1.7 1.95-2.23 1.06-.48 2.71-1.22 4.95-2.23 1.16-.48 2.15-.94 3.24-1.44 1.03-.48 2.1-.55 3.08.4.98.95.88 2.02.4 3.05-.5 1.09-.96 2.08-1.44 3.24-1.01 2.24-1.75 3.89-2.23 4.95-.53 1.25-1.13 1.95-2.43 1.95zm-1.5-5.28c.5.5 1.13.5 1.63 0s.5-1.13 0-1.63-1.13-.5-1.63 0-.5 1.13 0 1.63z"/>
                      </svg>
                      {t('dailyPositive.mobileApp.download.appStore')}
                    </button>
                    <button className="bg-white text-mor-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-mor-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L6.05,21.34L14.54,12.85L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      {t('dailyPositive.mobileApp.download.playStore')}
                    </button>
                  </div>
                  <p className="text-mor-200 text-sm mt-4 italic">
                    {t('dailyPositive.mobileApp.download.comingSoon')}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default DailyPositive;
