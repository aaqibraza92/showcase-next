import { apiBaseUrl, megaMenu } from '@/helpers/apiUrl'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Navigation = (props) => {
    console.log(props)
    const dispatch= useDispatch();
  const navData= useSelector((s)=>{
    return s?.nav?.data
  });

  const [nav,setNav]=useState([]);

  useEffect(()=>{
    setNav(navData);
  },[navData])

    const getMenu = async () => {
        await axios.get(apiBaseUrl + megaMenu).then((res) => {
            if (res && res?.status === 200) {
                setMenu(res?.data?.data);
            }

        })
    }


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

