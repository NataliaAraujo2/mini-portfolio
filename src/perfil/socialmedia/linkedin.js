import './style.css';

function LinkLinkedin() {
    return (
      <div className='linkedin'>
        <a href='http://www.linkedin.com/in/natalia-nogueira-63569670' target='_blank' rel='noreferrer' alt='link para o linkedin'>
          <img
            src={require('../assets/images/linkedin.png')}
            alt='link linkedin'>
          </img>
        </a>
      </div>
    );
  }

  export default LinkLinkedin;
  