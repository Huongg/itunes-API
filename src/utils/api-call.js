const fetching_API = () => {
   const URL = "https://itunes.apple.com/gb/rss/topalbums/limit=100/json";
   fetch (URL)
      .then(results => {
            return results.json();
      }).then(data => {
            res = data.entry;
      })
}

// module.exports.fetching_API = fetching_API;
export default fetching_API;