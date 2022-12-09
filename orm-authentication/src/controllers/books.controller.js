const BooksService = require('../services/books.service');

const getAll = async (_req, res) => {
  try {
    const books = await BooksService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BooksService.getById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
};