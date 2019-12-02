const express=require('express');
const router = express.Router();
const assetController=require('../controllers/asset-controller');

router.get('/',assetController.getAssets);


router.post('/create',assetController.createAsset);

router.put('/:id',assetController.updateAsset);

router.delete('/:id',assetController.deleteAsset);

router.get('/search', assetController.searchAsset);

module.exports = router;