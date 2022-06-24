const router = require("express").Router();
const { parse } = require("dotenv");
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const data = await Tag.findAll({ include: [Product] });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const id = req.params.id;
    if (id && Number.isInteger(parseInt(id))) {
      const data = await Tag.findAll({
        where: { id },
        include: [Product],
      });
      res.json(data);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const tagNames = req.body.tags;
    if (Array.isArray(tagNames) && tagNames.length) {
      const tagList = tagNames.reduce((o, v) => [...o, { tag_name: v }], []);
      const result = await Tag.bulkCreate(tagList);
      res.json(result);
      return;
    }
    res.status(400).send("Invalid params");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const id = req.params.id;
    const columns = req.body.columns;
    if (id && Number.isInteger(parseInt(id)) && Object.keys(columns).length > 0) {
      const result = await Tag.update(columns, { where: { id } });
      res.json(result);
      return;
    }
    res.status(400).send("Invalid Params");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const id = req.params.id;
    if (id && Number.isInteger(parseInt(id))) {
      const result = await Tag.destroy({ where: { id } });
      res.json(result);
      return;
    }
    res.status(400).send("Invalid Params");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
