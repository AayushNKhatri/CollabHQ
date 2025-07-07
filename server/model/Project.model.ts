import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import { Status } from "../lib/enums";

class Project extends Model {
    public ProjectID!: string;
    public ProjectName!: string;
    public Description!: string;
    public CreatedBy!: string;
    public Status!: Status;
}

Project.init({
    ProjectID: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    ProjectName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    CreatedBy: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users', // Assuming the User model is in the same database
            key: 'id' // The primary key of the User model
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    Status: {
        type: DataTypes.ENUM(...Object.values(Status)),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Project',
    tableName: 'projects',
    timestamps: true,
});
export default Project;