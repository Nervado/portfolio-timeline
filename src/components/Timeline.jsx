import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Calendar, MapPin, GraduationCap, Briefcase, Heart, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// Importar imagens
import childhoodImg from '../assets/childhood.jpg'
import highSchoolImg from '../assets/high_school_graduation.jpg'
import universityImg from '../assets/university_graduation.jpg'
import corporateImg from '../assets/corporate_start.jpg'
import leadershipImg from '../assets/leadership_team.jpg'
import hobbiesImg from '../assets/hobbies_interests.jpg'
import fgvImg from '../assets/fgv_masters.jpg'

const timelineData = [
  {
    id: 1,
    year: '1989-2003',
    title: 'Primeiros Anos',
    subtitle: 'Infância e Formação Inicial',
    description: 'Infância em Natal/RN, Muitas brincadeiras, terreno grande para correr, muitos passeios de bicicleta e livros',
    image: childhoodImg,
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    details: [
      'Desenvolvimento de valores familiares sólidos',
      'Interação desde muito cedo por livros mesmo quando não sabia Ler',
      'Formação do caráter e personalidade',
      'Descoberta de interesses e talentos naturais em Exatas principalmente'
    ]
  },
  {
    id: 2,
    year: '2004-2006',
    title: 'Ensino Médio',
    subtitle: 'Conclusão da Educação Básica',
    description: 'Período de consolidação dos conhecimentos fundamentais e desenvolvimento de habilidades de liderança. Participação ativa em atividades extracurriculares e projetos que despertaram o interesse pela gestão e inovação.',
    image: highSchoolImg,
    icon: GraduationCap,
    color: 'from-blue-500 to-indigo-500',
    details: [
      'Excelência acadêmica em todas as disciplinas exceto português no início',
      'Paixão instânea pela sala de informática',
      'Desenvolvimento de habilidades de comunicação durante a estadia no CEFET',
      'Experiência como menor aprendiz e primeiro emprego'
    ]
  },
  {
    id: 3,
    year: '2007-2011',
    title: 'Graduação',
    subtitle: 'Formação Superior',
    description: 'Graduação em área em Engenharia Eletrica, onde foram desenvolvidas competências técnicas e soft skills essenciais. Participação em projetos acadêmicos, estágios.',
    image: universityImg,
    icon: BookOpen,
    color: 'from-green-500 to-emerald-500',
    details: [
      'Formação sólida em gestão e negócios',
      'Projetos acadêmicos de destaque',
      'Estágios em empresas renomadas',
      'Desenvolvimento de network profissional'
    ]
  },
  {
    id: 4,
    year: '2017-2019',
    title: 'Início da Carreira',
    subtitle: 'Primeiros Passos Profissionais',
    description: 'Entrada no mercado de trabalho com foco em aprendizado e crescimento. Período de adaptação ao ambiente corporativo, desenvolvimento de competências práticas e construção de uma base sólida para a carreira profissional.',
    image: corporateImg,
    icon: Briefcase,
    color: 'from-purple-500 to-violet-500',
    details: [
      'Adaptação rápida ao ambiente corporativo',
      'Aprendizado contínuo e desenvolvimento técnico',
      'Construção de relacionamentos profissionais',
      'Primeiros resultados e reconhecimentos'
    ]
  },
  {
    id: 5,
    year: '2019-2022',
    title: 'Crescimento Profissional',
    subtitle: 'Liderança e Inovação',
    description: 'Evolução na carreira com assumir responsabilidades de liderança e gestão de equipes. Implementação de projetos inovadores, desenvolvimento de estratégias e contribuição significativa para os resultados organizacionais.',
    image: leadershipImg,
    icon: MapPin,
    color: 'from-orange-500 to-red-500',
    details: [
      'Liderança de equipes multidisciplinares',
      'Implementação de projetos inovadores',
      'Gestão estratégica e resultados',
      'Mentoria e desenvolvimento de talentos'
    ]
  },
  {
    id: 6,
    year: '2020-Presente',
    title: 'Interesses e Hobbies',
    subtitle: 'Equilíbrio Vida-Trabalho',
    description: 'Manutenção de interesses pessoais e hobbies que contribuem para o desenvolvimento integral. Atividades que proporcionam relaxamento, criatividade e perspectivas diferentes, essenciais para a liderança eficaz.',
    image: hobbiesImg,
    icon: Heart,
    color: 'from-teal-500 to-cyan-500',
    details: [
      'Leitura e desenvolvimento intelectual',
      'Atividades físicas e bem-estar',
      'Projetos criativos e artísticos',
      'Voluntariado e responsabilidade social'
    ]
  },
  {
    id: 7,
    year: '2024-Presente',
    title: 'MBA FGV',
    subtitle: 'Gestão: Liderança e Inovação',
    description: 'Atual jornada acadêmica no prestigioso programa de MBA da FGV, focado em liderança e inovação. Busca por aprofundamento teórico e prático em gestão moderna, networking com profissionais de excelência e preparação para desafios futuros.',
    image: fgvImg,
    icon: GraduationCap,
    color: 'from-indigo-500 to-purple-500',
    details: [
      'Programa de excelência em gestão',
      'Foco em liderança e inovação',
      'Network com executivos de alto nível',
      'Preparação para desafios futuros'
    ]
  }
]

export default function Timeline () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedItem, setSelectedItem] = useState(null)
  const scrollContainerRef = useRef(null)

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % timelineData.length)
  }

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + timelineData.length) % timelineData.length)
  }

  const goToItem = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const itemWidth = container.scrollWidth / timelineData.length
      container.scrollTo({
        left: currentIndex * itemWidth,
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  const currentItem = timelineData[currentIndex]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Minha Jornada
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90"
          >
            Portfólio - MBA em Gestão: Liderança e Inovação - FGV
          </motion.p>
        </div>
      </div>

      {/* Timeline Navigation */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={prevItem}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </Button>

            <div className="flex items-center gap-2 overflow-x-auto">
              {timelineData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => goToItem(index)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${index === currentIndex
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                >
                  {item.year}
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextItem}
              className="flex items-center gap-2"
            >
              Próximo
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Image Section */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${currentItem.color} opacity-20`}></div>
                <div className="absolute top-4 left-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${currentItem.color} text-white shadow-lg`}>
                    <currentItem.icon className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  {currentItem.year}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {currentItem.title}
                </h2>
                <h3 className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  {currentItem.subtitle}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {currentItem.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Principais Conquistas:
                </h4>
                <ul className="space-y-2">
                  {currentItem.details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentItem.color} mt-2 flex-shrink-0`}></div>
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-4"
              >
                <Button
                  onClick={() => setSelectedItem(currentItem)}
                  className={`bg-gradient-to-r ${currentItem.color} hover:opacity-90 text-white px-6 py-3`}
                >
                  Ver Detalhes
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicator */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2">
            {timelineData.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'w-8 bg-blue-600'
                  : 'w-2 bg-gray-300 dark:bg-gray-600'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Details */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedItem.title}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </Button>
              </div>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {selectedItem.description}
              </p>
              <div className="space-y-2">
                {selectedItem.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedItem.color} mt-2 flex-shrink-0`}></div>
                    {detail}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

