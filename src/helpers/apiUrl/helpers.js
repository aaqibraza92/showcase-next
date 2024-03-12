import { deleteCookie, getCookie, setCookie } from "cookies-next"

export const ApiHeader={
    // 'authorization':`Token e222085edc871220cae528152b73c1317ba2addf`,
   'Accept': 'application/json',
   'Content-Type': 'application/json'
}
export const postOptions = {
   method: "POST",
   headers: {
     // if file upload "Content-Type": "multipart/form-data",
     Accept: "application/json"
   },
 };
export const isLogin=getCookie("token") ? true : false;
export const userData=getCookie("userData") ? JSON.parse(getCookie("userData")) : [];

export const isObjectNotBlank=(obj)=> {
   return Object.keys(obj).length > 0;
}


export const logOut=()=>{
   deleteCookie("token");
   setCookie('userData', []);
   setCookie('isLogin',false);
   window.location.href = "/login";
   // window.location.reload()
}