interface HeaderProps {
  title?: string
  subtitle?: string
}

export function Header({
  title = '🌧️ Por dentro de Joinville 🌧️',
  subtitle = 'Pontos turísticos da Cidade da Chuva ☔ 💧 🌦️',
}: HeaderProps) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  )
}

