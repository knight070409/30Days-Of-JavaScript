
# Day 01

# Random Password Generator

# [Source Code](https://github.com/knight070409/30Days-Of-JavaScript/tree/main/Day%2001%20-%20Random%20Password%20Generator)

- How its work:-
Basically we have inputted some words, number and special characters using its Code shuffle its and make password of 12 letter length.

- Demo link :- [Click Here](https://knight070409.github.io/30Days-Of-JavaScript/Day%2001%20-%20Random%20Password%20Generator/)

- Javascript Code:-
```
const words = ['BOB', 'BAM', 'BND', 'XOF', 'BIF','yhf','miy','my','hello','world','ICE','HOT','COOL',
  'KHR', 'XAF', 'CVE', 'XAF', 'CLP', 'COP', 'KMF',
  'CRC', 'CUP', 'CDF', 'DKK', 'DJF', 'XCD', 'DOP',
  'EGP', 'XAF', 'ERN', 'ETB', 'FJD', 'XAF', 'GEL',
  'mud', 'sky', 'grew', 'hard', 'ill', 'frame',
  'XCD', 'GNF', 'GTQ', 'XOF', 'GYD', 'HTG', 'HNL',
  'GNF', 'HNL', 'ISK', 'IRR', 'Japan', 'Australia', 'Afghanistan',
  'Albania', 'Algeria', 'Brunei', 'Barbados', 'Chile', 'Dominica', 'Zambia',
  'Aromatic', 'Hearty', 'Roux', 'Victuals', 'Chiffonade', 'Divine', 'Omakase',
  'Sapid', 'Earthy', 'Fresh', 'Smoky', 'Sweet', 'Sour', 'Airy',
  'Chewy', 'Creamy', 'Crumbly', 'Blackened', 'Broiled', 'Glazed', 'Sauteed',
  'Basement', 'Den', 'Hall', 'Porch', 'Yard', 'Counter', 'Mirror',
  'Sink', 'Armchair ', 'Rug', 'Glass', 'Napkin', 'Stove', 'Microwave',
  'Toaster', 'dig', 'new', 'rest', 'play', 'win', 'strong'];

  function getPassword() {
    const chars ='0123456789/%?@#$%';
    const clength = chars.length;
    let password ='';

    while(password.length < 20){
        password = password.concat(randomWord(chars.length));
        password = password.concat(chars[randomNumber(clength)]);
    }

    password = password.substring(0,12);
    document.getElementById('password').value = password;
  }

  function randomNumber(e) {
    return Math.floor(Math.random()*e);
  }

  function randomWord() {
    const number = randomNumber(words.length);
    return words[number]
  }
  ```
  