import { getCookie } from "cookies-next"

export const apiBaseUrl= "https://showcase.demobw.com/webapi/api/"
export const megaMenu= apiBaseUrl+"home/megamenu?device_type=1"
export const loginApi= apiBaseUrl+"/user/login"
export const newsletter= apiBaseUrl+"common/subscribe_newsletter"
export const productlist= apiBaseUrl+"product/productlist"
export const productDetailEndPoint= apiBaseUrl+"product/productdetail"
export const relatedProduct = apiBaseUrl+"product/relatedproduct"
export const productDetailFilter= apiBaseUrl+"product/productdetailfilter"
export const productListFilter= apiBaseUrl+"product/productfilter"
export const ApiHeader={
     // 'authorization':`Token e222085edc871220cae528152b73c1317ba2addf`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}
export const isLogin=getCookie("token") ? true : false;
export const userData=getCookie("userData") ? JSON.parse(getCookie("userData")) : [];

export const isObjectNotBlank=(obj)=> {
    return Object.keys(obj).length > 0;
}
