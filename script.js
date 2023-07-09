function hochzählen() {
    let inhtml = document.getElementById("zahl").innerHTML;
    let inhtmlINT =  parseInt(inhtml,10);
    inhtmlINT++;
    document.getElementById("zahl").innerHTML = inhtmlINT;
}
