module.exports = () => {
  const findAll = (req, res) => {
    const users = [
      { name: 'John Doe', email: 'jdoe@example.com' },
    ];
    res.status(200).json(users);
  };

  const create = (req, res) => {
    res.status(201).json(req.body);
  };

  return { findAll, create };
};
