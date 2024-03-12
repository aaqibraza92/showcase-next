import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../assets/img/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Navigation from './Navigation';
import { usePathname } from 'next/navigation';
import axios from 'axios';
// import { apiBaseUrl, isObjectNotBlank,isLogin, megaMenu } from '@/helpers/apiUrl';
import Dropdown from 'react-bootstrap/Dropdown';
import { getCookie } from 'cookies-next';
import { logOut } from '@/helpers/apiUrl/helpers';

const Header = () => {
  // const [userData, setuserData] = useState([])
  const [login, setLogin] = useState(false);
  const path = usePathname();
  const router = useRouter();
const isLogin = getCookie("isLogin") && JSON.parse(getCookie("isLogin"));
const userData = getCookie("userData") ? JSON.parse(getCookie("userData")) : [];
  useEffect(() => {
    setLogin(true)
    // setuserData(isObjectNotBlank(userData) && userData)
    // document.body.className = window.location.pathname === "/" ? "body-Home" : "body-" + window.location.pathname.replaceAll("/", "");
    // return () => { document.body.className = ''; }
  }, [])

  return (
    <>
     {login &&
       <header className={`mainHeader pt20 pb20 bgWhite`}>
    <Container fluid>
      <Row>
        <Col lg={3}>
          <Link href="/"><Image src={logo} className='img-fluid' alt="logo" /></Link>
        </Col>
        <Col lg={6}>
          <div className='text-center'>
            <Navigation />
          </div>
        </Col>

        <Col lg={3}>
          <ul className='d-flex justify-content-end noUl'>
            <li className='mr5'>
              <Link href="">
                <Image src={require("@/assets/img/header/search.svg")} />
              </Link>
            </li>
            <li className='mr5 position-relative'>
              {
                isLogin ? 
                <><span className='trigger'>{userData?.first_name}</span> 
           <button onClick={()=>logOut()} className='noBtn logOut'>Logout</button>
                </>:  <Link href="/login">
                  <Image src={require("@/assets/img/header/user.svg")} />
                </Link>
              }
            </li>
            <li className='mr5'>
              <Link href="">
                <Image src={require("@/assets/img/header/heart.svg")} />
              </Link>
            </li>
            <li className='mr5'>
              <Link href="">
                <Image src={require("@/assets/img/header/cart.svg")} />
              </Link>
            </li>
          </ul>

        </Col>
      </Row>
    </Container>
  </header>
  }
    </>
   
   
  )
}

export default Header