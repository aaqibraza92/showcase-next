import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { sucessBuy } from "@/helpers/apiUrl";
import { postOptions } from "@/helpers/apiUrl/helpers";

export default function Paypal(props) {
   
    const paypal = useRef();
    const [loader,setLoader] = useState(false)
    console.log("props11",props)
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            if (typeof window !== "undefined") {
                console.log("window",window.paypal)
               window.paypal.Buttons({
                   style: {
                       layout: 'horizontal'
                   },
                   createOrder: function (data, actions) {
                       return actions.order.create({
                           purchase_units: [{
                               reference_id: props.data.order_number,
                               description: props.data.description,
                               custom_id: props.data.order_id,
                               amount: {
                                   currency_code: 'USD',
                                   value: props.data.grand_total,
                                   breakdown: {
                                       item_total: {
                                           currency_code: 'USD',
                                           value: props.data.grand_total,
                                       },
                                       shipping: {
                                           currency_code: 'USD',
                                           value: props.data.shipping_cost?.cost,
                                       },
                                       tax_total: {
                                           currency_code: 'USD',
                                           value: props.data.tax_amount, 
                                       },
                                       discount: {
                                           currency_code: 'USD',
                                           value: props.data.order_discount,
                                       }
                                   }
                               },
                               items: props.data.product_list
                           }],
                           application_context: {
                               shipping_preference: "NO_SHIPPING"
                           }
                       });
                   },
                   onApprove: async (data, actions) => {
                       setLoader(true)
                       return await actions.order.capture()
                           .then((res) => {
                               axios.post(sucessBuy, res, postOptions)
                                   .then(response => {
                                       if (response.data.status == 1) {
                                           setLoader(false)
                                           alert("success message or redirect to any page")
                                           // history.push(`/ordersuccess/${response.data.data.order_id}/${response.data.data.order_no}/${response.data.data.txn_id}`)
                                           // dispatch(cartlengthvalue(0))
                                       } else {
                                           setLoader(false)
                                           console.log(response.message);
                                       }
                                   })
                                   .catch(err => {
                                       setLoader(false)
                                       console.log(err)
                                   })
                           })
   
                   },
                   onError: (err) => {
                       setLoader(false)
                       alert(err);
                   },
               })
               .render(paypal.current);
             }
        }, 1500);
     
    
    }, [props.data.description]);

    return (
        <>
        <div>
            <div ref={paypal}></div>
        </div>
        <Modal show={loader}>
            Loading...
        </Modal>
        </>
    );
}