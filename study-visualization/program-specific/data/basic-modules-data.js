/* ==== FHNW MASCHINENBAU MODULE DATA ==== */
/* Der Studienplan startet leer; Maschinenbau-Module werden gezielt zugewiesen. */

window.StudiengangModules = [];

window.StudiengangAssessmentModules = [
  { name: "Lineare Algebra 1", ects: 3, standardcategory: "Mathematik 1" },
  { name: "Lineare Algebra 2", ects: 3, standardcategory: "Mathematik 1" },
  { name: "Informatik", ects: 3, standardcategory: "Mathematik 1" },
  { name: "Analysis 1", ects: 3, standardcategory: "Mathematik 2" },
  { name: "Analysis 2", ects: 3, standardcategory: "Mathematik 2" },
  {
    name: "Wärme und Strahlung",
    ects: 3,
    standardcategory: "Naturwissenschaften",
  },
  {
    name: "Grundkonzepte der Mechanik",
    ects: 3,
    standardcategory: "Naturwissenschaften",
  },
  { name: "Chemie 1", ects: 3, standardcategory: "Naturwissenschaften" },
  { name: "Workshop Chemie", ects: 3, standardcategory: "Naturwissenschaften" },
  {
    name: "Werkstoffe 2",
    ects: 3,
    standardcategory: "Werkstoffe, Fertigung, Konstruktion",
  },
  {
    name: "Maschinenelemente",
    ects: 3,
    standardcategory: "Werkstoffe, Fertigung, Konstruktion",
  },
  { name: "Statik", ects: 3, standardcategory: "Technische Mechanik" },
  {
    name: "Thermodynamik",
    ects: 3,
    standardcategory: "Thermo-/Fluid-/Energietechnik",
  },
].map((module) => ({ ...module, isAssessment: true }));

window.StudiengangModuleCatalog = window.StudiengangModules;
