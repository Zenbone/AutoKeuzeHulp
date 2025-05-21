async function getData(path) {
    let url = `https://autokeuzehulp.onrender.com${path}`
    console.log(url)
    try {
        let response = await fetch(url);
        if (!response.ok) { throw new Error(`Response status: ${response.status}`); }
        let json = await response.json();
        console.log(json)
        return json
    } catch (error) {
        console.error(error.message);
    }
}
export {getData}; 