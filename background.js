let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

// var hrefs = document.getElementsByTagName("a");

// function openLink() {
//     var href = this.href;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         var tab = tabs[0];
//         chrome.tabs.update(tab.id, {url: href});
//     });
// }

// for (var i=0,a; a=hrefs[i]; ++i) {
//     hrefs[i].addEventListener('click', openLink);
// }