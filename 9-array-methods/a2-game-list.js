const games = [ { id: 1586948654, date: "2022-10-27", score: 145, won: false },
                { id: 2356325431, date: "2022-10-30", score: 95, won: false },
                { id: 2968411644, date: "2022-10-31", score: 180, won: true },
                { id: 1131684981, date: "2022-11-01", score: 210, won: true },
                { id: 1958468135, date: "2022-11-01", score: 111, won: true },
                { id: 2221358512, date: "2022-11-02", score: 197, won: false },
                { id: 1847684969, date: "2022-11-03", score: 203, won: true } ];

//a
const gameId = games.filter(game => (game.id == 1958468135));
console.log(gameId);

//b
const gameWon = games.find(game => (game.won == true));
console.log(gameWon);
