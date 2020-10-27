class Snake{
	constructor(game) {
		this.game = game;
		this.x = 0;
		this.y = 0;
		this.grid = 20;
		this.dx = this.grid;
		this.dy = 0;
		this.snake = [];
		this.maxSnake = 1;
	}

	update() {
		if(this.endGame()){
			this.x += this.dx;
			this.y += this.dy;
		}

		if(this.x >= this.game.canvas.width){
			this.x = 0;
		}

		else if(this.x < 0){
			this.x = this.game.canvas.width;
		}

		if(this.y >= this.game.canvas.height){
			this.y = 0;
		}

		else if(this.y < 0){
			this.y = this.game.canvas.height;
		}

		this.snake.unshift({x: this.x, y: this.y});
		if(this.snake.length > this.maxSnake){
			this.snake.pop();
		}
		this.move();
		
	}

	draw() {
		for(let i = 0; i < this.snake.length; i++){
			let img=document.getElementById('img-snake');
			this.game.context.drawImage(img, this.x, this.y)
			this.game.context.drawImage(img, this.snake[i].x, this.snake[i].y);
		}

		if(!this.endGame()) {
			alert("You Lose");
		}
	}

	move() {
		document.addEventListener('keydown', (e) => {
			if(e.which == 37 && this.dx == 0){
				this.dx = -this.grid;
				this.dy = 0;
			}

			else if(e.which == 38 && this.dy == 0){
				this.dx = 0;
				this.dy = -this.grid;
			}

			else if(e.which == 39 && this.dx == 0){
				this.dx = this.grid;
				this.dy = 0;
			}

			else if(e.which == 40 && this.dy == 0){
				this.dx = 0;
				this.dy = this.grid;
			}
		});
	}

	eat(x, y) {
		if(this.x === x && this.y === y){
			this.maxSnake++;
			return true;
		}
		return false;
	} 

	endGame(){
		for(let i = 1; i < this.snake.length; i++){
			if(this.x === this.snake[i].x && this.y === this.snake[i].y ){
				return false;
			}
		}
		return true;
	}
}