module.exports = {
    jwtPrivateKey :process.env.JWT_SECRET||'sdfsdafdsfsdafsagergtdgdgdfgdgfdgdfg',
    dbhost:process.env.DATABASE_URL||'mongodb://rehana:25524825233A@ds141238.mlab.com:41238/invest-portfolio',
    dbport:process.env.DB_PORT||'27017',
    dbname:process.env.DATABASE_NAME||'invest-portfolio',
    port:process.env.PORT || 3000
  }