
import Axios from "axios";


export function get(url, params = {}, pagination = {}) {
 
  return new Promise((resolve, reject) => {
    Axios.get(url, { params: params, pagination: pagination }).then(response => {
            resolve(response.data);

        }).catch(err=>{

            reject(err);
        })
    })
}

export function post(url, params, pagination ) {
  let data = {};
  data.Param = params;
  data.Pagination = pagination;
     
    return new Promise((resolve,reject)=>{
      Axios.post(url, data).then(response=>{
            resolve(response.data);

        }).catch(err=>{

            reject(err);
        })
    })
}

export function patch(url ,params={}) {
    return new Promise((resolve,reject)=>{
        Axios.patch(url,{params:params}).then(response=>{
            resolve(response.data);

        }).catch(err=>{

            reject(err);
        })
    })
}

export function put(url ,params={}) {
    return new Promise((resolve,reject)=>{
        Axios.put(url,{params:params}).then(response=>{
            resolve(response.data);

        }).catch(err=>{

            reject(err);
        })
    })
}
