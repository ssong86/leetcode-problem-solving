/*
    Initial naive solution
    Runtime: 60 ms, faster than 65.54% of JavaScript online submissions for Two Sum.
    Memory Usage: 37.1 MB, less than 8.68% of JavaScript online submissions for Two Sum.
 */
var twoSum = function(nums, target) {
    if (nums.length <= 1) {
        return null;
    }

    const map = new Map();

    nums.forEach((number, index) => {
        if (map.has(number)) {
            map.get(number).push(index);
        } else {
            map.set(number, [index]);
        }
    });

    return nums.reduce((result, current) => {
        if (result.length === 0) {
            const remainder = target - current;

            if (map.has(remainder)) {
                if (remainder !== current) {
                    result.push(map.get(current)[0]);
                    result.push(map.get(remainder)[0]);
                }
                else if (map.get(remainder).length > 1) {
                    result.push(map.get(current)[0]);
                    result.push(map.get(current)[1]);
                }
            }
        }

        return result;
    }, []);
};

/*
    Optimal solution
    Runtime: 56 ms, faster than 80.86% of JavaScript online submissions for Two Sum.
    Memory Usage: 36.7 MB, less than 10.33% of JavaScript online submissions for Two Sum.
 */
var twoSum = function(nums, target) {
    if (nums.length <= 1) {
        return null;
    }

    const map = new Map();

    for (const [index, value] of nums.entries()) {
        if (!map.has(value)) {
            map.set(target - value, index);
        } else {
            return [map.get(value), index];
        }
    };
}