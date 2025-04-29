class MathHelper {
    static add(x, y) {
      return x + y;
    }
  }
  
  console.log(MathHelper.add(5, 3)); // 8
  // MathHelper.add() is called directly on the class, not on an instance
  