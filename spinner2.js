let array = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
];
let delay = 100;

function spinner(arr) {
  for (let spin of arr) {
    setTimeout(() => {
      process.stdout.write(spin);
    }, delay);
    delay += 200;
  }
}

spinner(array);
