(function() {
  var dialog = $("<dialog>", {id: 'title-toast', text: document.title });
  $("body").append(dialog);
})();

function showTitleToast() {
  var dialog = $("#title-toast")[0];
  dialog.showModal();
  setTimeout(function() {
    dialog.close();
  }, 1000);
}
