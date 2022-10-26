/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    
    //returns reversed string
    public String reverse(String input){
        String output = "";
        
        for(int i = input.length() - 1; i >= 0; i--){
            output += input.charAt(i);
        }
        return output;
    }
    
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        //empty strings to hold string value of digits (reversed)
        String num1 = ""; //""
        String num2 = ""; //""
        
        //adds each digit to string num1 (still reversed)
        while(l1 != null){
            num1 += Integer.toString(l1.val); 
            l1 = l1.next;
        }
        // num1 = "243" 
        
        //adds each digit to string num2 (still reversed)
        while(l2 != null){
            num2 += Integer.toString(l2.val); 
            l2 = l2.next;
        }
        //num2 = "564"
        
        //reverses num1 and num2 (non reversed)
        num1 = reverse(num1); //"342"
        num2 = reverse(num2); //"465"
        
        //adds both numbers ("807")
        String added = Integer.toString(Integer.parseInt(num1) + Integer.parseInt(num2));
        
        //reverses added number (string) ("708")
        added = reverse(added);
        
        //creates list of all nodes
        ListNode [] list = new ListNode[added.length()];
        
        //adds node to list starting from last digit
        for(int i = (list.length - 1); i >= 0; i--){
            if(i == list.length - 1){
                list[i] = new ListNode(Integer.parseInt(Character.toString(added.charAt(i))));
            }
            else{
                list[i] = new ListNode(Integer.parseInt(Character.toString(added.charAt(i))), list[i + 1]);
            }
        }
        
        return list[0];
    }
}