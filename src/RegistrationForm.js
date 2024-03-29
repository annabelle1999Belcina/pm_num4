import React,{Component} from 'react';
import BusinessCard from './BusinessCard';

class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            fname : '',
            lname : '',
            adress :'',
            email : '',
            pnumber:'',
            submit : false

        }
    }   
    formHandler= (e)=>{    
        const{fname, lname, address, email, pnumber} = this.state;
        if(fname !== '' && lname !== '' && email !== '' && pnumber !== '' && address !== ''){
           
            this.setState({submit: true});  
        }else{
            alert("All fields must be filled up!");
        }
    }

    render(){
        if(!this.state.submit){
            return(     
                <div class= "container">
                    <center>
                        <div class = "box">
                            <h2> First Name: <input type = "text" onChange= {e => this.setState({fname: e.target.value})}></input></h2>
                            <h2> Last Name: <input type = "text" onChange = {e => this.setState({lname: e.target.value})}></input></h2>
                            <h2> Address: <input type = "text" onChange = {e => this.setState({address : e.target.value})}></input></h2>
                            <h2>Email: <input type = "email" onChange = {e => this.setState({email : e.target.value})}></input></h2>
                            <h2>Phone Number: <input type ="number" onChange = {e => this.setState({pnumber: e.target.value})}></input></h2>
                            <div><button type = "button" onClick = {e => this.formHandler(e)}>Register</button></div>
                        </div>
                    </center>
                </div>
            )
        }else{
            return(
                <BusinessCard fname= {this.state.fname} 
                                lname= {this.state.lname} 
                                address= {this.state.address} 
                                email= {this.state.email}  
                                pnumber= {this.state.pnumber}/> 
            )
        }
    }
}
export default RegisterForm;