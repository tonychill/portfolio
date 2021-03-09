const db = require("./db");

const Query = {
  project: (_, { id }) => db.projects.get(id),
  articles: (_, args) => console.log("Getting the articles..."),
  projects: (_, args) => console.log("The args from the req: ", args),
};

const Mutations = {
  createProject: (root, { input }, { user }) => {
    if (!user) throw Error("Sorry, you are unauthorized to perform this acction. ");
    const id = db.jobs.create({ ...input, companyId: user.companyId });
    return db.projects.get(id);
  },
};
// const Company = {
//   jobs: (company, args) => db.jobs.list().filter((job) => company.id === job.companyId),
// };


module.exports = { Query, Mutations};
