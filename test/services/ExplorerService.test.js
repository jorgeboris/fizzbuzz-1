const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Obetener usuarios en stack javascript", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorerStack = ExplorerService.filterExplorersByStack(explorers, "javascript");
        expect(explorerStack.length).toBe(11);
    });

});
