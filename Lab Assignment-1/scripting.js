const form=document.querySelector('#form')
const eventCards=document.querySelector('.cards')
form.addEventListener('submit',function(event){
    event.preventDefault()
    const title=eventTitle.value
    const date=eventDate.value
    const cat=category.value
    const desc=description.value

    const card=document.createElement('div')
    card.classList.add('card')
    card.innerHTML=`
        <h2>${title}</h2>
        <p>📅${date}</p>
        <button>${cat}</button>
        <p>${desc}</p>
        <div class="deleteCard">x</div>
    `

    card.querySelector('.deleteCard').addEventListener('click',function(){
        card.remove()
    })

    eventCards.appendChild(card)
})

document.addEventListener('keydown',(event)=>{
    document.querySelector('.key').innerText=event.key
})


clearBtn.addEventListener('click', function () {
  eventCards.innerHTML = ''
})


sampleBtn.addEventListener("click", function() {

    function createSample(title, date, cat, desc) {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2>${title}</h2>
            <p>Date: 📅 ${date}</p>
            <button class="category">${cat}</button>
            <p>Description: ${desc}</p>
            <div class="deleteCard">X</div>
        `;

        card.querySelector(".deleteCard").addEventListener("click", function() {
            card.remove();
        });

        eventCards.appendChild(card);
    }

    createSample("Tech Conference", "2026-02-10", "Conference", "Annual tech meet.");
    createSample("Cyber Workshop", "2026-03-05", "Workshop", "Hands-on security training.");
    createSample("Community Meetup", "2026-04-01", "Meetup", "Networking and discussion.");

});