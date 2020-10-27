class Mussroom{
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.grid = 20;
        this.update();
    }

    update() {
        this.x = (Math.floor((Math.random()*21)+1))*this.grid;
        this.y = (Math.floor((Math.random()*21)+1))*this.grid;
    }

    draw() {
        let img=document.getElementById('img-mussroom')
        this.game.context.drawImage(img, this.x, this.y)
    }
}