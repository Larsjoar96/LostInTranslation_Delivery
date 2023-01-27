export const saveStorage = (key, value) => {
    localStorage.setItem(key,JSON.stringify(value));
    //sessionStorage
}
export const readStorage = key =>{
    //sessionStorage
    const data = localStorage.getItem(key)
    if(data){
        return JSON.parse(data)
        }
        return null;
}

export const deleteStorage = key => {
    //sessionStorage
    localStorage.removeItem(key);
}