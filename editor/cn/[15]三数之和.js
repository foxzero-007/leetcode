//给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重
//复的三元组。 
//
// 注意：答案中不可以包含重复的三元组。 
//
// 
//
// 示例 1： 
//
// 
//输入：nums = [-1,0,1,2,-1,-4]
//输出：[[-1,-1,2],[-1,0,1]]
// 
//
// 示例 2： 
//
// 
//输入：nums = []
//输出：[]
// 
//
// 示例 3： 
//
// 
//输入：nums = [0]
//输出：[]
// 
//
// 
//
// 提示： 
//
// 
// 0 <= nums.length <= 3000 
// -10⁵ <= nums[i] <= 10⁵ 
// 
// Related Topics 数组 双指针 排序 👍 4634 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums==null||nums.length<3){
        return []
    };
    let res = [];
    nums.sort((a,b)=>a-b);
    for(let i = 0;i<nums.length;i++){
        if(nums[i]>0){break};
        if(nums[i] == nums[i-1]){continue};
        let L = i+1;
        let R = nums.length -1;
        while(L<R){
            if(nums[L]+nums[R]+nums[i]===0){
                while(nums[R-1]===nums[R]&&R-1>L){R--};
                while(nums[L+1]===nums[L]&&L+1<R){L++};
                res.push([nums[i],nums[L],nums[R]])
                L++;
                R--;
            }else if(nums[L]+nums[R]+nums[i]>0){
                R--;
            }else if(nums[L]+nums[R]+nums[i]<0){
                L++
            }
        }

    }
    return res;
};
//leetcode submit region end(Prohibit modification and deletion)
