//<p>给你两个二进制字符串，返回它们的和（用二进制表示）。</p>
//
//<p>输入为 <strong>非空 </strong>字符串且只包含数字&nbsp;<code>1</code>&nbsp;和&nbsp;<code>0</code>。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例&nbsp;1:</strong></p>
//
//<pre><strong>输入:</strong> a = &quot;11&quot;, b = &quot;1&quot;
//<strong>输出:</strong> &quot;100&quot;</pre>
//
//<p><strong>示例&nbsp;2:</strong></p>
//
//<pre><strong>输入:</strong> a = &quot;1010&quot;, b = &quot;1011&quot;
//<strong>输出:</strong> &quot;10101&quot;</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li>每个字符串仅由字符 <code>&#39;0&#39;</code> 或 <code>&#39;1&#39;</code> 组成。</li>
//	<li><code>1 &lt;= a.length, b.length &lt;= 10^4</code></li>
//	<li>字符串如果不是 <code>&quot;0&quot;</code> ，就都不含前导零。</li>
//</ul>
//<div><div>Related Topics</div><div><li>位运算</li><li>数学</li><li>字符串</li><li>模拟</li></div></div><br><div><li>👍 746</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var temp1=a.split("")
    var temp2=b.split("")
    var flag=0
    var res=[]
    if(temp1.length<temp2.length){
        var temp = temp1
        temp1=temp2
        temp2=temp
    }
    while (temp1.length>0){
        if(temp2.length===0){
            temp2.unshift("0")
        }
        let add=parseFloat(temp1.pop())+parseFloat(temp2.pop())+flag
        if(add===2){
            res.unshift(0)
            flag=1
            continue
        }
        if(add===3){
            res.unshift(1)
            flag=1
            continue
        }
        res.unshift(add)
        flag=0
    }
    if(flag!==0){
        res.unshift(flag)
    }
    return res.join("")
};
//leetcode submit region end(Prohibit modification and deletion)
