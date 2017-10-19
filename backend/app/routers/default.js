const defaultRouter = express.Router();
defaultRouter.use(function(req, res, next) {
    console.log('Someting is happening');
});

defaultRouter.get('/', function(req, res) {
    res.json({message: 'Welcome to the API.'});
});
module.exports = defaultRouter; 