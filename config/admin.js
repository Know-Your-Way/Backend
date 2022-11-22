module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET") || "reallylongstring",
  },
  apiToken: {
    salt: env("API_TOKEN_SALT") || "reallylongstring",
  },
});
