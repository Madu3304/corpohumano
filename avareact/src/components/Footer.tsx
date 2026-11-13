interface FooterProps {
  text?: string
}

export function Footer({ text = 'Por dentro de Joinville • 🌧️ ☔ 💧 🌦️ 🌂 🌧️' }: FooterProps) {
  return (
    <footer className="footer">
      <p>{text}</p>
    </footer>
  )
}

