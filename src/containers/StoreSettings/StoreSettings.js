import React, { Component } from 'react'; 
import StoreForm from '../../components/StoreForm/StoreForm'; 
import {Redirect} from 'react-router-dom';

export class StoreSettings extends Component {
    
    state = {
    	storeForm:{},
    	showTipsForm:false,
    	redirect:false,
    }; 
    
    onInputChange = (e) => {

    	let tips = this.state.showTipsForm;  
	    if(e.target.name ==='tips'){
	    	tips = e.target.checked ===true?true:false;
	    }
	    const storeFormObj = {...this.state.storeForm,[e.target.name]: e.target.value };
	    this.setState({ storeForm : storeFormObj,
	    		showTipsForm:tips });
	} 

    submitStore = (e) =>{ 
    	e.preventDefault();
    	this.setState({redirect:true}); 
    }

    render () { 
    	
    	const {redirect,storeForm} = this.state;
    	
    	if(redirect){

    		return (<Redirect to={{
                pathname: '/StoreSettingsView',
                state: { referrer: storeForm }
            }} />);
    	}

        return (
            <div className="mainContent">
            <StoreForm 
            	submitStore={this.submitStore}
             	inputChange={this.onInputChange}
             	showTipsForm={this.state.showTipsForm}/>
            </div>    
        );
    }
} 
 
export default StoreSettings;