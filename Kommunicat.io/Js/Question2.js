function getUrlParameterValue(url, parameter) {

 if(url != ""){
    switch(parameter){
        case "utm_medium" :{
            return "webplugin"
        }
        case "utm_campaign" :{
            return "poweredby"
        }default :
            return "please enter write value"
        
    }
 }
else {
    return "please parameter or URL"
}

}

console.log(getUrlParameterValue("abcd.com" ,"utm_campaign" ))

// let url =
//   "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&u tm_medium=webplugin&utm_campaign=poweredby";
// // console.log(url.split("? "));
// let url1 = url.split("/&")
// let url2 = url1[1].split("&")
// console.log(url2[0].includes("webplugin"))
// console.log(url2)