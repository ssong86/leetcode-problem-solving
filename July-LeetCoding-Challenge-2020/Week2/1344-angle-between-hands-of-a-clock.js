/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 * Runtime: 56 ms, faster than 84.54% of JavaScript online submissions for Angle Between Hands of a Clock.
 * Memory Usage: 32.8 MB, less than 95.83% of JavaScript online submissions for Angle Between Hands of a Clock.
 * TC: O(1)
 * SC: O(1)
 */
const minuteDegree = 6;
const hourDegree = 0.5;

var angleClock = function(hour, minutes) {
    const totalMinutes = hour * 60 + minutes;
    const result = Math.abs(minuteDegree * minutes - hourDegree * totalMinutes);

    return result > 180 ? 360 - result : result;
};

// 한시간에 분침은 360도, 즉 1분에는 6도
// 한시간에 시침은 30도, 즉 1분에는 0.5도