import { ApiHeader, loginApi } from '@/helpers/apiUrl';
import { AfterLogin } from '@/store/reducers/LoginReducer';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch= useDispatch()
    const [user,setUser]= useState("");
    const [pw,setpw]= useState("");
    const onLogin=(e)=>{
        e.preventDefault()

        let data={
            email: user,
            password: pw,
            session_id: ""
        }
        axios.post(loginApi,data,{
            headers: ApiHeader
        }).then((res)=>{
            if(res.status==200){
                console.log("res",res.data)
                dispatch(AfterLogin(res?.data?.data))
            }
         
        })
    }
  return (
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
                                    Login
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
                </Col>
            </Row>
        </Container>
    </section>
 
  )
}

export default Login