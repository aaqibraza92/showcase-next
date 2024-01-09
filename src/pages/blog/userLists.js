import getUsers from '@/component/users'
import React, { useEffect, useState } from 'react'

const UserLists = () => {
    const [data,setData]=useState([])
    useEffect(() => {
        getDat()
    }, [])


    const getDat = async () => {
        const getUserData = getUsers();
        const user = await getUserData

        setData(user)

        
    }
    return (
        <div>
            <ul className='userdata'>
            {
                data?.map((e,i)=>(
                    <li key={i}>
                          {
                            e.name
                          }
                    </li>  
                ))
            }
            </ul>
    

        </div>
      
    )
}

export default UserLists