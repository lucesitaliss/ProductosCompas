const {Router} = require("express");
const router = Router();
const {allCategoria, insertCategoria } = require ("../controllers/catecorias.controller")

router.get("/categorias", allCategoria)
router.post("/categorias", insertCategoria)

module.exports = router;