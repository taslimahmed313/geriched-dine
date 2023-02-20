import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import "./Authentication.css";

const Authentication = () => {

	const { register, handleSubmit, watch, formState: { errors } } = useForm();

	const {createUser, updateUser, signIn} = useContext(AuthContext);


	const  handleSignUp = data =>{
		console.log(data)
		createUser(data.signEmail, data.signPass)
		.then(result => {
			const user = result.user;
			const profile = {displayName: data.name};
            updateUser(profile)
			.then(()=>{})
			.catch(e => console.log(e))
			console.log(user);
		})
		.catch(e => console.log(e))
	}

	const handleLogin = data =>{
		signIn(data.logEmail, data.logPass)
		.then(result => {
			const user = result.user;
			console.log(user)
		})
		.catch(e => console.log(e))
	}

	 

    return (
        <div className='auth__body app__bg'>
            <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form onSubmit={handleSubmit(handleSignUp)}>
					<label className='auth__label label_margin' htmlFor="chk" aria-hidden="true">
						Sign up</label>
					<input {...register("name")}  type="text"  placeholder="User name" required/>
					<input {...register("signEmail")} type="email"  placeholder="Email" required/>
					<input {...register("signPass")} type="password"  placeholder="Password" required/>
					<input type='submit' className='auth_btn' value={"Sign up"}></input>
				</form>
			</div>

			<div className="login">
				<form onSubmit={handleSubmit(handleLogin)}>
					<label  className='auth__label' htmlFor="chk" aria-hidden="true">Login</label>
					<input {...register("logEmail")} type="email" placeholder="Email" required=""/>
					<input {...register("logPass")} type="password" placeholder="Password" required=""/>
					<input type='submit' className='auth_btn' value={"Login"}></input>
				</form>
			</div>
	</div>
        </div>
    );
};

export default Authentication;