import './App.css';

function App() {
  return (
    <div className="App">

      <div className='logo'>
        <span className='logoIniciais'>DBS</span>
      </div>

      <div className='quemSou'>
        <span className='textoApresentacao'>
          Olá, meu nome é Demetrius Batista dos Santos! Sou estudante de Análise e Desenvolvimento de Sistemas
          e estou no último período. Meu interesse pela área de TI é fruto da minha curiosidade, minha esposa
          é Engenheira de Software e vendo ela trabalhar ficava me perguntando se eu era capaz de fazer o mesmo.
          Pois bem, dei os primeiros passos e não parei mais, aqui estou eu, praticando e graças a minha
          curiosidade, prestes a conquistar meu diploma! Estou à procura de uma oportunidade para colocar em
          prática o que já sei e aprender ainda mais, alçando voos cada vez maiores!
         </span>
      </div>

      <div className='habilidades'>
        <ul className='oQueSei'>
          <li>Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas - Último semestre </li>
          <li>Curso React.js Ninja - React Completo - Cursando - Udemy</li>
          <li>Iniciação Profissional, Lógica de Programação - Senai</li>
          <li>Git e Github para iniciantes - Udemy</li>
          <li>Technical Skills: </li>
          <li>Forte: HTML, CSS, Javascript, React, Java, MySQL e Git.</li>
          <li>Conhecedor: C, PHP, JQuery e Bootstrap.</li>
        </ul>
      </div>

      <footer className='rodape'>
        <p className='copyRight'>
          Made by Demetrius Batista dos Santos
        </p>
      </footer>

    </div>
  );
}

export default App;
