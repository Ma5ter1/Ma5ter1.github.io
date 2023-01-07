const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const latin = [];
latin.push("0","1","00","01","11","10","00001","00010","00011","00100","00101","00110","00111","01000","01001","01011","01100","01101","01110","01111","10000","10001","10010","10011","10100","10101","10110","10111","11000","11001","11010","     ","!","@","#","$","%","^","&","*","(",")","-","_","+","=","[","]","{","}",";","'",":","<",">",",",".","?","/","☺","☻","♥","♦","♣","♠","•","◘","○","◙","♂","♀","♪","♫","☼","►","◄","↕","‼","¶","§","▬","↨","↑","↓","→","←","∟","↔","▲","▼","❄","℗","™","©","☎","✂","✇","✈","✉","✎","✌️","☝️","¢","$","€","£","¥","₮","♛","♯","++","==","<html>","<head>","<body>", "<script>", "<title>", "<canvas>","<a>","<b>","<button>","<dir>","<em>","<embed>","<p>","<header>","<footer>","<h1>","<h2>","<h3>","<hr>","<img>","<ol>","<table>");

const nums = [];
nums.push("0","1")

/*const alphabet = katakana + latin + nums;*/
const alphabet = latin;

const fontSize = 15;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const draw = () => {
  context.fillStyle = 'rgba(0, 0, 0, 0.08)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  context.fillStyle = "#" + randomColor;
  context.font = fontSize + 'px monospace';

  for (let i = 0; i < rainDrops.length; i++) {
    /*const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));*/
    const text = latin[Math.floor(Math.random()*latin.length)];
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.955) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

setInterval(draw, 30);