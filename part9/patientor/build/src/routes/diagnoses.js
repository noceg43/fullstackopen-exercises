"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diagnosesService_1 = __importDefault(require("../services/diagnosesService"));
const router = express_1.default.Router();
// Response is a generic type that allows us to specify the type of data we expect to send back
router.get('/', (_req, res) => {
    res.send(diagnosesService_1.default.getEntries());
});
exports.default = router;
