// TC: push: O(1) pop: O(1) top: O(1) getMin: O(nlogn)
// SC: O(n) Original and Sorted Array
// TIME LIMIT EXCEEDED
// 17/18 Test Cases Passed
class MinStack {
public:
    /** initialize your data structure here. */
    
    vector<int> stack, sorted_stack;
    int size;
    
    MinStack() {
        size = 0;
    }
    
    void push(int x) {
        stack.push_back(x);
        sorted_stack.push_back(x);

        size++;
    }
    
    void pop() {
        int pop = stack[size-1];
        stack.pop_back();
        
        delete_element(sorted_stack, pop);

        size--;
    }
    
    int top() {
        return stack[stack.size()-1];
    }
    
    int getMin() {
        sort_stack(sorted_stack);
        return sorted_stack[0];
    }
    
    void delete_element(vector<int> &stack, int e){
        int index;
        int n = stack.size();
        
        for(int i = 0; i < stack.size(); i++){
            if(e == stack[i]){
                index = i; 
                break;
            }
        }
        
        stack.erase(stack.begin() + index);
    }
    
    void sort_stack(vector<int> &stack){
        sort(sorted_stack.begin(), sorted_stack.end(), [](int a, int b){
            return a < b;
        });
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(x);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */

// TC: push: O(1) pop: O(1) top: O(1) getMin: O(n)
// SC: O(n) Original
// 17/18 Test Cases Passed
class MinStack {
public:
    /** initialize your data structure here. */
    
    vector<int> stack;
    int size;
    int lowest;
    
    MinStack() {
        size = 0;
        lowest = INT_MAX;
    }
    
    void push(int x) {
        stack.push_back(x);
        size++;
    }
    
    void pop() {
        stack.pop_back();
        size--;
    }
    
    int top() {
        return stack[size-1];
    }
    
    int getMin() {
        updateLowest();

        return lowest;
    }
    
    void updateLowest(){
        int low = stack[0];
        
        for(int i = 1; i < stack.size(); i++)
            if(stack[i] < low)
                low = stack[i];
        
        lowest = low;
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(x);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */