function solution(a, b, c) {
    let sum = a + b + c;
    let longest;
    if (a > b) longest = a;
    else longest = b;
    if (c > longest) longest = c;

    return sum - longest > longest ? "Yes" : "NO";
}
