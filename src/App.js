import React, { Component } from "react";
import "./App.css";

const Person = ({ img, name, occupation, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="person img" />
      <div>
        <h4>{name}</h4>
        <h4>{occupation}</h4>
        {children}
      </div>
    </div>
  );
};
const PersonList = () => {
  return (
    <section>
      <Person img="34" name="john" occupation="developer" />
      <Person img="22" name="bob" occupation="designer">
        <div className="social-icons">
          <span>
            <i className="fab fa-facebook" />
          </span>
          <span>
            <i className="fab fa-twitter" />
          </span>
          <span>
            <i className="fab fa-instagram" />
          </span>
        </div>
      </Person>
      <Person img="56" name="david" occupation="the boss" />
    </section>
  );
};

class App extends Component {
  render() {
    return <PersonList />;
  }
}

export default App;
