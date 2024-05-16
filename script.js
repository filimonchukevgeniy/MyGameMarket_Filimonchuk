let itemsArray = [
    'Мотокоса1',
    'Мотокоса2',
    'Мотокоса3',
    'Мотокоса4',
    'Мотокоса5',
    'Мотокоса6',
    'Мотокоса7',
    'Мотокоса8',
    'Газонокосарка1',
    'Газонокосарка2',
    'Газонокосарка3',
    'Газонокосарка4',
    'Газонокосарка5',
    'Газонокосарка6',
    'Газонокосарка7',

]

let itemsImg = [
    'мотокоса1.jpg'
]

let itemsDiv = document.getElementById("items")

// itemsArray.forEach((item) =>{
//     itemsDiv.innerHTML += '<div class="item"></div>'
//     console.log(1)
// }
// )

// for (let i = 0 ; i < itemsArray.length ; i++){
//     itemsDiv.innerHTML += '<div class="item"></div>'
//     itemsDiv.innerText += itemsArray[i]

    
//     console.log(1)
// }

itemsArray.forEach((item) => {
    itemsDiv.innerHTML += `'<div class="item">
    <p>${item}</p>
    <div>
        <img class="item-image" src="img/${item}.jpg">
    </div>
    <div class="parts-pay">
        <div><img src="img/mololapka.png"></div>
        <div><img src="img/pb.jfif"></div>
    </div>
    <div class="price">
        <div>
            <span>5499</span><sup>грн</sup>
            
            <span>4497</span><sup>грн</sup>
        </div>
    </div>

    <div class="bonus">
        <div>Ціна за купоном</div>
        <div >
            <span class="bonus-div">4396 </span>
            <sup>грн</sup>
        </div>
        
        
    </div>'`
    
})



