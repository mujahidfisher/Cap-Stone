const db = require("../config");

class Merch {
  fetchMerchs(req, res) {
    const query = `
          SELECT merchID, merchName, quantity, price, tag, merchImg
          FROM Merch;
          `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchMerch(req, res) {
    const id = req.params.id;
    const query = `
          SELECT merchID, merchName, quantity, price, tag, merchImg
          FROM Merch
          WHERE merchID = ?
          `;
    db.query(query, [id], (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  register(req, res) {
    const data = req.body;
    const query = `
            INSERT INTO Merch
            SET ?;
            `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "New Item has been added.",
      });
    });
  }
  updateMerch(req, res) {
    const query = `
            UPDATE Merch
            SET ?
            WHERE merchID = ?
            `;
    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The Item record has been updated.",
      });
    });
  }
  deleteMerch(req, res) {
    const query = `
            DELETE FROM Merch
            WHERE merchID = ${req.params.id}
            `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "An Item was deleted",
      });
    });
  }
}

module.exports = Merch;