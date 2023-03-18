const incrementCount = ()=>{
    return {
        type : "INCREMENT"
    }
}
const decrementCount =()=>{
    return {
        type : "DECREMENT"
    }
}
export {incrementCount,decrementCount}