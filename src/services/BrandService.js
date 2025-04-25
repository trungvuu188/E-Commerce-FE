const baseURL = 'http://localhost:8080/coffee/brand'

export const getAllBrands = async () => {
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

