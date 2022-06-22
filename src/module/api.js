class API {

    //Get Data from API
    static getdata = async (url) => {
        const res = await fetch(url, { method: 'GET' });
        const result = await res.json();
        return result;
    }
}

export default API;

