
const initialstate={

    no:0,
    button_type:1
}

const siteReducer=(state=initialstate,payload)=>{
    
     switch(payload.type){
       
        case 'INCREMENT1':
         if(state.button_type!==1){
            return {...state,no:1,button_type:1}
         }else{
         return {...state,no:state.no+1,button_type:1}
         }
         case 'INCREMENT2':
        
         if(state.button_type!==2){
            return {...state,no:2,button_type:2}
         }else{
         return {...state,no:state.no+2,button_type:2}
         }
         case 'INCREMENT3':
            if(state.button_type!==3){
                return {...state,no:3,button_type:3}
             }else{
             return {...state,no:state.no+3,button_type:3}
             }
         default:
            return state


     }
}

export default siteReducer;