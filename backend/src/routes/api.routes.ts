import * as express from "express";
import * as cors from "cors";

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post("login");
router.post("register");

export default router;
