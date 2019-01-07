// var endpoint_URL = 'https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json';
var endpoint_URL = './trees.json';
var request = new XMLHttpRequest();
request.open('GET', endpoint_URL, true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    for (var index in data.trees) {
      var tree = data.trees[index];
      var treeName = tree.name;
      var treeSpeciesName = tree.species_name;
      var treeImage = tree.image;
      var treeTemplate = `<li class="tree">
        <div>
          <h1 class="tree_name">
            ${treeName}
          </h1>
          <h2 class="tree_species_name">
            ${treeSpeciesName}
          </h2>
          <img src="${treeImage}" alt="${treeName}" class="hidden"/>
          <p class="image_action_btn">
            <button type="button" class="btn" onclick="toggle_visibility(this)">Show Image</button>
          </p>
        </div>
      </li>`;
      document.querySelector('.trees').innerHTML += treeTemplate;
    }
  } else {
    console.log('Error');
  }
}

request.onerror = function() {
  console.log("connection error!");
}

request.send();

function toggle_visibility (button) {
  var img = button.parentNode.parentNode.querySelector("img");
  if (img.classList.contains("hidden")) {
    img.classList.remove("hidden");
    button.innerHTML = "Hide Image";
  } else {
    img.classList.add("hidden");
    button.innerHTML = "Show Image";
  }
}