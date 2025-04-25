const baseURL = 'http://localhost:8080/coffee/product'

export const getAllProduct = async () => {
    try {
        const response = await fetch(`${baseURL}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        });
        const res = await response.json();
        return res && res.result;
    } catch (error) {
        console.log(error);
    }
}

export const getProductById = async (id) => {
    try {
        const response = await fetch(`${baseURL}/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        });
        const res = await response.json();
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}