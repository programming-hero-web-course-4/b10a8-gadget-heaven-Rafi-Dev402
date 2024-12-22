import toast from "react-hot-toast";

const getStorageData =()=>{
    const allData = localStorage.getItem('cart')
    
    if(allData){
        const cartData = JSON.parse(allData)
        return cartData
    }else{
        return [];
    }
}

const addFavourite = (favproduct)=>{
    const cartProduct = getStorageData();
    const isExist = cartProduct.find(item=> item.product_id === favproduct.product_id)
    if(isExist){
        return toast.error('This Product is already added in cart!');
    } 


    cartProduct.push(favproduct)
    localStorage.setItem('cart',JSON.stringify(cartProduct))
    toast.success('Added in cart');
}

// Remove a Product from LocalStorage
const removeProduct=(id)=>{
    const cartProduct = getStorageData();
    const remaining = cartProduct.filter(productD=> productD.product_id != id)
    
    localStorage.setItem('cart',JSON.stringify(remaining))
    toast.success('Successfully Removed');

}

export {addFavourite,getStorageData,removeProduct}