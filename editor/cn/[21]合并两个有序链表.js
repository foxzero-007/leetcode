//<p>将两个升序链表合并为一个新的 <strong>升序</strong> 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 </p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" style="width: 662px; height: 302px;" />
//<pre>
//<strong>输入：</strong>l1 = [1,2,4], l2 = [1,3,4]
//<strong>输出：</strong>[1,1,2,3,4,4]
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>l1 = [], l2 = []
//<strong>输出：</strong>[]
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>l1 = [], l2 = [0]
//<strong>输出：</strong>[0]
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li>两个链表的节点数目范围是 <code>[0, 50]</code></li>
//	<li><code>-100 <= Node.val <= 100</code></li>
//	<li><code>l1</code> 和 <code>l2</code> 均按 <strong>非递减顺序</strong> 排列</li>
//</ul>
//<div><div>Related Topics</div><div><li>递归</li><li>链表</li></div></div><br><div><li>👍 2093</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1){
        return list2
    }
    if(!list2){
        return list1
    }
    if(list1.val<list2.val){
        var temp = list2
        list2=list1
        list1=temp
    }
    var res=list2
    while(list1){
        if(list2.next&&list2.val<=list1.val&&list1.val<=list2.next.val){
            var temp = list1.next
            list1.next=list2.next
            list2.next=list1
            list2=list2.next
            list1=temp
            console.log(res)
        }else if(list2.next){
            list2=list2.next
        }else{
            list2.next=list1
            break
        }
    }
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
