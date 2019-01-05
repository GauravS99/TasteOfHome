import React from 'react';
import {Link} from 'react-router-dom';


export class Toolbar extends React.Component{
   render(){
     return (
       <ul className="toolbar">
         <li><Link className="title menuItem regularText left" to="/">Taste of Home</Link></li>
  		 <li><Link className= "navItem menuItem regularText right paragraph" to="/checkout">Checkout</Link></li>
  		 <li><Link className= "navItem menuItem regularText right paragraph" to="/menu">Menu</Link></li>
	  </ul>
     );
   }
}

export class Footer extends React.Component{
	render(){
		return (
          <div className="footer">
            <div className="footerTitle regularText">Quick Links</div>
          	<ul className= "footerList"> 
          	  <li><Link className="footerItem regularText paragraph" to="/about/#about">About</Link></li>
          	  <li><Link className="footerItem regularText paragraph" to="/about/#chef">Meet the Chef</Link></li>
          	  <li><Link className="footerItem regularText paragraph" to="/about/#contact">Contact</Link></li>
          	</ul>
          </div>
		);
	}
}
