import {Header} from '../../components/Header'
import {Container, Form} from './styles'

export function PlateAdd() {
    return(
        <Container>
            <Header />

            <Form>
                <div className='wrapper-head'>
                    <span>voltar</span>
                    <h1>Adicionar prato</h1>
                </div>

                <div className='wrapper-1'>
                    <label>
                        imagem do prato
                        <input 
                        type='file'
                        />
                    </label>
                    <label>
                        Nome
                        <input 
                        type='text'
                        placeholder='Ex: salada Ceasar'
                        />
                    </label>
                    <label>
                        Categoria
                        <select>
                            <option>teste1</option>
                            <option>teste2</option>
                            <option>teste3</option>
                        </select>
                    </label>
                </div>

                <div className='wrapper-2'>
                    <label>
                        Ingredientes
                        <input 
                        type='text'
                        placeholder='Adicionar'
                        />
                    </label>
                    <label>
                        Preço
                        <input 
                        type='number'
                        />
                    </label>
                </div>

                <div className='wrapper-3'>
                    <label>
                        Descrição
                        <textarea placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'>

                        </textarea>
                    </label>
                </div>

                <div className='wrapper-button'>
                    <button>Salvar alterações</button>
                </div>
            </Form>

        </Container>
    )
}