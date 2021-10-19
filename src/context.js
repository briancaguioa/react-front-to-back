import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact =>
          contact.id !== action.payload
        )
      }
    default: 
      return state;
  }
}

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: '1',
        name: 'John Doe',
        email: 'jdoe@gmail',
        phone: '555-555-5555'
      },
      {
        id: '2',
        name: 'Karen Williams Doe',
        email: 'karen@gmail',
        phone: '444-444-4444'
      },
      {
        id: '3',
        name: 'Brian Caguioa',
        email: 'brian@gmail',
        phone: '333-333-3333'
      },
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;