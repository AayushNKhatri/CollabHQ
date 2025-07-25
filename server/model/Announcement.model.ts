import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import { AnnouncementStatus } from "../lib/enums";
import e from "express";

class Announcement extends Model {
    public AnnouncementID!: string;
    public ProjectID!: string;
    public Title!: string;
    public Content!: string;
    public CreatedBy!: string;
    public Status!: AnnouncementStatus;
}

Announcement.init({
    AnnouncementID: {
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
    Title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Content: {
        type: DataTypes.TEXT,
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
    Status: {
        type: DataTypes.ENUM(...Object.values(AnnouncementStatus)),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Announcement',
    tableName: 'announcements',
    timestamps: true,
});
export default Announcement;