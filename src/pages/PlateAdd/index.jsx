import { MdOutlineFileUpload } from 'react-icons/md'
import { IoIosArrowBack } from 'react-icons/io'
import { Header } from '../../components/Header'
import { Container, Form } from './styles'
import { Ingredient } from '../../components/Ingredient'

export function PlateAdd() {
    return(
        <Container>
            <Header />

            <Form>
                <div className='wrapper-head'>
                    <div>
                        <IoIosArrowBack size={18} />
                        <span>voltar</span>
                    </div>
                    <h1>Novo prato</h1>
                </div>

                <div className='wrapper-1'>
                    <div>
                        <span>Imagem do prato</span>
                        <div className='wrapper-file'>
                            <label>
                                <MdOutlineFileUpload />
                                selecione imagem
                                <input 
                                type='file'
                                />
                            </label>
                        </div>
                    </div>

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
                    <div className='ingredients'>
                        <label htmlFor='ingredients'>
                            Ingredientes
                        </label>

                        <div>
                            <Ingredient 
                            isNew
                            placeholder='ingrediente'
                                
                            />
                            <Ingredient 
                            placeholder='ingrediente'
                            value='testefrfr'
                            />
                        </div>
                    </div>

                    <label>
                        Preço
                        <input 
                        placeholder='R$ 00,00'
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
                    <button type='submite'>Salvar alterações</button>
                </div>
            </Form>

        </Container>
    )
}