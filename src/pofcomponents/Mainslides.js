import React from 'react';

class Mainslides extends React.Component {
  render() {
    return(
      <section className="slides">
        <p>Minha lista:</p>

        <div>

          <img src="./assets/capitaofantastico.png" />
          <p>Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.</p>;
          
          <img src="./assets/corra.jpeg" />
          <p>Um jovem fotógrafo descobre um segredo sombrio quando conhece os pais aparentemente amigáveis da sua namorada.</p>;

          <img src="./assets/bacurau.jpeg" />
          <p>Os moradores de um pequeno povoado do sertão brasileiro, chamado Bacurau, descobrem que a comunidade não consta mais em qualquer mapa.</p>

        </div>

      </section>
    )
  }
}

export default Mainslides;