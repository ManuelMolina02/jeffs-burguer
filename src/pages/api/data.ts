import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = [
    {
      id: 7,
      name: "Jack Bacon",
      type: "Hambúrguer",
      src: "jack-bacon.png",
      price: 25.0,
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 8,
      name: "Jack Rodeio",
      type: "Hambúrguer",
      src: "jack-rodeio.png",
      price: 25.0,
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 1,
      name: "Costela Premium",
      type: "Hambúrguer",
      price: 26.0,
      src: "costela-premium.png",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 2,
      name: "Nacho Burger",
      type: "Hambúrguer",
      price: 30.0,
      src: "nacho-burguer.png",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 3,
      name: "4 Queijos Burguer",
      type: "Hambúrguer",
      price: 30.0,
      src: "quatro-queijos.png",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 4,
      name: "Crocante",
      type: "Hambúrguer",
      price: 28.0,
      src: "crocante.png",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 4,
      name: "Provolone",
      type: "Hambúrguer",
      src: "provolone.png",
      price: 30.0,
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 5,
      name: "Smash Júnior",
      type: "Smash",
      price: 16.0,
      src: "smash-junior.png",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 6,
      name: "Smash Salada",
      type: "Smash",
      price: 18.0,
      src: "smash-salada.png",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },

    {
      id: 9,
      name: "Hot Dog 1",
      type: "Hot Dog",
      price: 18.0,
      src: "hot-dog-um.png",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 10,
      name: "Hot Dog 2",
      type: "Hot Dog",
      price: 16.0,
      src: "hot-dog-dois.png",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 11,
      name: "Hot Dog 3",
      type: "Hot Dog",
      src: "hot-dog-tres.png",
      price: 19.0,
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
  ];

  res.status(200).json(data);
};
