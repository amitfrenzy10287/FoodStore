import React from 'react'; 
import './StoreForm.css';

const StoreForm = ( props ) => {

	return(
		
	<div className="container"> 
		<form method="post" name="storeform" onSubmit={props.submitStore}>	
    		<div className="form-row">
            	<div className="col-3">
            		<h4>Find Food Quick Fee</h4>
            	</div>
            	<div className="col-9">
                	<div className="form-check">
					  <input className="form-check-input" 
					  type="radio" onChange={props.inputChange} value="customer" 
					  name="payment_type" />
					  <label className="form-check-label" >
					    Customer Pays Online Order Fees
					  </label>
					</div>
					<div className="form-check">
					  <input className="form-check-input" name="payment_type"
					  type="radio" onChange={props.inputChange} value="merchant" />
					  <label className="form-check-label">
					    Merchant Pays Online Order Fees
					  </label>
					</div>
				</div>
			</div>
			<div className="form-row mt-2"> 
				  <div className="form-group col-6">
				    <label> Business Name </label>
				    <input type="text" name="business_name" onChange={props.inputChange}
				     className="form-control col-sm-5" />
				  </div>
				  <div className="form-group col-6"> 
				  	<label> Store URL </label> 
					<div className="form-inline">
						<span>http:// </span>
						<input type="text" name="store_url" onChange={props.inputChange}
					    className="form-control col-sm-5" />
					    <span>.quickfoodfast.com</span> 
					</div>
				</div> 
			</div> 
			<div className="form-row border p-2 mt-2">
				<div className="col-12">
					<h4>Payment Types Accepted</h4>
				</div>
				<div className="col-6"> 
				      <span className="switch switch-sm">
					    <input type="checkbox" className="switch"
					    onChange={props.inputChange} name="cash_payment" id="switch-sm1" />
					    <label for="switch-sm1">Cash Payment</label>
					  </span> 
				  </div>
				  <div className="col-6"> 
				      <span className="switch switch-sm">
					    <input type="checkbox" onChange={props.inputChange} 
					    className="switch" name="credit_debit" id="switch-sm2" />
					    <label for="switch-sm2">Credit/Debit Card Payment</label>
					  </span> 
				  </div> 
				  <div className="col-12 mt-4"> 
				      <span className="switch switch-sm">
					    <input type="checkbox" onChange={props.inputChange}
					     className="switch" name="tips" id="switch-sm3" />
					    <label for="switch-sm3">Tips</label>
					  </span> 
				  </div>  
			</div>
			{props.showTipsForm ===true ? <div className="border mt-2 p-2">
				<div className="col-12">
					<h5 className="text-left">Tips and Gratuity</h5>
				</div>
				<div className="form-group p-2">
					<div className="form-check">
					  <input className="form-check-input" onChange={props.inputChange}
					   type="checkbox" name="tips_takeout_orders" />
					  <label className="form-check-label">
					    Accept Tips for Takout Orders
					  </label>
					</div>
					<div className="form-check">
					  <input className="form-check-input" name="tips_delivery_orders" type="checkbox"
					  	onChange={props.inputChange} />
					  <label className="form-check-label">
					    Accept Tips for Delivery Orders
					  </label>
					</div>
					<div className="form-check">
					  <input className="form-check-input" name="mandatory_gratuity"
					   type="checkbox" onChange={props.inputChange} />
					  <label className="form-check-label">
					    Mandatory Gratuity
					  </label>
					</div>
					<div className="input-group input-group-sm">
					  <label className="form-check-label">
					    Applied to orders over $
					  </label> 
					  <input className="form-input col-md-1" onChange={props.inputChange} 
					  name="rangeto_orders_over" type="text"/> 
					</div> 
					<div className="form-inline">
					  <label className="form-check-label">
					    In the amount of &nbsp; 
					  </label>
					  <input className="form-input col-md-1" name="in_amount_of" type="text"
					  onChange={props.inputChange} />
					   	<select className="custom-select mr-sm-2" 
					   	name="in_amount_of_type" onChange={props.inputChange} >
					        <option value="">Select</option>
					        <option value="USD">$</option>
					        <option value="PERCENTAGE">%</option> 
				    	</select>								  
					</div> 

				</div> 
			</div>:null}
			<div className="text-center p-4">
				<button type="submit" className="btn btn-primary">
				Save Store Settings</button>
			</div>	
		</form>
	</div>
	);
}

export default StoreForm;