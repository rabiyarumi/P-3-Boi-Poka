import { toast } from "react-toastify";


const getStoredWishList = () => {

    const storedListStr = localStorage.getItem("wish-list")

    if(storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }

}


const addToStoredWishList = (id) => {

    const storedList = getStoredWishList();

    if(storedList.includes(id)){
        toast(  "Already exist to wish list")
    }
    else{
        storedList.push(id);
        const storedListString = JSON.stringify(storedList)
        localStorage.setItem("wish-list", storedListString)
        toast("added to wish list")
    }

}

export {addToStoredWishList, getStoredWishList}