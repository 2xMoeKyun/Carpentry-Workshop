import mysql from 'mysql'

export const conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    database: "workshopdb",
    password: "root",
});

export function Connect() {
    conn.connect(function (err /*, result*/ ) {
        if (err) console.log(err);
        else {
            console.log('Data base connected succesfuly');
        }
    });
}
