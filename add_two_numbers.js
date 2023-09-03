/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let tempNode = new ListNode();
  let head = tempNode;
  let carry = false;

  while (l1 != null || l2 != null || carry) {
    let num1 = (l1 && l1.val) ?? 0;
    let num2 = (l2 && l2.val) ?? 0;
    let sum = carry ? num1 + num2 + 1 : num1 + num2;
    head.val = sum < 10 ? sum : sum - 10;
    carry = sum > 9 ?? false;
    l1 = (l1 && l1.next) ?? null;
    l2 = (l2 && l2.next) ?? null;
    if (l1 != null || l2 != null || carry) head.next = new ListNode();
    head = head.next;
  }
  return tempNode;
};
