export const getData = async () => {
    let res = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=9f3e2f6e2c945c12842fe4ab1388ed92")
    let data = await res.json()
    return data.results;
}
export const getSingleFilm = async (id) => {
    let res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9f3e2f6e2c945c12842fe4ab1388ed92`);
    let data = await res.json();
    return data 
}
