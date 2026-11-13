import { useState, type FormEvent } from 'react'

interface DadosFormulario {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

export function Contato() {
  const [formData, setFormData] = useState<DadosFormulario>({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  })

  const [dadosEnviados, setDadosEnviados] = useState<DadosFormulario | null>(null)
  const [sucesso, setSucesso] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setDadosEnviados(formData)
    setSucesso(true)
  }

  function handleReset() {
    setFormData({
      nome: '',
      email: '',
      assunto: '',
      mensagem: '',
    })
    setDadosEnviados(null)
    setSucesso(false)
  }

  return (
    <div className="contato-container">
      <h2>Entre em Contato 🌧️</h2>

      {sucesso && dadosEnviados ? (
        <div className="mensagem-sucesso">
          <h3>Mensagem enviada com sucesso! ✅</h3>
          <div className="dados-resumo">
            <p><strong>Nome:</strong> {dadosEnviados.nome}</p>
            <p><strong>E-mail:</strong> {dadosEnviados.email}</p>
            <p><strong>Assunto:</strong> {dadosEnviados.assunto}</p>
            <p><strong>Mensagem:</strong> {dadosEnviados.mensagem}</p>
          </div>
          <button type="button" onClick={handleReset} className="btn-novo-envio">
            Enviar nova mensagem
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="formulario-contato">
          <div className="campo">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              required
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              placeholder="Digite seu nome"
            />
          </div>

          <div className="campo">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="campo">
            <label htmlFor="assunto">Assunto:</label>
            <input
              type="text"
              id="assunto"
              required
              value={formData.assunto}
              onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
              placeholder="Digite o assunto"
            />
          </div>

          <div className="campo">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              rows={4}
              required
              value={formData.mensagem}
              onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              placeholder="Digite sua mensagem"
            />
          </div>

          <button type="submit" className="btn-enviar">
            Enviar Mensagem 🌧️
          </button>
        </form>
      )}
    </div>
  )
}

