        const canvas = document.getElementById('puzzleCanvas');
        const ctx = canvas.getContext('2d');
        const tileSize = 100;
        const rows = 4;
        const cols = 4;
        const image = new Image();

        image.onload = function() {
            createPuzzle();
        };

        image.src = 'images/devious.png';

        function drawTiles() {
            let tiles = [];
            let tileIds = [];

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    const sx = j * tileSize;
                    const sy = i * tileSize;
                    const dx = j * tileSize;
                    const dy = i * tileSize;
                    ctx.drawImage(image, sx, sy, tileSize, tileSize, dx, dy, tileSize, tileSize);
                    ctx.strokeRect(dx, dy, tileSize, tileSize);

                    for (let k = 0; k < rows * cols; k++) {
                        
                    }

                    if (j === 0 && i === 3) {
                        ctx.clearRect(dx, dy, tileSize, tileSize);
                    }
                }
            }
        }

        function createPuzzle() {
            canvas.addEventListener('click', handleClick);
            drawTiles();
            shuffleTiles();
        }



