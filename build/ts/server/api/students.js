"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = express_1.default.Router();
router.get('/all', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allStudents = yield prisma.student.findMany();
        res.send(allStudents);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const oneStudent = yield prisma.student.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });
        res.send(oneStudent);
    }
    catch (error) {
        next(error);
    }
}));
router.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newStudent = yield prisma.student.create({
            data: req.body,
        });
        res.send(newStudent);
    }
    catch (error) {
        next(error);
    }
}));
router.put('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const oneStudent = yield prisma.student.update({
            where: {
                id: Number(req.params.id),
            },
            data: req.body,
        });
        res.send(oneStudent);
    }
    catch (error) {
        next(error);
    }
}));
router.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doomedStudent = yield prisma.student.delete({
            where: {
                id: Number(req.params.id),
            },
        });
        res.send(doomedStudent);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
//# sourceMappingURL=students.js.map