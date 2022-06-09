module.exports = (sequelize, DataTypes) => {
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
        title: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL(3,1)
        },
        awards: {
            type: DataTypes.INTEGER
        },
        release_date: {
            type: DataTypes.DATE
        },
        length: {
            type: DataTypes.INTEGER
        },
        genre_id: {
            type: DataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'movies',
        timestamps: false
    };
    const Movie = sequelize.define("Movie", cols, config);
    return Movie;
};

