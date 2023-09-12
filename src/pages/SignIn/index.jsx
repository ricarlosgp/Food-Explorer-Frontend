import logoHeader from '../../assets/logoHeader.svg'
import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { useAuth} from '../../hooks/auth'
import { Container } from './styles'

export function SignIn() {
  const [widthScreen, setWidthScreen] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn, loading } = useAuth()

  function handleLogin() {
    signIn({email, password})
  }

  useEffect(() => {
    setWidthScreen(window.innerWidth)

    window.onresize = () => {
      setWidthScreen(window.innerWidth)
    }
  }, [widthScreen])

  return (
    <Container>
      <div className="wrapper-logo">
        <img src={logoHeader} alt="logo explorer" />
      </div>

      <div className="wrapper-inputs">
        <h1 className={widthScreen >= 800 ? '' : 'hidden'}>Faça login</h1>

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

        <button className={`${loading ? 'isLoading' : ''}`} onClick={handleLogin}>{loading ? 'Loading...' : 'Entrar'}</button>

        <NavLink to="/SignUp">Criar uma conta</NavLink>
      </div>
    </Container>
  )
}
