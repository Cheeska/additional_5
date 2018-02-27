//module.exports =

    function check(str, bracketsConfig) {
    var stack = [];
    var arrElements = str.split("");

    for (var i = 0; i < arrElements.length; i++){
        for (var j = 0; j < bracketsConfig.length; j++) {
            if (arrElements[i] === bracketsConfig[j][0] && bracketsConfig[j][0] === stack[stack.length - 1]){
                stack.push(arrElements[i]);
            }
            else if((arrElements[i] === bracketsConfig[j][1])){
                stack.pop();
            }
            else {
                return false;
            }

        }
    }
    return stack.length === 0;
}

//const config1 = [['(', ')']];
//console.log(check(')(', config1));

