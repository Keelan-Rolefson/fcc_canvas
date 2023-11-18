        const canvas = document.getElementById('puzzleCanvas');
        const ctx = canvas.getContext('2d');
        const tileSize = 100;
        const rows = 4;
        const cols = 4;
        const image = new Image();

        // Wait for the image to load, then create the puzzle.

        image.onload = function() {
            createPuzzle();
        };
        image.src = 'images/devious.png';

        // Draw the image, one tile at a time, with border - and clear the bottom left tile.

        function drawTiles() {

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    const sx = j * tileSize;
                    const sy = i * tileSize;
                    const dx = j * tileSize;
                    const dy = i * tileSize;
                    ctx.drawImage(image, sx, sy, tileSize, tileSize, dx, dy, tileSize, tileSize);
                    ctx.strokeRect(dx, dy, tileSize, tileSize);

                    if (j === 0 && i === 3) {
                        ctx.clearRect(dx, dy, tileSize, tileSize);
                    }
                }
            }
        }

        // Create an array the number of tiles.

        let tiles = []

        // Take an array and shuffle it.

        function shuffleArray(tiles) {
                let currentIndex = tiles.length, randomIndex;
                while (currentIndex > 0) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;

                    [tiles[currentIndex], tiles[randomIndex]] = [
                    tiles[randomIndex], tiles[currentIndex]];
                }
            return tiles;
        }

        // Populate the array with a number representing each tile

        function countTiles() {
            for (let i = 0; i < rows * cols; i++) {
                tiles[i] = i;
            }
            shuffleArray(tiles);
        }
        
        // Init

        function createPuzzle() {
            drawTiles();
            countTiles();
        }


        function assignTiles() {
            for (y = 0; y < 4; y++) {
                for(x = 0; x < 4; x++) {
                    tiles.push([y * 100, x * 100]);
                }
            }
        
        console.log(tiles);
        }

