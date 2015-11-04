(function(){

  /**
  * Listens for click of extension button, runs the reveal script.
  */
  chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {
      file: 'reveal.js'
    });
  });

})();