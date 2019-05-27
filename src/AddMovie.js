import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      movieImg: '',
      movieTitle: '',
      movieRate: ''
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
        <Button color="danger" onClick={this.toggle}>Add Movie</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>ADD MOVIE</ModalHeader>
          <ModalBody>
                <div className='modalContainer'>
                  <div className='inputName'>
                    <span> Movie Image (URL): </span>
                    <span> Movie Title: </span>
                    <span> Movie Rate (1 to 5): </span>
                  </div>
                  <div className='inputUser'>
                    { <input type='text' name='movieImg' placeholder='movie image' onChange={this.handleMovie}/> }
                    <input type='text' name='movieTitle' placeholder='movie title' onChange={this.handleMovie}/>
                    <input type='text' name='movieRate' placeholder='movie rate' onChange={this.handleMovie}/>
                  </div>
                </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={ () => {this.toggle();this.props.addMovie(this.state.movieImg,this.state.movieTitle.toUpperCase(),this.state.movieRate)}}>SEND</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMovie;