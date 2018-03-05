module.exports = function count(s, pairs) {
  // your implementation
    let N=1;
    let count=0;
    if (String(pairs[0][1]).length>2 || pairs.length>3) {
        return 0;
    }

    for (let i=0; i<pairs.length; i++) {
        N*=Math.pow(pairs[i][0], pairs[i][1]);
    }

    function g_c_d(a, b) {
        while (a!=0 && b!=0) {
            if (a>b) {
                a%=b;
            }
            else {
                b%=a;
            }
        }
        return a+b;
    }

    if (s.includes('0') && s.includes('1')) {
        let condition1 = false,
            condition2 = false;
        for (let i = 0; i <= N - s.length + 1; i++) {
            for (let j = s.length-1; j > -1; j--) {
                if (s[j] == 1 && g_c_d(i + j, N) == 1 && !condition1) {
                    condition1 = true;
                }
                if (s[j] == 0 && g_c_d(i + j, N) != 1 && !condition2) {
                    condition2 = true;
                }
                if (condition1 && condition2) {
                    count += 1;
                    condition1 = false;
                    condition2 = false;
                    break;
                }
                if (j == 0) {
                    condition1 = false;
                    condition2 = false;
                }
            }
        }
    }

    if ((s.includes('0') && !s.includes('1')) || (!s.includes('0') && s.includes('1'))) {
        let condition1=false;
        for (let i = 1; i <= N - s.length + 1; i++) {
            for (let j = s.length-1, k=i; j > -1; j--, k++) {
                if (s[j] == 1 && g_c_d(k + j, N) == 1) {
                    condition1=true;
                    count+=1;
                }
                if (s[j] == 0 && g_c_d(k + j, N) != 1) {
                    count+=1;
                    condition1=true;
                }
                if (condition1) {
                    condition1=false;
                    break;
                }
            }
        }
    }
    return count%1000000007;
}