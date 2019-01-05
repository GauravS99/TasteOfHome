import React from 'react';
import {Toolbar, Footer} from './Shared';

export class Menu extends React.Component{
  render() {
  	let source = require("../../images/menu.png");
    return (
      <div className="verticalFlex fullHeight">
        <Toolbar/>
        <MenuContent/>
        <Footer/>
      </div>
    );
  }
	
}

class MenuContent extends React.Component{
	render(){
		let source = require("../../images/menu.png");
		return (
			<div className="content">
				<img
				src={source}
				alt="menu"
				/>
			</div>
		);
	}
}