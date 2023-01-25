import { createHeaders } from "./index";

const apiUrl = process.env.REACT_APP_API_URL;


const checkForUser = async () => {
    try {
        const response = fetch(`${apiUrl}?username=${username}`)
        if(!response.ok){
            throw new Error('Could not complete request')
        }
        const data = await (await response).json();
        return[null,data]
    }
    catch(error){
        return[error.message, null]
    }
}

const createUser = async () => {
    try {
        const response = fetch(apiUrl, {
            method: 'POST',
            header: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        })
        if(!response.ok){
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

    if(createError !== null){
        return[checkError, null]
    }

    if(user.length > 0){
      return [null, user.pop()];
    }
    return await createUser(username);

}
[error, user]