import {Router} from 'express'
import userRouter from './user.js'
const router = Router()

router.get('/',(req,res)=>{
    res.status(200).send(`<h1>welcome to  expressesss</h1>`)
})
router.use('/users',userRouter)

export default router