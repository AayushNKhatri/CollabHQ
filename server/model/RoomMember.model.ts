import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import { RoomRole } from "../lib/enums";
class RoomMember extends Model {
    public RoomID!: string;
    public UserID!: string;
    public RoomRole!: RoomRole;
       // Assuming Role is a string, you can change it to an enum if needed
}
RoomMember.init({
    RoomID: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'rooms', // Assuming the Room model is in the same database
            key: 'RoomID'
        }
    },
    UserID: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'users', // Assuming the User model is in the same database
            key: 'id'
        }
    },
    RoomRole: {
        type: DataTypes.ENUM(...Object.values(RoomRole)),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'RoomMember',
    tableName: 'room_members',
    timestamps: true,
});
export default RoomMember;