const express = require('express');

promptRouter.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const user = await User.findByPk(id);
    res.json(user.dataValues)
  } catch (e) {
  console.error(e);
}
}

module.exports = {
  userRouter
};
