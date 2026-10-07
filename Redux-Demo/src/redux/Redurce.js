const value = {
    count : 0
}

const useRedurcer = (state=value , action)=>{
    switch (action.type) {
        case "INCREMENT":
            return{
                ...state, count: state.count+1
            }
            
        case "DECREMENT":
             return{
                ...state, count: state.count-1
            }

        case "RESET":
             return{
                count: value.count
            }

        case "Power":
             return{
                count: state.count*state.count
            }

        default:
            return{
               ...state 
            }
    }
}
export default useRedurcer;