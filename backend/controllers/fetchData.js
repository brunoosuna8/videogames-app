async function fetchData() {
  let API_KEY = "a677d8c618f04fe4931b57a7e275ed36";
  let url = `https://api.rawg.io/api/games?key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`error en: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("error", error);
    return null;
  }
}

module.exports = { fetchData };
