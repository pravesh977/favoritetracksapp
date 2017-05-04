//cant i do a require here and get the value of fullListData.artist to assign to 
// artist in this page?
const artistName = require('./controllers/appController');
console.log(fullListData);

console.log('hello connected');
console.log('hey yo');
//http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=beck&api_key=31a7398b13d0f907ae5becde44d6ea8f&format=json;
let singlepagemain = document.querySelector('.singlepagemain');
const baseurl = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=';
const artist = 'beck';
const API_KEY = '31a7398b13d0f907ae5becde44d6ea8f';
// function fetchingapi () {
fetch(baseurl + artist + '&api_key=' + API_KEY + '&format=json')
  .then(function(response) {
    response.json()
      .then(function(lastFmData){
        console.log(lastFmData);
        console.log(lastFmData.toptracks.track[1].image[3]);
         console.log(lastFmData.toptracks.track[1].image[3]['#text']);
         moredatabutton.addEventListener('click', function() {
         let artistimg = document.createElement('img');
         singlepagemain.appendChild(artistimg);
         artistimg.src = lastFmData.toptracks.track[6].image[3]['#text'];
         
});
        //debugger;
      })
  });
// }




