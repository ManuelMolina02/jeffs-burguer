import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = [
    {
      id: 1,
      name: "Jack Bacon",
      type: "Hambúrguer",
      src: "jack-bacon.webp",
      price: 25.0,
      ingredients:
        "Pão Brioche Amanteigado, Hambúrguer Artesanal 150g, Cheddar Cremoso, Bacon, Cebola Caramelizada, Barbecue",
    },
    {
      id: 2,
      name: "Jack Rodeio",
      type: "Hambúrguer",
      src: "jack-rodeio.webp",
      price: 25.0,
      ingredients:
        "Pão Brioche Amanteigado, Hambúrguer Artesanal 150g, Cheddar Cremoso, Bacon, Onion Rings, Barbecue",
    },
    {
      id: 3,
      name: "Costela Premium",
      type: "Hambúrguer",
      price: 26.0,
      src: "costela-premium.webp",
      ingredients:
        "Pão Brioche Amanteigado, Hambúrguer Artesanal 150g, Catupiry, Bacon, Alho Frito, Ovo, Tomate, Alface Americana",
    },
    {
      id: 4,
      name: "Nacho Burger",
      type: "Hambúrguer",
      price: 25.0,
      src: "nacho-burguer.webp",
      ingredients:
        "Pão Brioche Amanteigado, Hambúrguer Artesanal 150g, Cheddar Cremoso, Cream Cheese, Doritos, Maionese Artesanal, Tomate",
    },
    {
      id: 5,
      name: "4 Queijos Burguer",
      type: "Hambúrguer",
      price: 30.0,
      src: "quatro-queijos.webp",
      ingredients:
        "Pão Brioche Amanteigado, 2 Hambúrguer Artesanal 150g, Creme 4 Queijos, Bacon, Maionese Artesanal",
    },
    {
      id: 6,
      name: "Crocante",
      type: "Hambúrguer",
      price: 28.0,
      src: "crocante.webp",
      ingredients:
        "Pão Brioche Amanteigado, Hambúrguer Artesanal 150g, Bacon, Creme de 4 Queijos, Batata Pringles de Churrasco, Maionese Artesanal, Tomate, Alface Americana ",
    },
    {
      id: 7,
      name: "Provolone",
      type: "Hambúrguer",
      src: "provolone.webp",
      price: 30.0,
      ingredients:
        "Pão Brioche Amanteigado, Hambúrguer Artesanal 150g, Tomate Cereja, Alface Americana",
    },
    {
      id: 8,
      name: "4 Queijos Burguer Simples",
      type: "Hambúrguer",
      price: 25.0,
      src: "quatro-queijos.webp",
      ingredients:
        "Pão Brioche Amanteigado, Hambúrguer Artesanal 150g, Creme 4 Queijos, Bacon, Maionese Artesanal",
    },
    {
      id: 9,
      name: "Madame",
      type: "Hambúrguer",
      price: 28.0,
      src: "quatro-queijos.webp",
      ingredients:
        "Pão Brioche Amanteigado, Hambúrguer Artesanal 150g, Medalhão de Queijo Coalho com Bacon, Queijo Branco, Cebola Caramelizada, Tomate Cereja",
    },
    {
      id: 11,
      name: "Smash Salada",
      type: "Smash",
      price: 18.0,
      src: "smash-salada.webp",
      ingredients:
        "Pão Brioche Amanteigado, Hambúrguer Artesanal 150g, Queijo Branco, Alface Americana, Tomate, Maionese Artesanal",
    },

    {
      id: 12,
      name: "Smash Júnior",
      type: "Smash",
      price: 16.0,
      src: "smash-junior.webp",
      ingredients:
        "Pão Brioche Amanteigado, Hambúrguer Artesanal 150g, Queijo Branco, Maionese Artesanal",
    },
    {
      id: 13,
      name: "Smash do Chef",
      type: "Smash",
      price: 20.0,
      src: "smash-junior.webp",
      ingredients:
        "Pão Brioche Amanteigado, Hambúrguer Artesanal 150g, Queijo Branco, Picles, Maionese Artesanal, Mostarda Amarela, Cebola Roxa Fatiada, Tomate, Alface Americana",
    },

    {
      id: 14,
      name: "Especial Catupiry",
      type: "Hot Dog",
      src: "hot-dog-tres.webp",
      price: 21.99,
      ingredients:
        "Pão de Hot Dog 12cm, 2 Salsichas, Fatias de Calabresa, Catupiry, Bacon, Maionese Artesanal, Batata Palha, Farofa Temperada, Cebola em Cubos, Milho, Tomate, Molho da Casa",
    },

    {
      id: 15,
      name: "Bacon Cheddar",
      type: "Hot Dog",
      src: "hot-dog-tres.webp",
      price: 16.99,
      ingredients:
        "Pão de Hot Dog 12cm, 2 Salsichas, Cheddar, Bacon, Maionese Artesanal, Batata Palha, Farofa Temperada, Cebola em Cubos, Milho, Tomate, Molho da Casa",
    },

    {
      id: 16,
      name: "Bacon Catupiry",
      type: "Hot Dog",
      src: "hot-dog-tres.webp",
      price: 16.99,
      ingredients:
        "Pão de Hot Dog 12cm, 2 Salsichas, Catupiry, Bacon, Maionese Artesanal, Batata Palha, Farofa Temperada, Cebola em Cubos, Milho, Tomate, Molho da Casa",
    },
    {
      id: 17,
      name: "Bacon Cheddar",
      type: "Hot Dog",
      src: "hot-dog-tres.webp",
      price: 16.99,
      ingredients:
        "Pão de Hot Dog 12cm, 2 Salsichas, Calabresa em Tiras, Cheddar, Bacon, Maionese Artesanal, Batata Palha, Farofa Temperada, Cebola em Cubos, Milho, Tomate, Molho da Casa",
    },
    {
      id: 18,
      name: "Frango com Catupiry",
      type: "Hot Dog",
      price: 16.99,
      src: "hot-dog-um.webp",
      ingredients:
        "Pão de Hot Dog 12cm, 2 Salsichas, Batata Palha, Farofa Temperada, Maionese Artesanal, Cebola em Cubos, Milho, Tomate, Molho da Casa",
    },
    {
      id: 19,
      name: "Frango com Cream Cheese",
      type: "Hot Dog",
      price: 19.99,
      src: "hot-dog-dois.webp",
      ingredients:
        "Pão de Hot Dog 12cm, 2 Salsichas, Filé de Frango, Cream Cheese, Batata Palha, Cebola em Cubos, Milho, Tomate, Molho da Casa",
    },
    {
      id: 20,
      name: "Especial Cheddar",
      type: "Hot Dog",
      src: "hot-dog-tres.webp",
      price: 21.99,
      ingredients:
        "Pão de Hot Dog 12cm, 2 Salsichas, Fatias de Calabresa, Cheddar, Bacon, Maionese Artesanal, Batata Palha, Farofa Temperada, Cebola em Cubos, Milho, Tomate, Molho da Casa",
    },
    {
      id: 21,
      name: "Bacon Calabresa Cheddar",
      type: "Hot Dog",
      src: "hot-dog-tres.webp",
      price: 18.99,
      ingredients:
        "Pão de Hot Dog 12cm, 2 Salsichas, Fatias de Calabresa, Cheddar, Bacon, Maionese Artesanal, Batata Palha, Farofa Temperada, Cebola em Cubos, Milho, Tomate, Molho da Casa",
    },
  ];

  res.status(200).json(data);
};
