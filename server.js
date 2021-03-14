const express = require("express");
const PORT = process.env.PORT || 3030;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

require('./routes/routesApi')(app);
require('./routes/routesHtml')(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});