import React from 'react'
import { LoginBg } from '../../assets'
import { Input, Button, Gap, Link } from '../../components'


const Login = () => {
    return (
        <div className="main-page">
        <div className="left">
            <img src={LoginBg} className="bg-image" alt="img"/>
        </div>
        <div className="right"> 
            <h2 className="title">Login</h2>

            <Input label="Email" placeholder="Email"/>
            <Gap height={10}/>
            <Input label = "Password" placeholder="Password"/>
            <Gap height={50}/>
            <Button title="Login"/>

            <Gap height={25} />
           <Link title="Belum punya akun, silahkan daftar"/>
        </div>
     </div>
    )
}

export default Login
