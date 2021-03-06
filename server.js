const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(expres.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

require('./routes/routesApi')(app);
require('./routes/routesHtml')(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});