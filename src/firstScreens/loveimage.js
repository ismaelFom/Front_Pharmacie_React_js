import React, { useState } from 'react';
import imagesHome from './imagesHome.png';
// import { useNavigate } from 'react-router-dom';
import { usServices } from '../Zservices/us.services';
import { accountServices } from '../Zservices/account.services';



const Loveimage = () => {

    // let navigate = useNavigate()
    const [test, setTest] = useState({
        email: "",
        password: ""
    })

    const onChange = (e) => {
        setTest({ ...test, [e.target.name]: e.target.value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        usServices.login(test).then(res => {
            console.log(res)
            accountServices.saveToken(res.data.token)
            alert('vous êtes enregisté')
            // navigate('/creerA', { replace: true })
        })
            .catch(err => {
                console.log(err)
                alert('vous ne vous êtes pas fait enregisté')
            })
    }


    return 
        < img 
        src = {imagesHome} 
        className="img-fluid rounded-start" 
        alt = "ersssdf" 
        onClick = {()=> {
    return (
        <div className="dropdown">
            <form className="dropdown-menu p-4" onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label value="email" for="exampleDropdownFormEmail2" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
                    </div>

                    <div className="mb-3">
                        <label value="password" for="exampleDropdownFormPassword2" className="form-label">Password</label>
                        <input name="password" type="text" className="form-control" value={test.password} onChange={onChange} placeholder="Password" />
                        {/* <input name="password" value={test.password} type="text" onChange={onChange} placeholder="Password" /> */}
                    </div>

                    <button type="submit" className="btn btn-primary">Sign in</button>
                    </form >
                    </div>
                    );
                 }}
                 />
                

    
}

export default Loveimage;