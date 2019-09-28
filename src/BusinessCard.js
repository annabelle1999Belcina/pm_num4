import React,{Component} from 'react';

class BusinessCard extends Component {
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <center>
            <div>
                <h1>business card</h1>
                <h2>First Name: {this.props.fname}</h2>
                <h2>Last Name: {this.props.lname}</h2>
                <h2>AdDress: {this.props.address}</h2>
                <h2>Email: {this.props.email}</h2>
                <h2>Phone Number: {this.props.pnumber}</h2>
            </div>
            </center>
        )
    }
}
export default BusinessCard;