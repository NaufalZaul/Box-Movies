class Data {
  static async allDataMovie() {
    const data = await fetch('https://api.tvmaze.com/search/shows?q=postman');
    const returnVal = await data.json();
    return returnVal;
  }
}
export default Data;
