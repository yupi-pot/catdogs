const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

module.exports = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    
    // CORS настройки для продакшена
    const allowedOrigins = process.env.NODE_ENV === 'production' 
        ? [process.env.CLIENT_URL || 'http://localhost', 'http://localhost:80'] 
        : ['http://localhost:3000', 'http://localhost:80'];
    
    app.use(cors({
        origin: allowedOrigins,
        credentials: true
    }));
};