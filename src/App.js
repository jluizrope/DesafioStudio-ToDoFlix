import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from "./pofcomponents/Modal";
import Header from "./pofcomponents/Header";
import Mainbackgroundimage from "./pofcomponents/Mainbackgroundimage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      modal: false,

    }

   }


  handleModal = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }


  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const {list} = this.state;

    // localStorage

    list.push({
      name: this.inputText.value,
      img: this.inputImg.file 
    })
    
    
  }


  renderModal = () => (
    <div className='overlay' onClick={this.handleModal}>

      <form onSubmit={this.handleSubmit}>
        <input ref={node => this.inputText = node} required autoFocus/>
        <input type='file' accept={'jpg', 'jpeg', 'svg'} ref={node => this.inputText = node}></input>
        <button>Add</button>

      </form>
    </div>
  )    
  

  render() {
    return (
      <section>
        <div>
          <button onClick={this.handleModal}>Clickhere</button> 
          {this.state.modal ? this.renderModal() : null}
          {this.state.list.map((item, index) => {
            <div key={index}>
              <img src='film.img'/>
              <p>{item}</p>
            </div>
          })}
        </div>
      </section>
    )
  }
}
                                                
export default App;
 
       