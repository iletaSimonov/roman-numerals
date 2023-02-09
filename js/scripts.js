function toRoman(num) {
  if (isNaN(num)) 
    return NaN;
  let digits = String(+num).split(""),
  key = 
    ["",'C', 'CC', 'CCC', 'CD','D','DC','DCC','DCC','CM',
    '','X','XX','XXX','XL', 'L', 'LX', 'LXX','LXXX','XC',
    '','I','II','III','IV','V','VI','VII','VIII','IX'],
  roman = "",
  i=3;
  }
