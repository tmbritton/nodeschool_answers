var sum = 0,
    int = 0;
process.argv.forEach(function(arg){
  if (int = parseInt(arg)) {
    sum = sum + int;
  } 
});

console.log(sum);
