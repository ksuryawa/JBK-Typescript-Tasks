var j = 1;
console.log("---------------Without Math Function---------------");
for (var i = 1; i <= 100; i++) {
    while (j <= ((i / 2) + 1)) {
        if (j * j == i) {
            console.log("Perfect Square :: " + i);
        }
        j += 1;
    }
    j = 1;
}
console.log("---------------With Math Functio---------------");
for (var i = 1; i <= 100; i++) {
    if (Math.sqrt(i) == (Math.floor)(Math.sqrt(i))) {
        console.log("Perfect Square :: " + i);
    }
}
