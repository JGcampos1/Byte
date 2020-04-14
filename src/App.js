import React from 'react';

import './stilo.css';
import './reset.css';
import './flexbox.css';

import logoImg from "/home/joao/Área de Trabalho/jg/Facul/andre/progeto/src/logo.png";
import SobreImg from "/home/joao/Área de Trabalho/jg/Facul/andre/progeto/src/As-15-principais-linguagens-de-programação-no-mundo.png";
import Curso1 from "/home/joao/Área de Trabalho/jg/Facul/andre/progeto/src/background1.jpg";
import Curso2 from "/home/joao/Área de Trabalho/jg/Facul/andre/progeto/src/background2.png";

function App() {
  
  return (
    <body>

    <header class="cabecalhoPrincipal">
      <div class="container">
        <img class="logo" src={logoImg} alt=""></img>

        <h1 class="cabecalhoPrincipal-titulo">
          <p>Byte</p>
        </h1>

        <nav class="cabecalhoPrincipal-nav">
          <p class="cabecalhoPrincipal-nav-link" href="#">Home</p>
          <p class="cabecalhoPrincipal-nav-link" href="#">Cursos</p>
          <p class="cabecalhoPrincipal-nav-link" href="#">Sobre nós</p>
          <p class="cabecalhoPrincipal-nav-link" href="#">Contato</p>
          <p class="cabecalhoPrincipal-nav-link cabecalhoPrincipal-nav-link-app" href="#">Nosso APP</p>
        </nav>
      </div>
    </header>
      <aside className="ConteinerSobre">
            <h1 className="sobre">Sobre o Byte</h1>
            <div className="sobreTexto">
                  <img class="SobreImg" src={SobreImg} alt=""></img>
                  <p> Programar pode parecer difícil à primeira vista. As linhas de código não fazem sentido e a lógica por trás do conceito não é exatamente clara para quem nunca lidou com isso. Mas é tudo questão de dar um primeiro passo — e há diversos cursos online que ajudam nessa parte. Selecionamos oito deles, com opções em inglês e português, para quem quer começar nessa área ou ao menos entender melhor com diferentes linguagens de programação funcionam. Todas as aulas são gratuitas, mas é preciso pagar se quiser um certificado. Ainda assim, são boas oportunidades de aumentar seus conhecimentos. Confira a seguir.</p>
            </div>

        </aside>
      <main class="conteudoPrincipal">
          <h2 class="subtitulo">Nossos cursos</h2>
        <div class="container">
          <nav>
            <ul class="conteudoPrincipal-cursos">
              <li class="conteudoPrincipal-cursos-link">
                <img class="curso" src={Curso1} alt=""></img>
                <p href="#">Java</p
              </li>

              <li class="conteudoPrincipal-cursos-link">
                <img class="curso" src={Curso2} alt=""></img>
                <p href="#">PHP</p>
              </li>

              <li class="conteudoPrincipal-cursos-link">
                <img class="curso" src={Curso1} alt=""></img>
                <p href="#">Ruby on Rails</p>
              </li>

              <li class="conteudoPrincipal-cursos-link">
                <img class="curso" src={Curso2} alt=""></img>
                <p href="#">.NET</p>
              </li>
              <li class="conteudoPrincipal-cursos-link">
                <img class="curso" src={Curso1}  alt=""></img>
                <p href="#">Pascal</p>
              </li>
              <li class="conteudoPrincipal-cursos-link">
                <img class="curso" src={Curso2}  alt=""></img>
                <p href="#">Flexbox</p>
              </li>
              <li class="conteudoPrincipal-cursos-link">
                <img class="curso" src={Curso1} alt=""></img>
                <p href="#">Desenvolvimento Web</p>
              </li>
              <li class="conteudoPrincipal-cursos-link">
                <img class="curso" src={Curso2}  alt=""></img>
                <p href="#">Java Web</p>
              </li>
              <li class="conteudoPrincipal-cursos-link">
                <img class="curso" src={Curso1} alt=""></img>
                <p href="#">Javascript</p>
              </li>

              <li class="conteudoPrincipal-cursos-link">
                <img class="curso" src={Curso2}  alt=""></img>
                <p href="#">AngularJS</p>
              </li>

              <li class="conteudoPrincipal-cursos-link">
                <img class="curso" src={Curso1} alt=""></img>
                <p href="#">TDD com C</p>
              </li>

              <li class="conteudoPrincipal-cursos-link">
                <img class="curso" src={Curso2}  alt=""></img>
                <p href="#">Redes de computadores</p>
              </li>
              <li class="conteudoPrincipal-cursos-link">
                <img class="curso" src={Curso1} alt=""></img>
                <p href="#">MySQL</p>
              </li>
              <li class="conteudoPrincipal-cursos-link">
                <img class="curso" src={Curso2}  alt=""></img>
                <p href="#">MariaDB</p>
              </li>
              <li class="conteudoPrincipal-cursos-link">
                <img class="curso" src={Curso1} alt=""></img>
                <p href="#">Postegres</p>
              </li>
              <li class="conteudoPrincipal-cursos-link">
                <img class="curso" src={Curso2}  alt=""></img>
                <p href="#">Lógica de programação</p>
              </li>

              <li class="conteudoPrincipal-cursos-link">
                <img class="curso" src={Curso1} alt=""></img>
                <p href="#">Lógica de programação</p>
              </li>
              
              <li class="conteudoPrincipal-cursos-link">
                <img class="curso" src={Curso2}  alt=""></img>
                <p href="#">Lógica de programação</p>
              </li>
            </ul>
          </nav>
        </div>

        <section class="videoSobre">
          <div class="container">
            <iframe class="videoSobre-video" title="video" width="560" height="315" src="https://www.youtube.com/embed/bIlOsJzBVaY?list=PLh2Y_pKOa4UcF1BYPJR3EIMRi3nWAUxIp" frameborder="0" allowfullscreen></iframe>

            <div class="videoSobre-sobre">
              <h2 class="videoSobre-sobre-title">Vantagens do Alurinha</h2>
              <ul class="videoSobre-sobre-list">
                <li class="videoSobre-sobre-item">Estude onde quiser</li>
                <li class="videoSobre-sobre-item">Novos cursos todos os meses</li>
                <li class="videoSobre-sobre-item">Cursos compatíveis com o mercado</li>
              </ul>
              <button class="videoSobre-button">Cadastre-se já</button>
            </div>
          </div>
        </section>

      </main>

      <aside class="rodapePrincipal">
        <div class="container">

          <section class="rodapePrincipal-navMap">
            <h3 class="subtitulo">Mapa de cursos</h3>
            <nav class="rodapePrincipal-navMap-list">

              <h4 class="navmap-list-title navmap-list-title-backend">Linguagens Backend</h4>
              <p class="rodapePrincipal-navMap-link" href="#">Java</p>
              <p class="rodapePrincipal-navMap-link" href="#">PHP</p>
              <p class="rodapePrincipal-navMap-link" href="#">Pascal</p>
              <p class="rodapePrincipal-navMap-link" href="#">Scala</p>
              <p class="rodapePrincipal-navMap-link" href="#">Python</p>
              <p class="rodapePrincipal-navMap-link" href="#">Java Web</p>
              <p class="rodapePrincipal-navMap-link" href="#">Assembly</p>
              <p class="rodapePrincipal-navMap-link" href="#">Lógica de programação</p>

              <h4 class="navmap-list-title navmap-list-title-frontend">Linguagens Frontend</h4>
              <p class="rodapePrincipal-navMap-link" href="#">Flexbox</p>
              <p class="rodapePrincipal-navMap-link" href="#">Desenvolvimento Web</p>
              <p class="rodapePrincipal-navMap-link" href="#">Javascript</p>
              <p class="rodapePrincipal-navMap-link" href="#">AngularJS</p>
              <p class="rodapePrincipal-navMap-link" href="#">ReactJS</p>
              <p class="rodapePrincipal-navMap-link" href="#">Polymer</p>

              <h4 class="navmap-list-title navmap-list-title-framework">Frameworks</h4>
              <p class="rodapePrincipal-navMap-link" href="#">Ruby on Rails</p>
              <p class="rodapePrincipal-navMap-link" href="#">VRaptor</p>
              <p class="rodapePrincipal-navMap-link" href="#">SpringMVC</p>
              <p class="rodapePrincipal-navMap-link" href="#">NodeJS</p>
              <p class="rodapePrincipal-navMap-link" href="#">Django</p>
              <p class="rodapePrincipal-navMap-link" href="#">Bootstrap3</p>

              <h4 class="navmap-list-title navmap-list-title-bancoDeDados">Banco de dados</h4>
              <p class="rodapePrincipal-navMap-link" href="#">MySQL</p>
              <p class="rodapePrincipal-navMap-link" href="#">MariaDB</p>
              <p class="rodapePrincipal-navMap-link" href="#">Postegres</p>

            </nav>
          </section>

        </div>

        <section class="rodapePrincipal-patrocinadores">
          <div class="container">
            <ul class="rodapePrincipal-patrocinadores-list">
              <li>
                <p class="rodapePrincipal-patrocinadores-list-link patrocinadores-list-link-alura" href="#">
                  <img src="img/logos/alura.svg" alt="Logo da Alura"></img>
                </p>
              </li>
              <li>
                <p class="rodapePrincipal-patrocinadores-list-link patrocinadores-list-link-caelum" href="#">
                  <img src="img/logos/caelum.svg" alt="Logo da Caelum"></img>
                </p>
              </li>
              <li>
                <p class="rodapePrincipal-patrocinadores-list-link patrocinadores-list-link-casaDoCodigo" href="#">
                  <img src="img/logos/cdc.svg" alt="Logo da Casa do Código"></img>
                </p>
              </li>
            </ul>
            <form class="rodapePrincipal-contatoForm" action="#">
              <fieldset>
                <legend class="rodapePrincipal-contatoForm-legend" for="email-contato">Entre em contato conosco</legend>
                <div class="rodapePrincipal-contatoForm-fieldset">
                  <input class="rodapePrincipal-contatoForm-emailInput" type="email" name="email-contato" id="email-contato"></input>
                  <button class="rodapePrincipal-contatoForm-submit" type="submit">Enviar</button>
                </div>
              </fieldset>
            </form>
          </div>
        </section>
      </aside>

    </body>
  );
}

export default App;
