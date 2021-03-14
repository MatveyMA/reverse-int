module.exports = function reverse (n) {
let result;
let mod = Math.abs(n);
let str = String(mod);
splitstr = str.split("");
reversed = splitstr.reverse();
result = reversed.join(""); 
return Number(result);
}
