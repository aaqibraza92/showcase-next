import { listView, square } from '@/assets/svg'
import { ApiHeader, productlist } from '@/helpers/apiUrl'
import axios from 'axios'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductGridComp from './ProductGridComp'
import ProductListGrid from './ProductListGrid'

const FineJewelry = ({ data }) => {
  // console.log("data", data)
  const [view, setView] = useState(false);

  return (
    <section>
      <Container>
        <div className='wrapperData'>
          <h3>
            {data?.data?.meta_title}
          </h3>
          <p>
            {data?.data?.meta_desp}
          </p>
        </div>

        <Row>
          <Col lg={3}>

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
                    {data?.data?.count} Products found |
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
                  data?.data?.result?.length > 0 && data?.data?.result.map((e, i) => (
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

export async function getServerSideProps() {
  try {
    const data = {
      currency_code: "USD",
      sort_by: "featured",
      setwithmin: "0.51",
      setwithmax: "0.60",
      category: "fine-jewelry",
      search_text: "",
      filterdata: [],
      limit: 18,
      offset: 0,
      user_id: "",
      session_id: "",
    };
    return axios.post(productlist, data, {
      headers: ApiHeader
    }).then((response) => {
      const data = response.data;
      return {
        props: {
          data,
        },
      };
    })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
        return {
          props: {
            data: {},
          },
        };
      });
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        data: {},
      },
    };
  }
}