import { get, save } from "./filesMethods.js";
import inquirer from "inquirer";
import { promptNuevoGasto } from "./gastoPrompts.js";

const main = async () => {
  let run = true;
  while (run) {
    const action = await inquirer.prompt([
      {
        type: "list",
        name: "chosen",
        message: "Elija por favor:",
        choices: [
          { value: 1, name: "Cargar nuevo gasto" },
          { value: 2, name: "Mostrar todos los gastos" },
          { value: 99, name: "Salir" },
        ],
      },
    ]);
    switch (action.chosen) {
      case 1:
        await createNewGasto();
        break;
      case 2:
        await getAllGastos();
        break;
      case 99:
        run = false;
        break;
      default:
        run = false;
        break;
    }
  }
  console.log("Saludos, gracias por utilizar la App de Gastos \n");
};

main();

async function createNewGasto() {
  console.clear();
  console.log("Agregando nuevo gasto...");
  const newGastoData = await promptNuevoGasto();
  console.log("Creando:", newGastoData);
  const currentGasto = await get("gastos");
  currentGasto.push(newGastoData);
  await save("gastos", currentGasto);
}

async function getAllGastos() {
  console.clear();
  const currentGastos = await get("gastos");
  if (currentGastos.length) {
    console.log(currentGastos);
  } else {
    console.log("No hay Gastos cargados");
  }
}
