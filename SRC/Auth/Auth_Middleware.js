// src/auth/middleware.js

const authUser = (req, res, next) => {
    try {
        if (!req.session?.user) {
            return res.status(401).json({
                msg: "Authentication required"
            });
        }
        req.user = req.session.user;
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: "Internal Server Error",
            error: error
        });
    }
};

module.exports = { authUser };
