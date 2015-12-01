function mygcd(x,y) {
  if (y > x) {var temp = x; x = y; y = temp;}
  while (true) {
      if (y == 0) return x;
      x %= y;
      if (x == 0) return y;
      y %= x;
  }
};
