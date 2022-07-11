import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("posts.db");

export class DB {
	static init() {
		return new Promise((resolve, reject) => {
			db.transaction((tx) => {
				tx.executeSql(
					"CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT, date TEXT, booked INTEGER)",
					[],
					resolve,
					(_, error) => reject(error)
				);
			});
		});
	}

	static getPosts() {
		return new Promise((resolve, reject) => {
			db.transaction((tx) => {
				tx.executeSql(
					"SELECT * FROM posts",
					[],
					(_, result) => resolve(result.rows._array),
					(_, error) => reject(error)
				);
			});
		});
	}

	static createPost({ title, date, booked, image }) {
		return new Promise((resolve, reject) => {
			db.transaction((tx) => {
				tx.executeSql(
					`INSERT INTO posts (title, date, booked, image) VALUES (?, ?, ?, ?)`,
					[title, date, booked, image],
					(_, result) => resolve(result.insertId),
					(_, error) => reject(error)
				);
			});
		});
	}
	static updatePost(post) {
		return new Promise((resolve, reject) => {
			db.transaction((tx) => {
				tx.executeSql(
					`UPDATE posts SET booked = ? WHERE id = ?`,
					[post.booked ? 0 : 1, post.id],
					(_, result) => resolve(result.insertId),
					(_, error) => reject(error)
				);
			});
		});
	}
	static removePost(id) {
		return new Promise((resolve, reject) => {
			db.transaction((tx) => {
				tx.executeSql(
					`DELETE FROM posts WHERE id = ?`,
					[id],
					(_, result) => resolve(result.insertId),
					(_, error) => reject(error)
				);
			});
		});
	}
}
