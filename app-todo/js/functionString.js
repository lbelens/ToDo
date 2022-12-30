
export function sliceString(string){
    let newString;
    console.log(string.length)

    if(string.length>=0 && string.length<=200){
        newString= string;
    }

    if(string.length>200&& string.length<500){
        newString=string.slice(0,-150)+"...";
    }

    if(string.length>500 && string.length<1000){
        newString=string.slice(0,-600)+"...";
    }

    return newString;
}