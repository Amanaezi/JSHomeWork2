const numerator = +prompt("Введите числитель:");
const denominator = +prompt("Введите знаменатель:");

if (isNaN(numerator) || isNaN(denominator)) 
{
    alert("Неправильный ввод. Числитель и знаменатель должны быть числами.");
}
if (denominator === 0) 
{
    alert("Неправильный ввод. Знаменатель не может быть равен нулю.");
}
else
{

let m = numerator;
let n = denominator;

if (m >= n) 
{
    const integerPart = ~~(m / n);
    const fractionalPartNumerator = m % n;
    alert(`Целая часть: ${integerPart}`);
    if (fractionalPartNumerator !== 0) 
    {
        while (m !== n)
    {
        if(m > n)
        {
            m -= n;
            alert(m);
        }
    else
    {
        n -= m;
        alert(n);
    }
    }
        alert(`Дробная часть: ${fractionalPartNumerator / m} / ${denominator / n}`);
    }
    alert(`${integerPart} ${fractionalPartNumerator / m}/${denominator / n}`);
} 
else 
{
    while (m !== n)
    {
        if(m > n)
        {
            m -= n;
            alert(m);
        }
    else
    {
        n -= m;
        alert(n);
    }
    }
    alert(`${numerator / m} / ${denominator / n}`);
}
}





















/*
while (m1 !== n1)
{
    if(m1 > n1)
    {
        m1 -= n1;
        console.log(m1);
    }
    else
    {
        n1 -= m1;
        console.log(n1);
    }
}

console.log(`${n / n1} / ${m / m1}`);
*/
/* todo
m == 1
m == 0
неправильний дріб
*/