const Spell = require("../models/spellModel")

const create = async (req, res)=>{
    try{
        const spell = await Spell(req.body)
        spell.save().then((saveSpell)=>{
            res.status(201).redirect('/api/spells');
        })
    }catch (error) {
        res.status(500).json({error: "Erreur lors de la sauvegarde du sort"})
    }
};
const createView = async(req,res)=>{
    res.render("spell/create")
}

const getSpells = async (req,res) =>{
    try{
        await Spell.find()
            .then((spells)=>{
                res.status(200).render("spell/show_all",{spells : spells})
            })
    } catch (error){
        res.status(500).json({error: "Erreur lors de la récupération des sorts"})
    }
}

const getSpell = async(req,res)=>{
    try{
        await Spell.findById(req.params.id)
            .then((spell)=>{
                if (!spell){
                    return res.status(404).json({error: "Sort introuvable"})
                }
            return res.status(200).render("spell/show",{spell:spell})
            })
    }catch (error){
        res.status(500).json({error: "Erreur lors de la suppression du sort"})
    }
}

const deleteSpell = async (req,res) =>{
    try{
        await Spell.findById(req.params.id)
            .then((spell)=>{
                if (!spell){
                    return res.status(404).json({error: "Sort introuvable"})
                }
            spell.deleteOne()
                .then((spell)=>{
                    res.status(201).json({msg : "Spell delete", spell : spell})
                })
            })
    }catch (error){
        res.status(500).json({error: "Erreur lors de la suppression du sort"})
    }
}
const updateSpell = async (req,res) =>{
    try{
        await Spell.findById(req.params.id)
            .then((spell)=>{
                if (!spell){
                    return res.status(404).json({error: "Sort introuvable"})
                }
            spell.updateOne(req.body)
                .then((spell)=>{
                    res.status(201).json({msg : "Spell update", spell : spell})
                })
            })
    }catch (error){
        res.status(500).json({error: "Erreur lors de la suppression du sort"})
    }
}

module.exports = {create, createView,  getSpells, getSpell, deleteSpell, updateSpell }