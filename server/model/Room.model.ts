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
            model: 'projects', // Assuming the Project model is in the same database
            key: 'ProjectID'
        }
    },
    RoomName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CreatedBy: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users', // Assuming the User model is in the same database
            key: 'id'
        }
    },
    Description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
     //if room type is public then everyone in project can see it ,if private then only creator and admin and assigend mener can se it can see it
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
export default Room;