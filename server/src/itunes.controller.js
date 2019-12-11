const repo = require("./itunes.repository");

const create =async (req, res) => {
  const ans= await repo.createItunes(req);
  res.send(`${ans}`);  
}

const read = {
  allItunes:async (req, res) => {
    res.send(await repo.readFromDB());
  }  

};

const update =async (req, res) => {
  const ans= await repo.updateItunes(req);
  res.send(`${ans}`);  
};


const deleteByID =async (req, res) => {
  ans= await repo.deleteByIDFromDB(req.params.id);
  res.send(`${ans}`);  
};

module.exports = {
  create,
  read,
  update,
  deleteByID
};