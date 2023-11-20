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

        // Create an array for the number of tiles.

        let tiles = []

        // Push the coordinate values to the array.

        function assignTiles() {
            for (y = 0; y < 4; y++) {
                for(x = 0; x < 4; x++) {
                    tiles.push([y * 100, x * 100]);
                }
            }
        }

        // Take the array and shuffle it.

        function shuffleArray() {
                let currentIndex = tiles.length, randomIndex;
                while (currentIndex > 0) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;

                    [tiles[currentIndex], tiles[randomIndex]] = [
                    tiles[randomIndex], tiles[currentIndex]];
                }
            return tiles;
        }

        // Draw the image, one tile at a time, with border.

        function drawTiles() {

            for (i = 0; i < rows; i++) {
                for (j = 0; j < cols; j++) {
                    let sx = j * tileSize;
                    let sy = i * tileSize;
                    let dx = tiles[j][1];
                    let dy = tiles[i][0];

                    ctx.drawImage(image, sx, sy, tileSize, tileSize, dx, dy, tileSize, tileSize);
                    ctx.strokeRect(dx, dy, tileSize, tileSize);
                }
            }
        }

        function createPuzzle() {
            assignTiles();
            shuffleArray(tiles);
            drawTiles(tiles);
        }
