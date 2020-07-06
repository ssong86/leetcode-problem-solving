// Solution #1 Using Carry
// TC: O(n)
// SC: O(1)
// Runtime: 0 ms, faster than 100.00%
// Memory Usage: 8.8 MB, less than 56.94%
class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        
        int n = digits.size();
        bool carry = false;
        
        for(int i = n-1; i >= 0; i--){
            
            if(digits[i] == 9){
                
                digits[i] = 0;
                carry = true;

            }else{
                
                digits[i]++;
                carry = false;
                break;
                
            }
        }
        
        if(carry)
            digits.insert(digits.begin(), 1);
        
        return digits;
    }
};