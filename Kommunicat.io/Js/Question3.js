function reverseNum(num){
    let temp = ""
    temp+=num
    temp =  temp.split("")
   num = temp.reverse().join("")
    return parseInt(num)
}
console.log(reverseNum(149))