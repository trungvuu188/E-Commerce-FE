const baseURL = 'http://localhost:8080/coffee/auth'

export const Register = async (data) => {
    try {
        const response = await fetch(`${baseURL}/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const res = await response.json();
        if(res.result) {
            sessionStorage.setItem('token', res.result.token);
        }
    } catch (error) {
        console.log(error);
    }
}

export const Login = async (data) => {
    try {
        const response = await fetch(`${baseURL}/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const res = await response.json();
        if(res.result) {
            sessionStorage.setItem('token', res.result.token);
        }
    } catch (error) {
        console.log(error);
    }
}

export const Logout = async () => {
    try {
        const response = await fetch(`${baseURL}/logout`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sessionStorage.getItem('token')),
        });
        const res = await response.json();
        res && sessionStorage.removeItem('token');
    } catch (error) {
        console.log(error);
    }
}