//<p>给定一个由 <strong>整数 </strong>组成的<strong> 非空</strong> 数组所表示的非负整数，在该数的基础上加一。</p>
//
//<p>最高位数字存放在数组的首位， 数组中每个元素只存储<strong>单个</strong>数字。</p>
//
//<p>你可以假设除了整数 0 之外，这个整数不会以零开头。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>digits = [1,2,3]
//<strong>输出：</strong>[1,2,4]
//<strong>解释：</strong>输入数组表示数字 123。
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>digits = [4,3,2,1]
//<strong>输出：</strong>[4,3,2,2]
//<strong>解释：</strong>输入数组表示数字 4321。
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>digits = [0]
//<strong>输出：</strong>[1]
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 <= digits.length <= 100</code></li>
//	<li><code>0 <= digits[i] <= 9</code></li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>数学</li></div></div><br><div><li>👍 920</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var temp=digits.pop()
    temp+=1
    console.log(temp)
    if(temp===10){
        if(digits.length===0){
            digits.unshift(0)
        }
        return plusOne(digits).concat([0])
    }else {
        digits.push(temp)
        return digits
    }
};
//leetcode submit region end(Prohibit modification and deletion)
