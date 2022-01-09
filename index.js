// document.getElementById("count-el").innerText = 40;

// let count = 5;





// console.log(count + " can make the cut");



// let myAge = 25


// let humanDogRatio = 7 

// let myDogAge = myAge * humanDogRatio


// console.log(myDogAge)

// console.log(myAge + count )


// let bounsPoints = 50

// bounsPoints = bounsPoints + 50

// console.log(bounsPoints)

// bounsPoints = bounsPoints - 75
// console.log(bounsPoints)

// bounsPoints = bounsPoints + 45
// console.log(bounsPoints)


// intialize the count as 0
let count = 0
// let countEl = document.getElementById("count-el")

// listen for clicks on the increment button


function increment(params) {
    count += 1
    // change the count-el in the HTML to reflect the new count
    countEl.innerText = count

}


// increment the count variable when the button is clicked



// listen for clicks on the decrease button
function decrease(params) {
    count -= 1
    // change the count-el in the HTML to reflect the new count
    countEl.innerText = count

}


// function save(params) {
//     console.log("Its " + count + " people total" );
// }
// let greeting = "wsup "
// let name = "Boul"
// let myGreeting = greeting + name

// console.log(myGreeting);



let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEl.innerText = count
// }

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    
    let totalPpl = " " + count + " - "
    // 3. Render the variable in the saveEl using innerText
    console.log(totalPpl)

    saveEl.textContent += totalPpl

    count = 0
    countEl.innerText = count
    // NB: Make sure to not delete the existing content of the paragraph
    // console.log()
}

// , that stores the string: "You have tree new notifications"

// let message = "You have tree new notifications"
// console.log(message);

// listen for clicks on the save button

// function jackieRobinson(params) {
//     console.log(42)
// }

// jackieRobinson()



// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lapTotal(params) {
//     console.log( lap1 + lap2 + lap3)
// }

// lapTotal()


// let lapsCompleted = 0

// function lapsRan(params) {
//     lapsCompleted =  lapsCompleted + 1   
// }

// lapsRan()
// lapsRan()
// lapsRan()
// console.log(lapsCompleted)