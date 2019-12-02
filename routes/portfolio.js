const express=require('express');
const router = express.Router();
const portfolioController=require('../controllers/portfolio-controller');



router.get('/',portfolioController.getPortfolios);
router.post('/create',portfolioController.createPortfolio);
router.put('/:id',portfolioController.updatePortfolio);

router.delete('/:id',portfolioController.deletePotfolio);

router.get('/search', portfolioController.searchPortfolio);

module.exports = router;