import { createContext, useState } from "react";

export const dataContext = createContext(0);

const ContexProvider = ({children}) => {
    
    const [wishNum,setWishNum] = useState(0);

    const sendData = {
        
        wishNum,
        setWishNum,
    }

    return <dataContext.Provider value={sendData}>{children}</dataContext.Provider>
};

export default ContexProvider;