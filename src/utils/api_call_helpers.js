const getTop10Songs = (api_res) => {
      let top10Songs = [];
      // newArray.forEach(item => {
      for (let i=0 ; i<10 ; i++) {
            let keyItems = {
                  'im:name': api_res[i]['im:name'],
                  'im:image': api_res[i]['im:image'][2]['label'],
                  'im:price': api_res[i]['im:price'],
                  'im:artist': api_res[i]['im:artist'],
                  'id': api_res[i]['id']
            }
            top10Songs.push(keyItems);
      }
            
      // });
      console.log(top10Songs);
      return top10Songs;
}

module.exports.getTop10Songs = getTop10Songs;