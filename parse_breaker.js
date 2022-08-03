var solution = s => {
    let newArrayString = s.split("");
    let mOpenBr = [];
    let lastOpen = "";
    let rs = true;
    const checkOpenClose = (open,close) =>{
        return (open === "{" && close === "}") ||
        (open === "[" && close === "]") ||
        (open === "(" && close === ")");
    };
    if(newArrayString.length < 1){
        return false;
    }
    for(let i=0; i < newArrayString.length;++i){
        let str = newArrayString[i];
        if(str === "{" || str === "[" || str === "("){
            mOpenBr.push(str);
            lastOpen = str;
        }else if(str === "}" || str === "]" || str === ")"){
            if(!checkOpenClose(lastOpen,str)){
                rs = false;
                // console.log("break");
                break;
            }else{
                if(mOpenBr.length === 0){
                    // console.log("break mOpenBr.length === 0");
                    rs = false;
                    break;
                }
                mOpenBr.pop();
                lastOpen = mOpenBr[mOpenBr.length-1];
            }
        }

    };
    return rs;
};

let str = "[([))]{}()()";
// Log to console
console.log(solution(str));
