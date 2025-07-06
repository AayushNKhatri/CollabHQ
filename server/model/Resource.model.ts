import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import { ResourceType } from "../lib/enums";

class Resource extends Model {
    public ResourceID!: string;
    public ProjectID!: string;
    public TaskID?: string;
    public ResourceName!: string;
    public ResourceType!: ResourceType;
    public Description?: string;
    public ResourceURL?: string;
}

Resource.init({
    ResourceID: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    ProjectID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Project', 
            key: 'ProjectID'
        }
    },
    TaskID: {                       //Here we assume that a resource can be associated with a task and if not then it will be project level rather than task level
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Task', 
            key: 'TaskID'
        }
    },
    ResourceName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ResourceType: {
        type: DataTypes.ENUM(...Object.values(ResourceType)),
        allowNull: false
    },
    Description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ResourceURL: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Resource',
    tableName: 'resources',
    timestamps: true,
});