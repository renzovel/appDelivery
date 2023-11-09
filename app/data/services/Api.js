const api = 'https://json-server-heroku-chi.vercel.app/';

export const Api = {
    get(endpoint){
        return fetch(`${api}${endpoint}`)
        .then(res => res.json());
    },
    post(endpoint, data){
        return fetch(`${api}${endpoint}`, {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json());
    } 
}