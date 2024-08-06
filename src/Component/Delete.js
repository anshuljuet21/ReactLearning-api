import React, { Component } from 'react'

export class Delete extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id:0,first_name:'', last_name:'',email:''
      }
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    componentDidMount() {
      var id = (window.location.pathname.split('/'))[2]
      console.log(id)
      fetch('https://reqres.in/api/users/' + id, { method: 'GET' })
        .then(result => result.json())
        .then(res => {
          console.log(res.data);
          this.setState({
            id: res.data.id,
            first_name: res.data.first_name,
            last_name: res.data.last_name,
            email: res.data.email
          })
        })
        .catch(error => {
          console.error('Error fetching user data:', error)
        })
    }
    

    submitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state)
        fetch('https://reqres.in/api/users/'+this.state.id,{method:'Delete',
         headers:{
            'content-type':'application/json'
         },
         body:JSON.stringify(this.state)
        }).then(res=>{
            if(res.status==204)
            {
                alert('Record Deleted Successfully')
                window.location='./'
            }
            else{
                alert('Deletion failed')
            }
        })
    }
    
  render() {
    return (
      <div>
        <div className='alert alert-success'>Delete User</div>
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

export default Delete
