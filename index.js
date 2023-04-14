// function that change font color randomly
const changeFontColor = () => {
  const colors = ["red", "blue", "green", "purple", "yellow", "orange"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.color = randomColor;
}

// function that change font position randomly
const changeFontPosition = () => {
  const positions = ["relative", "absolute", "fixed", "static"];
  const randomPosition = positions[Math.floor(Math.random() * positions.length)];
  document.body.style.position = randomPosition;
}

// function that change font size randomly
const changeFontSizeRandomly = () => {
  const element = document.getElementById("myElement");
  const minSize = 12;
  const maxSize = 36;
  const size = Math.floor(Math.random() * (maxSize - minSize + 1) + minSize);
  element.style.fontSize = `${size}px`;
};

// function that separate each letter randomly
const separateLettersRandomly = (str) => {
  return str
    .split('')
    .map((char) => {
      const chance = Math.random();
      return chance < 0.5 ? `${char} ` : char;
    })
    .join('');
};

// function that hide font randomly
const hideFontRandomly = () => {
  const elements = document.getElementsByTagName('*');
  const index = Math.floor(Math.random() * elements.length);
  elements[index].style.visibility = 'hidden';
}