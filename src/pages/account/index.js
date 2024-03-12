
import { getUserDetail } from '@/helpers/apiUrl'
import { logOut,postOptions } from '@/helpers/apiUrl/helpers'
import axios from 'axios'
import React from 'react'
import { Container } from 'react-bootstrap'

const Account = ({resUserData}) => {
  console.log("resUserData",resUserData)
  return (
    <section>
        <Container>
        <h2>
            My Account
        </h2>

        <h4 className='mb30'>
        ACCOUNT INFORMATION
        </h4>


      <ul>
        <li>
          <strong>Name: </strong> {resUserData?.first_name + " " + resUserData?.last_name}
        </li>
        <li>
          <strong>Email: </strong> {resUserData?.email}
        </li>
        <li>
          <strong>phone: </strong> {resUserData?.phone}
        </li>
      </ul>

      <button onClick={()=>logOut()} className='btn btn-primary logOut'>Logout</button>


        
        </Container>
    </section>
  )
}

export default Account

export async function getServerSideProps(props, context) {
  const userData= props?.req?.cookies?.userData;
  const userDataParsing=userData ? JSON.parse(userData) : []

    try{
      const userPayload={
        currency_code: "USD",
        token: userDataParsing?.token,
        user_id: userDataParsing?.user_id
      }
      const responses = await Promise.all([
        axios.post(getUserDetail, userPayload, postOptions),
      ]);
      const resUserData = responses[0].data?.data?.address;

      return {
        props: {
          resUserData
        },
      };
    }catch(error){
        console.log(error)
        return {
          props: {
            error: error.message || 'An error occurred'
          }
        };
    }
}
