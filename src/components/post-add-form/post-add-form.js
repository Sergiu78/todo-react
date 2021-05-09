import React, {Component} from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    };

  }

  onValueChange(event){
    this.setState({
      text: event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault();
    this.props.onAdd(this.state.text)
    this.setState({
      text: ''
    })
  }

  render(){ 
    const {onAdd} = this.props;
    return(
    <form className="bottom-panel d-flex"
    onSubmit={this.onSubmit.bind(this)}>
      <input
        type="text"
        placeholder="О чем Вы сейчас думаете"
        className="form-control new-post-label"
        onChange={this.onValueChange.bind(this)}
        value={this.state.text}/>
      <button 
      className="btn btn-outline-secondary" 
      type='submit'>
        Добавить
      </button>
    </form>
  )}
 
}


