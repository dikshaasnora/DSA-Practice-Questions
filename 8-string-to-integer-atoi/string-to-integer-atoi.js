/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let n = s.length;
    let i = 0;

    // Step 1: skip leading whitespace
    while(i < n && s[i] === ' '){
        i++;
    }

    if(i === n) return 0;   // early exit: sirf spaces the

    // Step 2: check sign
    let sign = 1;
    if(s[i] === '+' || s[i] === '-'){
        if(s[i] === '-'){
            sign = -1;
        }
        i++;
    }

    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // Step 3: read digits + overflow check inline
    let num = 0;
    while(i < n && s[i] >= '0' && s[i] <= '9'){
        let digit = s.charCodeAt(i) - 48;   // '0'.charCodeAt(0) = 48
        num = num * 10 + digit;

        // overflow check yahin kar lo, aage loop chalane ki zarurat nahi
        if(sign === 1 && num > INT_MAX){
            return INT_MAX;
        }
        if(sign === -1 && -num < INT_MIN){
            return INT_MIN;
        }

        i++;
    }

    return num * sign;
};