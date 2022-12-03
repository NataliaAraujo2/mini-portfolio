import './style.css';

function Introduce(props) {

    const tituloPagina = <h1>Hi!<br />My name is {props.meuNome}!</h1>;
    const minhaFoto = <img src={props.arquivoFoto} className="inline_img" alt='foto do perfil'></img>;
  
    const perfilContent = (
      <div>
        <div>
        {minhaFoto}
        </div>
        <div className="name">
          {tituloPagina}
        </div>
      </div>);
  
    return perfilContent;
  }

  export default Introduce;
  

  
  
  
