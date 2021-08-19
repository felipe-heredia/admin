module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1339),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "87d021301faf0186ebbb09b39975f015"),
    },
  },
});
