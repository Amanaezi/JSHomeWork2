let n = Math.floor(Math.random() * 11 + 1)
let x = 1;
let sum = 0;
let weight = 0;
for (let i = 1; i <= n; i++)
{
    x *= 2;
    sum += x;
    weight += x * 0.065;
    console.log(x);
}
console.log(`Кол-во зерен пшеницы: ${sum}`);
console.log(`Вес в граммах: ${weight}`);
console.log(`Вес в килограммах: ${sum / 1000}`);