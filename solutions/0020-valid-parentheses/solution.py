# Problem: 20. Valid Parentheses
# Difficulty: Easy
# Language: Python
# Runtime: 0 ms
# Memory: 19.2 MB
# Link: https://leetcode.com/problems/valid-parentheses/

class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        
        for char in s:
            if char in '({[':  # If it's an opening bracket
                stack.append(char)
            elif char in ')}]':  # If it's a closing bracket
                if not stack:  # Stack empty but closing bracket found
                    return False
                last_open = stack.pop()  # Get the last opening bracket
                # Check if the brackets match
                if last_open == '(' and char != ')' or \
                   last_open == '[' and char != ']' or \
                   last_open == '{' and char != '}':
                    return False
        
        # Valid if stack is empty (all brackets matched)
        return len(stack) == 0
