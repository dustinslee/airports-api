import query from "../db/utils";

function getAll() {
  return query("SELECT * FROM airports");
}

function getOne(id) {
  return query("SELECT * FROM airports WHERE AirportID = ?", [id]);
}

function add(airport) {
  return query("INSERT INTO airports SET ?", [airport]);
}

function update(id, airport) {
  return query("UPDATE airports SET ? WHERE AirportID = ?", [airport, id]);
}

function remove(id) {
  return query("DELETE FROM airports WHERE AirportID = ?", [id]);
}

export default {
  getAll,
  getOne,
  add,
  update,
  remove
}