async function getData(path) {
    let url = `https://autokeuzehulp.onrender.com${path}`
    try {
        let response = await fetch(url);
        if (!response.ok) { throw new Error(`Response status: ${response.status}`); }
        let json = await response.json();
        return json
    } catch (error) {
        console.error(error.message);
    }
}
export {getData}; 