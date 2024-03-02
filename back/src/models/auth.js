import mysql from "mysql2/promise";
import db from "../config/db.js";

const pool = mysql.createPool(db);

/**
 * 유저 등록 작업
 */
const addUser = async (signupInfo, res) => {
  let connection = await pool.getConnection(async (conn) => conn);
  try {
    await connection.beginTransaction();
    const sql = "INSERT INTO users (email, pw) VALUES (?, ?)";
    let [result] = await connection.query(sql, signupInfo);
    console.log(result);
    res(result, null);
  } catch (err) {
    connection.rollback();
    console.error(err);
    res(null, err);
  } finally {
    connection.release();
  }
};

/**
 * 유저 확인 작업
 */
const findUser = async (loginInfo, res) => {
  let connection = await pool.getConnection(async (conn) => conn);
  try {
    await connection.beginTransaction();
    const sql = "SELECT * FROM users WHERE email = ?";
    let [user] = await connection.query(sql, loginInfo);
    res(user, null);
  } catch (err) {
    connection.rollback();
    res(null, err);
  } finally {
    connection.release();
  }
};

/**
 * refresh token 저장 작업
 */
const saveRefreshToken = async (tokenInfo, res) => {
  let connection = await pool.getConnection(async (conn) => conn);
  try {
    await connection.beginTransaction();
    const sql = "UPDATE users SET refresh_token = ? WHERE email = ?";
    let [token] = await connection.query(sql, tokenInfo);
    res(token, null);
  } catch (err) {
    connection.rollback();
    console.error(err);
    res(null, err);
  } finally {
    connection.release();
  }
};

/**
 * refresh token 비교 작업
 */
const compareRefreshToken = async (tokenInfo, res) => {
  let connection = await pool.getConnection(async (conn) => conn);
  try {
    await connection.beginTransaction();
    const sql = "SELECT refresh_token FROM users WHERE email = ?";
    let [token] = await connection.query(sql, tokenInfo);
    res(token, null);
  } catch (err) {
    connection.rollback();
    console.error(err);
    res(null, err);
  } finally {
    connection.release();
  }
};

export { addUser, findUser, saveRefreshToken, compareRefreshToken };
