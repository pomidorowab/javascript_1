const memoryGame = {
    tileCount : 18, //liczba klocków
    tileOnRow : 6, //liczba klocków na rząd
    divBoard : null, //div z planszą gry
    divScore : null, //div z wynikiem gry
    tiles : [], //tutaj trafi wymieszana tablica klocków
    tilesChecked : [], //zaznaczone klocki
    moveCount : 0, //liczba ruchów
    dataczas : 0, //data i czas
    tilesImg : [ //grafiki dla klocków
        "images/title_1.png",
        "images/title_2.png",
        "images/title_3.png",
        "images/title_4.png",
        "images/title_5.png",
        "images/title_6.png",
        "images/title_7.png",
        "images/title_8.png",
        "images/title_9.png"
    ],
    canGet : true, //czy można klikać na kafelki
    tilePairs : 0, //liczba dopasowanych kafelkow

    tileClick(e) {
        if (this.canGet) {
            //jeżeli jeszcze nie pobraliśmy 1 elementu
            //lub jeżeli index tego elementu nie istnieje w pobranych...
            if (!this.tilesChecked[0] || (this.tilesChecked[0].dataset.index !== e.target.dataset.index)) {
                this.tilesChecked.push(e.target);
                e.target.style.backgroundImage = "url(" + this.tilesImg[e.target.dataset.cardType] + ")";
            }

            if (this.tilesChecked.length === 2) {
                this.canGet = false;

                if (this.tilesChecked[0].dataset.cardType === this.tilesChecked[1].dataset.cardType) {
                    setTimeout(this.deleteTiles.bind(this), 500);
                } else {
                    setTimeout(this.resetTiles.bind(this), 500);
                }
                this.moveCount++;
		        this.dataczas= new Date();
                this.divScore.innerText = this.moveCount;
                this.divScore.innerText = 'Liczba odsłon: ' + this.divScore.innerText +', data: '+ this.dataczas.toLocaleDateString() +', godzina: '+ this.dataczas.getHours() +':'+ this.dataczas.getMinutes() +':'+ this.dataczas.getSeconds();
            }
        }
    },

    deleteTiles() {
        var psr = 'U2FsdGVkX18OcQrJnPGtLf6DHVjhOecuKXms5G9MJUBR2AYq52iZZ8TodLGW9DgB';
        var plain = CryptoJS.AES.decrypt(psr, 'CryptoJS.pad.Pkcs7', "{ mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }");
        //this.tilesChecked[0].remove();
        //this.tilesChecked[1].remove();

        this.canGet = true;
        this.tilesChecked = [];

        this.tilePairs++;
        if (this.tilePairs >= this.tileCount / 2) {
            document.getElementById('pass_p').innerHTML = plain.toString(CryptoJS.enc.Utf8);
        }
    },

    resetTiles() {
        this.tilesChecked[0].style.backgroundImage = "url(images/title.png)";
        this.tilesChecked[1].style.backgroundImage = "url(images/title.png)";

        this.tilesChecked = [];
        this.canGet = true;
    },

    startGame() {
        //czyścimy planszę
        document.getElementById('pass_p').innerHTML=""
        this.divBoard = document.querySelector(".game-board");
        this.divBoard.innerText = "";

        //czyścimy planszę z ruchami
        this.divScore = document.querySelector(".game-score");
        this.divScore.innerText = "";

        //czyścimy zmienne (bo gra może się zacząć ponownie)
        this.tiles = [];
        this.tilesChecked = [];
        this.moveCount = 0;
        this.canGet = true;
        this.tilePairs = 0;

        //generujemy tablicę numerów kocków (parami)
        for (let i=0; i<this.tileCount; i++) {
            this.tiles.push(Math.floor(i/2));
        }

        //i ją mieszamy
        for (let i=this.tileCount-1; i>0; i--) {
            const swap = Math.floor(Math.random()*i);
            const tmp = this.tiles[i];
            this.tiles[i] = this.tiles[swap];
            this.tiles[swap] = tmp;
        }

        for (let i=0; i<this.tileCount; i++) {
            const tile = document.createElement("div");
            tile.classList.add("game-tile");
            this.divBoard.appendChild(tile);

            tile.dataset.cardType = this.tiles[i];
            tile.dataset.index = i;
            tile.style.left = 5+(tile.offsetWidth+10)*(i%this.tileOnRow) + "px";
            tile.style.top = 5+(tile.offsetHeight+10)*(Math.floor(i/this.tileOnRow)) + "px";

            tile.addEventListener("click", this.tileClick.bind(this));
        }
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.querySelector(".game-start");
    startBtn.addEventListener("click", () => memoryGame.startGame());
});

