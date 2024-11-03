import { toast } from "react-toastify";

const getStoredReadList = () => {


  const storedListString = localStorage.getItem("read-list");


  if (storedListString) {
    const storedList = JSON.parse(storedListString);
    return storedList;
  }

   else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();

  if (storedList.includes(id)) {
    toast( "already exist to Read list");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList)
    localStorage.setItem('read-list', storedListStr)
    toast("Successfully completed reding")
  }
};


export {addToStoredReadList, getStoredReadList}