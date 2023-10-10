function reverseString(s) {
    try {
      const reversed = s.split('').reverse().join('');
      console.log(reversed);
    } catch (error) {
      console.log(error.message);
    } finally {
      console.log(s);
    }
  }

 console.log(reverseString(1234)) 