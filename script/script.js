const ringButtons=document.querySelectorAll(".ring-button");
for (let btn of ringButtons){
    btn.addEventListener('click',function(event){
        const navNum=document.getElementById('nav-num');
        let QuantityNav=parseInt(navNum.innerText);
        
        const leftQuantity=document.getElementById('left-Quantity');
        let  Quantity=parseInt(leftQuantity.innerText)||0;
        if(confirm("Board update Successfully")){
            if(Quantity>0){
                Quantity--;
                leftQuantity.innerText=Quantity;
                QuantityNav++;
                navNum.innerText=QuantityNav;

                btn.disabled=true;
                btn.style.opacity=0.15;
                
            }
            
        }
        
    })
};
document.getElementById('text-Button').addEventListener('click', function() {
    window.location.href = "main.html"; 
});





function updateDateAndDay() {
    const currentDate = new Date();
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDay = daysOfWeek[currentDate.getDay()];
    const currentMonth = currentDate.toLocaleString('default', { month: 'short' });
    const currentDayNumber = currentDate.getDate();
    const currentYear = currentDate.getFullYear();
    

    const formattedDay = `${currentDay},`;
    const formattedDate = `${currentMonth} ${currentDayNumber} ${currentYear}`;
    

    document.getElementById('current-day').innerText = formattedDay;
    document.getElementById('current-date').innerText = formattedDate;
}


updateDateAndDay();