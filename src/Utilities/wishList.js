import toast from "react-hot-toast";

const getStorageData =()=>{
    const allData = localStorage.getItem('wishList')
    
    if(allData){
        const wishData = JSON.parse(allData)
        return wishData
    }else{
        return [];
    }
}

const addwishProduct = (wishProduct)=>{
    const wishListProduct = getStorageData();
    
    const isExists = wishListProduct.find(itemWish => itemWish.product_id === wishProduct.product_id);
    if(isExists){
        return toast.error('This Product is already added Wish List!');
    } 


    wishListProduct.push(wishProduct)
    localStorage.setItem('wishList',JSON.stringify(wishListProduct))
    toast.success('Added in Wish List');
}


export {addwishProduct,getStorageData}