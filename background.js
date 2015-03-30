chrome.tabs.onActivated.addListener(function (activeInfo){
  chrome.tabs.get(activeInfo.tabId, function (tab){
    chrome.tabs.executeScript(null, { file: "toast.js" });
  });
});
