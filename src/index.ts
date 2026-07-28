import { config } from "./config/index.js";
import { logger } from "./utils/logger.js";

function bootstrap() {
  logger.info(`🚀 Inicializando ai-dev-team (Ambiente: ${config.env})`);
  logger.info("Estrutura base da Fase 1 pronta. Aguardando implementação da Fase 2 (Lógica de Agentes).");
}

bootstrap();
