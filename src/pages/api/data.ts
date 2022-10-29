import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = [
    {
      id: 1,
      name: "Costela Premium",
      type: "Hambúrguer",
      price: 26.0,
      image:
        "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?resize=1140%2C570&ssl=1",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 2,
      name: "Nacho Burger",
      type: "Hambúrguer",
      price: 30.0,
      image:
        "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?resize=1140%2C570&ssl=1",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 3,
      name: "4 Queijos Burguer",
      type: "Hambúrguer",
      price: 30.0,
      image:
        "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?resize=1140%2C570&ssl=1",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 4,
      name: "Crocante",
      type: "Hambúrguer",
      price: 28.0,
      image:
        "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?resize=1140%2C570&ssl=1",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 4,
      name: "Provolone",
      type: "Hambúrguer",
      image:
        "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?resize=1140%2C570&ssl=1",
      price: 30.0,
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 5,
      name: "Smash Júnior",
      type: "Smash",
      price: 16.0,
      image:
        "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?resize=1140%2C570&ssl=1",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
    {
      id: 6,
      name: "Smash Salada",
      type: "Smash",
      price: 18.0,
      image:
        "https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg?resize=1140%2C570&ssl=1",
      ingredients:
        "Hambúrguer Artesanal 150g, Bacon, Queijo, Alface, Tomate, Cebola, Maionese",
    },
  ];

  res.status(200).json(data);
};
