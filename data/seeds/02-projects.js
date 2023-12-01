const projects = [
    {
        project_name: 'Build Company Website',
        project_description: 'Develop a responsive website for the company',
        project_completed: 0
    },
    {
        project_name: 'Launch Marketing Campaign',
        project_description: 'Plan and execute a marketing campaign for a new product launch',
        project_completed: 1
    },
    {
        project_name: 'Upgrade Server Infrastructure',
        project_description: 'Upgrade servers to improve performance and scalability',
        project_completed: 0
    },

];


const resources = [
    {
        resource_name: 'Web Developer',
        resource_description: 'Experienced in frontend and backend development'
    },
    {
        resource_name: 'Marketing Specialist',
        resource_description: 'Skilled in creating effective marketing strategies'
    },
    {
        resource_name: 'System Administrator',
        resource_description: 'Expertise in managing and upgrading server infrastructure'
    },
];

const tasks = [
    {
        task_description: 'Design Homepage',
        task_notes: 'Create an engaging design for the company website homepage',
        task_completed: 0, project_id: 1
    },
    {
        task_description: 'Run Social Media Ads',
        task_notes: 'Launch targeted social media ads for the marketing campaign',
        task_completed: 1, project_id: 2
    },
    {
        task_description: 'Install Security Updates',
        task_notes: 'Apply security updates to servers to enhance system security',
        task_completed: 0, project_id: 3
    },
];

const projectResources = [
    {
        project_id: 1,
        resource_id: 1
    },
    {
        project_id: 2,
        resource_id: 2
    },
    {
        project_id: 3,
        resource_id: 3
    },
];

exports.seed = async function (knex) {
    await knex('projects').insert(projects);
    await knex('resources').insert(resources);
    await knex('tasks').insert(tasks);
    await knex('project_resources').insert(projectResources);
    console.log('Seed data inserted successfully.');
};
