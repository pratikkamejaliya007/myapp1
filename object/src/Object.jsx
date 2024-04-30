import React from 'react'

function Object(props) {
  return (
    
    <div className='p1'>
        <center>
      <table border={3}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Position</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            {
                props.array.map((p)=>(
                    <tr>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.position}</td>
                        <td>{p.salary}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
      </center>
    </div>
  )
}

export default Object