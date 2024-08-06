import React, { Component } from 'react'
import axiosObject from './AxiosConfig'

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

   /* componentDidMount() {
      var id = (window.location.pathname.split('/'))[2]
      console.log(id)
      fetch('http://localhost:3200/posts/' + id, { method: 'GET' })
        .then(result => result.json())
        .then(res => {
          console.log(res);
          this.setState({
            id: res.id,
            first_name: res.first_name,
            last_name: res.last_name,
            email: res.email
          })
        })
        .catch(error => {
          console.error('Error fetching user data:', error)
        })
    } */

    componentDidMount() {
        var id = (window.location.pathname.split('/'))[2]
        /*  console.log(id)
         fetch('http://localhost:3200/posts/' + id, { method: 'GET' })
           .then(result => result.json())
           .then(res => {
             console.log(res);
             this.setState({
               id: res.id,
               first_name: res.first_name,
               last_name: res.last_name,
               email: res.email
             })
           })
           .catch(error => {
             console.error('Error fetching user data:', error)
           }) */
             axiosObject.get('posts/'+ id)
             .then(result=>{
               console.log(result)
               this.setState({
                 id:result.data.id,
                 first_name:result.data.first_name,
                 last_name:result.data.last_name,
                 email:result.data.email
               })
             })
       }
    

    submitHandler=(e)=>{
        e.preventDefault();
      /*  console.log(this.state)
        fetch('http://localhost:3200/posts/'+this.state.id,{method:'Delete',
         headers:{
            'content-type':'application/json'
         },
         body:JSON.stringify(this.state)
        }).then(res=>{
            if(res.status==200)
            {
                alert('Record Deleted Successfully')
                window.location='../'
            }
            else{
                alert('Deletion failed')
            }
        }) */
            axiosObject.delete('posts/'+this.state.id)
            .then(result=>{
                if(result.status==200)
                    {
                        alert('Record Deleted Successfully')
                        window.location='../'
                    }
                    else{
                        alert('Deletion Failed failed')
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
