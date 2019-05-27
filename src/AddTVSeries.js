import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      TVSImg: '',
      TVSTitle: '',
      TVSRate: ''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleMovie = (event) => {
    this.setState ({
        [event.target.name]:event.target.value
    })
  }
  render() {
    return (
      <div className="buttonAdd">
        <Button color="danger" onClick={this.toggle}>Add TV-Series</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>ADD TV-SERIES</ModalHeader>
          <ModalBody>
          <div className='modalContainer'>
                  <div className='inputName'>
                    <span> TV-Series Image (URL): </span>
                    <span> TV-Series Title: </span>
                    <span> TV-Series Rate (1 to 5): </span>
                  </div>
                  <div className='inputUser'>
                    { <input type='text' name='TVSImg' placeholder='TV-Series Image' onChange={this.handleMovie}/> }
                    <input type='text' name='TVSTitle' placeholder='TV-Series Title' onChange={this.handleMovie}/>
                    <input type='text' name='TVSRate' placeholder='TV-Series Rate' onChange={this.handleMovie}/>
                  </div>
                </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={ () => {this.toggle();this.props.addTVSeries(this.state.TVSImg,this.state.TVSTitle.toUpperCase(),this.state.TVSRate)}}>SEND</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMovie;