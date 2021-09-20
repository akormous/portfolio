/*
COMMON UTILITY FUNCTIONS
*/

/* sleep(n) : sleep for n microseconds */
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* randomString(len) : returns a random string / nonsense of length len */
export const randomString = (len) => {
    var characters = "abcdefghijklmnopqrstuvwxyz1234567890";
    var result = "";  
    for(var i = 0; i < len; ++i) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result;
}

/* randomCharacter() : returns a random character */
export const randomCharacter = () => {
    var characters = "abcdefghijklmnopqrstuvwxyz1234567890";
    return characters.charAt(Math.floor(Math.random() * characters.length))
}