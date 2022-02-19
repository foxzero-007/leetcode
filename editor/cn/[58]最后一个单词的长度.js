//<p>给你一个字符串 <code>s</code>，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。</p>
//
//<p><strong>单词</strong> 是指仅由字母组成、不包含任何空格字符的最大子字符串。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = "Hello World"
//<strong>输出：</strong>5
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = "   fly me   to   the moon  "
//<strong>输出：</strong>4
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = "luffy is still joyboy"
//<strong>输出：</strong>6
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
//	<li><code>s</code> 仅有英文字母和空格 <code>' '</code> 组成</li>
//	<li><code>s</code> 中至少存在一个单词</li>
//</ul>
//<div><div>Related Topics</div><div><li>字符串</li></div></div><br><div><li>👍 420</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s=s.trim()
    let words=s.split(' ')
    return words[words.length-1].length
};
//leetcode submit region end(Prohibit modification and deletion)
