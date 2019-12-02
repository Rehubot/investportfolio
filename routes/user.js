const express=require('express');
const router = express.Router();
const userController=require('../controllers/user-controller');



router.get('/',userController.getUser);
router.post('/create',userController.createUser);
router.put('/:id',userController.updateUser);
router.delete('/id',userController.deleteUser);
router.get('/search',userController.searchUser);


module.exports = router;