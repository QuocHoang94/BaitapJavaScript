/*function triangle(numOfLayers) {
    var result = '';
    var symbol = '*';
    var layer = '';
    var lineBreak = '\n';
    for (var i = 0; i < numOfLayers; i++) {
        layer += symbol; // add one symbol to last layer
        result += layer + lineBreak; // append an extra line to the result
    }
    return result;
}
console.log(triangle(8))*/
var content = '';

for (var i = 0; i <= 7; i++) {
    content = content + '#';
    console.log(content);
}