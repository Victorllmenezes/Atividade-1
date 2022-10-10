import Atividade1 from "./Atividade-1/Atividade-1";
import { Perguntar } from "./Atividade-1/controller/PromptController";

let executando = true;
while (executando) {
  Atividade1();
  if (Perguntar("Para tentar novamente basta clicar no Enter! (N para abortar)").toUpperCase() == "N") executando = false;
}
