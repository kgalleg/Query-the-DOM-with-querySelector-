// Practice exercises from slack on monday, June 3, 2019 

// Happy Monday! Here are a couple of memory-jogging lightning exercises for ya:
// Exercise #1 Take the following data and represent it in

// 1. A string
// 2. An object
// 3. An array

"lunch"
"peanut butter and jelly"
"whole wheat"
"grape juice"
"apple"

// const string: "For lunch I am eating a whole wheat peanut butter and jelly sandwich, and apple, and apple juice. "

const array = ["lunch", "peanut butter and jelly", "whole wheat", "grape juice", "apple"]

const object = {
    meal: "lunch",
    foodOne: "peanut butter and jelly",
    foodTwo: "whole wheat",
    foodThree: "grape juice",
    foodFour: "apple"
}

// Exercise #2 Use string template literal syntax to create the following sentence from the variables below
"Hi. My name is Biff, and I'm 30 years old. They say that makes me a millenial. In 25 years I'll be 55! I guess that means I'll be a milleni-old then. Ha ha!"
const age = 30
const timeSpan = 25
const futureAge = age + timeSpan
const name = "Biff"
const generationStereotype = "millenial"
const dadJoke = "milleni-old"

`Hi. My name is ${name}, and I am ${age} years old.  They say that makes me a ${generationStereotype}.  In ${timeSpan} years I'll be ${futureAge}! I guess that means I'll be a ${dadJoke} then. Ha ha!`


// more lighting exercises https://github.com/nashville-software-school/client-side-mastery/blob/master/book-2-the-neophyte/chapters/JS_OBJECTS.md
// Setting and Accessing Values on Objects

// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.

// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }

// dot notation exercise
console.log(wardrobe.height)
console.log(`The height of the wardrobe is ${wardrobe.height} inches`)

// to add a new key in this object above: 
wardrobe.material = "Cedar"
console.log(wardrobe)

// square bracket notation exercise

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.
// console.log(empireStateBuilding.stories, height, squareFeet, eastWestLength, northSouthLength)

console.log(`The Empire State Building is ${stories} stories.`)
console.log('stories', empireStateBuilding.stories)
console.log(empireStateBuilding.height)
console.log(empireStateBuilding.squareFeet)
console.log(empireStateBuilding.eastWestLength)
console.log(empireStateBuilding.northSouthLength)


// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.
const addressForEmpireState = "address"
const constructionDateforEmpireState = "constructionDate"
const costEmpireState = "cost"
const ownerEmpireState = "owner"
const architectEmpireState = "architect" 

console.log(empireStateBuilding[addressForEmpireState])
empireStateBuilding[constructionDateforEmpireState]
empireStateBuilding[costEmpireState]
empireStateBuilding[ownerEmpireState]
empireStateBuilding[architectEmpireState]



// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

// Lightning Exercise 2: Output only Andy and Zoe in the console.


const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

const fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime
console.log(fullTimeInstructors);

const partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime

// const specificInstructors = (nashvilleSoftwareSchool.instructors.fullTime[4], nashvilleSoftwareSchool.instructors.partTime[0]);
// console.log(specificInstructors);
// for some reason whent i console log this above, it only says "ZOE"
//but if I console log this below, it works... ?? not sure why.
console.log("specific instrux:", nashvilleSoftwareSchool.instructors.fullTime[4], nashvilleSoftwareSchool.instructors.partTime[0]);



//Given the following object, output the following value to the console.
// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

const beatlesMcCartney = `${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`;

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}