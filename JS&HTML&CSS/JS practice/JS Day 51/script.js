const aboutMe = {
    age: "Demetre",
    lastName: "Samkharadze",
    age: 15,
    academy: "Goal Oriented Academy",
    academyAlias: "GOA",
    school: "School",
    location: "Tbilisi",
    adress: "adress"
};


aboutMe.Age = "33";

const friendInfo = {
    name: "Nika",
    lastName: "Kavtaradze",
    age: 15,
    school: "School"
};

console.log(aboutMe.name);
console.log(aboutMe.lastName);
console.log(aboutMe.age);
console.log(aboutMe.location);
console.log(aboutMe.adress);


console.log(friendInfo.name);
console.log(friendInfo.lastName);
console.log(friendInfo.age);
console.log(friendInfo.school);

// Family Members

const familyMembers = {
    father: {
        name: "Asamda",
        lastName: "sada",
        age: "33"
    },

    mother: {
        name: "Asamda",
        lastName: "sada",
        age: "33"
    },

    brother: {
        name: "Asamda",
        lastName: "sada",
        age: "33"
    }
};

console.log(familyMembers.father, mother, brother);


// Weather Info

const weatherInfo = {
    Tbilisi: {
        country: "Georgia",
        city: "Tbilisi",
        time: "12:00",
        temperature: "25",
        humidity: "50",
        wind: "10",
        pressure: "1010"
    },

    Batumi: {
        country: "Georgia",
        city: "Batumi",
        time: "12:00",
        temperature: "25",
        humidity: "50",
        wind: "10",
        pressure: "1010"
    },
};

console.log('Today/`s weather in Tbilisi is: ', weatherInfo.Tbilisi); // ამ შემთხვევაში გამოიტანს მხოლოდ თბილისის ინფორმაციას
console.log('Today/`s weather in Batumi is: ', weatherInfo.Batumi); // ამ შემთხვევაში გამოიტანს მხოლოდ ბათუმის ინფორმაციას

// Objects const

const object1 = {
    name: "Object 1",
    property: "Value 1"
};

const object2 = {
    name: "Object 2",
    property: "Value 2"
};

console.log(object1 == object2); 