"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    'username': process.env.POSTGRES_USERNAME,
    'password': process.env.POSTGRES_PASSWORD,
    'database': process.env.POSTGRES_DB,
    'host': process.env.POSTGRES_HOST,
    'dialect': 'postgres',
    'url': process.env.URL,
    'jwt': {
        'secret': process.env.JWT_SECRET,
    },
};
//# sourceMappingURL=config.js.map