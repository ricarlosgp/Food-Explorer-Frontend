import logoHeader from '../../assets/logoHeader.svg'
import menu from '../../assets/menu.svg'
import closeMenu from '../../assets/CloseMenu.svg'
import searchIcon from '../../assets/searchIcon.svg'
import logOut from '../../assets/logOut.svg'
// import paperList from '../../assets/paperList.svg'
import { Container } from './styles'

import { useState, useEffect } from 'react'

export function HeaderAdm() {
  const [widthScreen, setWidthScreen] = useState()

  useEffect(() => {
    setWidthScreen(window.innerWidth)

    window.onresize = () => {
      setWidthScreen(window.innerWidth)
    }
  }, [widthScreen])

  const [menuCheckbox, setMenuCheckbox] = useState(false)

  const handleMenu = () => {
    if (menuCheckbox === false) {
      setMenuCheckbox(true)
    } else {
      setMenuCheckbox(false)
    }
  }

  return (
    <Container>
      <div className="wrapper">
        <div className={widthScreen >= 800 ? 'hidden' : 'menuCheckbox'}>
          <input type="checkbox" onClick={() => handleMenu()} />

          {menuCheckbox === false ? (
            <img src={menu} alt="menu icon" />
          ) : (
            <div className="closeMenu">
              <img src={closeMenu} alt="icon close menu" />
              <span>Menu</span>
            </div>
          )}
        </div>

        <div className='logoAdm'>
          <img src={logoHeader} alt="logo food explorer" />
          <span>admin</span>
        </div>

            {/* sidebar */}
        <div className="wrapper-container">
          <div
            className={
              widthScreen >= 800 || menuCheckbox === true
                ? 'wrapper-input'
                : 'hidden'
            }
          >
            <img src={searchIcon} alt="logo food explorer" />
            <input
              type="text"
              placeholder="Busque por pratos ou ingredientes"
            />
          </div>
        </div>

        <button className={widthScreen >= 800 ?'wrapper-button' : 'hidden'}>
          <span>novo prato</span>
        </button>

        <img
          className={
            widthScreen >= 800 || menuCheckbox === true ? 'logOut' : 'hidden'
          }
          src={logOut}
          alt="icon log out"
        />
      </div>

      <div
        className={
          widthScreen >= 800 || menuCheckbox === false ? 'hidden' : 'sidebar'
        }
      >
        <div className="bgFix"></div>

        <nav>
          <ul>
            <li>Sair</li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}
