s = "pwwkew";
var lengthOfLongestSubstring = function(s) {
    let usedChar = [];
    let longestSubString = "";
    let currentSubstring = "";
    for (let i = 0; i < s.length; i++){
        if (usedChar.includes(s[i])) {
            if (longestSubString.length < currentSubstring.length)
                longestSubString = currentSubstring;
        
            currentSubstring = currentSubstring.substring(usedChar.indexOf(s[i]) + 1);
            usedChar = currentSubstring.split("");
        }
        currentSubstring += s[i];
        usedChar.push(s[i]);
    }
    if (longestSubString.length < currentSubstring.length)
        longestSubString = currentSubstring;

    return longestSubString.length;
};

let ans = lengthOfLongestSubstring(s);
console.log(ans);