var arr = new Array(' ',' ',' ',' ',' ',' ',' ',' ',' ');

for (var i = 0;i<=5 ;i++)
{
    if (i ==0)
    {
        arr[4] ='*';
        console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7]+arr[8]);
    }
    if(i == 1)
    {
        arr[3] ='*';
        arr[4] ='*';
        arr[5] ='*';
        console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7]+arr[8]);
    }
    if(i == 2)
    {
        arr[2] ='*';
        arr[3] ='*';
        arr[4] ='*';
        arr[5] ='*';
        arr[6] ='*';
        console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7]+arr[8]);
    }
    if(i == 3)
    {
        arr[1] ='*';
        arr[2] ='*';
        arr[3] ='*';
        arr[4] ='*';
        arr[5] ='*';
        arr[6] ='*';
        arr[7] ='*';
        console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7]+arr[8]);
    }
    if(i == 4)
    {
        arr[0] ='*';
        arr[1] ='*';
        arr[2] ='*';
        arr[3] ='*';
        arr[4] ='*';
        arr[5] ='*';
        arr[6] ='*';
        arr[7] ='*';
        arr[8] ='*';
        console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7]+arr[8]);
    }
}