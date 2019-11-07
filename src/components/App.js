import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Bridge from "./Bridge";

import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
              <Bridge/>
            </div>
        );
    }
}

export default App;
