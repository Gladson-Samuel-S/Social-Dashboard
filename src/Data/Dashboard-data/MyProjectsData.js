export const MyProjectsHeader = {
  title: "My Projects",
  status: [
    { id: 0, text: "Active" },
    { id: 1, text: "In-Progress" },
    { id: 2, text: "Pending" },
    { id: 3, text: "Overdue" },
    { id: 4, text: "Completed" },
  ],
  buttonText: "New Project",
};

const colors = ["green", "violet", "blue", "orange", "red"];

export const Projects = [
  {
    logo: "/Assets/MyProjects/Fitness.svg",
    status: {
      title: "In-Progress",
      text: "#50cd97",
      background: "#e8fff3",
    },
    statusDark: {
      title: "In-Progress",
      text: "#0bb779",
      background: "#1c3238",
    },
    Title: "Fitness App",
    Description: "CRM App application to HR efficiency",
    DueDate: "Mar 10, 2022",
    Budget: "284,900.00",
    progress: "50%",
    contributers: [
      { name: "Emma Smith", location: "/Assets/MyProjects/Avatars/Emma.jpg" },
      { name: "Rudy Jason", location: "/Assets/MyProjects/Avatars/Rudy.jpg" },
      {
        name: "Shawn",
        location: "",
        color: colors[Math.floor(Math.random() * colors.length)],
      },
    ],
  },
  {
    logo: "/Assets/MyProjects/Leaf.svg",
    status: {
      title: "Pending",
      text: "#bc9199",
      background: "#f5f8fa",
    },
    statusDark: {
      title: "Pending",
      text: "#a0c1de",
      background: "#323248",
    },
    Title: "Leaf CRM",
    Description: "CRM App application to HR efficiency",
    DueDate: "Mar 10, 2021",
    Budget: "36,900.00",
    progress: "30%",
    contributers: [
      { name: "Alex Smith", location: "/Assets/MyProjects/Avatars/Emma.jpg" },
      { name: "Brian Cox", location: "/Assets/MyProjects/Avatars/Brian.jpg" },
    ],
  },
  {
    logo: "/Assets/MyProjects/Atica.svg",
    status: {
      title: "Completed",
      text: "#17baff",
      background: "#f1faff",
    },
    statusDark: {
      title: "Completed",
      text: "#2152dc",
      background: "#212e48",
    },
    Title: "Atica Banking",
    Description: "CRM App application to HR efficiency",
    DueDate: "Mar 14, 2021",
    Budget: "605,900.00",
    progress: "100%",
    contributers: [
      {
        name: "Madison Raynce",
        location: "/Assets/MyProjects/Avatars/Mad.jpg",
      },
      {
        name: "Baby Jason",
        location: "",
        color: colors[Math.floor(Math.random() * colors.length)],
      },
    ],
  },
  {
    logo: "/Assets/MyProjects/Finance.svg",
    status: {
      title: "Pending",
      text: "#bc9199",
      background: "#f5f8fa",
    },
    statusDark: {
      title: "Pending",
      text: "#a0c1de",
      background: "#323248",
    },
    Title: "Finance Dispatch",
    Description: "CRM App application to HR efficiency",
    DueDate: "Oct 25, 2022",
    Budget: "284,900.00",
    progress: "70%",
    contributers: [
      {
        name: "Francis Baken",
        location: "/Assets/MyProjects/Avatars/Francis.jpg",
      },
      {
        name: "Michelle Jason",
        location: "/Assets/MyProjects/Avatars/Michelle.jpg",
      },
    ],
  },
  {
    logo: "/Assets/MyProjects/9.svg",
    status: {
      title: "In-Progress",
      text: "#50cd97",
      background: "#e8fff3",
    },
    statusDark: {
      title: "In-Progress",
      text: "#0bb779",
      background: "#1c3238",
    },
    Title: "9 Degree",
    Description: "CRM App application to HR efficiency",
    DueDate: "April 15, 2022",
    Budget: "284,900.00",
    progress: "50%",
    contributers: [
      { name: "Emma Smith", location: "/Assets/MyProjects/Avatars/Emma.jpg" },
      { name: "Rudy Jason", location: "/Assets/MyProjects/Avatars/Rudy.jpg" },
      {
        name: "Shawn",
        location: "",
        color: colors[Math.floor(Math.random() * colors.length)],
      },
    ],
  },
  {
    logo: "/Assets/MyProjects/GoPro.svg",
    status: {
      title: "In-Progress",
      text: "#50cd97",
      background: "#e8fff3",
    },
    statusDark: {
      title: "In-Progress",
      text: "#0bb779",
      background: "#1c3238",
    },
    Title: "GoPro App",
    Description: "CRM App application to HR efficiency",
    DueDate: "April 15, 2022",
    Budget: "284,900.00",
    progress: "80%",
    contributers: [
      {
        name: "Madison Raynce",
        location: "/Assets/MyProjects/Avatars/Mad.jpg",
      },
      {
        name: "Baby Jason",
        location: "",
        color: colors[Math.floor(Math.random() * colors.length)],
      },
    ],
  },
  {
    logo: "/Assets/MyProjects/Buldozer.svg",
    status: {
      title: "In-Progress",
      text: "#50cd97",
      background: "#e8fff3",
    },
    statusDark: {
      title: "In-Progress",
      text: "#0bb779",
      background: "#1c3238",
    },
    Title: "Buldozer CRM",
    Description: "CRM App application to HR efficiency",
    DueDate: "Jul 25, 2022",
    Budget: "284,900.00",
    progress: "75%",
    contributers: [
      { name: "Alex Smith", location: "/Assets/MyProjects/Avatars/Emma.jpg" },
      { name: "Brian Cox", location: "/Assets/MyProjects/Avatars/Brian.jpg" },
      {
        name: "laura",
        location: "",
        color: colors[Math.floor(Math.random() * colors.length)],
      },
    ],
  },
  {
    logo: "/Assets/MyProjects/Aviasales.svg",
    status: {
      title: "Overdue",
      text: "#f4556c",
      background: "#fff5f8",
    },
    statusDark: {
      title: "Overdue",
      text: "#f04e60",
      background: "#3a2434",
    },
    Title: "Aviasales App",
    Description: "CRM App application to HR efficiency",
    DueDate: "Mar 10, 2022",
    Budget: "284,900.00",
    progress: "10%",
    contributers: [
      {
        name: "Jamison Smith",
        location: "/Assets/MyProjects/Avatars/Cris.jpg",
      },
      { name: "Brian Cox", location: "/Assets/MyProjects/Avatars/John.jpg" },
    ],
  },
  {
    logo: "/Assets/MyProjects/Oppo.svg",
    status: {
      title: "Completed",
      text: "#17baff",
      background: "#f1faff",
    },
    statusDark: {
      title: "Completed",
      text: "#2152dc",
      background: "#212e48",
    },
    Title: "Oppo CRM",
    Description: "CRM App application to HR efficiency",
    DueDate: "Jun 20, 2022",
    Budget: "284,900.00",
    progress: "100%",
    contributers: [
      {
        name: "Zack benson",
        location: "",
        color: colors[Math.floor(Math.random() * colors.length)],
      },
      { name: "Alex Smith", location: "/Assets/MyProjects/Avatars/Emma.jpg" },
      { name: "Brian Cox", location: "/Assets/MyProjects/Avatars/Brian.jpg" },
    ],
  },
];
