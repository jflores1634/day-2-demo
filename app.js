'use strict';

 var kids = prompt('how many kids does jose have?');
 console.log('num of kids:', kids);

 var hats = prompt('how many hats does jose have?');
 console.log('num of hate:', hats);

 if (kids === '3' || kids === '4') {
   alert('u right');
 }

 if (kids === '3' && hats === '0') {
   alert('u right again.');
 }
