class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let formatedString = s.toLowerCase().replaceAll(/[^a-z0-9]/g, "")

        let p1 = 0;
        let p2 = formatedString.length - 1

        while (p1 <= p2){
            if (formatedString[p1] === formatedString[p2]){
                p1++
                p2--
            }
            else return false
        }

        return true
    }
}
