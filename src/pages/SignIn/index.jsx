import logoHeader from '../../assets/logoHeader.svg'
import {Button} from '../../components/Button'
import {useState, useEffect} from 'react';
import {Container} from './styles';

export function SignIn() {
  const [widthScreen, setWidthScreen] = useState(); 

  useEffect(()=>{
    setWidthScreen(window.innerWidth)

    window.onresize = () => { 
      setWidthScreen(window.innerWidth) 
    } 
  },[widthScreen])

  return (
    <Container>
      <div className='wrapper-logo'>
        <img
        src={logoHeader}
        alt='logo explorer'
        />
      </div>

      <div className='wrapper-inputs'>
        <h1 className={widthScreen >= 800 ? '' : 'hidden'}>Faça login</h1>
        
        <label>
            Email
            <input 
            type='email'
            name='email' 
            placeholder='Exemplo: exemplo@exemplo.com.br'
            />
        </label>

        <label>
            Email
            <input 
            type='password'
            name='password' 
            placeholder='No mínimo 6 caracteres'
            />
        </label>
        
        <Button 
        title='Entrar'
        />

        <span>Criar uma conta</span>
      </div>
    </Container>
  )
}
