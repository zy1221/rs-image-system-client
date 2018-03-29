import * as url from './constant/serviceUrl';
export const getCategoryInfo = () =>{
    return fetch(url.getCategoryInfo)
    .then((res) => res.json())
}

export const getImageInfo = () =>{
    return fetch(url.getImageInfo)
    .then((res) => res.json())
} 

export const getMenuList = () =>{
    return fetch(url.getMenuList)
    .then((res) => res.json())
} 

export const deleteInfo = (checkedKeys) =>{
    return fetch(url.deleteInfo, { 
        method: 'POST',
        headers:new Headers(
            {'Content-Type':'application/json'} ,
        ),
        body: JSON.stringify(checkedKeys)
    })
    .then((res) => res.json())
}

export const addCategoryName = (categoryName) =>{
    return fetch(url.addCategoryName, { 
        method: 'POST',
        headers:new Headers(
            {'Content-Type':'application/json'} ,
        ),
        body: JSON.stringify({'categoryName':categoryName})
    })
    .then((res) => res.json())
}

export const submitForm = (info) =>{
    return fetch(url.submitForm, { 
        method: 'POST',
        // headers:new Headers(
        //     {'Content-Type':'application/json'} ,
        // ),
        body: info
    })
    .then((res) => res.json())
}