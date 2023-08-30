import React, { useState } from 'react';
import { accountServices } from '../Zservices/account.services';
import '../style/StyleLogin.css'
import { useNavigate } from 'react-router-dom';
// import AdminRoutes from '../maison/admin/AdminRoutes';
// import { usServices } from '../Zservices/us.services';



const Login = () => {
  let navigate = useNavigate();


  const [test, setTest] = useState({
    login: "",
    password: ""
  })

  const onChange = (e) => {
    setTest({ ...test, [e.target.name]: e.target.value })

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let data = JSON.stringify(test);
    console.log(data);

    accountServices.login(data)
      .then(response => {
        console.log(response)
        accountServices.saveToken(response.data.accessToken)
        alert('vous êtes connectés')
        navigate("/element/admin/addLots", { replace: true })
      })
      .catch(error => {
        console.log(error)
        alert('vous ne vous êtes pas connectés')
      })
  }


  return (
    <div className="dropdown">
      <button type="button" className="dropdowns dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
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

        <button type="submit" onSubmit={handleSubmit} className="btn btn-primary">Sign in1</button>

      </form>
    </div>
  )
}

export default Login;