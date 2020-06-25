// TC: O(n)
// SC: O(n)
// Runtime: 8 ms, faster than 55.81%
// Memory Usage: 7.9 MB, less than 58.19% 
class Solution {
public:
    vector<string> fizzBuzz(int n) {
        vector<string> result;
        
        for(int i = 1; i <= n ; i++){
            
            if (!(i%3) && !(i%5))
               result.push_back("FizzBuzz");
            else if (!(i%5))
               result.push_back("Buzz");
            else if (!(i%3))
               result.push_back("Fizz");
            else
               result.push_back(to_string(i));
        }
        
        return result;
    }
};