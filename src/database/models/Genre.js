module.exports = (sequelize, DataTypes) => {
    let alias = 'Genre';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING(100)
        },
        ranking: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        active: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'genres',
        timestamps: false
    };
    const Genre = sequelize.define(alias, cols, config);
    return Genre;
}