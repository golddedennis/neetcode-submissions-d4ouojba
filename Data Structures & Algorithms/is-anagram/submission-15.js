class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const freq1 = new Array(26).fill(0)
        const freq2 = new Array(26).fill(0)

        for (let i = 0; i < s.length; i++){
            const idx1 = s[i].charCodeAt(0) - 96
            const idx2 = t[i].charCodeAt(0) - 96

            freq1[idx1]++
            freq2[idx2]++
        }

        return freq1.join("") === freq2.join("")
    }
}
