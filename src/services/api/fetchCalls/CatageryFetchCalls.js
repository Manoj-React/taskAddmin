import { ApiUrl } from '../endPoints/EndPoints';
import axiosInstance from '../../../helpers/axios'; 


export function categoryList() {
    return  axiosInstance.get(`${ApiUrl.categoryList}`).then(function (response) {
            if(response.status === 200){
                return response.data;
            } else {
                return Promise.reject('Please try again');
            }
        })
        .catch(function (error) {
            let isResponse = error.response;
            if(isResponse && isResponse.data){
                return Promise.reject(isResponse.data.message);
            } else{
                return Promise.reject(error);
            }
        });
}


// export function createCategory(createCategoryData) {
//     return  axiosInstance.get(`${ApiUrl.createCategory}`).then(function (response) {
//             if(response.status === 200){
//                 return response.data;
//             } else {
//                 return Promise.reject('Please try again');
//             }
//         })
//         .catch(function (error) {
//             let isResponse = error.response;
//             if(isResponse && isResponse.data){
//                 return Promise.reject(isResponse.data.message);
//             } else{
//                 return Promise.reject(error);
//             }
//         });
// }
export function createCategory(createCategoryData) {
    console.log("rootData",createCategoryData)
    return axiosInstance.post(`${ApiUrl.createCategory}`, {
        "name": createCategoryData.name,
         "pId": createCategoryData.pId
    }).then(function (response) {
            if(response.status === 200){
                return response.data;
            } else {
                return Promise.reject('Please try again');
            }
        })
        .catch(function (error) {
            let isResponse = error.response;
            if(isResponse && isResponse.data){
                return Promise.reject(isResponse.data.message);
            } else{
                return Promise.reject(error);
            }
        });
}


// import {getAllProductsByStoreURL} from '../../services/api/fetchCalls/LandingFetchCalls';
// useEffect(() => {
    
//     getAllProductsByStoreURL().then(products => {
// console.log("safas",products)
//         }                
//     , errors => {
//       alert('hi')
//     })

// }, []);