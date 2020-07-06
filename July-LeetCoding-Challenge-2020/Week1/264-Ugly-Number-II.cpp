// Solution #1: Min Heap and Set
// TC: O(n) at precomputation, O(1) when returning result
// SC: O(1) 1690*2 is still a constant in terms of asymptotic complexity
// Runtime: 4 ms, faster than 97.36%
// Memory Usage: 6.5 MB, less than 85.07%
class Ugly{
    int nums[1690];    

public:
    Ugly(){
        
        set<long> seen;
        priority_queue<long, vector<long>, greater<long>> heap;
        long currUgly, newUgly;
        int primes[3] = {2, 3, 5};
        
        seen.insert(1);
        heap.push(1);
        
        for(int i = 0; i < 1690; i++){
            currUgly = heap.top();
            heap.pop();
            nums[i] = (int)currUgly;
            
            for(int j : primes){
                newUgly = currUgly*j;
                
                if(!seen.count(newUgly)){
                    seen.insert(newUgly);
                    heap.push(newUgly);
                }
            }
        }
    }

    int getNthNum(int n){
        return nums[n-1];
    }
};

class Solution {
public:
     
    int nthUglyNumber(int n) {
        static Ugly *u = new Ugly();
        
        return u->getNthNum(n);
    }
};



// Solution #2: Three Index Pointers
// TC: O(n)
// SC: O(1) 1690*2 is still a constant in terms of asymptotic complexity
// Runtime: 16 ms, faster than 62.92% 
// Memory Usage: 7.5 MB, less than 83.38%
class Solution {
public:
     
    int nthUglyNumber(int n) {
        
        if(!n)
            return 0;
        if(n == 1)
            return 1;
        
        vector<int> v;
        v.reserve(n);
                
        int i1, i2, i3;
        i1 = i2 = i3 = 0;
        
        v.push_back(1);
        
        for(int i = 1; i < n; i++){
            
            v.push_back(min(min(v[i1]*2, v[i2]*3), v[i3]*5));
            
            if(v[i] == v[i1]*2)
                i1++;
            if(v[i] == v[i2]*3)
                i2++;
            if(v[i] == v[i3]*5)
                i3++;
        }
        
        return v[n-1];
    }
};


// Solution #3: Three Index Pointers with precomputation
// TC: O(n) at precomputation, O(1) when returning result
// SC: O(1) 1690*2 is still a constant in terms of asymptotic complexity
// Runtime: 4 ms, faster than 97.36% 
// Memory Usage: 6 MB, less than 92.34%
class Ugly{
    vector<int> nums;
    
public:  
    Ugly(){
                        
        nums.reserve(1690);
        
        int i1, i2, i3;
        i1 = i2 = i3 = 0;
        
        nums.push_back(1);
        
        for(int i = 1; i < 1690; i++){
            
            nums.push_back(min(min(nums[i1]*2, nums[i2]*3), nums[i3]*5));
            
            if(nums[i] == nums[i1]*2)
                i1++;
            if(nums[i] == nums[i2]*3)
                i2++;
            if(nums[i] == nums[i3]*5)
                i3++;
        }
    }
    
    int getNthNum(int n){
        return nums[n-1];
    }
};

class Solution {
public:
     
    int nthUglyNumber(int n) {
        
        static Ugly *u = new Ugly();
        
        if(!n)
            return 0;
        if(n == 1)
            return 1;

        return u->getNthNum(n);
        
    }
};
