const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const data = await Category.findAll({ include: [Product] });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const id = req.params.id;
    if (id) {
      const data = await Category.findAll({
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
  // create a new category
  try {
    const catNames = req.body.category;
    if (Array.isArray(catNames) && catNames.length) {
      const categoryList = catNames.reduce(
        (o, v) => [...o, { category_name: v }],
        []
      );
      const result = await Category.bulkCreate(categoryList);
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
  // update a category by its `id` value
  try {
    const id = req.params.id;
    const columns = req.body.columns;
    if (id && Number.isInteger(id) && Object.keys(columns).length > 0) {
      const result = await Category.update(columns, { where: { id } });
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
  // delete a category by its `id` value
  try {
    const id = req.params.id;
    if (id && Number.isInteger(id)) {
      const result = await Category.destroy({where:{id}})
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
