/*
  Script to get links 
*/
let array = [];
/// Change value to search for
let query = "1920x1080"
var links = document.links;
for (i = 0; i < links.length; i++) {
  let link = links[i].href;
  if (link.indexOf(query) !== -1) {
    array.push(link);
  }
}
