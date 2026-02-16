let str = "seven day   git hub copilot tranning";

let count = 0;
let isWord = false;
for(let i = 0; i<str.length;i++) {
    if (str[i] !==" " && !word) {
        count++
        isWord = true
    }else if (str[i] == " "){
        isWord = false
    }

}
console.log(count);