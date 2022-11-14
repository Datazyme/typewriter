const sentence = "hello there from lighthouse labs\n";
let index = 0;
const loop = setInterval(() => { 
    if (index === sentence.length - 1) { 
        clearInterval(loop) 
    } 
    process.stdout.write(sentence[index++])
     
}, 50);
// for (const char of sentence) {
//   setInterval(() => {
//     process.stdout.write(char);
//   }, 50)
// }

