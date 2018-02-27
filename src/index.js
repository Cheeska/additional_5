module.exports =function check(str, bracketsConfig) {
    var stack = [];
    var arrElements = str.split("");

    for (var i = 0; i < arrElements.length; i++){
        for (var j = 0; j < bracketsConfig.length; j++) {
            if (arrElements[i] === bracketsConfig[j][0]){
                stack.push(arrElements[i]);
            }
            else if((arrElements[i] === bracketsConfig[j][1])){
                stack.pop();
            }

        }
    }
    return stack.length === 0;
}

