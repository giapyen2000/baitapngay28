var Number=[1,2,3,4,5,6,-1,9,7,5,-9];
var Len=Number.length;//tinh do dai cua chuoi
var array=" ";
var arrayOne=" ";
var arrayTwo=" ";
for (var i=0;i<Len;i++)
{
if (Number[i]%2==0)//chia het cho 2
{
    
   array+= Number[i] + " ";
}

}
console.log("mang so chan la :" + array);
for (var i=0;i<Len;i++)
{
    if((Number[i]%2!=0)&&(Number[i]>0))//khong chia het cho 2 va lon hon khong
{
    arrayOne+= Number[i] + " ";
   
}
}
console.log("mang so le la :" + arrayOne);
for (var i=0;i<Len;i++)
{
    if(Number[i]%2<0)// chia cho 2 nho hon 0
{
    arrayTwo+= Number[i] + " ";
}
}
console.log("mang so am la :" + arrayTwo);


