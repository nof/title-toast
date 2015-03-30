(function() {
  var dialog = document.createElement("dialog");
  dialog.innerHTML = document.title;
  document.body.appendChild(dialog);

  dialog.showModal();
  setTimeout(function() {
    dialog.close();
    document.body.removeChild(dialog);
  }, 1000);
})();
