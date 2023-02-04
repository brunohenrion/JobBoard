import Job from "./Job";

const Jobs = (props) => {
  return (
    <div className="jobs">
      <Job
        name="job1"
        title="Full Time Sales Associate - Sydney Boutique"
        nameT="CDI"
        nameC="Australie"
        nameCi="Sydney"
      />
      <Job
        name="job2"
        title="Agent de Sécurité - Pantin"
        nameT="CDI"
        nameC="France"
        nameCi="Pantin"
      />
      <Job
        name="job3"
        title="Responsable d'Atelier (H/F)"
        nameT="CDD"
        nameC="France"
        nameCi="Paris"
      />
      <Job
        name="job4"
        title="Chef de Projets"
        nameT="CDD"
        nameC="France"
        nameCi="Paris"
      />
      <Job
        name="job5"
        title="Développeur React.js"
        nameT="CDI"
        nameC="France"
        nameCi="Paris"
      />
      <Job
        name="job6"
        title="Sales Associate Stockholm"
        nameT="CDI"
        nameC="Suède"
        nameCi="Stockholm"
      />
      <Job
        name="job7"
        title="Vendeur/se - Crans Montana"
        nameT="CDI"
        nameC="Suisse"
        nameCi="Crans Montana"
      />
      <Job
        name="job8"
        title="CRM & Data Quality Analyst"
        nameT="CDI"
        nameC="USA"
        nameCi="New York"
      />
      <Job
        name="job9"
        title="Infirmier (H/F)"
        nameT="CDI"
        nameC="France"
        nameCi="Pantin"
      />
    </div>
  );
};

export default Jobs;
