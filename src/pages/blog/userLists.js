import getUsers from '@/component/users'
import React, { useEffect, useState } from 'react'

const UserLists = (props) => {
    console.log("props",props?.data);
    const [data,setData]=useState(props?.data)
    useEffect(() => {
        getDat()
    }, [])


    const getDat = async () => {
        // const getUserData = getUsers();
        // const user = await getUserData

        setData(props?.data)

        
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
                       <button>
                        {i}
                       </button>
                    </li>  
                ))
            }
            </ul>
    

        </div>
      
    )
}

export default UserLists


