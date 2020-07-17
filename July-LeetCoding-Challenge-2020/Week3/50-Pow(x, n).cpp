// Solution #1 Brute Force
// TC: O(n)
// SC: O(1)
// TIME LIMIT EXCEEDED
class Solution {
    double res;
    bool isNeg;
public:
    double myPow(double x, int n) {
        
        if(!n || x == 1)
            return 1;
    
        res = x;
        isNeg = false;

        checkNeg(n);

        while(--n){  
            res *= x;
        }
        
        if(neg)
            return 1/res;
        return res;
    }
    
    void checkNeg(int &n){
        if(n < 0){
            neg = true;
            n -= 2*n;
        }
    }

};

// Solution #2 Merge Powers
// TC: O(logn)
// SC: O(1)
// Runtime: 0 ms, faster than 100.00%
// Memory Usage: 5.9 MB, less than 74.90%
class Solution {
    
    bool isNeg;
    long p;
    double rem;

public:
    double myPow(double x, int n) {
        
        if(!x)
            return 0;
        if(!n || x == 1)
            return 1;
        
        isNeg = false;
        p = n;
        rem = 1;
        
        while(p > 1){           
            if(p%2)
                rem *= x;
            
            x *= x;
            p/=2;
        }
        
        x *= rem;
        
        if(isNeg)
            return 1/x;
        return x;
    }

    void checkNeg(int n){
        if(n < 0){
            isNeg = true;
            p *= -1;
        }     
    }
};