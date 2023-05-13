const power = (base, exponent) => {
  return exponent < 1 ? 1 : base * power(base, exponent - 1);
};
