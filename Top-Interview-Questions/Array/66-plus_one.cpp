class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
    
        /* Time Complexity: O(n)
         * Space Complexity: O(1)
        */
        int n = digits.size()-1;
        int carry = 1;
        
        for(int i = n; i >= 0; i--){
            digits[i] += carry;
            
            carry = 0;
            
            if(digits[i] == 10){
                carry = 1;
                digits[i] = 0;
            }
        }
        
        if(carry == 1){
            digits.insert(digits.begin(), 1);
        }
        
        return digits;
    }
};