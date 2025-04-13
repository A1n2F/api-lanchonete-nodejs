import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("products").del();

    await knex("products").insert([
        { name: "Hamburguer Smash", price: 34},
        { name: "Hamburguer Duplo", price:  23},
        { name: "Hamburguer Salad", price:  32},
        { name: "Hamburguer da Casa", price: 13 },
        { name: "Hamburguer de Frango", price:  41},
        { name: "Hamburguer de Carne e Queijo", price:  36},
        { name: "Porção de batata frita", price:  25},
        { name: "Refrigerante late", price:  5},
        { name: "Suco de laranja", price:  7},
    ]);
};
