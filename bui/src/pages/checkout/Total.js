import React from 'react'

const Total = ({data}) => {
    return (
        <section className='border p-3'>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>SUBTOTAL</th>
                        <td>${data?.sub_total}</td>
                    </tr>
                    <tr>
                        <th>SHIPPING CHARGES</th>
                        <td>${data?.shipping}</td>

                    </tr>
                    <tr>
                        <th>Coupon Discount</th>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <th>SALES TAX ESTIMATE</th>
                        <td>${data?.tax}</td>
                    </tr>
                </tbody>
            </table>

            <div className='d-flex align-items-center justify-content-between'>
                <span className='fw700 fs20'>
                    Total Amount
                </span>
                <strong className='fs20'>
                    ${data?.sub_total}
                </strong>

            </div>
        </section>
    )
}

export default Total