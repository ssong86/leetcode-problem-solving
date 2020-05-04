class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        
        /* Time Complexity: O(n)
         * Space Complexity: O(n)
        */

        map<int, int> a;
        vector<int> b;
        
        for(int i = 0; i < nums1.size(); i++){
            a[nums1[i]]++;
        }
        
        for(int j = 0; j < nums2.size(); j++){
            if(a[nums2[j]] > 0){
                b.push_back(nums2[j]);
                a[nums2[j]]--;
            }
        }
        
        return b;
    }
};

class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        
        /* Time Complexity: O(n^2)
         * Space Complexity: O(n)
        */
       
        vector<int> a;
        
        map<int, int> b;

        b[key] = value;


        for(int i = 0; i < nums1.size(); i++){
            for(int j = 0; j < nums2.size(); j++){
                if(nums1[i] == nums2[j]){
                    nums2.erase(nums2.begin() + j);
                    a.push_back(nums1[i]);
                    break;
                }
            }
        }
        
        return a;
    }
};