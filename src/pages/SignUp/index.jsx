import logoHeader from '../../assets/logoHeader.svg'
import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export function SignUp() {
  const [widthScreen, setWidthScreen] = useState()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setWidthScreen(window.innerWidth)

    window.onresize = () => {
      setWidthScreen(window.innerWidth)
    }
  }, [widthScreen])

  async function handleCreateUser() {
    setLoading(true)

    if(!name || !email || !password){
      alert("Preencha todos os campos!");
      setLoading(false)
    }

    try {
      await api.post("/users", { name, email, password });
      setLoading(false)
      alert("Usuário cadastrado com sucesso!");
      navigate('/');
    } catch (error) {
      if (error.response) {
        setLoading(false)
        alert("Este email já está em uso");
      } else {
        setLoading(false)
        alert("Não foi possível cadastrar.");
      }
    }
  }

  return (
    <Container>
      <div className="wrapper-logo">
        <img src={logoHeader} alt="logo explorer" />
      </div>

      <div className="wrapper-inputs">
        <h1 className={widthScreen >= 800 ? '' : 'hidden'}>Faça login</h1>

        <label>
          Seu nome
          <input 
          type="name" 
          name="name" 
          placeholder="Exemplo: kurumin" 
          onChange={(e) => setName(e.target.value)} 
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(e) => setEmail(e.target.value)} 
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)} 
          />
        </label>

        <button className={`${loading ? 'isLoading' : ''}`} onClick={handleCreateUser}>{loading ? 'Loading...' : 'Criar conta'}</button>

        <NavLink to="/">Já tenho uma conta</NavLink>
      </div>
    </Container>
  )
}