import React,{Component} from 'react';

class BusinessCard extends Component {
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <center>
                <div class = "box2">
                    <div class = "card">
                        <h1 class ="bc">business card</h1>
                        <h2> {this.props.fname} {this.props.lname}</h2>
                        <h2> {this.props.address}</h2>
                        <h2>{this.props.email}</h2>
                        <h2> {this.props.pnumber}</h2>
                    </div>
                    <div class = "logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo_IkLuvfuZSocZz_rIQSdPWjt5mVVYsamk9kVkXB9t8NRSUbM-A"></img>
                    </div>
                </div>
            </center>
        )
    }
}
export default BusinessCard;