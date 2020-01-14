import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Amgad', age: 29 },
      { name: 'Mariam', age: 29 },
      { name: 'Raphy', age: 3 }
    ],
    otherState: 'Some other values',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Mariam Samir', age: 29 },
        { name: 'Raphy Amgad', age: 3 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Amgad Mounir', age: 29 },
        { name: 'Mariam Samir', age: 29 },
        { name: event.target.value, age: 3 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
    // console.log(this.state);
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, 'Amgad Mounir!')}
            changed={this.nameChangedHandler}> My Hoppies: Playing Football</Person>
        </div>
      );

    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Person
       </button>
        {persons}
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
