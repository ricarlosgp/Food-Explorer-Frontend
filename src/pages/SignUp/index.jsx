import {Button} from '../../components/Button'
import logoHeader from '../../assets/logoHeader.svg'
import { useState, useEffect } from 'react';
import { Container } from './styles';

export function SignUp() {
    const [widthScreen, setWidthScreen] = useState(); 

    useEffect(()=>{
        setWidthScreen(window.innerWidth)

        window.onresize = () => { 
        setWidthScreen(window.innerWidth) 
        } 
    },[widthScreen])

    return(
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
                    Seu nome
                    <input 
                    type='name'
                    name='name' 
                    placeholder='Exemplo: kurumin'
                    />
                </label>
                
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
                title='Criar conta'
                />

                <span>Já tenho uma conta</span>
            </div>
    </Container>
    )
}