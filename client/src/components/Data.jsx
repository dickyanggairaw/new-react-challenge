import React from 'react'

function Data (props) {
  function findUser (event, id) {
    event.preventDefault()
    props.findUser(id)
  }

    const {user} = props
    const divCard = {
      backgroundColor: 'bisque',
      borderRadius: '10px'
    }
    const divImage = {
      borderRadius: '20px'
    }
    return (
      <div className="col-sm-6 col-lg-3 border-0 shadow">
        <div className="card m-2  img-hover-zoom img-hover-zoom--colorize" onClick={(event) => findUser(event, user.id)} style={divCard}>
          <img src={user.picture} style={divImage} className="p-2" alt=""/>          
          {/* <div className="card-body"> */}
            <h3>{user.firstName}</h3>             
          {/* </div> */}
        </div>
      </div>
    )
  }

export default Data