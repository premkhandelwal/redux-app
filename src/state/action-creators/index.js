export const despositMoney = (amount)=>{
    return (dispatch1) =>{
        dispatch1({
            type:'deposit',
            payload: amount
        })
    }
}
export const withDrawMoney = (amount)=>{
    return (dispatch) =>{
        dispatch({
            type:'withdraw',
            payload: amount
        })
    }
}