import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";
import chalk from "chalk";

inquirer.registerPrompt("date", DatePrompt);

export async function promptNuevoGasto() {
  return await inquirer.prompt(nuevoGastoprompt);
}

const nuevoGastoprompt = [
  {
    type: "rawlist",
    name: "tipo_gastos",
    message: "Selecciona el tipo de gasto",
    choices: ["Hogar", "Empresa", "Personal", "Servicios", "Salud", "Varios"],
  },
  {
    type: "date",
    name: "fecha_transaccion",
    message: "Ingrese la fecha del gasto:",
    transformer: (s) => chalk.bold.green(s),
    locale: "es-ES",
    format: {
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    },
  },
  {
    type: "input",
    name: "descripcion",
    message: "Ingrese una descripción",
  },

  {
    type: "input",
    name: "monto",
    message: "Monto",
  },
];
