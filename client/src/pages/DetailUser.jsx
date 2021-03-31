import React from 'react'
import {useParams} from 'react-router-dom'
import useFetchOne from '../helpers/hooks/useFetchOne'

function DetailUser () {
    let {id} = useParams()
    const {data, loading, error} = useFetchOne('https://dummyapi.io/data/api/user/' + id)
    if(error) {
      return <h1>{error.message}</h1>
    }
    const imgStyle = {
      height: '300px',
      borderRadius: '20px'
    }
  return (
    <div>
      <h3>Ini Halaman Detail User {id}</h3>
      {
        loading ? <div className="container loader"></div> :
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img src={data.picture} style={imgStyle} alt=""/>
            </div>
            <div className="col-8">
              <h4>{data.title}. {data.firstName} {data.lastName}</h4>
              <p>{data.email}</p>
              <p>{data.gender}</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default DetailUser