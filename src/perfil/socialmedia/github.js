import './style.css';

  function LinkGitHub() {
    return (
      <div className='github'>
        <a href='https://github.com/NataliaAraujo2' target='_blank' rel='noreferrer' alt='link para o github'>
          <img
            src={require('../assets/images/github.png')}
            alt='link github'>
          </img>
        </a>
      </div>
    );
  }

  export default LinkGitHub;