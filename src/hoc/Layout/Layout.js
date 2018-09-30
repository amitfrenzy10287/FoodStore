import React, { Component } from 'react'; 
import Header from '../../components/UI/Header/Header';
import Footer from '../../components/UI/Footer/Footer';
import './Layout.css';

class Layout extends Component {
      
    render () {

        return (
            <div className="container">
                <Header />
                <main>
                    {this.props.children}
                </main>
                <Footer /> 
            </div>
        )
    }
} 
 
export default Layout;