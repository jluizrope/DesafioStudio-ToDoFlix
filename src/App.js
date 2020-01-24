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
      modalOpen: false,
    }
  }

  handleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  }

  render() {
    return (
      <section>
        <div>                
                      
        </div>
      </section>

    )
  }
}
                                                
export default App;
