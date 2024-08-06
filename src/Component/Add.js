import React, { Component } from 'react'

export class Add extends Component {
  render() {
    return (
      <div>
        <div className='alert alert-success'>Add User</div>
        <form className='container'>
            <div className='row my-2'>
                <div className='col'>
                    <input type="text" name="first_name" placeholder="Enter First Name" className="form-control"/>
                </div>
                <div classname='col'>
                <input type="text" name="Last_name" placeholder="Enter Last Name" className="form-control"/>
                </div>
             </div>
             <div className='row my-3'>
                <div className='row my-3'>
                    <div className='col'>
                        <input type="text" name="email" placeholder='Enter Email' className='form-control'/>
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
