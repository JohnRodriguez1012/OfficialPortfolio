import React, {Component} from "react";
import './Contact.css';
import axios from "axios";


class Contact extends Component {

    constructor(){
        super()
        this.state={
            showMe:false,
            name: '',
            email: '',
            message:'', 
            topic: ''

        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange= e =>{
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {

        e.preventDefault()
        const { name, email, message, topic } = this.state
        const form = await axios.post('/api/form',{
            name,
            email,
            message,
            topic
        })
    }


    showSet(){
        this.setState({
            showMe:!this.state.showMe
        })
    }
    render(){
        return(

<div className = "container-fluid">

        <div id="contact">
            <div className="margin-padding">
                <div id="contactTitle">
                            <button onClick={()=>this.showSet()}>
                                <h4>Click to reach out!</h4>
                            </button>
                        </div>
                        <br/>
                {this.state.showMe?
                    <div className ="row">
                        <div className= "col">
                        <h4>Connect on LinkedIn!</h4>
                            <br/>
                                <a href="https://www.linkedin.com/in/john-rodriguez/" target="blank">
                                    <img id="connectIcon" src="http://www.theredbrickroad.com/wp-content/uploads/2017/05/linkedin-logo-copy.png" alt="click here for my LinkedIn Profile!"/>
                                </a>
                            <br/>
                            <br/>
                        </div>
                        <br/>
                        
                        <div className= "col">
                        <h4>Connect on GitHub!</h4>
                        <br/>
                            <a href="https://github.com/JohnRodriguez1012" target="blank">
                                <img id="connectIcon" src="https://image.freepik.com/free-icon/github-logo-in-a-rounded-square_318-40761.jpg" alt="click here for my GitHub Profile!"/>
                            </a>
                        </div>
                    </div>
                :null}
            </div>
      
    </div>
</div>
 )}}

export default Contact;