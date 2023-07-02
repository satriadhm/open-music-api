const ClientError = require('../exceptions/ClientError');

const mapDBToModel = ({
    id,
    title,
    year,
    performer,
    genre,
    duration,
    created_at,
    updated_at}) => ({
        id,
        title,
        year,
        performer,
        genre,
        duration,
        insertedAt: created_at,
        updatedAt: updated_at
    });
