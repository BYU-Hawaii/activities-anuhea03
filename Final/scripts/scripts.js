const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const scoreElement = document.getElementById('score');

const CHARACTER_WIDTH = 50;
const CHARACTER_HEIGHT = 100;
const ROPE_WIDTH = 200;
const ROPE_HEIGHT = 10;

let character = { x: canvas.width / 2 - CHARACTER_WIDTH / 2, y: canvas.height - CHARACTER_HEIGHT - 50, width: CHARACTER_WIDTH, height: CHARACTER_HEIGHT, dy: 0, gravity: 1, jump: -15 };
let rope = { x: 0, y: canvas.height - 100, width: ROPE_WIDTH, height: ROPE_HEIGHT, speed: 5 };
let score = 0;
let gameActive = false;
let gameSpeed = 1;

function startGame() {
    character.dy = 0;
    rope.speed = 5;
    score = 0;
    gameSpeed = 1;
    gameActive = true;
    scoreElement.textContent = score;
}

function resetGame() {
    gameActive = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '48px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Press Start to Play', canvas.width / 2 - 150, canvas.height / 2);
}

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', resetGame);

function update() {
    if (gameActive) {
        character.dy += character.gravity;
        character.y += character.dy;
        if (character.y + character.height > canvas.height - 50) {
            character.y = canvas.height - character.height - 50;
        }

        rope.x += rope.speed * gameSpeed;
        if (rope.x + rope.width > canvas.width || rope.x < 0) {
            rope.speed = -rope.speed;
            score++;
            scoreElement.textContent = score;
            if (score % 10 === 0) {
                gameSpeed += 0.1;
            }
        }

        if (character.y + character.height > rope.y && character.x < rope.x + rope.width && character.x + character.width > rope.x) {
            resetGame();
        }

        draw();
        requestAnimationFrame(update);
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw character
    ctx.fillStyle = 'blue';
    ctx.fillRect(character.x, character.y, character.width, character.height);

    // Draw rope
    ctx.fillStyle = 'red';
    ctx.fillRect(rope.x, rope.y, rope.width, rope.height);
}

window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && gameActive && character.y + character.height >= canvas.height - 50) {
        character.dy = character.jump;
    }
});

resetGame();
update();
