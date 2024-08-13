const cars = require('./cars.js');

function createCar(object) {
  const id = cars[cars.length - 1].id + 1;
  const newCar = {
    id,
    nome: object.nome,
    imagem: object.imagem,
    equipamentos: object.equipamentos,
    css: object.css,
    price: object.price,
  };
  cars.push(newCar);

  return { message: 'Carro cadastrado com sucesso' };
}

const updateCarById = (object, idParament) => {
  if (idParament > cars.length) {
    return { message: 'Carro não encontrado!' };
  }

  cars.forEach((element) => {
    if (element.id === idParament) {
      element.nome = object.nome;
      element.imagem = object.imagem;
      element.equipamentos = object.equipamentos;
      element.css = object.css;
      element.price = object.price;
    }
  });
  return { message: 'Carro atualizado com sucesso!' };
};

// console.log(
//   createCar({
//     nome: 'Polo Do Eduardo',
//     imagem:
//       'https://media.vw.mediaservice.avp.tech/media/fast/H4sIAAAAAAAAAC2Uu84dNRCATxIlIIogQAjRoyOkSIy99y2OUBI6BEqBQpHi1-yu195j783j9f7_VjxQWnreg4YXoKKhQWKOlOrTXD0ez_j936enmz89effu1Y__ff2l1n-Wj0-n--V0Oj1i_eN3r97_89W_zz7-5a8P6mfn09Ow-WZ-xC5vHn8yjKgVXBelPz19xKrTk9Ppo98Yf9yE0_Pnm3cLehy_61Sz6c--VUmZFZUQdaXaqmizpKj6vJGql7mo6zZvq6xoE5l_fjo9_R2dg64Y5x7TrPfzFJYWmiOtpwdBk6fSQiKSDL4JftBa-bvR35lFgsxeFLawkBcv9h4QNyUQsMGtSxleLiypToYdsDebloB6LPU9oImyE4BDk20cZ7msEnAK1aEBSRUPLUMrZBdyOV0ZPvcr40FYVgaU94ytq3cO2AgrA7jHgm0NGmkjI1yzKyPKg6Bp5qJnSVu-EDSuaWTHUHZiaW7SkW3zLklC40kiBwQU8Qpt58sVoTWYmJzh16uEdo8JF9-pIe0Rut7Iq2fwCTUjalGAamfuM6iuF8oz9jqycjBlIIYrxxzUYsr7BBQN5S4YtNUt9NgJztkrk_mMsRXcgl5TdBJ6s8c-gd5h4RoG1UMOvR-SyDY_y5YRqdQccFDP76C7Md1z0GqqtAZtjXjoGdFxgXqcg6tAT322laAXn26SQcUoQHusQsJoasVKH3NkT1q0RDBosyNnuHQpGWHgAk0Ti8WAUXs1SjC6y7mthi1TwRiLaWdQOh1gLNqWbbRXQ4RhaupRweApcwVY9LbSDFqtBNvcS-6LdYd4KMHOJl3ZZY7pNQPrR3mw7fZULBHmnNPSZpHjNl1YzzD2luVorBPgsM15NFxjUo3gFDrhGK6ihDHJSTJ8athlwEpn4GZfLix5THrFiDxG4EhVnuOIkjYHt_tqTWFEKhSjx5oEjINNuwRGqxR3YrRbdWTAre50ASP1yM8xYSxXAROfHpBB1Y4wT1yNgAVHzVu1NCbj0z2inByjawfJmKvNMrb6iuB5wA5Wdrbka3oerb5guMjv7pWXvGqegmhuiOkawG_9xD0jbLJ7ydDFmjA2QQao8RVZIIXrkAJpWy81kMH0aBhj2pZAQzMJYqiUR5GcKn0BNGHpbjAVb9WHf4LmKb_nnItfuZ-0bOXNRiazLVDokyu7BC4zAO1LsiHDV7zMtFPF80L7US8K6NjEaiDYmHFJYXFNJiH4Pu8YFDMcIdw-mwRCVGsUEPZNEkJ4WKRqYFOY8GBu2ghuSGys5IGOM63ZAjHEehhgH-LKu7ITZbqHfceKx-3oRxE6OGxMmwwOIuGP79UUB_4SRzWFy9tf716_fpvcvZpdd96HLpiLrBNxNmrQJlzqQpzRLQYvwW_q3OKoPF5evn2T_HD38i65E0KeceKvPAzzRJefb0FnCkr5YdI4aacuMj-Pc6ecV3Eg9rr89EaetZsb5GncrXogtW5qatUl-eIJZ_4fDAtcH1kGAAA.webp?width=648',
//     equipamentos: [
//       'Faróis em LED com sistema de iluminação IQ. LIGHT com farol alto adaptativo e luz de condução diurna de LED integrada.',
//       'Painel de instrumentos digital de 10.25"',
//       'Rodas de liga leve 18"',
//       'Volante multifuncional em couro com "shift-paddles"',
//     ],
//     css: 'polo-gts',
//     price: 150000,
//   }),
// );

console.log(
  updateCarById(
    {
      nome: 'Polo Do Eduardo',
      imagem:
        'https://media.vw.mediaservice.avp.tech/media/fast/H4sIAAAAAAAAAC2Uu84dNRCATxIlIIogQAjRoyOkSIy99y2OUBI6BEqBQpHi1-yu195j783j9f7_VjxQWnreg4YXoKKhQWKOlOrTXD0ez_j936enmz89effu1Y__ff2l1n-Wj0-n--V0Oj1i_eN3r97_89W_zz7-5a8P6mfn09Ow-WZ-xC5vHn8yjKgVXBelPz19xKrTk9Ppo98Yf9yE0_Pnm3cLehy_61Sz6c--VUmZFZUQdaXaqmizpKj6vJGql7mo6zZvq6xoE5l_fjo9_R2dg64Y5x7TrPfzFJYWmiOtpwdBk6fSQiKSDL4JftBa-bvR35lFgsxeFLawkBcv9h4QNyUQsMGtSxleLiypToYdsDebloB6LPU9oImyE4BDk20cZ7msEnAK1aEBSRUPLUMrZBdyOV0ZPvcr40FYVgaU94ytq3cO2AgrA7jHgm0NGmkjI1yzKyPKg6Bp5qJnSVu-EDSuaWTHUHZiaW7SkW3zLklC40kiBwQU8Qpt58sVoTWYmJzh16uEdo8JF9-pIe0Rut7Iq2fwCTUjalGAamfuM6iuF8oz9jqycjBlIIYrxxzUYsr7BBQN5S4YtNUt9NgJztkrk_mMsRXcgl5TdBJ6s8c-gd5h4RoG1UMOvR-SyDY_y5YRqdQccFDP76C7Md1z0GqqtAZtjXjoGdFxgXqcg6tAT322laAXn26SQcUoQHusQsJoasVKH3NkT1q0RDBosyNnuHQpGWHgAk0Ti8WAUXs1SjC6y7mthi1TwRiLaWdQOh1gLNqWbbRXQ4RhaupRweApcwVY9LbSDFqtBNvcS-6LdYd4KMHOJl3ZZY7pNQPrR3mw7fZULBHmnNPSZpHjNl1YzzD2luVorBPgsM15NFxjUo3gFDrhGK6ihDHJSTJ8athlwEpn4GZfLix5THrFiDxG4EhVnuOIkjYHt_tqTWFEKhSjx5oEjINNuwRGqxR3YrRbdWTAre50ASP1yM8xYSxXAROfHpBB1Y4wT1yNgAVHzVu1NCbj0z2inByjawfJmKvNMrb6iuB5wA5Wdrbka3oerb5guMjv7pWXvGqegmhuiOkawG_9xD0jbLJ7ydDFmjA2QQao8RVZIIXrkAJpWy81kMH0aBhj2pZAQzMJYqiUR5GcKn0BNGHpbjAVb9WHf4LmKb_nnItfuZ-0bOXNRiazLVDokyu7BC4zAO1LsiHDV7zMtFPF80L7US8K6NjEaiDYmHFJYXFNJiH4Pu8YFDMcIdw-mwRCVGsUEPZNEkJ4WKRqYFOY8GBu2ghuSGys5IGOM63ZAjHEehhgH-LKu7ITZbqHfceKx-3oRxE6OGxMmwwOIuGP79UUB_4SRzWFy9tf716_fpvcvZpdd96HLpiLrBNxNmrQJlzqQpzRLQYvwW_q3OKoPF5evn2T_HD38i65E0KeceKvPAzzRJefb0FnCkr5YdI4aacuMj-Pc6ecV3Eg9rr89EaetZsb5GncrXogtW5qatUl-eIJZ_4fDAtcH1kGAAA.webp?width=648',
      equipamentos: [
        'Faróis em LED com sistema de iluminação IQ. LIGHT com farol alto adaptativo e luz de condução diurna de LED integrada.',
        'Painel de instrumentos digital de 10.25"',
        'Rodas de liga leve 18"',
        'Volante multifuncional em couro com "shift-paddles"',
      ],
      css: 'polo-gts',
      price: 150000,
    },
    6,
  ),
);
