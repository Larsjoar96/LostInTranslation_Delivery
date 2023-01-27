import { createHeaders } from "./index";

const apiUrl = process.env.REACT_APP_API_URL;


const checkForUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if(!(await response).ok){
            throw new Error('Could not complete request')
        }
        const data = await (await response).json();
        return[null,data]
    }
    catch(error){
        return[error.message, null]
    }
}

const createUser = async (username) => {
    try {
        console.log(createHeaders());
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        })
        console.log(response);
        if(!await response.ok){
            throw new Error('Could not create user with username: ' + username)
        }
        const data = await (await response).json();
        return[null,data]
    }
    catch(error){
        return[error.message, null]
    }
}

export const loginUser = async (username) =>
{
    const [checkError, user] = await checkForUser(username);

    if(checkError !== null){
        return[checkError, null]
    }

    if(user.length > 0){
      return [null, user.pop()];
    }
    return await createUser(username);

}

export const userById = async (userId) => {
try{
    const response = await fetch(`${apiUrl}?id=${userId}`)
    if(!response.ok){
        throw new Error('Could not fetch user')
    }
    const user = await response.json()
    return [null, user]
}
catch (error) {
    return [ error.message, null]
}
}