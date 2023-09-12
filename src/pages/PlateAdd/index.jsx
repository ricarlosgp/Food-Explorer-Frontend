import { MdOutlineFileUpload } from 'react-icons/md'
import { IoIosArrowBack } from 'react-icons/io'
import { Header } from '../../components/Header'
import { HeaderAdm } from '../../components/HeaderAdm'
import { Footer } from '../../components/Footer'
import { Container, Form } from './styles'
import {useNavigate} from 'react-router-dom'
import { Ingredient } from '../../components/Ingredient'
import {useState} from 'react'
import { api } from '../../services/api'

export function PlateAdd() {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [imagem, setImagem] = useState('')
  const [newIngredient, setNewIngredients] = useState([]);

  const user = JSON.parse(localStorage.getItem("@rocketfood:user"));
  const navigate = useNavigate();

  function handleAddIngredient() {
    if(!newIngredient){
        return
    }else{
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredients("");
    };
  };

  function handleRemoveIngredient(ingredientDeleted) {
      setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientDeleted));
  };
  
  const handleImagem = (event) => {
    const file = event.target.files[0];
    setImagem(file);
  };

  async function handleAddPlate(e){
      if(!imagem || !name || !category || ingredients.length === 0 || !description){
          e.preventDefault();
          alert("Existe campo vazio.")
      }else{
  
          const fileUpload = new FormData();
      
          fileUpload.append("imgPlate", imagem);
  
          fileUpload.append("data",JSON.stringify({
              title: name,
              category,
              description,
              ingredients,
              price,
          }));
      
          alert("Prato adicionado com sucesso.");
          handleBack()
          await api.post("/plates", fileUpload);
      }          
    
};

  function handleBack(){
    return navigate("/");
  };

  return (
    <Container>
      <div className="wrapper-header">
      {user.admin === 1 ? <HeaderAdm /> : <Header />}
      </div>

      <div className="wrapper-form">
        <Form onSubmit={handleAddPlate}>
          <div className="wrapper-head">
            <button onClick={() => handleBack()}>
              <IoIosArrowBack size={18} />
              <span>voltar</span>
            </button>
            <h1>Novo prato</h1>
          </div>

          <div className="wrapper-1">
            <div>
              <span>Imagem do prato</span>
              <div className="wrapper-file">
                <label>
                  <MdOutlineFileUpload />
                  selecione imagem
                  <input onChange={handleImagem} type="file" />
                </label>
              </div>
            </div>

            <label>
              Nome
              <input maxLength={20} type="text" placeholder="Ex: salada Ceasar" onChange={(e) => setName(e.target.value)} />
            </label>

            <label>
              Categoria
              <select onChange={(e)=>setCategory(e.target.value)}>
                <option value=''>Selecionar</option>
                <option value='Refeições'>Refeições</option>
                <option value='Sobremesa'>Sobremesa</option>
                <option value='Bebidas'>Bebidas</option>
              </select>
            </label>
          </div>

          <div className="wrapper-2">
            <div className="ingredients">
              <div>
              <Ingredient 
              isnew='true'
              placeholder="ingrediente" 
              onChange={e =>setNewIngredients(e.target.value)}
              value={newIngredient}
              onClick={handleAddIngredient}
              />
                                      
              {
                  ingredients.map((ingredient, index)=>(
                      <Ingredient 
                      key={String(index)}
                      value={ingredient}
                      onClick={()=> handleRemoveIngredient(ingredient)}
                      />
                  ))
              }
              </div>
            </div>

            <label>
              Preço
              <input placeholder="R$ 00,00" type="number" onChange={(e) => setPrice(e.target.value)} />
            </label>
          </div>

          <div className="wrapper-3">
            <label>
              Descrição
              <textarea maxLength={200} onChange={(e) => setDescription(e.target.value)} placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></textarea>
            </label>
          </div>

          <div className="wrapper-button">
            <button type='submit'>Salvar prato</button>
          </div>
        </Form>
      </div>

      <div className="wrapper-footer">
        <Footer />
      </div>
    </Container>
  )
}
