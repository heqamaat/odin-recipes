// Pancake menu script
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

//Homepage action button script
const linkList = ['/recipes/skause.html','/recipes/flatbread.html','/recipes/elderberry.html'];

document.getElementById("action").onclick = function() {
  let randomNumber = Math.floor(Math.random()*3);
  window.open(linkList[randomNumber],"_self")
};
