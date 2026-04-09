function dosomething(){
    throw new Error(
        'aerror id thrown for di something ');
    
}
function init(){
    try{
        dosomething();
    }
    catch(e){
        console.log(e);
    }
    console.log("hululu");
}
init()