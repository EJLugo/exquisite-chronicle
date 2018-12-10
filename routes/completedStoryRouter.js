const express = require('express');

promptRouter.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const stories = await Stories.findByPk(id);
    res.json(user.dataValues)
  } catch (e) {
  console.error(e);
}
}

module.exports = {
  completedStoryRouter
};
