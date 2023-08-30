import React, { useState } from 'react';
//  import { useNavigate } from 'react-router-dom';
 import axios from 'axios';
// import { usServices } from '../Zservices/us.services';
//  import { accountServices } from '../../Zservices/account.services'; 



const Vite = () => {
  const [test, setTest] = useState({
    login: "",
    password: ""
  })

  const onChange = (e) => {
    setTest({ ...test, [e.target.name]: e.target.value })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(test);
    let data = JSON.stringify(test);
    console.log(data);

    axios.post("http://192.168.1.122:8081/gestiondestockpharmacie/v1.O/auth/authenticate", data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      console.log("CA FONCTIONNE")
      .catch(error => {
        console.log(error)
        alert('vous ne vous êtes pas connectés')
      })
  }


  return (
    <div className="dropdown">
      <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
        Dropdown form
      </button>

      <form className="dropdown-menu p-4" onSubmit={handleSubmit}>

        <div className="mb-3">
          <label value="login" for="exampleDropdownFormlogin2" className="form-label">login address</label>
          <input type="text" name="login" value={test.login} onChange={onChange} className="form-control" />
        </div>

        <div className="mb-3">
          <label value="password" for="exampleDropdownFormPassword2" className="form-label">Password</label>
          <input type="text" name="password" value={test.password} onChange={onChange} className="form-control" />
          {/* <input name="password" value={test.password} type="text" onChange={onChange} placeholder="Password" /> */}
        </div>

          {/* <div className="form-check">
            <input type="checkbox" className="form-check-input" value={test.checkbox} id="dropdownCheck2" />
            <label className="form-check-label" for="dropdownCheck2">
              Remember me
            </label>
             id="exampleDropdownFormPassword2"
          </div> */}

        <button type="submit" className="btn btn-primary">Sign in</button>

      </form>
    </div>
  )
}

export default Vite;