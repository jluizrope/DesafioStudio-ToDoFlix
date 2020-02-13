import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./pofcomponents/Header";
import Mainbackgroundimage from "./pofcomponents/Mainbackgroundimage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],      
    }
   }


  handleModal = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.setState(prevState => ({
      
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


  render() {
    return (
      <section>
        <div>
          <button onClick={this.handleModal}>Clickhere</button> 
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
 
       