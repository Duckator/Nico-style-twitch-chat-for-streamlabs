// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
	// obj will be empty for chat widget
	// this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function(obj) {
  	// obj will contain information about the event
  	$(`[data-id="${obj.detail.messageId}"]`).each((index, element) => {
      let randomHeight = Math.random() * (window.innerHeight);
       $(element).css("top", randomHeight);
    });
});