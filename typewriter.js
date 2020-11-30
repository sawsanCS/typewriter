const sentence = "hello there from lighthouse labs";
let t = 0;
for (const char of sentence) {
  setTimeout(function() {process.stdout.write(char)}, t += 50);
}
console.log();
console.log();