// dataController.js
const dataController = {};

// Example data (replace with your actual data handling logic)
let data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Controller function to get all data
dataController.getData = (req, res) => {
  res.json(data);
};

// Controller function to create new data
dataController.createData = (req, res) => {
  const newData = req.body; // Assuming data is sent in the request body
  data.push(newData);
  res.json(newData);
};

// Controller function to update data by ID
dataController.updateData = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  data = data.map(item => (item.id === id ? updatedData : item));
  res.json(updatedData);
};

// Controller function to delete data by ID
dataController.deleteData = (req, res) => {
  const id = parseInt(req.params.id);
  data = data.filter(item => item.id !== id);
  res.json({ message: 'Data deleted successfully' });
};

module.exports = dataController;
