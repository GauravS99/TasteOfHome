import React from 'react';
import {Toolbar, Footer} from './Shared';

export class About extends React.Component{
  render() {
	return (
	  <div className="verticalFlex fullHeight">
		<Toolbar/>
		<AboutContent/>
		<Footer/>
	  </div>
	);
  }
}

class AboutContent extends React.Component{
	render(){
		let source = require("../../images/dosa.jpg");

		return (
			<div className="content">
				<img 
				src={source}
				alt="dosa"
				/>
				<div className="aboutDisplay">
					<div>
						<div className= "displayText regularText">
						   About
						</div>
						<p className="regularText paragraph paragraphText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
						 ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
						 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
						 sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						  anim id est laborum.</p>
					</div>
				</div>
			</div>   			
		);
	}
}

/**
	<div>
		<div className= "displayText regularText">
		   Meet The Chef
		</div>
		<p className="regularText paragraph paragraphText" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
		sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
		 ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
		 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
		 sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
		  anim id est laborum.</p>
	</div>

	<div>
						<div className= "displayText regularText">
						   Contact
						</div>
						<p className="regularText paragraph paragraphText">chef@tasteofhome.com</p>
					</div>
*/