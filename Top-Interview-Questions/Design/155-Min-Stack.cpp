// TC: push: O(nlogn) pop: O(nlogn) top: O(1) getMin: O(1)
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
        sort_stack(sorted_stack);

        size++;
    }
    
    void pop() {
        int pop = stack[size-1];
        
        stack.pop_back();
        
        delete_element(sorted_stack, pop);
        sort_stack(sorted_stack);
        
        size--;
    }
    
    int top() {
        return stack[stack.size()-1];
    }
    
    int getMin() {
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