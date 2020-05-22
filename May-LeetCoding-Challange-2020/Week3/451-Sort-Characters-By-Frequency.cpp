// Time Complexity: O(max length*count of characters used)
// Space Complexity: O(n)
// Runtime: 232 ms, faster than 8.75%
// Memory Usage: 9.1 MB, less than 100.00%
class Solution {
public:
    string frequencySort(string s) {
        vector<char> storage; //storaging each character once in order
        map<char, string> temp; //map for each character followed by appending characters
        
        int max = 0; //initialize max
        string result = ""; //empty string for appending strings in order from max to 1
        
        for(int i = 0; i < s.length(); i++){
            if(temp[s[i]] == "")
                storage.push_back(s[i]); //fill storage each character once
            
            temp[s[i]]+=s[i]; //append character to the same character string
            
            if(temp[s[i]].size() > max) //update max if larger
                max = temp[s[i]].size();
        }
        
        while(max > 0){ //from max to 1, concatenate strings in order
            for(int i = 0; i < storage.size(); i++){ //for each character, find strings with [max] length
                if(temp[storage[i]].size() == max){ //if max,
                    result += temp[storage[i]]; //append string to result
                }
            }
            
            max --; //decrement max
        }

        return result;
    }
};