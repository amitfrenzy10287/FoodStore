import React, { Component } from 'react'; 
import StoreView from '../../components/StoreForm/StoreView'; 
import {Link} from 'react-router-dom';

export class StoreSettingsView extends Component { 

	render(){
 
		let storeData = this.props.location.state.referrer;

		let storedData = Object.keys(storeData).map((key)=>{
			return <StoreView label={key} value={storeData[key]} />	
		}); 

		return( 
			<div className="mainContent">
				<div className="container col-md-6">
					<ul className="list-group">
						{storedData}
					</ul>
					<div>
						<Link className="btn btn-success btn-block" to="/"> Back </Link>
					</div>
				</div>
			</div>
		);
	}
}

export default StoreSettingsView;