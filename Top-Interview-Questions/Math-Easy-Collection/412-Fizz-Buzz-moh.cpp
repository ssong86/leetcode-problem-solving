class Solution {
public:
    vector<string> fizzBuzz(int n) {
        vector<string> result;
        string str1;
        for (int i = 1; i <= n; i++){
            if(i % 15 == 0)
                result.push_back("FizzBuzz");
            else if(i % 5 == 0)
                result.push_back("Buzz");
            else if(i % 3 == 0)
                result.push_back("Fizz");
            else{
                str1 = to_string(i);
                result.push_back(str1);
            }
        }
        return result;
    }
};
//TC = O(n)
//SC = O(n)
