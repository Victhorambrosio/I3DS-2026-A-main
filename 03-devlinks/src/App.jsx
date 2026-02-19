import { useState } from 'react'
import './App.css'
import Link from './components/Link/Link'
import Perfil from './components/Perfil/Perfil'
import Rodape from './components/rodape/Rodape'
import SocialLinks from './components/SocialLinks/SocialLinks'
import Switch from './components/Switch/Switch'

import foto from "./assets/japones.jpg"

function App() {
  const[isLight, setIsLight] = useState(true)

  const troca = () => {
    setIsLight(!isLight)
  };
  return (
    <div id="App" className={isLight ? "light" : ""}>
      <Perfil fotoPerfil={foto}>Ambrósio</Perfil>
      
      <Switch troca={troca} isLight={isLight}/>

          <div id="Link">
          <ul>
            <Link url={"https://www.instagram.com/victhor_ambrosio/"}>Instagram</Link>
            <Link url={"https://open.spotify.com/intl-pt"}>Minha Playlist</Link>
            <Link url={"https://mepagaumcafe.com.br/"}>Me pague um café</Link>
           <Link url={"https://mepagaumcafe.com.br/"}>Conheça o curso do DEV</Link>
          </ul>
          </div>  
      <div id="SocialLinks">
        <SocialLinks url={"https://github.com/Victhorambrosio"} icon={"logo-github"}/>
        <SocialLinks url={"https://www.instagram.com/victhor_ambrosio/"} icon={"logo-instagram"}/>
        <SocialLinks url={"https://youtube.com"} icon={"logo-youtube"}/>
        <SocialLinks url={"https://linkedin.com"} icon={"logo-linkedin"}/>
      </div>
      <Rodape>Japones</Rodape>
    </div>
  )
}

export default App

