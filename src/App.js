import React, {Component} from 'react';
import './App.css';
import Header from './pages/layout/header';
import Footer from './pages/layout/footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}

export default App;
