let firstName: string = "john";
let lastName: string = "doe";

function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

let fullName: string = capitalize(firstName) + " " + capitalize(lastName);
console.log(fullName);
