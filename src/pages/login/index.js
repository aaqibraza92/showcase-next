'use client';
import { ApiHeader, loginApi } from '@/helpers/apiUrl';
import { Navigation } from '@/store/reducers/HeaderReducer';
import { AfterLogin } from '@/store/reducers/LoginReducer';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

const Login = ({users}) => {
    const selector= useSelector((state)=>{
        return state?.loginReducer?.userData
    })

    const [loginData,setloginData]=useState({});
    const [loader,setLoader]=useState(false);

    useEffect(()=>{
        setloginData(selector);
    },[selector])

    const dispatch= useDispatch()
    dispatch(Navigation([{
        day: "val"
    }]))
    const [user,setUser]= useState("");
    const [pw,setpw]= useState("");
    const onLogin=(e)=>{
        e.preventDefault()

        let data={
            email: user,
            password: pw,
            session_id: ""
        }
        setLoader(true)
        axios.post(loginApi,data,{
            headers: ApiHeader
        }).then((res)=>{
            if(res.status==200){
                dispatch(AfterLogin(res?.data?.data))
                setCookie('userData', JSON.stringify(res?.data?.data));
                setLoader(false)
            }
         
        })
    }
  return (
    <>
    
    <section>
        <Container>
            <Row className='justify-content-center'>
                <Col md={6}>
                    <div className='bgWhite p-5 text-center shadow'>
                        <h3>
                            Login
                        </h3>
                        <Form onSubmit={onLogin}>
                        <div className='mt15'>
                            <div className='form-group mb15'>
                                <input type="email" className='form-control' value={user} placeholder='Email' onChange={(e)=>setUser(e.target.value)} required/>
                            </div>
                            <div className='form-group mb15'>
                                <input type="password" className='form-control' value={pw} placeholder='Password' onChange={(e)=>setpw(e.target.value)} required/>
                            </div>

                            <div>
                                <button className='btnTheme'>
                                    {loader ? "Logging in..." : "Login"}
                                </button>
                            </div>
                            <div className='mb15 mt15'>
                                Forgot Password?
                            </div>
                            <div>
                            Don't have an account ? <Link href="/register">Sign Up</Link>
                            </div>
                           
                        </div>
                        </Form>
                 
                    </div>

                    <div>
                        <div>
                            <div>
                                First Name: 
                            </div>
                            <div>
                            {
                        loginData?.first_name
                    }
                            </div>
                        </div>
                        <div>
                            <div>
                                Last Name: 
                            </div>
                            <div>
                            {
                        loginData?.last_name
                    }
                            </div>
                        </div>
                    </div>
              
                  
                    
                </Col>
            </Row>
        
        </Container>

    </section>

 </>
  )
}

export default Login


// export async function getServerSideProps() {
//     const selector= useSelector((state)=>(state?.loginReducer?.userData))
//     const res = await selector
//     const repo = await res.json()

//     return { props: {users: repo} }
// }

