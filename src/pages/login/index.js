'use client';
import { ApiHeader, loginApi } from '@/helpers/apiUrl';
import { AfterLogin } from '@/store/reducers/LoginReducer';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

const Login = ({users}) => {
    const selector= useSelector((state)=>{
        return state?.loginReducer?.userData
    })

    const [loginData,setloginData]=useState({});

    useEffect(()=>{
        setloginData(selector);
    },[selector])

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

