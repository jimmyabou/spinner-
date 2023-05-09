process.stdout.write('hello from spinner1.js... \rheyyy\n');
let timer = 100;
for (let i = 1; i <= 2; i++) {

  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, timer);
  timer += 200;
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, timer);
  timer += 200;
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, timer);
  timer += 200;
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
  }, timer);
  timer += 200;
}
