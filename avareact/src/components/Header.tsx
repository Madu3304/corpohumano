interface HeaderProps {
  onExibirContato: () => void
  onExibirInicio: () => void
  abaAtual: 'inicio' | 'contato'
}

export function Header({ onExibirContato, onExibirInicio, abaAtual }: HeaderProps) {
  return (
    <header className="header">
      <h1>🌧️ Por dentro de Joinville 🌧️</h1>
      <p>Pontos turísticos da Cidade da Chuva ☔ 💧 🌦️</p>
      <nav className="nav-links">
        <a
          href="#inicio"
          className={`nav-link ${abaAtual === 'inicio' ? 'ativo' : ''}`}
          onClick={(e) => {
            e.preventDefault()
            onExibirInicio()
          }}
        >
          Início
        </a>
        <a
          href="#contato"
          className={`nav-link ${abaAtual === 'contato' ? 'ativo' : ''}`}
          onClick={(e) => {
            e.preventDefault()
            onExibirContato()
          }}
        >
          Contato
        </a>
      </nav>
    </header>
  )
}
