const express=require('express')


const router=express.Router()

router.post('/register',createUser);
router.post('/login',loginUser);
router.post('/logout',logoutUser)
router.get('/profile',getCurrentUserProfile);

export default router