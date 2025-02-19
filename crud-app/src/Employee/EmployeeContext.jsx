import  React,{createContext} from 'react';

export const ShopContext=createContext(null);

const EmployeeContextProvider=(props)=>
{
    let Employee={id:Date.now(),Name:'',Address:'', MobileNumber:'',Department:''
       
    }

    const contextValue={Employee};

    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default EmployeeContextProvider;