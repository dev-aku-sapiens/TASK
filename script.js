window.onload = function () 
{
    const amount = document.getElementById('amount');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    let count = 1000;
    let increament;
        
    btn1.addEventListener("click", function()
    {
        increament = setInterval(function()  
            {
                count += 1;
                amount.textContent=count;
            }, 1000);
    });

    btn2.addEventListener("click", function()
    {
        clearInterval(increament);
    });
}