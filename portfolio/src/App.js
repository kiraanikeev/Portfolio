import { useState } from "react";
import {Route, Switch, Redirect } from "react-router-dom";
import styles from "./App.module.css"
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Projects from "./components/Projects/Projects";

function App() {

const[contactsVisible, setContactsVisible] = useState(true)

  return (
    <div className={styles.app}>
      <Contacts  contactsVisible={contactsVisible}/>
<Switch>
<Route exact path='/' render={ () => <Projects  setContactsVisible={setContactsVisible} contactsVisible={contactsVisible}/> }/>
<Route path='/about' render={ () => <About  setContactsVisible={setContactsVisible} contactsVisible={contactsVisible}/> }/>


<Redirect to="/" />
</Switch>
    </div>
  );
}

export default App;
