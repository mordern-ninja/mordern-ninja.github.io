function take(){
    var x =document.getElementById("switch").value 
    if (x =="on")
    document.getElementById("switch").value = "off"
    else if (x=="off") 
    document.getElementById("switch").value = "on"
 
    console.log(x)
}