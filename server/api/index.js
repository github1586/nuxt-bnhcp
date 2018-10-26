import { Router } from 'express'

import databases from './controller/interface'

var router = Router()

// Add databases Routes
router.use(databases)

export default router
