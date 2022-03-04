const express = require('express')
const { set } = require('express/lib/application')
const router = express.Router()
const {getGoals, 
        setGoal, 
        updateGoal, 
        deleteGoal
    } = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router