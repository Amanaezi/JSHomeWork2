let n = Math.floor(Math.random() * 11 + 1)
let x = 1;
let sum = 0;
for (let i = 1; i <= n; i++)
{
    x *= 2;
    sum += x;
    console.log(x);
}