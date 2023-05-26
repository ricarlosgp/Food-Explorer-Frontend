
import logoHeader from '../../assets/logoHeader.svg';
import menu from '../../assets/menu.svg';
import closeMenu from '../../assets/CloseMenu.svg';
import searchIcon from '../../assets/searchIcon.svg';
import logOut from '../../assets/logOut.svg';
import paperList from '../../assets/paperList.svg';
import {Container} from './styles';

import {useState, useEffect} from 'react';//inicio desktop
//hooks react
export function Header() {
  //desktop   w580 h48
  const [widthScreen, setWidthScreen] = useState(); 

  useEffect(()=>{
    setWidthScreen(window.innerWidth)

    window.onresize = () => { 
      setWidthScreen(window.innerWidth) 
  
      // if(widthScreen){
      //   if(widthScreen >= 800){
      //     setCheckMenuMobile(true)
      //   }else{
      //     setCheckMenuMobile(false)
      //   }
      // }
    } 
  },[widthScreen])
  
  
  //fim desktop

  const [menuCheckbox, setMenuCheckbox] = useState(false)
 
  const handleMenu = () =>{
    if(menuCheckbox === false){
      setMenuCheckbox(true)
    }else{
      setMenuCheckbox(false)
    }
  }

    return (
      <Container>

        <div className='wrapper'>
          <div className={widthScreen >= 800 ? 'hidden' : 'menuCheckbox'}>
            {/* desktop */}
            <input type='checkbox' onClick={()=>handleMenu()}/>

            {
              menuCheckbox === false ?
              <img src={menu} alt='menu icon'/>
              :
              <div className='closeMenu'>
                <img src={closeMenu} alt='icon close menu'/>
                <span>Menu</span>
              </div>
            }
          </div>

          <img src={logoHeader} alt='logo food explorer'/>

          <div className='wrapper-container'>
            <div className={(widthScreen >= 800) || (menuCheckbox === true) ? 'wrapper-input' : 'hidden'}>
              <img src={searchIcon} alt='logo food explorer'/>
              <input type='text' placeholder='Busque por pratos ou ingredientes'/>
            </div>
          </div>

          <button className={widthScreen >= 800 ? 'wrapper-button' : 'hidden'}>
            <img src={paperList} alt='List of orders'/>
            <span>pedidos (0)</span>
          </button>

          <img className={(widthScreen >= 800) || (menuCheckbox === true) ? 'logOut' : 'hidden'} src={logOut} alt='icon log out'/>
          
          <div className={widthScreen >= 800 ? 'hidden' : 'paperList'}>
            <img src={paperList} alt='List of orders'/>
            
            <div className='length'>
              <span>0</span>
            </div>
          </div>
        </div>

        <div className={(widthScreen >= 800) || (menuCheckbox === false) ? 'hidden' : 'sidebar'}>
          <div className='bgFix'></div>

          <nav>
            <ul>
              <li>Sair</li>
            </ul>
          </nav>

        </div>

      </Container>
    )
  }
  