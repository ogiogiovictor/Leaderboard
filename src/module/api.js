class API {

    //Get Data from API
    static getdata = async (url) => {
        const res = await fetch(url, { method: 'GET' });
        const result = await res.json();
        return result;
    }

    //Add data to the API
    static postGames = async (url, body) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          });
          const result = await res.json();
          return result;
    }
}

export default API;

