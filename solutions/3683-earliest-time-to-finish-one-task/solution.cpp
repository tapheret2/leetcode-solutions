// Problem: 3683. Earliest Time to Finish One Task
// Difficulty: Easy
// Language: C++
// Runtime: 0 ms
// Memory: 36.8 MB
// Link: https://leetcode.com/problems/earliest-time-to-finish-one-task/

class Solution {
public:
    int earliestTime(vector<vector<int>>& tasks) {
        int maxEndTime = tasks[0][0] + tasks[0][1];
    for (int i = 1; i < tasks.size(); i++) {
        // Assume tasks[i][0] is start_time, tasks[i][1] is duration
        int endTime = tasks[i][0] + tasks[i][1];
        maxEndTime = min(maxEndTime, endTime);
    }
    return maxEndTime;
    }
};
