module.exports = (express) => {

		const router  = express.Router();

		router.route('/test')
		      .get((req, res) =>
		      {
				      res.json({results: 'this is a test call'});
		      });

		return router;
};
