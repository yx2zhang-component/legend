function Legend  ( opts ) {
  var opts = opts || {};
  var title = opts.title
  var items = opts.items
  this.element = document.createElement("div");

  this.legendTitle = document.createElement("div");
  this.legendTitle.className = "legend-title"

  this.legendList = document.createElement("div");
  this.legendList.className = "legend-list";

  for (var i = 0; i<items.length; i++){
    var row = document.createElement("div");
    var key = document.createElement("div");
    var value  = document.createElement("div");

    key.classList.add("legend-key")
    value.classList.add("legend-value")

    row.className = "legend-row"
    row.appendChild(key);
    row.appendChild(value);

    value.text = items[i].value
    key.innerHTML = items[i].key

    legendList.appendChild(row)
  }
}
