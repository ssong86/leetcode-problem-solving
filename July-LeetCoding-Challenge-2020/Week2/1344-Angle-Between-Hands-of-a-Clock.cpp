// Solution #1 Not Modularized
// TC: O(1)
// SC: O(1)
// Runtime: 0 ms, faster than 100.00%
// Memory Usage: 5.9 MB, less than 87.84%
class Solution {
public:
    double angleClock(int hour, int minutes) {
        
        double hourDeg = hour%12*30 + minutes*0.5;      
        double minDeg = 360.0*minutes/60.0;
              
        return abs(hourDeg-minDeg) > 180 ? 360 - abs(hourDeg-minDeg) : abs(hourDeg-minDeg);        
    }
};

// Solution #2 Modularized
// TC: O(1)
// SC: O(1)
// Runtime: 4 ms, faster than 13.55%
// Memory Usage: 6.1 MB, less than 25.49% 
class Solution {
public:
    double angleClock(int hour, int minutes) {
        
        double hourDeg = calcHourDeg(hour, minutes);
        double minDeg = calcMinDeg(minutes);
        
        double diff = calcDiff(hourDeg, minDeg);
        
        return getSmaller(diff);
    }
    
    double calcHourDeg(int hour, int minutes){
        return hour%12*30 + minutes*0.5;
    }
    
    double calcMinDeg(int minutes){
        return (double)360*minutes/(double)60;
    }
    
    double calcDiff(double a, double b){
        return a-b > b-a ? a-b : b-a;
    }
    
    double getSmaller(double diff){
        return diff > 180 ? 360 - diff : diff;
    }
};