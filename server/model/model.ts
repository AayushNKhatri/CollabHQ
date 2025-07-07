import  User from "./User.model"
import Project from "./Project.model";
import Task from "./Task.model";
import Resource from "./Resource.model";
import Announcement from "./Announcement.model"
import Room from "./Room.model";
import RoomMember from "./RoomMember.model";

User.hasMany(Project, {foreignKey: 'UserID', as: 'Projects'});
Project.belongsTo(User, {foreignKey: 'UserID', as: 'Owner'});
Project.hasMany(Task, {foreignKey: 'ProjectID', as: 'Tasks'});
Task.belongsTo(Project, {foreignKey: 'ProjectID', as: 'Project'});
Task.belongsTo(User, {foreignKey: 'AssignedTo', as: 'Assignee'});
User.hasMany(Task, {foreignKey: 'AssignedTo', as: 'AssignedTasks'});
Project.hasMany(Resource, {foreignKey: 'ProjectID', as: 'Resources'});
Resource.belongsTo(Project, {foreignKey: 'ProjectID', as: 'Project'});
Resource.belongsTo(Task, {foreignKey: 'TaskID', as: 'Task'});
Task.hasMany(Resource, {foreignKey: 'TaskID', as: 'Resources'});
Announcement.belongsTo(Project, {foreignKey: 'ProjectID', as: 'Project'});
Project.hasMany(Announcement, {foreignKey: 'ProjectID', as: 'Announcements'});
Announcement.belongsTo(User, {foreignKey: 'CreatedBy', as: 'Creator'});
User.hasMany(Announcement, {foreignKey: 'CreatedBy', as: 'Announcements'});
RoomMember.belongsTo(Room, {foreignKey: 'RoomID', as: 'Room'});
Room.hasMany(RoomMember, {foreignKey: 'RoomID', as: 'Members'});
RoomMember.belongsTo(User, {foreignKey: 'UserID', as: 'User'});
User.hasMany(RoomMember, {foreignKey: 'UserID', as: 'RoomMemberships'});
Room.belongsTo(Project, {foreignKey: 'ProjectID', as: 'Project'});
Project.hasMany(Room, {foreignKey: 'ProjectID', as: 'Rooms'});

export { User, Announcement, Project, Task, Resource, Room, RoomMember };

