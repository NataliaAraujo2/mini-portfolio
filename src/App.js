import './App.css';
import Introduce from './perfil/introduce';
import Resume from './perfil/resume';
import SocialMedia from './perfil/socialmedia/index.js';



function App() {
  return (
    <div className='main'>
      <Introduce meuNome="Natália" arquivoFoto={require('./perfil/assets/images/perfil.jpg')} />
      <br></br>
      <br></br>
      <Resume></Resume>
      <br></br>
      <br></br>
      <SocialMedia></SocialMedia>
    </div>
  );
}

export default App;
