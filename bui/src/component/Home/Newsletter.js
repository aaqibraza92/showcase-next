import { ApiHeader, newsletter } from '@/helpers/apiUrl'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

const Newsletter = () => {
    const [email,setemail]=useState("")
    const onNewsletter=(e)=>{
        e.preventDefault()
        const data={
            currency_code: "USD",
            email
        }
        axios.post(newsletter,data,{
            headers: ApiHeader
        }).then((res)=>{
            console.log("res",res)
            if(res.status===200){
                alert(res.data.message)
            }
        })

    }
  return (
    <section className=''>
    <Container fluid>
        <Row>
            <Col lg={6} className='pt100 pb100'>
                <div className=' h-100 d-flex align-items-center justify-content-center pl30 pr30'>
                    <div>
                        <h2>
                        sign up to be a
Belgium webnet insider 
                        </h2>
                        <p>
                        Become a preferred subscriber and get a special offer on your purchase.
                        </p>
                        <div className='mt30'>
                            <Form onSubmit={onNewsletter}>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div className='mr10'>
                                        <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder='Email' value={email} className='form-control' required/>
                                    </div>
                                    <div>
                                        <button className='btnTheme'>
                                            Join
                                        </button>
                                    </div>
                                </div>
                            </Form>
                           
                        </div>
                    </div>

                </div>

            </Col>
            <Col lg={6}>
                <Image src={require('@/assets/img/home/right_img.jpeg')} className='img-fluid' alt='right_img' />
            </Col>
        </Row>
    </Container>
</section>
  )
}

export default Newsletter