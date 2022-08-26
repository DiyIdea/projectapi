import mysql2 from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

const DB_URL =`mysql://${process.env.MYSQL_USERNAME}:${process.env.MYSQL_PASSWORD}@${process.env.MYSQL_HOST}/${process.env.MYSQL_DB}?ssl={"rejectUnauthorized":true}`



const connect = async () => {
    const connection = await mysql2.createConnection(DB_URL)
    return connection
}

export default {
    connect
}