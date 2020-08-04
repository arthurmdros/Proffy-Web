import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQchnk5how5ihE9M2MDN9qN6rv1FhP0vTvIwg&usqp=CAU" alt="Jiraya, O sábio tarado"/>
                <div>
                    <strong>Jiraya, o sábio tarado</strong>
                    <span>Putaria</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores técninas em putaria avançada.
                <br /> <br />
                Apaixonado por farra, putaria e mulheres. Quiser trocar ideia passa zap clicando no botão abaixo.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ Sexo, drogas e álcool</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;