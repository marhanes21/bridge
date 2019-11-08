import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import NavBar from "./NavBar";

import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
              <NavBar/>
            </div>
        );
    }
}

export default App;
