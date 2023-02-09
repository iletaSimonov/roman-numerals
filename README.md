Describe: (isNaN(num))
Test: "This checks if the input is not a number
Code: if (isNan(num)) {return NaN;}
ExpectedOutput: NaN;

Describe: String(+num).split('')
Test: "This converts numbers to strings individually"
Code: let digits = String(+num).split('')
ExpectedOutput: 9 = "9";

Describe: while (i--)
Test: "This adds an 'M' for thousands"
Code: roman = (key[+digits.pop() +(i+10)] || "") 
Results: toRoman(12); = 'XII'


