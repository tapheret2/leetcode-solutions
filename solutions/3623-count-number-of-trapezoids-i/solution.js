// Problem: 3623. Count Number of Trapezoids I
// Difficulty: Medium
// Language: JavaScript
// Runtime: 49 ms
// Memory: 96.8 MB
// Link: https://leetcode.com/problems/count-number-of-trapezoids-i/

/**
 * @param {number[][]} points
 * @return {number}
 */
function countTrapezoids(points) {
    const MOD = 1000000007n;
    const inv2 = 500000004n; // nghịch đảo của 2 mod MOD (vì (2 * 500000004) % MOD = 1)

    // Đếm số điểm theo từng giá trị y
    const countY = new Map();
    for (const [x, y] of points) {
        // key là y (Number), value là count BigInt
        countY.set(y, (countY.get(y) || 0n) + 1n);
    }

    let sumA = 0n;   // Σ C(n_i, 2) mod MOD
    let sumSq = 0n;  // Σ (C(n_i, 2)^2) mod MOD

    for (const n of countY.values()) {
        if (n >= 2n) {
            // C(n, 2) = n * (n - 1) / 2
            let a = (n * (n - 1n)) / 2n;
            a %= MOD; // đưa về mod cho an toàn

            sumA = (sumA + a) % MOD;
            sumSq = (sumSq + (a * a) % MOD) % MOD;
        }
    }

    // Nếu không có dòng nào có ít nhất 2 điểm → không có trapezoid
    if (sumA === 0n) return 0;

    // Công thức: sum_{i<j} a_i * a_j = ((Σa_i)^2 - Σ(a_i^2)) / 2
    let ans = (sumA * sumA) % MOD;
    ans = (ans - sumSq + MOD) % MOD; // tránh âm
    ans = (ans * inv2) % MOD;

    return Number(ans);
}

