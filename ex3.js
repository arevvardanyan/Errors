function reverseString(s) {
    try {
      if (typeof s !== "string") {
        throw new Error("s.split is not a function");
      }
      
      s = s.split("").reverse().join("");
      console.log(s);
    } catch (error) {
      console.log(error.message);
    }
  }

  console.log(reverseString(5789))