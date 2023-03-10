export const saveStorage = (key, value) => {
    if(!key && typeof eky !== 'string'){
        throw new Error('saveStorage: no storage key provided')
    }
    if (!value){
        throw new Error('saveStorage: no value provided for' + key)
    }
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