import './App.css'

interface TouristSpot {
  title: string
  image: string
  rain: string
}

const touristSpots: TouristSpot[] = [
  {
    title: 'Pórtico & Moinho da Expoville',
    image: '/images/joinville/portico-moinho-aereo.webp',
    rain: '🌧️ ☔'
  },
  {
    title: 'Moinho Típico da Expoville',
    image: '/images/joinville/moinho-expoville.webp',
    rain: '🌦️ 💧'
  },
  {
    title: 'Museu Nacional de Imigração e Colonização',
    image: '/images/joinville/museu-da-imigracao.webp',
    rain: '🌧️ 🌂'
  },
  {
    title: 'Centreventos Cau Hansen',
    image: '/images/joinville/centreventos-cau-hansen.webp',
    rain: '🌧️ ☔'
  },
  {
    title: 'Parque da Cidade',
    image: '/images/joinville/parque-da-cidade.webp',
    rain: '🌦️ 💧 🌧️'
  }
]

const rainDrops = [
  { emoji: '🌧️', left: '6%', delay: '0s', duration: '5.5s' },
  { emoji: '💧', left: '16%', delay: '2.1s', duration: '6.2s' },
  { emoji: '☔', left: '27%', delay: '0.8s', duration: '5s' },
  { emoji: '🌦️', left: '38%', delay: '3.2s', duration: '7s' },
  { emoji: '🌧️', left: '50%', delay: '1.4s', duration: '4.8s' },
  { emoji: '💧', left: '62%', delay: '2.8s', duration: '6.5s' },
  { emoji: '🌂', left: '74%', delay: '0.5s', duration: '5.8s' },
  { emoji: '🌧️', left: '85%', delay: '3.7s', duration: '6s' },
  { emoji: '☔', left: '94%', delay: '1.9s', duration: '5.2s' },
]

function App() {
  return (
    <div className="app-container">
      {/* Chuva de emojis no fundo */}
      <div className="rain-layer" aria-hidden="true">
        {rainDrops.map((drop, index) => (
          <span
            key={index}
            className="rain-drop"
            style={{
              left: drop.left,
              animationDelay: drop.delay,
              animationDuration: drop.duration
            }}
          >
            {drop.emoji}
          </span>
        ))}
      </div>

      {/* 1. HEADER */}
      <header className="header">
        <h1>🌧️ Por dentro de Joinville 🌧️</h1>
        <p>Pontos turísticos da Cidade da Chuva ☔ 💧 🌦️</p>
      </header>

      {/* 2. CONTEÚDO */}
      <main className="content">
        <div className="grid">
          {touristSpots.map((spot, index) => (
            <div key={index} className="card">
              <img src={spot.image} alt={spot.title} className="card-image" />
              <div className="card-info">
                <h3>{spot.title}</h3>
                <span className="card-rain">{spot.rain}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 3. FOOTER */}
      <footer className="footer">
        <p>Por dentro de Joinville • 🌧️ ☔ 💧 🌦️ 🌂 🌧️</p>
      </footer>
    </div>
  )
}

export default App
