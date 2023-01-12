import RussiaTelephone from "./RussiaTelephone.js";
import NullTelephone from "./NullTelephone.js";
import BelarusianTelephone from "./BelarusianTelephone.js";

export default class PhoneBook {
    getTelephone(telephone) {
        if(telephone[1] == '7') {
            return new RussiaTelephone()
        }
        if(telephone[1] == '3') {
            return new BelarusianTelephone()
        }

        return new NullTelephone()
    }
}