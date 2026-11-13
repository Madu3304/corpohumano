import './App.css'
import { Header } from './components/Header'
import { Conteudo } from './components/Conteudo'
import { Footer } from './components/Footer'
import { RainBackground } from './components/RainBackground'
import type { TouristSpot } from './components/TouristCard'

const touristSpots: TouristSpot[] = [
  {
    title: 'Pórtico & Moinho da Expoville',
    image: '/images/joinville/portico-moinho-aereo.webp',
    rain: '🌧️ ☔',
  },
  {
    title: 'Moinho Típico da Expoville',
    image: '/images/joinville/moinho-expoville.webp',
    rain: '🌦️ 💧',
  },
  {
    title: 'Museu Nacional de Imigração e Colonização',
    image: '/images/joinville/museu-da-imigracao.webp',
    rain: '🌧️ 🌂',
  },
  {
    title: 'Centreventos Cau Hansen',
    image: '/images/joinville/centreventos-cau-hansen.webp',
    rain: '🌧️ ☔',
  },
  {
    title: 'Parque da Cidade',
    image: '/images/joinville/parque-da-cidade.webp',
    rain: '🌦️ 💧 🌧️',
  },
]

function App() {
  return (
    <div className="app-container">
      {/* Componente extra: Chuva animada em segundo plano */}
      <RainBackground />

      {/* 1. Componente: Header */}
      <Header />

      {/* 2. Componente: Conteúdo */}
      <Conteudo spots={touristSpots} />

      {/* 3. Componente: Footer */}
      <Footer />
    </div>
  )
}

export default App
