/**
 * @param {string[]} strs
 * @return {string[][]}
 *
 * 배열로 주어진 각 문자열들을 알파뱃 순으로 정렬하여 공통된 Anagram을 뽑아낸다.
 * Runtime: 116 ms, faster than 95.30% of JavaScript online submissions for Group Anagrams.
 * Memory Usage: 47.8 MB, less than 17.29% of JavaScript online submissions for Group Anagrams.
 * TC: O(N + KlogK), where N is the number of elements in strs and K is the average length of each string in strs
 * SC: O(N), where N is the number of elements in strs
 *
 */
var groupAnagrams = function(strs) {
    if (!strs) {
        return null;
    } else if (strs.length === 1) {
        return [strs];
    }

    const map = {};
    for (const str of strs) {
        const sortedString = sortString(str);

        if (map[sortedString]) {
            map[sortedString].push(str);
        } else {
            map[sortedString] = [str];
        }
    }

    return Object.values(map);
};

function sortString (str) {
    return Array
        .from(str)
        .sort()
        .join("");
}