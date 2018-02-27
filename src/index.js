module.exports = function check(str, bracketsConfig) {
  //module.exports =
    function check(str, bracketsConfig) {

}


const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];


console.log(check('()', config1));
//console.log(check('((()))()', config1));
//console.log(check('())(', config1));

}
