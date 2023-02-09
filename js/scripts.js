window.addEventListener('load', function(event) {
  const submitButton = document.getElementById('submitButton');
  const results = document.getElementById('results');
  const userInput = document.getElementById('userInput');

  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Submitted?!?!?');

    const numberInput = toRoman(userInput.value);
    results.textContent = numberInput;
    userInput.value = '';
  });


  function toRoman(num) {
    if (isNaN(num) || num > 3999) {
      return NaN;
  }
  let digits = String(+num).split(""),
  key = 
    ["",'C', 'CC', 'CCC', 'CD','D','DC','DCC','DCC','CM',
    '','X','XX','XXX','XL', 'L', 'LX', 'LXX','LXXX','XC',
    '','I','II','III','IV','V','VI','VII','VIII','IX'],
  roman = "",
  i=3;
  while (i--)
    roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join('') + 1).join('M') + roman;
  }
});