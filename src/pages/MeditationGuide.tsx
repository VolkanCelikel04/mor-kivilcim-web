import React, { useState } from 'react';
import { PlayIcon, PauseIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const MeditationGuide: React.FC = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const meditationSteps = [
    {
      id: 0,
      title: "Hazırlık",
      duration: 60,
      description: "Duruşu ayarla, telefon sessizde, bir niyet cümlesi.",
      icon: "🧘‍♀️",
      color: "from-purple-400 to-indigo-500",
      instructions: [
        "Rahat bir pozisyon alın",
        "Telefonu sessiz moda alın",
        "Gözlerinizi kapatın",
        "İçinizden bir niyet belirleyin"
      ]
    },
    {
      id: 1,
      title: "Nefes",
      duration: 120,
      description: "4-4-4 döngüsü (al-tut-ver).",
      icon: "🌬️",
      color: "from-blue-400 to-cyan-500",
      instructions: [
        "4 sayıda nefes alın",
        "4 sayıda nefesi tutun",
        "4 sayıda nefesi verin",
        "Bu döngüyü tekrarlayın"
      ]
    },
    {
      id: 2,
      title: "Beden Tarama",
      duration: 120,
      description: "Ayak tabanlarından başa, gevşeme.",
      icon: "🔍",
      color: "from-green-400 to-emerald-500",
      instructions: [
        "Ayak tabanlarınızdan başlayın",
        "Her bölgeye dikkat verin",
        "Gerginlikleri fark edin",
        "Nazikçe gevşetin"
      ]
    },
    {
      id: 3,
      title: "Görselleme",
      duration: 180,
      description: "Kalp merkezinde 'mor kıvılcım' canlanır; her nefeste alanını nazikçe aydınlatır.",
      icon: "✨",
      color: "from-purple-500 to-pink-500",
      instructions: [
        "Kalp merkezinizi hayal edin",
        "Mor bir kıvılcım görün",
        "Her nefeste büyümesini izleyin",
        "Işığın tüm bedeninizi aydınlatmasını hayal edin"
      ]
    },
    {
      id: 4,
      title: "Şifa Cümleleri",
      duration: 120,
      description: "Özür dilerim, lütfen beni affet, teşekkür ederim, seni seviyorum.",
      icon: "💝",
      color: "from-pink-400 to-rose-500",
      instructions: [
        "Özür dilerim",
        "Lütfen beni affet",
        "Teşekkür ederim",
        "Seni seviyorum"
      ]
    },
    {
      id: 5,
      title: "Kapanış",
      duration: 90,
      description: "Kıvılcımı kalpte sabitle, köklerden dünyaya uzanan güçlü bir bağ hayal et.",
      icon: "🌱",
      color: "from-amber-400 to-orange-500",
      instructions: [
        "Mor kıvılcımı kalbinizde sabitleyin",
        "Köklerinizi toprağa uzatın",
        "Dünyayla bağlantınızı hissedin",
        "Yavaşça gözlerinizi açın"
      ]
    }
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startMeditation = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    setTimeRemaining(meditationSteps[0].duration);
  };

  const pauseMeditation = () => {
    setIsPlaying(false);
  };

  const resetMeditation = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setTimeRemaining(0);
  };

  const nextStep = () => {
    if (currentStep < meditationSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setTimeRemaining(meditationSteps[currentStep + 1].duration);
    } else {
      setIsPlaying(false);
    }
  };

  const currentStepData = meditationSteps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="text-6xl mb-4 block">🧘‍♀️</span>
            <h1 className="text-5xl font-bold mb-6">
              Meditasyon Rehberi
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              "Mor Kıvılcım" tarzı mini akış şablonu ile 10-12 dakikalık 
              derin bir meditasyon deneyimi yaşayın.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Meditasyon Kontrol Paneli */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meditasyon Başlat
            </h2>
            <p className="text-gray-600 mb-6">
              Toplam süre: 10-12 dakika
            </p>
            
            <div className="flex justify-center space-x-4 mb-8">
              {!isPlaying ? (
                <button
                  onClick={startMeditation}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center"
                >
                  <PlayIcon className="h-6 w-6 mr-2" />
                  Başlat
                </button>
              ) : (
                <button
                  onClick={pauseMeditation}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 flex items-center"
                >
                  <PauseIcon className="h-6 w-6 mr-2" />
                  Duraklat
                </button>
              )}
              
              <button
                onClick={resetMeditation}
                className="bg-gray-500 text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-gray-600 transition-all duration-300 flex items-center"
              >
                <ArrowPathIcon className="h-5 w-5 mr-2" />
                Sıfırla
              </button>
            </div>

            {/* Timer */}
            {isPlaying && (
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-6 mb-6">
                <div className="text-4xl font-bold text-purple-800 mb-2">
                  {formatTime(timeRemaining)}
                </div>
                <div className="text-lg text-purple-600">
                  {currentStepData.title}
                </div>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
            <div 
              className="bg-gradient-to-r from-purple-500 to-indigo-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / meditationSteps.length) * 100}%` }}
            ></div>
          </div>

          {/* Current Step */}
          {isPlaying && (
            <div className="text-center">
              <button
                onClick={nextStep}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-bold hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
              >
                Sonraki Adım
              </button>
            </div>
          )}
        </div>

        {/* Meditasyon Adımları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meditationSteps.map((step, index) => (
            <div
              key={step.id}
              className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 transform hover:scale-105 ${
                currentStep === step.id ? 'ring-4 ring-purple-400 shadow-2xl' : ''
              }`}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-3xl mb-4`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <div className="text-sm text-gray-600 mb-2">
                  {formatTime(step.duration)}
                </div>
                <p className="text-gray-700 text-sm">
                  {step.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 text-sm mb-3">
                  Adımlar:
                </h4>
                {step.instructions.map((instruction, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm text-gray-600">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mor Kıvılcım Notu */}
        <div className="mt-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8">
          <div className="text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              Mor Kıvılcım Notu
            </h3>
            <p className="text-purple-700 text-lg leading-relaxed max-w-4xl mx-auto">
              Bu meditasyon, iç dünyanızda mor kıvılcımı canlandırmayı amaçlar. 
              Her adımda kendinize nazik olun ve acele etmeyin. Meditasyon sonrası 
              su içmeyi ve kısa bir not almayı unutmayın. Bu pratik, günlük 
              yaşamınızda daha fazla huzur ve farkındalık getirecektir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeditationGuide;
