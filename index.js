
function handelClick (target)
{
    const olddiscountid = document.getElementById('items-discount');
    const oldtotal = document.getElementById('items-total');
    const makepurches = document.getElementById('make-purchase');
    const deletebtn = document.getElementById('coupon-id');
    const coupon = document.getElementById('coupon-text');
   
    const itemsName = target.childNodes[3].childNodes[3].innerText;
   // console.log();
    const li = document.createElement('li');
    li.innerText = itemsName;
  

    const additemName = document.getElementById('add-items');
    additemName.appendChild(li);

   const itemsPrices = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
   const additemPrices = document.getElementById('add-itemsPrices');
    const oldprice = additemPrices.innerText;
   
     const total =parseFloat(oldprice)+parseFloat(itemsPrices);
     additemPrices.innerText = total;
    if(total >= 200)
    {
        
        //const deletebtn = document.getElementById('coupon-id');
        deletebtn.removeAttribute('disabled');

        document.getElementById('coupon-id').addEventListener('click', function(event)
        {
            //const coupon = document.getElementById('coupon-text');
            const couponText = coupon.value;
            
           
             if(couponText == 'SELL200')
             {
                
                //const olddiscountid = document.getElementById('items-discount');
                const discount = total*0.2;
                olddiscountid.innerText = discount.toFixed(2);
        
                //const oldtotal = document.getElementById('items-total');
                const AfterDiscounttotal = total - discount;
                oldtotal.innerText = AfterDiscounttotal.toFixed(2);
             }
             else 
             {
                alert("PLease Enter correct code!");
             }
        })
        
       
       
       
    }
    if(total>0)
    {
        //const makepurches = document.getElementById('make-purchase');
        makepurches.removeAttribute('disabled');
    }
    document.getElementById('go-home-btn').addEventListener('click',function()
    {
       
        additemPrices.innerText = '0.0';
        
        oldtotal.innerText = '0.0';

        olddiscountid.innerText = '0.0';
        li.innerText = '';
        additemName.appendChild(li);

        makepurches.setAttribute('disabled',true);
        deletebtn.setAttribute('disabled',true);

        coupon.value = " ";

        
    })
    
}
