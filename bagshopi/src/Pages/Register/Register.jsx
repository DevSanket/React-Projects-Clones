import React from 'react';
import { auth, createUserProfileDocument, signInWithGoogle } from '../../Firebase/firebase.util';
import './Register.scss';

class Register extends React.Component {
    state = { 
        email:"",
        password:"",
        displayName:"",
        signEmail:'',
        signPass : ''
     }
    
    componentDidMount(){
        document.querySelector('.img__btn').addEventListener('click', function() {
            document.querySelector('.cont').classList.toggle('s--signup');
                    })
    }

    handleChange = e => {
        const { name , value } = e.target;
        this.setState({[name]:value});
    }

    SignInSubmit = async (e) => {
        e.preventDefault();
        const { email,password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.state({email:'',password:''});
        }catch(error){
            console.log(error);
        }
    }

    SignUpSubmit =  async (e) => {
        e.preventDefault();
        const { displayName , email , password} = this.state;
        if(password.length < 6) {
            alert("Password Must be 6 Characters");
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});

            this.setState({
                displayName:'',
                email:'',
                password:''
            });
        }catch(error){
            alert(error);
        }
    }

    render() {
        const {displayName , email , password} = this.state; 
        return ( 
            <div className="cont">
            <form onSubmit={this.SignInSubmit} className="form sign-in">
                <h2>Welcome back,</h2>
                <label>
                    <span>Email</span>
                    <input type="email" name="email" value={email} onChange={this.handleChange} required/>
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" name="password" value={password} onChange={this.handleChange} required/>
                </label>
                <button type="submit"  className="submit">Sign In</button>
                <button type="button" onClick={signInWithGoogle} className="fb-btn">Connect with <span>Google</span></button>
            </form>
            <div className="sub-cont">
                <div className="img">
                    <div className="img__text m--up">
                        <h2>New here?</h2>
                        <p>Sign up and discover great amount of new opportunities!</p>
                    </div>
                    <div className="img__text m--in">
                        <h2>One of us?</h2>
                        <p>If you already has an account, just sign in. We've missed you!</p>
                    </div>
                    <div className="img__btn">
                        <span className="m--up">Sign Up</span>
                        <span className="m--in">Sign In</span>
                    </div>
                </div>
                <form onSubmit={this.SignUpSubmit} className="form sign-up">
                    <h2>Time to feel like home,</h2>
                    <label>
                        <span>Display Name</span>
                        <input type="text" name="displayName" value={displayName} onChange={this.handleChange} required/>
                    </label>
                    <label>
                        <span>Email</span>
                        <input type="email" name="email" value={email} onChange={this.handleChange} required/>
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" name="password" value={password} onChange={this.handleChange} required/>
                    </label>
                    <button type="submit" className="submit">Sign Up</button>
                    <button type="button" onClick={signInWithGoogle} className="fb-btn">Join with <span>Google</span></button>
                </form>
            </div>
                    
       
        </div>
    
        
         );
    }
}
 
export default Register;

// const Register = () => {

    


// }
 
// export default Register;