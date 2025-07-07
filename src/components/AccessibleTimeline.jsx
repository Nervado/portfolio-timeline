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
    description: 'Infância em Natal/RN, muitas brincadeiras, terreno grande para correr, muitos passeios de bicicleta e livros',
    image: childhoodImg,
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    details: [
      'Desenvolvimento de valores familiares sólidos',
      'Interação desde muito cedo por livros mesmo quando não sabia Ler',
      'Formação do caráter e personalidade com muita influência do avó Paterno',
      'Descoberta de interesses e talentos naturais em Exatas e aprovação entre os top 8 para a escola federal'
    ],
    audioDescription: 'Seção sobre os primeiros anos de vida, de 1989 a 2002, focando na infância e formação inicial. Imagem mostra uma criança feliz em ambiente familiar.'
  },
  {
    id: 2,
    year: '2004-2006',
    title: 'Ensino Médio - CEFET / RN',
    subtitle: 'Conclusão da Educação Básica',
    description: 'Período de consolidação dos conhecimentos fundamentais e desenvolvimento de habilidades de liderança. Participação ativa em atividades extracurriculares e projetos que despertaram o interesse pela gestão e inovação.',
    image: highSchoolImg,
    imageAlt: 'Jovem estudante em cerimônia de formatura do ensino médio, usando beca e capelo, representando a conclusão da educação básica',
    icon: GraduationCap,
    color: 'from-blue-500 to-indigo-500',
    details: [
      'Paixão por disciplinas ciências Exatas',
      'Paticipação em eventos de grupos de estudantes',
      'Desenvolvimento de habilidades de comunicação',
      'Preparação para o ensino superior com aprovação em top 3 para a Universidade Federal'
    ],
    audioDescription: 'Período do ensino médio, de 2010 a 2012, marcado pela conclusão da educação básica. Imagem de formatura simboliza esta conquista acadêmica.'
  },
  {
    id: 3,
    year: '2007-2011',
    title: 'Graduação',
    subtitle: 'Formação Superior',
    description: 'Graduação em Engenharia Elétrica, onde foram desenvolvidas competências técnicas e soft skills essenciais. Participação em projetos acadêmicos, estágios e iniciativas que proporcionaram experiência prática no mundo corporativo.',
    image: universityImg,
    imageAlt: 'Jovem adulto em cerimônia de formatura universitária em frente a um belo edifício universitário, segurando diploma, representando a conquista da formação superior',
    icon: BookOpen,
    color: 'from-green-500 to-emerald-500',
    details: [
      'Formação sólida em hardskills na área sendo referência entre os colegas',
      'Projetos acadêmicos de destaque',
      'Aprovado na seleção para Mestrado Academico em Comunicações Móveis pela UFRN',
      'Desenvolvimento de network profissional'
    ],
    audioDescription: 'Fase da graduação universitária, de 2013 a 2017, focada na formação superior. Imagem mostra formatura em ambiente universitário prestigioso.'
  },
  {
    id: 4,
    year: '2017-2019',
    title: 'Início da Carreira',
    subtitle: 'Primeiros Passos Profissionais',
    description: 'Entrada no mercado de trabalho com foco em aprendizado e crescimento. Período de adaptação ao ambiente corporativo, desenvolvimento de competências práticas e construção de uma base sólida para a carreira profissional.',
    image: corporateImg,
    imageAlt: 'Jovem profissional em ambiente de escritório moderno, trabalhando com computador e documentos, representando o início da carreira corporativa',
    icon: Briefcase,
    color: 'from-purple-500 to-violet-500',
    details: [
      'Adaptação rápida ao ambiente corporativo',
      'Aprendizado contínuo e desenvolvimento técnico',
      'Construção de relacionamentos profissionais',
      'Primeiros resultados e reconhecimentos'
    ],
    audioDescription: 'Início da carreira profissional, de 2017 a 2019, marcado pelos primeiros passos no mundo corporativo. Imagem de ambiente de escritório moderno.'
  },
  {
    id: 5,
    year: '2019-2022',
    title: 'Crescimento Profissional',
    subtitle: 'Liderança e Inovação',
    description: 'Evolução na carreira com assumir responsabilidades de liderança e gestão de equipes. Implementação de projetos inovadores, desenvolvimento de estratégias e contribuição significativa para os resultados organizacionais.',
    image: leadershipImg,
    imageAlt: 'Profissional liderando uma reunião de equipe diversa em sala de conferência moderna, apontando para tela de apresentação, representando liderança e gestão de equipes',
    icon: MapPin,
    color: 'from-orange-500 to-red-500',
    details: [
      'Liderança de equipes de suporte técnico',
      'Implementação de projeto de Machine Learning em Plataformas da Petrobras',
      'Inicio dos Estudos em IA e Machine Learning',
      'Mentoria e desenvolvimento de talentos'
    ],
    audioDescription: 'Período de crescimento profissional, de 2019 a 2022, focado em liderança e inovação. Imagem mostra liderança de equipe em ambiente corporativo.'
  },
  {
    id: 6,
    year: '2020-Presente',
    title: 'Interesses e Hobbies',
    subtitle: 'Equilíbrio Vida-Trabalho',
    description: 'Manutenção de interesses pessoais e hobbies que contribuem para o desenvolvimento integral. Atividades que proporcionam relaxamento, criatividade e perspectivas diferentes, essenciais para a liderança eficaz.',
    image: hobbiesImg,
    imageAlt: 'Pessoa lendo livros em um ambiente aconchegante de biblioteca, representando interesses pessoais, hobbies e desenvolvimento intelectual',
    icon: Heart,
    color: 'from-teal-500 to-cyan-500',
    details: [
      'Leitura e desenvolvimento intelectual',
      'Atividades físicas e bem-estar',
      'Projetos criativos e artísticos',
      'Voluntariado e responsabilidade social'
    ],
    audioDescription: 'Seção sobre interesses e hobbies, de 2020 até o presente, focando no equilíbrio vida-trabalho. Imagem de leitura em biblioteca aconchegante.'
  },
  {
    id: 7,
    year: '2024-Presente',
    title: 'MBA FGV',
    subtitle: 'Gestão: Liderança e Inovação',
    description: 'Atual jornada acadêmica no prestigioso programa de MBAda FGV, focado em liderança e inovação. Busca por aprofundamento teórico e prático em gestão moderna, networking com profissionais de excelência e preparação para desafios futuros.',
    image: fgvImg,
    imageAlt: 'Estudante maduro em biblioteca universitária moderna com arquitetura contemporânea, livros e laptop, representando estudos de MBAem instituição de prestígio',
    icon: GraduationCap,
    color: 'from-indigo-500 to-purple-500',
    details: [
      'Programa de excelência em gestão',
      'Foco em liderança e inovação',
      'Network com executivos de alto nível',
      'Atuação no exterior na China e na Coreia pela Petrobras (Projetos P-79 e P-82).'
    ],
    audioDescription: 'Atual fase do MBA na FGV, de 2024 até o presente, em Gestão: Liderança e Inovação. Imagem de ambiente acadêmico de excelência.'
  }
]

export default function AccessibleTimeline () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedItem, setSelectedItem] = useState(null)
  const [announceText, setAnnounceText] = useState('')
  const scrollContainerRef = useRef(null)
  const announceRef = useRef(null)

  // Função para anunciar mudanças para leitores de tela
  const announceChange = (text) => {
    setAnnounceText(text)
    // Limpar o anúncio após um tempo para permitir novos anúncios
    setTimeout(() => setAnnounceText(''), 100)
  }

  const nextItem = () => {
    const newIndex = (currentIndex + 1) % timelineData.length
    setCurrentIndex(newIndex)
    const item = timelineData[newIndex]
    announceChange(`Navegou para ${item.year}: ${item.title}. ${item.subtitle}`)
  }

  const prevItem = () => {
    const newIndex = (currentIndex - 1 + timelineData.length) % timelineData.length
    setCurrentIndex(newIndex)
    const item = timelineData[newIndex]
    announceChange(`Navegou para ${item.year}: ${item.title}. ${item.subtitle}`)
  }

  const goToItem = (index) => {
    setCurrentIndex(index)
    const item = timelineData[index]
    announceChange(`Selecionou ${item.year}: ${item.title}. ${item.subtitle}`)
  }

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          prevItem()
          break
        case 'ArrowRight':
          event.preventDefault()
          nextItem()
          break
        case 'Home':
          event.preventDefault()
          goToItem(0)
          break
        case 'End':
          event.preventDefault()
          goToItem(timelineData.length - 1)
          break
        case 'Enter':
        case ' ':
          if (event.target.classList.contains('timeline-item-button')) {
            event.preventDefault()
            setSelectedItem(timelineData[currentIndex])
            announceChange(`Abriu detalhes de ${timelineData[currentIndex].title}`)
          }
          break
        case 'Escape':
          if (selectedItem) {
            event.preventDefault()
            setSelectedItem(null)
            announceChange('Fechou detalhes')
          }
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, selectedItem])

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
      {/* Screen Reader Announcements */}
      <div
        ref={announceRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        role="status"
      >
        {announceText}
      </div>

      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Pular para conteúdo principal
      </a>

      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
            id="page-title"
          >
            Minha Jornada
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90"
            aria-describedby="page-title"
          >
            Portfólio - MBA em Gestão: Liderança e Inovação - FGV
          </motion.p>
        </div>
      </header>

      {/* Timeline Navigation */}
      <nav
        className="sticky top-0 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b"
        aria-label="Navegação da linha do tempo"
        role="navigation"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={prevItem}
              className="flex items-center gap-2"
              aria-label={`Ir para item anterior. Atual: ${currentItem.year} ${currentItem.title}`}
              title="Use seta esquerda para navegar"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              Anterior
            </Button>

            <div
              className="flex items-center gap-2 overflow-x-auto"
              role="tablist"
              aria-label="Períodos da linha do tempo"
            >
              {timelineData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => goToItem(index)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${index === currentIndex
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-controls={`timeline-panel-${index}`}
                  id={`timeline-tab-${index}`}
                  tabIndex={index === currentIndex ? 0 : -1}
                  aria-label={`${item.year}: ${item.title}. ${item.subtitle}`}
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
              aria-label={`Ir para próximo item. Atual: ${currentItem.year} ${currentItem.title}`}
              title="Use seta direita para navegar"
            >
              Próximo
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Instructions for Screen Readers */}
      <div className="sr-only">
        <p>
          Instruções de navegação: Use as setas esquerda e direita para navegar entre os períodos.
          Use Home para ir ao primeiro item, End para o último.
          Pressione Enter ou Espaço para ver detalhes do item atual.
          Use Escape para fechar detalhes.
        </p>
      </div>

      {/* Main Content */}
      <main
        className="container mx-auto px-4 py-8"
        id="main-content"
        tabIndex="-1"
      >
        <AnimatePresence mode="wait">
          <motion.section
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
            role="tabpanel"
            id={`timeline-panel-${currentIndex}`}
            aria-labelledby={`timeline-tab-${currentIndex}`}
            aria-live="polite"
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
                  alt={currentItem.imageAlt}
                  className="w-full h-96 lg:h-[500px] object-cover"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${currentItem.color} opacity-20`} aria-hidden="true"></div>
                <div className="absolute top-4 left-4" aria-hidden="true">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${currentItem.color} text-white shadow-lg`}>
                    <currentItem.icon className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>

              {/* Audio Description for Screen Readers */}
              <div className="sr-only">
                <p>{currentItem.audioDescription}</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime={currentItem.year}>{currentItem.year}</time>
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
                <ul className="space-y-2" role="list">
                  {currentItem.details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      role="listitem"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentItem.color} mt-2 flex-shrink-0`}
                        aria-hidden="true"
                      ></div>
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
                  onClick={() => {
                    setSelectedItem(currentItem)
                    announceChange(`Abriu detalhes de ${currentItem.title}`)
                  }}
                  className={`bg-gradient-to-r ${currentItem.color} hover:opacity-90 text-white px-6 py-3 timeline-item-button`}
                  aria-label={`Ver detalhes completos de ${currentItem.title}`}
                  aria-describedby={`timeline-panel-${currentIndex}`}
                >
                  Ver Detalhes
                </Button>
              </motion.div>
            </div>
          </motion.section>
        </AnimatePresence>

        {/* Progress Indicator */}
        <div className="mt-12 flex justify-center" role="progressbar" aria-label="Progresso na linha do tempo">
          <div className="flex items-center gap-2" aria-hidden="true">
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
          <div className="sr-only">
            Item {currentIndex + 1} de {timelineData.length}
          </div>
        </div>
      </main>

      {/* Modal for Details */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => {
              setSelectedItem(null)
              announceChange('Fechou detalhes')
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              role="document"
            >
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="text-2xl font-bold text-gray-900 dark:text-white"
                  id="modal-title"
                >
                  {selectedItem.title}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedItem(null)
                    announceChange('Fechou detalhes')
                  }}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Fechar detalhes"
                  title="Pressione Escape para fechar"
                >
                  ✕
                </Button>
              </div>
              <img
                src={selectedItem.image}
                alt={selectedItem.imageAlt}
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <p
                className="text-gray-700 dark:text-gray-300 mb-4"
                id="modal-description"
              >
                {selectedItem.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Principais Conquistas:
                </h4>
                <ul className="space-y-2" role="list">
                  {selectedItem.details.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      role="listitem"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedItem.color} mt-2 flex-shrink-0`}
                        aria-hidden="true"
                      ></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Audio Description for Modal */}
              <div className="sr-only">
                <p>{selectedItem.audioDescription}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

