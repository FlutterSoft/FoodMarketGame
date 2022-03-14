// TODO

// DONE - add some method of deleting fruit from inventory if 3 days have elapsed since purchase.   Probably push to an array with the date, if array[0] date is more than 3 days from now date then shift off array


const player = {
    // name : prompt('Enter your name'), // 
    money : 5,
    day : 1,
    apple : [],
    orange : [],
    mango : [],

    buyFruit : function(fruit){
        if (player.money >= fruit.price){
            player[fruit.name].push(player.day)
            player.money -= fruit.price
            updateFruitOwned()
            moneySpan.innerText = player.money
            moneySpan.classList.add('buy')
            setTimeout( () => {moneySpan.classList.remove('buy')},800)
            
        }
        else {
            notices.innerText = 'Not enough money.'
            setTimeout(function(){
                notices.innerText = ''
            }, 2000)
        }
    },
    sellFruit : function(fruit){
        if (player[fruit.name].length > 0){
            player[fruit.name].shift()
            player.money += fruit.price
            updateFruitOwned()
            moneySpan.innerText = player.money
            moneySpan.classList.add('sell')
            setTimeout( () => {moneySpan.classList.remove('sell')},800)
        }
        else {
            notices.innerText = `You don't have a ${fruit.name} to sell.`
            setTimeout(function(){
                notices.innerText = ''
            }, 2000)
        }
    },

}

// Fruit Objects
const apple = {
    name : 'apple',
    price : 1
}
const orange = {
    name : 'orange',
    price : 2
}
const mango = {
    name : 'mango',
    price : 4
}


// Setting DOM variables
const nameSpan = document.querySelector('#name')
const moneySpan = document.querySelector('#money')
const daySpan = document.querySelector('#day')

const applesOwnedSpan = document.querySelector('#applesOwned')
const orangesOwnedSpan = document.querySelector('#orangesOwned')
const mangoesOwnedSpan = document.querySelector('#mangoesOwned')

const applesPriceSpan = document.querySelector('#applePrice')
const orangesPriceSpan = document.querySelector('#orangePrice')
const mangoesPriceSpan = document.querySelector('#mangoPrice')

const buyApplesButton = document.querySelector('#btnBuyApples')
const buyOrangesButton = document.querySelector('#btnBuyOranges')
const buyMangoesButton = document.querySelector('#btnBuyMangoes')
const sellApplesButton = document.querySelector('#btnSellApples')
const sellOrangesButton = document.querySelector('#btnSellOranges')
const sellMangoesButton = document.querySelector('#btnSellMangoes')

const notices = document.querySelector('#notices')
const startTime = new Date()

// Setting DOM elements
// nameSpan.innerText = ' ' + player.name
moneySpan.innerText = player.money
daySpan.innerText = ' ' + player.day

applesPriceSpan.innerText = ' ' + apple.price
orangesPriceSpan.innerText = ' ' + orange.price
mangoesPriceSpan.innerText = ' ' + mango.price


// Event Listeners for Clicks
buyApplesButton.addEventListener('click', function(){
    player.buyFruit(apple)
})
buyOrangesButton.addEventListener('click', function(){
    player.buyFruit(orange)
})
buyMangoesButton.addEventListener('click', function(){
    player.buyFruit(mango)
})
sellApplesButton.addEventListener('click', function(){
    player.sellFruit(apple)
})
sellOrangesButton.addEventListener('click', function(){
    player.sellFruit(orange)
})
sellMangoesButton.addEventListener('click', function(){
    player.sellFruit(mango)
})


// FUNCTIONS


function updateFruitOwned(){
    applesOwnedSpan.innerText = ' ' + player.apple.length
    orangesOwnedSpan.innerText = ' ' + player.orange.length
    mangoesOwnedSpan.innerText = ' ' + player.mango.length
}
updateFruitOwned()


// Update price of fruits
function updatePrices(fruitArr){
    for (fruit of fruitArr){
        if(Math.random() > 0.5){
            if (fruit.price > 6){
                fruit.price += 2
            }
            else {
                fruit.price += 1
            }
        }
        else {
            if (fruit.price > 10){
                fruit.price -=2
            }
            else if (fruit.price > 1)
            fruit.price -=1
        }
    }    
    applesPriceSpan.innerText = ' ' + apple.price
    orangesPriceSpan.innerText = ' ' + orange.price
    mangoesPriceSpan.innerText = ' ' + mango.price
}


// checks time elapsed since game started and updates Day count every 5 seconds
function timeTracker() {
    let timeNow = new Date()
    let timeElapsed = Math.floor((timeNow.getTime() - startTime.getTime()) / 1000)
    if (timeElapsed % 5 == 0){
        player.day += 1
        daySpan.innerText = ' ' + player.day
        updatePrices([apple, orange, mango])
        removeExpiredItems(apple)
        removeExpiredItems(orange)
        removeExpiredItems(mango)

    }
    if (player.day == 30){
        document.querySelector('body').classList.add('disable')
        alert(`Score: ${player.money}. Game Over.`)
        clearInterval(myInterval)
    }
}
let myInterval = setInterval(timeTracker, 1000)
// end of time tracker

// Removes any fruit that have been in inventory for 4 days. 
function removeExpiredItems(fruit){
    while ( (player[fruit.name][0] + 4) === player.day){
        player[fruit.name].shift()
        updateFruitOwned()
        document.querySelector(`#${fruit.name}Expired`).classList.remove('hide')
        setTimeout( () => {document.querySelector(`#${fruit.name}Expired`).classList.add('hide')},1300)
    }
}


