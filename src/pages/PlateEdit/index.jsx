import { MdOutlineFileUpload } from 'react-icons/md'
import { IoIosArrowBack } from 'react-icons/io'
import { Header } from '../../components/Header'
import { HeaderAdm } from '../../components/HeaderAdm'
import { Footer } from '../../components/Footer'
import { Container, Form } from './styles'
import { Ingredient } from '../../components/Ingredient'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export function PlateEdit() {
  const [imagem, setImagem] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredients] = useState([]);

  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const params = useParams();
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("@rocketfood:user"));

  const handleImagem = (event) => {
    const file = event.target.files[0];
    setImagem(file);
  };
  
  function handleAddIngredient() {
    if(!newIngredient){
        return
    }else{
      
      setIngredients(prevState => [...prevState, newIngredient]);
      setNewIngredients("");
    };
  }
    
  function handleRemoveIngredient(ingredientDeleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientDeleted));
  }

  useEffect(()=>{
    try{
        async function fetchPlate(){
            const response = await api.get(`/plates/${params.id}`)
            setTitle(response.data[0].title)
            setCategory(response.data[0].category)
            setPrice(response.data[0].price)
            setDescription(response.data[0].description)
        }
        fetchPlate();
    }catch(err){
        if(err.response){
            alert(err.response.data.message)
        }else{
            alert("Não foi possível carregar os dados do prato.")
        }
    };
  },[]);

  useEffect(()=>{
    async function getIngredients(){
        const response = await api.get(`/ingredients/${params.id}`);
        console.log(response.data)
        setIngredients(response.data.map(ingredient => ingredient.name))
    }
    getIngredients();
  },[]);

  async function updatePlate(e){
    if(ingredients.length === 0){
        e.preventDefault();
        return alert("Campo imagem ou ingredientes está vazio!");
    };
    
    alert("Prato alterado com sucesso!");
    navigate("/");

    await api.put(`/plates/${params.id}`, {
      title,
      category,
      price,
      description,
      ingredients
    });
    await api.put(`/ingredients/${params.id}`, {
        ingredients 
    });

    const fileUpload = new FormData();

    fileUpload.append("imgPlate", imagem);
    
    await api.patch(`/plates/${params.id}`, fileUpload);
  };

  async function handleRemovePlate(){
    alert("Prato deletado.");
    navigate("/");
    await api.delete(`/plates/${params.id}`)
  };

  return (
    <Container>
      <div className="wrapper-header">
        {user.admin === 1 ? <HeaderAdm /> : <Header />}
      </div>

      <div className="wrapper-form">
        <Form onSubmit={updatePlate}>
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
                  <input 
                  type="file"
                  onChange={handleImagem}
                  />
                </label>
              </div>
            </div>

            <label>
              Nome
              <input 
              type="text" 
              placeholder="Ex: salada Ceasar" 
              value={title}
              maxLength={25}
              onChange={(e)=>setTitle(e.target.value)}
              />
            </label>

            <label>
              Categoria
              <select onChange={(e)=>setCategory(e.target.value)} id="select">
                <option value="">{category}</option>
                <option value="Refeições">Refeições</option>
                <option value="Sobremesas">Sobremesas</option>
                <option value="Bebidas">Bebidas</option>
              </select>
            </label>
          </div>

          <div className="wrapper-2">
            <div className="ingredients">
              <label htmlFor="ingredients">Ingredientes</label>

              <div> 
                <Ingredient 
                isnew
                placeholder="ingrediente"  
                onChange={e =>setNewIngredients(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredient}
                />

                {ingredients &&
                  ingredients.map((ingredient, index) => (
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
              <input 
              placeholder="R$ 40,00" 
              type="number" 
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              />
            </label>
          </div>

          <div className="wrapper-3">
            <label>
              Descrição
              <textarea 
              placeholder="A Salada César é uma opção refrescante para o verão."
              maxLength={150}
              type='text'
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              >
              </textarea>
            </label>
          </div>

          <div className="wrapper-button">
            <button onClick={handleRemovePlate} type='button'>Excluir prato</button>
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
