const router = require('express').Router();
const projectController = require('../controllers/project.controller');

router.get('/', projectController.getProjects)
router.get('/:id', projectController.getProject);
router.post('/save-project', projectController.saveProject);
router.put('/update-project/:id', projectController.updateProject);
router.delete('/delete-project/:id', projectController.deleteProject);

module.exports = router;