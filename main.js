let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);
secretMessage.splice(23);
console.log(secretMessage.length);
secretMessage.push('to');
secretMessage.push('program');

secretMessage.splice(7, 1, 'right');

secretMessage.splice(0, 1, 'Programming');

secretMessage.splice(6, 1);
secretMessage.splice(6, 1);
secretMessage.splice(6, 1);
secretMessage.splice(6, 1);
secretMessage.splice(6, 1, 'know');

console.log(secretMessage.join(' '));
