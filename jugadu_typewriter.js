// DYNAMIC TYPE WRITER EFFECT
var itemNumber = 0;
var itemLength = 0;
var speed = 100; /* The speed/duration of the effect in milliseconds */
var revSpeed = 80;
var typeflag = 0;
function typeWriter() {
if (itemLength < buildOptions[itemNumber].length && typeflag == 0) {
    whatCanWeBuildForYou.innerHTML += buildOptions[itemNumber].charAt(itemLength);
    itemLength++;
    setTimeout(typeWriter, speed);
} else if (buildOptions[itemNumber].length == itemLength && typeflag == 0) {
    typeflag = 1;
    setTimeout(typeWriter, 500);
} else if (typeflag == 1 && itemLength > 0) {
    whatCanWeBuildForYou.innerHTML = whatCanWeBuildForYou.innerHTML.substring(0,  itemLength - 1)
    itemLength -= 1;
    setTimeout(typeWriter, revSpeed);
} else if (typeflag == 1 && itemLength <= 0) {
    typeflag = 0;
    itemNumber = ( itemNumber +1 ) % 7
    itemLength = 0
    setTimeout(typeWriter, 50);
}
}
typeWriter()