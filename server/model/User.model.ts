import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import { Role } from "../lib/enums";

class User extends Model{
    public id!:string
    public firstName!:string
    public lastName!:string
    public username!:string
    public email!:string
    public password!:string
    public role!: Role
}

User.init({
    id:{
        type:DataTypes.UUID,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role:{
        type:DataTypes.ENUM(...Object.values(Role)),
        allowNull:false
    }
},
{
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
}

)

export default User