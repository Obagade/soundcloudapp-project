let SoundCloudAPI = {};

SoundCloudAPI.init = function(){


SC.initialize({
  client_id: 'Enter API here yoo'
});

}

SoundCloudAPI.init();

SoundCloudAPI.getTrack = function(inputValue) {




SC.get('/tracks', {
  q: inputValue
}).then(function(tracks) {
  console.log(tracks);
});

}

SoundCloudAPI.getTrack("usher");

SoundCloudAPI.renderTracks = function() {
  let card = document.createElement('div');
  card.classList.add("card");
  
  let searchResults = document.querySelector(".js-search-results");
  searchResults.appendChild(card);


}


SoundCloudAPI.renderTracks();