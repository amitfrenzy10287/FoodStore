import React from 'react';

const StoreView =(props)=>{
	const store_url =props.label=='store_url'?`http://${props.value}.quickfoodfast.com`:props.value; 
	return(
		<li className="list-group-item d-flex justify-content-between align-items-center">
		    {props.label.toUpperCase()}
		    <span className="badge badge-primary badge-pill">{props.label ==='store_url'?store_url:props.value}</span>
		</li>
	);
}

export default StoreView;