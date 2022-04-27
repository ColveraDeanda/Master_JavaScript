const fs = require('fs');
const Project = require('../models/project');


const projectController = {};

projectController.saveProject = (req, res) => {
    const project = new Project();
    const { name, description, category, langs, year } = req.body;

    project.name = name;
    project.description = description;
    project.category = category;
    project.langs = langs;
    project.year = year;
    project.image = null;

    project.save((err, project) => {
        if (err) return res.status(500).send({ message: err });
        if (!project) return res.status(404).send({ message: "No se ha podido guardar." });
        return res.status(200).send({ message: "Project saved...", project });
    });
}


projectController.getProject = (req, res) => {
    const id = req.params.id;
    Project.findById(id, (err, project) => {
        if (err) return res.status(500).send({ message: "Error al encontrar el projecto." });
        if (!project) return res.status(404).send({ message: "No se ha podido obtener el proyecto." });
        return res.status(200).send({ project });
    });
}

projectController.getProjects = (req, res) => {
    Project.find({}).exec((err, projects) => {
        if (err) return res.status(500).send({ message: "Error al encontrar proyectos." });
        if (!projects) return res.status(404).send({ message: "No se ha podido obtener el proyecto." });
        return res.status(200).send({ projects });
    });
}

projectController.updateProject = (req, res) => {
    const id = req.params.id;
    const update = req.body;

    Project.findByIdAndUpdate(id, update, { new: true }, (err, project) => {
        if (err) return res.status(500).send({ message: "Error al actualizar el projecto." });
        if (!project) return res.status(404).send({ message: "No se ha podido actualizar el proyecto." });
        return res.status(200).send({
            message: "Project updated...",
            project: project
        });
    });
}

projectController.deleteProject = (req, res) => {
    const id = req.params.id;
    Project.findByIdAndRemove(id, (err, projectRemoved) => {
        if (err) return res.status(500).send({ message: "Error al eliminar el projecto." });
        if (!projectRemoved) return res.status(404).send({ message: "No se ha podido eliminar el proyecto." });
        return res.status(200).send({ message: "Proyecto eliminado..." });
    });
}

projectController.uploadImage = (req, res) => {
    const id = req.params.id;
    const fileName = req.files.image.path.split('\\')[1];
    const imageType = req.files.image.type.split('/');

    if (imageType[0] === 'image' && imageType[1] === 'jpeg' || imageType[0] === 'image' && imageType[1] === 'png') {
        Project.findByIdAndUpdate(id, { image: fileName }, { new: true }, (err, projectUpdated) => {
            if (err) return res.status(500).send({ message: "Error al actualizar al guardar la imagen." });
            if (!projectUpdated) return res.status(404).send({ message: "No se ha podido guardar la imagen." })
            res.status(200).send({
                projectUpdated
            });
        });
    } else {
        fs.unlink(`./uploads/${fileName}`, (err) => {
            if(err) throw err;
        });
        res.send({
            message: "Porfavor sube una imagen con formato JPEG o PNG."
        })
    }

}



module.exports = projectController;