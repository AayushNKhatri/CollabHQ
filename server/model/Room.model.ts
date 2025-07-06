import { DataTypes, Model } from "sequelize";
import { RoomType } from "../lib/enums";
import sequelize from "../config/database";

class Room extends Model {
    public RoomID!: string;
    public ProjectID!: string; // This should be the ID of the project this room belongs to
    public RoomName!: string;
    public CreatedBy!: string; // this should alwoys be the project creator 
    public Description!: string;
    public RoomType!: RoomType; // This can be 'public' or 'private'
}

Room.init({
    RoomID: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    ProjectID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Project', // Assuming the Project model is in the same database
            key: 'ProjectID'
        }
    },
    RoomName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CreatedBy: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'User', // Assuming the User model is in the same database
            key: 'id'
        }
    },
    Description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    RoomType: {
        type: DataTypes.ENUM(...Object.values(RoomType)),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Room',
    tableName: 'rooms',
    timestamps: true,
});