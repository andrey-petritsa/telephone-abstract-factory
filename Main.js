import PhoneBook from "./PhoneBook.js";

let book = new PhoneBook()
console.log(book.getTelephone('+79992221221').getCountry())
console.log(book.getTelephone('+39992221221').getCountry())
console.log(book.getTelephone('+89992221221').getCountry())