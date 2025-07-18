"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientsService_1 = __importDefault(require("../services/patientsService"));
const utils_1 = require("../utils");
const zod_1 = require("zod");
const router = express_1.default.Router();
const newPatientParser = (req, _res, next) => {
    try {
        utils_1.NewPatientSchema.parse(req.body);
        next();
    }
    catch (error) {
        next(error);
    }
};
const errorHandler = (error, _req, res, next) => {
    if (error instanceof zod_1.z.ZodError) {
        res.status(400).json({ error: "errore" });
    }
    next(error);
};
// Response is a generic type that allows us to specify the type of data we expect to send back
router.get('/', (_req, res) => {
    res.send(patientsService_1.default.getEntries());
});
router.post('/', newPatientParser, (req, res) => {
    const addedEntry = patientsService_1.default.addPatient(req.body);
    res.json(addedEntry);
});
router.use(errorHandler);
exports.default = router;
