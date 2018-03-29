import ActionType from '../constant/actionType';
import * as service from '../service';
export function fetchCategoryImageInfo(){
    return (dispatch) =>{
        service.getMenuList()
        .then(data => {
            dispatch({
                type:ActionType.GET_MENULIST_COMPLETE,
                data
            })
        })
    }
}

export function deleteInfo(checkedKeys){
    return (dispatch) => {
        service.deleteInfo(checkedKeys)
        .then((res) => {
            if (res ==='OK'){
                service.getMenuList()
                .then((data) => {
                    dispatch({
                        type:ActionType.GET_MENULIST_COMPLETE,
                        data
                    })
                })
            }else {
                console.log('删除失败');
            }
        })
       
    }
}

export function addCategoryName(categoryName){
    return (dispatch) => {
        service.addCategoryName(categoryName)
        .then((res) => {
            if (res ==='OK'){
                service.getMenuList()
                .then((data) => {
                    dispatch({
                        type:ActionType.GET_MENULIST_COMPLETE,
                        data
                    })
                })
            }else {
                console.log('添加失败');
            }
        })
       
    }
}

export function submitForm(info){
    return (dispatch) => {
        service.submitForm(info)
        .then((res) => {
            if (res !== undefined){
                service.getMenuList()
                .then((data) => {
                    dispatch({
                        type:ActionType.GET_MENULIST_COMPLETE,
                        data
                    })
                })
            }else {
                console.log('添加影像信息失败');
            }
        })
       
    }
}
