import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-mor-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="ml-3 text-2xl font-bold">MOR Kıvılcım</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Ruhsal dönüşüm ve enerji çalışmaları alanında uzmanlaşmış rehberlik merkezi. 
              İç dünyanızı keşfetmenizde ve ruhsal gelişiminizde size eşlik ediyoruz.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/mor_kivilcim/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-mor-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-mor-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-mor-600 rounded-lg flex items-center justify-center text-white hover:from-indigo-600 hover:to-mor-700 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="text-2xl mr-2">🔗</span>
              Hızlı Linkler
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-mor-400 transition-colors flex items-center">
                  <span className="text-mor-400 mr-2">🏠</span>
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-mor-400 transition-colors flex items-center">
                  <span className="text-mor-400 mr-2">🌟</span>
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-mor-400 transition-colors flex items-center">
                  <span className="text-mor-400 mr-2">🕯️</span>
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link to="/spiritual-wellbeing" className="text-gray-300 hover:text-mor-400 transition-colors flex items-center">
                  <span className="text-mor-400 mr-2">🧘‍♀️</span>
                  Ruhsal İyilik
                </Link>
              </li>
              <li>
                <Link to="/spiritual-journey" className="text-gray-300 hover:text-mor-400 transition-colors flex items-center">
                  <span className="text-mor-400 mr-2">🛤️</span>
                  Ruhsal Yolculuk
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-mor-400 transition-colors flex items-center">
                  <span className="text-mor-400 mr-2">📞</span>
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="text-2xl mr-2">📞</span>
              İletişim
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <span className="text-mor-400 mr-3 mt-1">📍</span>
                <div>
                  <p className="font-medium">Adres</p>
                  <p className="text-sm">Bostancı<br />İstanbul, Türkiye</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-mor-400 mr-3 mt-1">📧</span>
                <div>
                  <p className="font-medium">E-posta</p>
                  <p className="text-sm">info@morkiviilm.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-mor-400 mr-3 mt-1">📱</span>
                <div>
                  <p className="font-medium">Telefon</p>
                  <p className="text-sm">0501 127 25 33</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-mor-400 mr-3 mt-1">🕒</span>
                <div>
                  <p className="font-medium">Çalışma Saatleri</p>
                  <p className="text-sm">Pzt-Cum: 09:00-18:00<br />Cmt: 09:00-14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; 2024 MOR Kıvılcım. Tüm hakları saklıdır.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Ruhsal dönüşüm ve enerji çalışmaları merkezi
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-mor-400 transition-colors">Gizlilik Politikası</Link>
              <Link to="/terms-of-service" className="hover:text-mor-400 transition-colors">Kullanım Şartları</Link>
              <Link to="/cookie-policy" className="hover:text-mor-400 transition-colors">Çerez Politikası</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;