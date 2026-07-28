/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let x = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let i=0;
    let j= x.length-1;
    ispalindrome = true;
    while(i<j){
        if(x.charAt(i)!=x.charAt(j)){
            return false;
            break;
        }
        i++;
        j--;
    }
    return true;

};