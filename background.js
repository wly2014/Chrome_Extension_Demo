console.log("{background.js}");

// Fired when a browser action icon is clicked. 
// This event will not fire if the browser action has a popup.
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("{browserAction}");
    // var manager_url = chrome.extension.getURL("manager.html");
    // focusOrCreateTab(manager_url);
});

//////////////// 消息发送
// 向非content.js
// chrome.runtime.sendMessage({cmd:"getWeekNum"},function(response) {
//     console.log(response.result);
// });
// 向content.js发动消息
// chrome.tabs.sendMessage(integer tabId, any message, object options, function responseCallback)

//////////////// 消息接受(都一样)
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log("{background.js}:onMessage");
	if(request.cmd=='getWeekNum'){
		console.log("getWeekNum");
	};
	// This function becomes invalid when the event listener returns, 
	// unless you return true from the event listener to indicate 
	// you wish to send a response asynchronously 
	// (this will keep the message channel open to the other end until sendResponse is called).
	return true;
});