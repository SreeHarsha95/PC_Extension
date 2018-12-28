

console.log("Background Running");

chrome.browserAction.onClicked.addListener(setup)

function setup(){
    console.log("The Popup is clicked")
    document.getElementById('press').addEventListener("click",function(){
    console.log("key is genrating")
    generateKey()})
}
generateKey=function(){
    let obj ={
        publicKey : '0x12yu456',
        secret : 'asdl345hj6712'
    }

chrome.storage.local.set({keys : obj},function(){
   console.log("Saved")
   getKeys()
})}


function getKeys(){
   chrome.storage.local.get(['keys'],function(result){
       console.log('The Value is ' + result.keys.publicKey)
   })
  // console.log(res)
}