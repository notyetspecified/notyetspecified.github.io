exports.data = {
  modal: {
    title: 'João Ladeiras',
    subtitle: 'Software Engineer',
  },
  about: {
    rows: [
      {
        title: 'Name',
        content: 'João Ladeiras',
      },
      {
        title: 'Nationality',
        content: 'Portuguese',
      },
      {
        title: 'Languages',
        content: 'Portuguese (native)<br>English (fluent)<br>Spanish (basic)',
      },
      {
        title: 'Where I live',
        content: 'Porto, Portugal',
      },
      {
        title: 'Academic Training',
        content:
          "Master's Degree in Informatics and Computing Engineering at FEUP - Faculdade de Engenharia da Universidade do Porto (College of Engineering, Porto University)",
      },
      {
        title: 'Interests',
        content:
          'Mobile Application Development, Web Development, Automation, Bioinformatics, Machine Learning',
      },
    ],
  },
  skills: [
    {
      title: 'Main',
      skills: [
        { icon: 'bash', name: 'shell' },
        { icon: 'language-javascript', name: 'Javasript' },
        { icon: 'language-typescript', name: 'Typescript' },
        { icon: 'language-html5', name: 'HTML' },
        { icon: 'language-css3', name: 'CSS' },
        { icon: 'database-search', name: 'SQL' },
        { icon: 'language-java', name: 'Java' },
        { icon: 'language-cpp', name: 'C++' },
      ],
    },
    {
      title: 'Some Experience',
      skills: [
        { icon: 'language-php', name: 'PHP' },
        { icon: 'language-csharp', name: 'C#' },
        { icon: 'language-python', name: 'Python' },
        { icon: 'file-code', name: 'Prolog' },
        { icon: 'language-r', name: 'R' },
        { icon: 'database-search', name: 'noSQL' },
        { icon: 'language-swift', name: 'Swift' },
      ],
    },
    {
      title: 'Platfroms/Frameworks/Others',
      skills: [
        { icon: 'debian', name: 'Linux' },
        { icon: 'docker', name: 'Docker' },
        { icon: 'microsoft-windows', name: 'Windows', not: true },
        { icon: 'apple', name: 'MacOS', not: true },
        { icon: 'nodejs', name: 'Node' },
        { icon: 'cordova', name: 'Cordova' },
        { icon: 'angular', name: 'Angular' },
        { icon: 'android', name: 'Android' },
      ],
    },
  ],
  projects: [
    {
      title: 'iCare4Depression',
      date: 'WIP 2016',
      description:
        'A software bundle developed in the scope of iCare4Depression project (Portugal) by INESC TEC in partnership with ISMAI for the treatment of depression. The the set is made up of web and mobile applications that assists both patients and therapists/researchers in the course of treatment.',
      videoSource: 'icare4depression.mp4',
      logoSource: 'icare4depression.png',
    },
    {
      title: 'A-CAS',
      date: 'WIP 2016',
      description:
        'An app that, taking real time monitored parameters in anaesthesia, provides both clear value reading and a diagnostic through the Anaesthetic Crisis Manual (ACM).',
      videoSource: 'acas.mp4',
      logoSource: 'acas.png',
    },
    {
      title: 'On The Move',
      date: 'June 2014',
      description:
        'An Android app that helps the user navigating to/from the airport and follows him through the flight stages. This project was developed as part of a college project in collaboration with OPT (Optimização e Planeamento de Transportes, S.A.).',
      videoSource: 'onthemove.mp4',
      logoSource: 'onthemove.png',
    },
    {
      title: 'Bioterium',
      date: 'November 2013',
      description:
        'A management software product developed for ICBAS animal facility as part of a college project.',
      videoSource: 'bioterium.mp4',
      logoSource: 'bioterium.png',
      horizontal: true,
    },
  ],
  contact: [
    {
      type: 'Contact Information',
      contacts: [
        {
          url: 'http://ladeiras.net',
          icon: 'web',
          title: 'ladeiras.net',
        },
        {
          url: 'tel:00351938074216',
          icon: 'phone',
          title: '+351 938074216',
        },
        {
          url: 'mailto:jtladeiras@gmail.com',
          icon: 'email',
          title: 'jtladeiras@gmail.com',
        },
        {
          url: 'skype:jtladeiras@gmail.com',
          icon: 'skype',
          title: 'jtladeiras@gmail.com',
        },
      ],
    },
    {
      type: 'Social Links',
      contacts: [
        {
          url: 'https://www.linkedin.com/in/jtladeiras',
          icon: 'linkedin',
          title: 'jtladeiras',
        },
      ],
    },
    {
      type: 'Others',
      contacts: [
        {
          url: 'https://github.com/notyetspecified',
          icon: 'github',
          title: 'notyetspecified.github.io',
        },
      ],
    },
  ],
};
