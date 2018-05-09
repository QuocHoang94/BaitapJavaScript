/*for(var i = 0 ; i<=7 ;i++)
{
    if(i==0)
    {
        console.log(' '+' '+' '+' '+' '+' '+' '+'*');
    }
    if(i==1)
    {
        console.log(' '+' '+' '+' '+' '+' '+'*'+'*');
    }
    if(i==2)
    {
        console.log(' '+' '+' '+' '+' '+'*'+'*'+'*');
    }
    if(i==3)
    {
        console.log(' '+' '+' '+' '+'*'+'*'+'*'+'*');
    }
    if(i==4)
    {
        console.log(' '+' '+' '+'*'+'*'+'*'+'*'+'*');
    }
    if(i==5)
    {
        console.log(' '+' '+'*'+'*'+'*'+'*'+'*'+'*');
    }
    if(i==6)
    {
        console.log(' '+'*'+'*'+'*'+'*'+'*'+'*'+'*');
    }
    if(i==7)
    {
        console.log('*'+'*'+'*'+'*'+'*'+'*'+'*'+'*');
    }
} */
var arr = new Array(' ',' ',' ',' ',' ',' ',' ',' ');
for(var i = 0;i<=7;i++)
{
    if(i==0){
        arr[7]='*';
        console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7])
    }
    if(i==1){
        arr[7]='*';
        arr[6]='*';
        console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7])
    }
    if(i==2){
        arr[7]='*';
        arr[6]='*';
        arr[5]='*';
        console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7])
    }
    if(i==3){
        arr[7]='*';
        arr[6]='*';
        arr[5]='*';
        arr[4]='*';
        console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7])
    }
    if(i==4){
        arr[7]='*';
        arr[6]='*';
        arr[5]='*';
        arr[4]='*';
        arr[3]='*';
        console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7])
    }
    if(i==5){
        arr[7]='*';
        arr[6]='*';
        arr[5]='*';
        arr[4]='*';
        arr[3]='*';
        arr[2]='*';
        console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7])
    }
    if(i==6){
        arr[7]='*';
        arr[6]='*';
        arr[5]='*';
        arr[4]='*';
        arr[3]='*';
        arr[2]='*';
        arr[1]='*';
        console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7])
    }
    if(i==7){
        arr[7]='*';
        arr[6]='*';
        arr[5]='*';
        arr[4]='*';
        arr[3]='*';
        arr[2]='*';
        arr[1]='*';
        arr[0]='*';
        console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7])
    }
    
}