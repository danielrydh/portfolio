
function mouseOverbird2() {
    document.getElementById("bird2").classList.add("open");
}

function mouseOverbird1() {
    document.getElementById("bird1").classList.add("open");
}

document.getElementById('git').addEventListener('mouseover', function(){
  doStuff();
});

function doStuff() {
mouseOverbird1();
mouseOverbird2();
}
