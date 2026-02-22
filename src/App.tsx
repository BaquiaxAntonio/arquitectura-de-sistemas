import React from 'react';
import './App.css';

const App: React.FC = () => {
  const githubUrl = "https://github.com/TU_USUARIO/TU_REPOSITORIO";
  const awsUrl = "http://TU_URL_DE_BEANSTALK.aws.com";

  return (
    <div className="container">
      <div className="card">
        <div className="badge">Proyecto en Vivo</div>
        
        <h1>Bienvenido a mi página web</h1>
        
        <div className="button-group">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-github">
            Ver en GitHub
          </a>
          <a href={awsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-aws">
            Link AWS Beanstalk
          </a>
        </div>

        <div className="footer">
          <p>Assignment-03: <span>AWS Elastic Beanstalk</span></p>
        </div>
      </div>
    </div>
  );
};

export default App;