import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    process.env.DB_NAME, // tên database
    process.env.DB_USERNAME, //username
    process.env.DB_PASSWORD, // password
    {
        host: process.env.DB_HOST,
        dialect: "mysql"
    }
);

sequelize.authenticate()
    .then(() => {
        console.log("Kết nối database thành công!");
    })
    .catch((error) => {
        console.error("Kết nối database không thành công!: ", error);
    });
export default sequelize;