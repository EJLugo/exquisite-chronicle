const express = require('express');

promptRouter.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const prompt = await Prompt.findByPk(id);
    res.json(prompt.dataValues)
  } catch (e) {
  console.error(e);
}
}

module.exports = {
  promptRouter
};
