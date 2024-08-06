import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users?page=2', { method: 'GET' })
      .then((result) => result.json())
      .then((data) => {
        this.setState({ users: data.data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className='alert alert-success'>All Users Data</div>
        <div className='my-3'>
            <a href='/add' className='btn btn-success'>Add Users</a>
        </div>
        <table className='table table-bordered table-hover'> 
          <thead>
            <tr className='table-success'>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            this.state.users?
            this.state.users.map((user,i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                <a href={`/edit/${user.id}`} className="btn btn-warning">Edit</a>  
                &nbsp;
                <a href={`/delete/${user.id}`} className="btn btn-danger">Delete</a>
                </td>
              </tr>
            ))
            :null
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
