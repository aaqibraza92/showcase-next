import { listView, square } from '@/assets/svg'
import { ApiHeader, productlist } from '@/helpers/apiUrl'
import axios from 'axios'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductListComp from './ProductListComp'

const FineJewelry = ({ data }) => {
  console.log("data", data)
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
                  <div>
                    View {square} | {listView}
                  </div>
                </div>
                {
                  data?.data?.result?.length > 0 && data?.data?.result.map((e,i) => (
                    <ProductListComp key={i} data={e} />
                  ))
                }



              </Col>
            </Row>
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