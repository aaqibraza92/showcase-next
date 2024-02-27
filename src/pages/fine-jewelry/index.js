import { listView, square } from '@/assets/svg'
import { ApiHeader, productListFilter, productlist } from '@/helpers/apiUrl'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductGridComp from './ProductGridComp'
import ProductListGrid from './ProductListGrid'
import { setCookie,getCookie  } from 'cookies-next';
import { useRouter } from 'next/router';
const FineJewelry = ({ resProList, proFilter }) => {

  const router= useRouter();



  const [addedfilter, setAddedfilter] = useState([]);

  useEffect(() => {
    firstLoadFilter()
  }, [proFilter])
  // console.log("proFilter", addedfilter)
  const firstLoadFilter = async () => {
    const temp = [];
    await proFilter?.data?.normal_filters.length > 0 && proFilter?.data?.normal_filters?.forEach((e, i) => {
      temp.push({
        title: e.title,
        filter: [],
        name: []
      })
    })
    setAddedfilter(temp)
  }



  const [view, setView] = useState(false);



  // console.log("proFilter", proFilter?.data?.normal_filters)

  const handleCheckbox = (event, title, name, value) => {
    // console.log("aa",event,title,value,index);
    const tempGet = [...addedfilter];
    if (event.target.checked) {
      tempGet.forEach((e, i) => {
        if (title === e.title) {
          e.filter.push(value)
            e.name.push(name)
        }
      })
      setAddedfilter(tempGet);
      setCookie('filterData', JSON.stringify(tempGet));  
      router.replace(router.asPath)
    } else {
      tempGet.forEach((e, i) => {
        if (title === e.title) {
         const index= e.filter.indexOf(value);
         e.filter.splice(index,1)
         e.name.splice(index,1)
        }
      })

      setAddedfilter(tempGet);
      setCookie('filterData', JSON.stringify(tempGet));  
      router.replace(router.asPath)
      
    } 


  }



  return (
    <section>
      {/* {
        console.log("addedfilter",addedfilter)
      } */}
      <Container>
        <div className='wrapperData'>
          <h3>
            {resProList?.data?.meta_title}
          </h3>
          <p>
            {resProList?.data?.meta_desp}
          </p>
        </div>

        <Row>
          <Col lg={3}>
            <div className='mb5'>

              {
                proFilter?.data?.normal_filters.map((e, i) => (
                  <div key={i} className='mb10'>
                    <h6 className='fs22 fw600 mb3'> {e.title}   </h6>
                    {
                      e.data.map((event, index) => (
                        <label htmlFor={e.title.replaceAll(" ", "-") + event?.id} key={index} className='d-flex align-items-center pointer' >
                          <input id={e.title.replaceAll(" ", "-") + event?.id} type="checkbox" value={event.value} onChange={(eve) => handleCheckbox(eve, e.title, event.name, event?.value)} /> <span className='ml5 form-control'>{event.name} </span>
                        </label>
                      ))
                    }
                  </div>



                ))
              }

            </div>
          </Col>
          <Col lg={9}>
            <Row>
              <Col lg={6}>
                <select name="" id="" className='form-control'>
                  <option value="">Sort by</option>
                  <option value="featured">Featured</option>
                </select>
              </Col>
              <Col lg={6}>
                <div className='d-flex justify-content-end'>
                  <div className='prodLeng mr7 pr7'>
                    {resProList?.data?.count} Products found |
                  </div>
                  <div>
                    View <button className='noBtn' onClick={() => setView(false)}>{square}</button> |  <button className='noBtn' onClick={() => setView(true)}>{listView}</button>
                  </div>
                </div>
              </Col>
            </Row>

            <section className='mt-3'>
              <Row className='gy-3'>
                {
                  resProList?.data?.result?.length > 0 && resProList?.data?.result.map((e, i) => (
                    view ? <Col key={i} lg={12} sm={12}>
                      <ProductListGrid data={e} />
                    </Col> :
                      <Col key={i} lg={4} sm={4}>
                        <ProductGridComp data={e} />
                      </Col>

                  ))
                }
              </Row>
            </section>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FineJewelry

export async function getServerSideProps(props,context) {
  // let getDa= props.req.cookies;
  // getDa && JSON.parse("getDa",getDa)
  const filterDataCookie= props?.req?.cookies?.filterData
  const filterDataIntoParse= filterDataCookie ? JSON.parse(filterDataCookie) : [];
  console.log("readCookie1",filterDataIntoParse)
  try {
    const data = {
      currency_code: "USD",
      sort_by: "featured",
      setwithmin: "0.51",
      setwithmax: "0.60",
      category: "fine-jewelry",
      search_text: "",
      filterdata: filterDataIntoParse,
      limit: 18,
      offset: 0,
      user_id: "",
      session_id: "",
    };
    const filterPayload = {
      category: "fine-jewelry",
      currency_code: "USD",
      search_text: ""
    };
    const options = {
      method: "POST",
      headers: {
        // if file upload "Content-Type": "multipart/form-data",
        Accept: "application/json"
      },
    };

    const responses = await Promise.all([
      axios.post(productlist, data, options),
      axios.post(productListFilter, filterPayload, options)
    ]);

    const resProList = responses[0].data;
    const proFilter = responses[1].data;

    return {
      props: {
        resProList,
        proFilter
      },
    };
  } catch (error) {
    console.error(error);

    // Pass only serializable error information (like a message)
    return {
      props: {
        error: error.message || 'An error occurred'
      }
    };
  }
}