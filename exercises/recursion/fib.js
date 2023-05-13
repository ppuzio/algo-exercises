function fib(input){
  if(input === 0) return 0;
  if(input === 1 || input === 2) return 1;
  
  return fib(input - 2) + fib(input - 1);
}