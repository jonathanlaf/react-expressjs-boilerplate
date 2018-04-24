const express = require('express');
const router  = express.Router();

/* GET users listing. */
router.get('/', (req, res) =>
{
		let d = new Date();
		res.json([
				{
						id: 1, username: 'jonathanlaf', timestamp: d
				}, {
						id: 2, username: 'github', timestamp: d
				}
		]);
});

module.exports = router;