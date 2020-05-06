var UI = {};


UI.handleEnterPress = function() {
	document.querySelector(".js-search").addEventListener('keypress', function( e ) {
		if ( e.which === 13 ) {
			var inputValue = e.target.value;
			
			SoundCloudAPI.getTrack(inputValue);
			
		}
	});
}

UI.handleSubmitClick = function() {
	document.querySelector(".js-submit").addEventListener('click', function( e ) {
		var inputValue = document.querySelector(".js-search").value;
		
		SoundCloudAPI.getTrack(inputValue);
	});
} 

//  set up the search
UI.handleEnterPress();
UI.handleSubmitClick();




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