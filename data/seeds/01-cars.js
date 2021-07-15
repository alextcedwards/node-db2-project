// STRETCH
const cars = [
  {
    vin: "JTEGF21A320045593",
    make: "toyota",
    model: "prius",
    mileage: 215000,
    title: "clean",
    transmission: "automatic",
  },
  {
    vin: "JM1BL1UF6B1459616",
    make: "toyota",
    model: "corolla",
    mileage: 115000,
    title: "salvage",
  },
  {
    vin: "1G4GB5GR2EF147589",
    make: "toyota",
    model: "supra",
    mileage: 15000,
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
