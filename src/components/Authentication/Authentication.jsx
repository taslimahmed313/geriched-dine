import React from 'react';
import "./Authentication.css";

const Authentication = () => {
    return (
        <div className='auth__body app__bg'>
            <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form>
					<label className='auth__label label_margin' htmlFor="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button className='auth_btn'>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label className='auth__label' htmlFor="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button className='auth_btn'>Login</button>
				</form>
			</div>
	</div>
        </div>
    );
};

export default Authentication;