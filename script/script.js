
document.getElementById("img-Btn").addEventListener("click",function(){
    const randomColor="#"+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor=randomColor;
    
});


const ringButtons = document.querySelectorAll(".ring-button");

for (let btn of ringButtons) {
    btn.addEventListener('click', function(event) {
        const navNum = document.getElementById('nav-num');
        let QuantityNav = parseInt(navNum.innerText);
        const titles=document.querySelector("title")
        const leftQuantity = document.getElementById('left-Quantity');
        let Quantity = parseInt(leftQuantity.innerText);

        if (confirm("Board update Successfully")) {
            if (Quantity > 0) {
                Quantity--;
                leftQuantity.innerText = Quantity;
                QuantityNav++;
                navNum.innerText = QuantityNav;

                btn.disabled = true;
                btn.style.opacity = 0.15;
                const historyContainer = document.getElementById("history-container");
                historyContainer.innerHTML += `
                    <div class="p-4 my-2 bg-[#F4F7FF] rounded-3xl">
                        <p class="font-medium">
                            You have completed the task  at ${new Date().toLocaleTimeString()}
                        </p>
                    </div>`;
                
            }
        }

        

    });



}

document.getElementById("clears").addEventListener("click",function(){
    const clearsBtn=document.getElementById("history-container")
    clearsBtn.classList.add("hidden")
})









document.getElementById('text-Button').addEventListener('click', function() {
    window.location.href = "main.html"; 
});



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




function historysAdd(title,time){
   
}