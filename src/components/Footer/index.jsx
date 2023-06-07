import logoFooter from '../../assets/LogoFooter.svg'
import { Container } from './styles'

export function Footer() {
  return (
    <Container>
      <img src={logoFooter} alt="logo explorer" />

      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}
