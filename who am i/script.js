function showFact(number) {
  const facts = {
    1: "My favorite TV show is House MD!",
    2: "My favorite color is pink!",
    3: "I'm grateful to have visited over 20 countries. My favorite spots are Saint-Tropez, France; Washington DC, U.S.; and Aspen, Colorado, U.S.!",
    4: "My favorite drinks are matcha, Arnold Palmer, and Diet Coke.",
    5: "My favorite clothing brands are Alo Yoga, Lululemon, Brandy Melville, Aritzia, and Pacsun."
  };

  const display = document.getElementById("fact-display");
  display.textContent = facts[number] || "No fact found!";
}