// Bad: Complex conditional
if (user.age > 18 && user.status === "active" && !user.isBlocked) {
    console.log("Access granted");
  }
  
  // Good: Extracted logic
  const canAccess = (user) => user.age > 18 && user.status === "active" && !user.isBlocked;
  
  if (canAccess(user)) {
    console.log("Access granted");
  }

  // Best Practice
  function checkUser(user) {
    if (!user) return "No user";
    if (user.age < 18) return "Too young";
    return "Valid user";
  }

  // Pro Tip