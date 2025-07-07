import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import { Status } from "../lib/enums";

class Task extends Model{
    public TaskID!:string
    public ProjectID!:string
    public TaskName!:string
    public AssignedTo!:string
    public Status!: Status
    public Description!:string
    public DueDate!:Date
}
Task.init({
    TaskID:{
        type:DataTypes.UUID,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4
    },
    ProjectID:{
        type:DataTypes.UUID,
        allowNull:false,
        references: {
            model: 'projects', // Assuming the Project model is in the same database
            key: 'ProjectID'
         } // The primary key of the Project model
    },
    TaskName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    AssignedTo:{
        type:DataTypes.UUID,
        allowNull:false,
        references: {
            model: 'users', // Assuming the User model is in the same database
            key: 'id' // The primary key of the User model
        }
    },
    Status:{
        type:DataTypes.ENUM(...Object.values(Status)),
        allowNull:false
    },
    Description:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    DueDate:{
        type:DataTypes.DATE,
        allowNull:true
    }
},
{
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
    timestamps: true,
}
);
export default Task;