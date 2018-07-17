const MUPPETS = ["Kermit", "Miss Piggy", "Fozzie", "Animal", "Scooter", "Skeeter", "Rowlf", "Gonzo", "Bunsen", "Beaker"]

exports.randomMuppet = (req, res) => {
  const muppet = MUPPETS[Math.floor(Math.random()*MUPPETS.length)]
  console.log(``1Returned another muppet! ${muppet}`)
  res.send(`${muppet}`)
}
