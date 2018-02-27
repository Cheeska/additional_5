module.exports =     function check(str, bracketsConfig) {
    var stack = [];
    var arrElements = str.split("");
    var errorArray = [];

    for (var i = 0; i < arrElements.length; i++){
        for (var j = 0; j < bracketsConfig.length; j++) {
            if (arrElements[i] === bracketsConfig[j][0]){
            //&& bracketsConfig[j][0] === stack[stack.length - 1]
                stack.push(arrElements[i]);
            }
            else if((arrElements[i] === bracketsConfig[j][1])){
                stack.pop();
            }
            else if (arrElements[i] === bracketsConfig[j][1]) {
                errorArray.push(arrElements[i]);
            }

        }
    }
    return stack.length === 0 && errorArray.length === 0 ;
}

/*const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

console.log(check('([{}])', config3));*/

