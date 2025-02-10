/* 
DP: Dynamic Programming : RECUSION + MEMOIZATION + TABULATION 
1. Recursion : Top Down Approach
2. Memoization : Top Down Approach : Store the result of the subproblems
3. Tabulation : Bottom Up Approach : Iterative approach to solve the problem


1. Fibonacci Numbers	Solution Link	Problem Link	
Climbing Stairs	 https://youtu.be/Y0lT9Fck7qI	https://leetcode.com/problems/climbing-stairs/	
House Robber	https://youtu.be/73r3KWiEvyk	https://leetcode.com/problems/house-robber/	
Fibonacci Number		https://leetcode.com/problems/fibonacci-number/	
Maximum Alternating Subsequence Sum	https://youtu.be/4v42XOuU1XA	https://leetcode.com/problems/maximum-alternating-subsequence-sum/	
			
2. Zero / One Knapsack			
Partition Equal Subset Sum	https://youtu.be/IsvocB5BJhw	https://leetcode.com/problems/partition-equal-subset-sum/	
Target Sum	https://www.youtube.com/watch?v=g0npyaQtAQM	https://leetcode.com/problems/target-sum/	
			
3. Unbounded Knapsack			
Coin Change	https://youtu.be/H9bfqozjoqs	https://leetcode.com/problems/coin-change/	
Coin Change II	https://www.youtube.com/watch?v=Mjy4hd2xgrs	https://leetcode.com/problems/coin-change-2/	
Minimum Cost for Tickets	https://www.youtube.com/watch?v=4pY1bsBpIY4	https://leetcode.com/problems/minimum-cost-for-tickets/	
			
4. Longest Common Subsequence			
Longest Common Subsequence	https://youtu.be/Ua0GhsJSlWM	https://leetcode.com/problems/longest-common-subsequence/	
Longest Increasing Subsequence	https://youtu.be/cjWnW0hdF1Y	https://leetcode.com/problems/longest-increasing-subsequence/	
Edit Distance	https://youtu.be/XYi2-LPrwm4	https://leetcode.com/problems/edit-distance/	
Distinct Subsequences	https://youtu.be/-RDzMJ33nx8	https://leetcode.com/problems/distinct-subsequences/	
			
5. Palindromes			
Longest Palindromic Substring	https://youtu.be/XYQecbcd6_c	https://leetcode.com/problems/longest-palindromic-substring	
Palindromic Substrings	https://youtu.be/4RACzI5-du8	https://leetcode.com/problems/palindromic-substrings/	
Longest Palindromic Subsequence		https://leetcode.com/problems/longest-palindromic-subsequence/	
*/



//1. Fibonacci Numbers Fib(0) = 0, Fib(1) = 1, Fib(n) = Fib(n-1) + Fib(n-2)
//recursive approch
const Fibonacci = (num:number) : number => {
    return num <= 1 ? num : Fibonacci(num - 1) + Fibonacci(num - 2);
}
//iterative approch
const FibonacciIterative = (num:number):number =>{
    let a = 0, b = 1, ans = 0;
    for(let i = 1; i < num; i++){
        ans = a + b;
        a = b;
        b = ans;
    } 
    return ans
}

/* 
recursion :  
1. Function definition itself calls itself 
2. Base case is defined to stop the recursion 
3. Recursive case is defined to call the function itself 
4. Recursive case should move towards the base case 
5. Recursive case should not be infinite
*/

/* 
0-1 Knapsack Problem : choise of taking or not taking the item
unbounded knapsack : choice of taking the item multiple times
fractional knapsack : choice of taking the fraction of the item (Greedy approach)
*/

//1. Zero - One Knapsack
const knapSack = (W:number, wt:number[], val:number[], n:number):number =>{
    if(n === 0 || W === 0) return 0;
    if(wt[n-1] <= W){
        return Math.max(val[n-1] + knapSack(W - wt[n-1], wt, val, n-1), knapSack(W, wt, val, n-1));
    }else{
        return knapSack(W, wt, val, n-1);
    }
}
//Memoization
const knapSackMemoization = (W:number, wt:number[], val:number[], n:number):number =>{
    const dp:number[][] = Array.from({length:n+1}, () => Array(W+1).fill(0));
    return knapSackMemoizationHelper(W, wt, val, n, dp);
}
const knapSackMemoizationHelper = (W:number, wt:number[], val:number[], n:number, dp:number[][]):number =>{
    if(n === 0 || W === 0) return 0;
    if(dp[n][W] !== 0) return dp[n][W];
    if(wt[n-1] <= W){
        return dp[n][W] = Math.max(val[n-1] + knapSackMemoizationHelper(W - wt[n-1], wt, val, n-1, dp), knapSackMemoizationHelper(W, wt, val, n-1, dp));
    }else{
        return dp[n][W] = knapSackMemoizationHelper(W, wt, val, n-1, dp);
    }
}

//Tabulation or Top Down Approach
const knapSackTabulation = (W:number, wt:number[], val:number[], n:number):number =>{
    const dp:number[][] = Array.from({length:n+1}, () => Array(W+1).fill(0));
    for(let i = 1; i <= n; i++){
        for(let w = 1; w <= W; w++){
            if(wt[i-1] <= w){
                dp[i][w] = Math.max(val[i-1] + dp[i-1][w - wt[i-1]], dp[i-1][w]);
            }else{
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    return dp[n][W];
}

