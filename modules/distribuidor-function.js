import { dogs } from "./distribuidor-data.js";

export function peticos() {
    dogs.forEach(cao => {
        console.log(`Entregando petisco: ${cao}`);
    });
};
