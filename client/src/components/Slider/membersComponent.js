import { v4 as uuidv4 } from "uuid";

const membersComponent = [
  {
    id: uuidv4(),
    name: 'Paolo Foti',
    section: 'Team Information',
    areas: 'Achivements, How we work',
    role: 'Team Leader',
    desc: 'The team deals with the design, construction and characterization of wind rotors for the production of electricity. The multidisciplinary nature of the studio involves students from different Degree Courses that deal with issues related to fluid dynamics, electricity, mechanics, structures, control and management. The availability within the department of equipment, instrumentation, 3D printers, software for computational calculation and wind tunnel has already made it possible to create the first two wind rotor prototypes and the characterization of other rotors inherent in the micro wind segment.',
    img: 'foti.png'
  },
 
  {
    id: uuidv4(),
    name: 'Francesca Zarrolli',
    section: 'Management',
    areas: 'Accounting and Productivity, Sponsorship, Area Image, Advertising & Graphics',
    role: 'Leader',
    desc:"Student budget management, project management internal activities, internal procedures interface. Reach as many interested companies as possible, promote events and meetings to expand the team's network of acquaintances. Management of official Instagram, LinkedIn, facebook, website (contents) profiles. Creation of graphics, logos and various gadgets in view of events and presentations.",
    img: 'user.png'
  },
  {
    id: uuidv4(),
    name: 'Francesco Battistoni',
    section: 'Structural',
    areas: 'Studing the wind rotor, Additive manufacturing, Choice of materials',
    role: 'Leader',
    desc: "3D CAD models of components and statyc and dynamic structural analysis. Manufacturing objects starting from computerized 3D models. Metal alloys, composite and polymeric materials.",
    img: 'battistoni.png'
  },
  {
    id: uuidv4(),
    name: 'Enrico Saccaggi',
    section: 'Data Analysis',
    areas: 'Fluid dynamic models, CFD, Experimentation, Structures',
    role: 'Leader',
    desc: 'Writing and improvement of algorithms and iterative methods for finding solutions to nonlinear equations. Interface Matlab with CFD software. Manipulation and visualization of batch charts of data leaking from CFD simulations, post processing. Generate, import and export geometries in Matlab so that they are compatible with those of the software used for design and structural analysis, post processing and visualization of the results of FEM simulations.',
    img: 'saccaggi.png'
  },

  {
    id: uuidv4(),
    name: 'Angelo Paduano',
    section: 'Aerodynamic',
    areas: 'Areodynamic, Support area',
    role: 'Leader',
    desc: 'The objective will be to design and develop an alternative solution of the conventional NACA 0024 airfoil currently mounted on the rotor, introducing a vortex cell in a particular position on the back or belly of the profile, in order to exploit the turbulence generated at the inside the vortex cell to delay the onset of the aerodynamic stall phenomenon. The selected airfoils must be able to support the study and design of the experimental airfoil equipped with vortex cell through the analysis of existing rotator configurations. As well as supporting experimentation through the introduction of innovative solutions in the field of wind energy production.',
    img: 'paduano.png'
  },
  {
    id: uuidv4(),
    name: 'Giorgio Gaspare Poma',
    section: 'IT',
    areas: 'Website manteinance, Office Management, Server management, Support for simulations',
    role: 'Leader',
    desc: 'Adding new functions and fixing bugs of our web site. Labor resource management. Server administration, storing data and simulations assistance.',
    img: 'user.png'
  },

  {
    id: uuidv4(),
    name: 'Simone Giuffrida',
    section: 'Electrical',
    areas: 'Converting energy struction development, Power management, Optimizing efficiency of the system',
    role: 'Leader',
    desc: 'Design, construction and testing of the structure for converting the mechanical energy of the wind rotor in electrical energy. Converted power control. Designing elements to optimize performance and efficiency.',
    img: 'user.png'
  },
  
];

export default membersComponent;
