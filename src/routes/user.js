import {Router} from 'express'
import userController  from '../controller/user.js'
const router = Router()
router.get('/',userController.getAllUser)
    
export default router
