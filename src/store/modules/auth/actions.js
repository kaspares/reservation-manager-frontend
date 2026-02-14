const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY

export default {
    async auth(context, payload) {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            })
        })

        const responseData = await response.json()

        if(!response.ok) {
            console.log(responseData);
            const error = new Error(responseData.error.message || 'Failed to auth');
            throw error
        }

        localStorage.setItem('token', responseData.idToken)

        context.commit('setUser', {
            token: responseData.idToken
        })

    },
    tryLogin(context) {
        const token = localStorage.getItem('token')

        if (token) {
            context.commit('setUser', {
                token: token
            }) 
        }
    }
}