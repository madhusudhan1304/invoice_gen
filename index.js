var p1= 10, p2 = 12, p3 = 60, p4 = 50;
var q1=0, q2=0, q3=0, q4=0;
var name = "", email="",i1=document.getElementById("n1").value,i2,i3,i4;
var aBill="",bBill="",cBill="",dBill="";
var total_amount=0;
document.getElementById("name").addEventListener("keyup",function(){

    
    document.getElementById("name2").innerHTML=this.value;
});

document.getElementById("email").addEventListener("keyup",function(){
    
    
    document.getElementById("email2").innerHTML=this.value;
});



document.getElementById("q1").addEventListener("keyup",function(){
if(this.value==""||this.value==0){
    aBill="";
    q1=0;
    showBill();
}else{
    q1=this.value;
    p1=document.getElementById("item1").value;
    i1=document.getElementById("n1").value;
    aBill="<tr><td>"+i1+"</td><td>Rs. "+p1+"</td><td>"+q1+"</td><td>"+p1+"x"+q1+" = "+p1*q1+"</td></tr>";
    showBill();

}
});

document.getElementById("q2").addEventListener("keyup",function(){
if(this.value==""||this.value==0){
    bBill="";
    q2=0;
    showBill();

}else{
    q2=this.value;
    p2=document.getElementById("item2").value;
    i2=document.getElementById("n2").value;
    bBill="<tr><td>"+i2+"</td><td>Rs. "+p2+"</td><td>"+q2+"</td><td>"+p2+"x"+q2+" = "+p2*q2+"</td></tr>";
    showBill();
}
});

document.getElementById("q3").addEventListener("keyup",function(){
if(this.value==""||this.value==0){
    cBill="";
    q3=0;
    showBill();

}else{
    q3=this.value;
    p3=document.getElementById("item3").value;
    i3=document.getElementById("n3").value;
    cBill="<tr><td>"+i3+"</td><td>Rs. "+p3+"</td><td>"+q3+"</td><td>"+p3+"x"+q3+" = "+p3*q3+"</td></tr>";
    showBill();
}
});

document.getElementById("q4").addEventListener("keyup",function(){
if(this.value==""||this.value==0){
    dBill="";
    q4=0;
    showBill();

}else{
    q4=this.value;
    p4=document.getElementById("item4").value;
    i4=document.getElementById("n4").value;
    dBill="<tr><td>"+i4+"</td><td>Rs. "+p4+"</td><td>"+q4+"</td><td>"+p4+"x"+q4+" = "+p4*q4+"</td></tr>";
    showBill();
}
});


function showBill(){
    document.getElementById("bill").innerHTML=aBill+bBill+cBill+dBill; //table statement
    document.getElementById("amount").innerHTML = p1*q1+p2*q2+p3*q3+p4*q4; // total amount
}