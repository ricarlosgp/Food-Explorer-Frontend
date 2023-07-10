import { MdOutlineFileUpload } from 'react-icons/md'
import { IoIosArrowBack } from 'react-icons/io'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Container, Form } from './styles'
import { Ingredient } from '../../components/Ingredient'
import { useEffect } from 'react'

export function PlateEdit() {

  useEffect(()=>{
    async function fetchPlate(){
        const response = await api.get(`/plates/}`);
        setPlate(response.data);
    }
    fetchPlate();
  },[]);

  return (
    <Container>
      <div className="wrapper-header">
        <Header />
      </div>

      <div className="wrapper-form">
        <Form>
          <div className="wrapper-head">
            <div>
              <IoIosArrowBack size={18} />
              <span>voltar</span>
            </div>
            <h1>Editar prato</h1>
          </div>

          <div className="wrapper-1">
            <div>
              <span>Imagem do prato</span>
              <div className="wrapper-file">
                <label>
                  <MdOutlineFileUpload />
                  selecione imagem para alterá-lo
                  <input type="file" />
                </label>
              </div>
            </div>

            <label>
              Nome
              <input type="text" placeholder="Ex: salada Ceasar" />
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

          <div className="wrapper-2">
            <div className="ingredients">
              <label htmlFor="ingredients">Ingredientes</label>

              <div>
                <Ingredient isNew placeholder="ingrediente" />
                <Ingredient placeholder="ingrediente" value="testefrfr" />
              </div>
            </div>

            <label>
              Preço
              <input placeholder="R$ 40,00" type="number" />
            </label>
          </div>

          <div className="wrapper-3">
            <label>
              Descrição
              <textarea placeholder="A Salada César é uma opção refrescante para o verão."></textarea>
            </label>
          </div>

          <div className="wrapper-button">
            <button type="submit">Salvar alterações</button>
          </div>
        </Form>
      </div>

      <div className="wrapper-footer">
        <Footer />
      </div>
    </Container>
  )
}
