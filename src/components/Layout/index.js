import React from 'react';
import './Layout.css'

function Layout() 
{


  function toogleFunction(event)
  {
    document.getElementsByClassName("SubMenu1")[0].classList.toggle('active');

  }

  function toogleFunction2()
  {
    document.getElementsByClassName("SubMenu2")[0].classList.toggle('active');

  }

  return (
    <div className="VerticalMenu">
      <ul>
        <li className="toogle-item" onClick={toogleFunction}>Cadastro</li>
          <ul className="SubMenu1">
              <div className="SubItems">
                <li>Obras</li>
                <li>Profissionais</li>
                <li>Proprietários</li>
                <li>Logradouros</li>
                <li>Relatório Diário</li>
              </div>
            </ul>
          
        <li className="toogle-item" onClick={toogleFunction2}>Relatórios</li>
          <ul className="SubMenu2">
            <div className="SubItems">
              <li>Relatório Diário</li>
              <li>Obras Cadastradas</li>
              <li>Profissionais</li>
            </div>
          </ul>
      </ul>
            
    </div>
  );
}

export default Layout;
