import { apiBaseUrl, megaMenu } from '@/helpers/apiUrl'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Navigation = (props) => {
//     const dispatch= useDispatch();
//   const navData= useSelector((s)=>{
//     return s?.nav?.data
//   });


  const [nav,setNav]=useState([]);




  const getMenu = async () => {

    return await axios.get(megaMenu).then((res) => {
        if (res && res?.status === 200) {
          
            setNav(res?.data?.data);
        }

    })
}
  useEffect(()=>{
    getMenu();
  },[])



    return (
        <div>
            <ul className='main_ul noUl d-flex justify-content-center align-items-center'>
                {
                    nav?.map((e,i)=>(
                        <li className='mr10' key={i}>
                            {e.name}
                        </li>
                    ))
                }
            </ul>
           
        </div>
    )
}

export default Navigation

