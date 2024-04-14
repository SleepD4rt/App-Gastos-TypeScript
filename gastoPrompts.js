import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt);

export async function promptNuevoGasto() {
  return await inquirer.prompt(nuevoGastoprompt);
}

const nuevoGastoprompt = [
  {
    type: "list",
    name: "gastos",
    message: "Elija por favor:",
    choices: [
      { value: 1, name: "Hogar" },
      { value: 2, name: "Empresa" },
      { value: 3, name: "Personal" },
      { value: 4, name: "Servicios" },
      { value: 5, name: "Salud" },
      { value: 99, name: "Varios" },
    ],
  },
  {
    type: "date",
    name: "birth_date",
    message: "Ingrese su fecha de nacimiento:",
    locale: "es-ES",
    format: { month: "short", hour: undefined, minute: undefined },
  },
  {
    type: "input",
    name: "description",
    message: "Ingrese una descripción",
  },

  {
    type: "input",
    name: "monto",
    message: "Monto",
  },
  {
    type: "confirm",
    name: "confirmar",
    message: "Agregar Gasto.",
  },
];
