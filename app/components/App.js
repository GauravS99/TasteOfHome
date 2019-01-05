import React from 'react';
import {Toolbar, Footer} from './Shared';

export class App extends React.Component{
   render(){
     return (
         <div className = "verticalFlex fullHeight">
                 <Toolbar/>
                 <Content/>
                 <Footer/>
         </div>
     );
   }
}


class Content extends React.Component{
	
	render(){
	   let source = require("../../images/foodImage.jpg");

       return (
         <div className = "content">
            <div className="display">
            	<div className= "displayText regularText">
            	   Homemade Indian cuisine delivered at your door
            	</div>
            	<div className= "button right">
           	 	   <a className="menuItem brownText" href="#menu">get started</a>
            	</div>
            </div>
            <img 
            src={source}
            alt="indian food"
            />
         </div>
       	);
	}
}
