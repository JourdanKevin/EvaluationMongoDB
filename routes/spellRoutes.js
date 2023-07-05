const { getSpells, createView, create, deleteSpell, updateSpell, getSpell } = require("../controllers/spellController")

const router = require("express").Router()


router.get("/", getSpells)
router.get("/create", createView)
router.post("/create", create)
router.get("/:id", getSpell)
router.delete("/:id", deleteSpell)
router.put("/:id", updateSpell)

module.exports = router