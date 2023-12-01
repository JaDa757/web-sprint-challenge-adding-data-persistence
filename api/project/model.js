const db = require('../../data/dbConfig');

function getAll() {
    return db('projects');
}

async function createProject({
    project_name,
    project_description,
    project_completed
}) {
    const [project_id] = await db('projects').insert({
        project_name,
        project_description,
        project_completed,
    });

    const newProject = {
        project_id,
        project_name,
        project_description,
        project_completed,
    };

    return newProject;
}

module.exports = {
    getAll,
    createProject,
};
