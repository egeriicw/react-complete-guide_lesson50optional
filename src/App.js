import React, { Component } from 'react';
import './App.css';
import UserOutput from './Components/UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames: [
      {username: "egeriicw"},
      {username: "caroline"},
      {username: "moose"},
    ]
  }

  render() {
    return (
      <div className="App">
        <ul>
          <li>X Create TWO new components: UserInput and UserOutput</li>
          <li>X UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>X Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>X Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>X Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ul>
        <hr />
        <UserOutput username={this.state.usernames[0].username}/>
        <UserOutput username={this.state.usernames[1].username}/>
        <UserOutput username={this.state.usernames[2].username} />
      </div>
    );
  }
}

export default App;
