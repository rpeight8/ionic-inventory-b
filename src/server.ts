// src/server.ts
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import db from "../db/database";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

interface Tool {
  id: number;
  title: string;
  quantity: number;
}

// Route to get all tools
app.get("/tools", (req: Request, res: Response) => {
  db.all("SELECT * FROM tools", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// Route to get a single tool
app.get("/tools/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  db.get("SELECT * FROM tools WHERE id = ?", [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

// Route to create a tool
app.post("/tools", (req: Request, res: Response) => {
  const { title, quantity }: Tool = req.body;
  db.run(
    "INSERT INTO tools (title, quantity) VALUES (?, ?)",
    [title, quantity],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({
        message: "success",
        data: { id: this.lastID, title, quantity },
      });
    }
  );
});

// Route to update a tool
app.put("/tools/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, quantity }: Tool = req.body;
  db.run(
    "UPDATE tools SET title = ?, quantity = ? WHERE id = ?",
    [title, quantity, id],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({
        message: "success",
        changes: this.changes,
      });
    }
  );
});

// Route to delete a tool
app.delete("/tools/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  db.run("DELETE FROM tools WHERE id = ?", [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      message: "success",
      changes: this.changes,
    });
  });
});

app.post("/ping", (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
