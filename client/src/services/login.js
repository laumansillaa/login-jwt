const ENDPOINT = 'http://localhost:3001'

export default function login ({username, password}) {
    return fetch(`${ENDPOINT}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    }).then(res => {
        if (res.status === 200) {
            return res.json()
        } else {
            throw new Error('Invalid Credentials')
        }
    }).then(res => {
        const {jwt} = res
        return jwt
    })
}