import { apiBaseUrl, megaMenu } from '@/helpers/apiUrl'
import axios from 'axios'

const Navigation = (props) => {
    console.log(props)
//     const dispatch= useDispatch();
//   const navData= useSelector((s)=>{
//     return s?.nav?.data
//   });

//   const [nav,setNav]=useState([]);

//   useEffect(()=>{
//     setNav(navData);
//   },[navData])

    // const [menu, setMenu] = useState([]);
    // const getMenu = async () => {
    //     await axios.get(apiBaseUrl + megaMenu).then((res) => {
    //         if (res && res?.status === 200) {
    //             setMenu(res?.data?.data);
    //         }

    //     })
    // }


    return (
        <div>
            <ul className='main_ul noUl d-flex justify-content-center align-items-center'>
                {/* {
                    nav?.map((e,i)=>(
                        <li className='mr10' key={i}>
                            {e.name}
                        </li>
                    ))
                } */}
            </ul>
           
        </div>
    )
}

export default Navigation

export async function getServerSideProps() {
    // const res = await fetch('https://api.github.com/repos/vercel/next.js')
    // const repo = await res.json()
    // return { props: { repo } }
  
  const {data}=  await axios.get(apiBaseUrl + megaMenu);
  // console.log("data11",data?.data)
  return {
    props: data || {}
  }
  // MegaMenu()
  }
