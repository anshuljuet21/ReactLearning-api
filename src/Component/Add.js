import React, { Component } from 'react'

export class Add extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first_name:'', last_name:'',email:''
      }
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state)
    }
    
  render() {
    return (
      <div>
        <div className='alert alert-success'>Add User</div>
        <form className='container' onSubmit={this.submitHandler}>
            <div className='row my-2'>
                <div className='col'>
                    <input type="text" name="first_name" placeholder="Enter First Name" className="form-control" defaultValue={this.state.first_name} onChange={this.changeHandler}/>
                </div>
                <div className='col'>
                <input type="text" name="last_name" placeholder="Enter Last Name" className="form-control" defaultValue={this.state.last_name} onChange={this.changeHandler}/>
                </div>
             </div>
             <div className='row my-3'>
                <div className='row my-3'>
                    <div className='col'>
                        <input type="text" name="email" placeholder='Enter Email' className='form-control' defaultValue={this.state.email} onChange={this.changeHandler}/>
                    </div>

                </div>
                <div className='col'>
                    <input type="Submit" className='btn btn-success'/>
                </div>
             </div>
            </form>
        
      </div>
      
    )
  }
}

export default Add
