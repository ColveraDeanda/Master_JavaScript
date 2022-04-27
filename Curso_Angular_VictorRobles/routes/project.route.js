const router = require('express').Router();
const projectController = require('../controllers/project.controller');

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: './uploads' });

router.get('/', projectController.getProjects)
router.get('/:id', projectController.getProject);
router.post('/save-project', projectController.saveProject);
router.put('/update-project/:id', projectController.updateProject);
router.delete('/delete-project/:id', projectController.deleteProject);
router.post('/upload-image/:id', multipartMiddleware, projectController.uploadImage);

module.exports = router;