function combineNames(firstName1, firstName2) {
    let combined = firstName1.concat(" ", firstName2);
    return combined;
  }
  
  let firstNameA = "Alice";
  let firstNameB = "Bob";
  let result = combineNames(firstNameA, firstNameB);
  console.log(result); // Output: "Alice Bob"
  