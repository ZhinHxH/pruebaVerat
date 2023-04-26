const Game = require("./game");

test("Posible valor del dado", () => {
  const game = Game(true, 0, 0);
  const dados = game[0];
  const p1 = game[2]
  const p2 = game[3]
  console.log(game)
  expect(dados).toBeGreaterThanOrEqual(1);
  expect(dados).toBeLessThanOrEqual(6);
  expect(p1).toBeGreaterThanOrEqual(0);
  expect(p2).toBeGreaterThanOrEqual(0);
});

test("Posible valor del dado", () => {
    const game = Game(true, 11, 11);
    const dados = game[0];
    const p1 = game[2]
    const p2 = game[3]
    console.log(game)
    expect(p1).toBeGreaterThanOrEqual(11);
    expect(p2).toBeGreaterThanOrEqual(11);
  });
  