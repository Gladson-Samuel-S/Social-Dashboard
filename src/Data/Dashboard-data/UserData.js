export const UserHeader = {
  title: "Projects",
  links: ["Home", "Crafted", "Pages", "Profile", "Projects"],
  filterButton: "Filter",
  createButton: "Create",
};

export const CardData = {
  logo: "/Assets/User/Avatar.jpg",
  profile: {
    name: "Max Smith",
    role: "Developer",
    location: "SF, Bay Arena",
    email: "max@kt.com",
    completion: {
      text: "Profile Completion",
      status: "50%",
    },
  },
  earnings: {
    text: "Earnings",
    value: "$4,500",
  },
  projects: {
    text: "Projects",
    value: "80",
  },
  success: {
    text: "Success Rate",
    value: "%60",
  },
  follow: "Follow",
  hireMe: "Hire Me",
  more: "...",
};

export const TabContent = [
  "Overview",
  "Projects",
  "Campaigns",
  "Documents",
  "Followers",
  "Activity",
];

export const PopupLinks = [
  {
    text: "Create Invoice",
    icon: "",
    extraLinks: null,
  },
  {
    text: "Create Payment",
    icon: "AiFillInfoCircle",
    extraLinks: null,
  },
  {
    text: "Generate Bill",
    icon: "",
    extraLinks: null,
  },
  {
    text: "Subscription",
    icon: "",
    extraLinks: {
      text: ["Plans", "Billing", "Statement"],
      switch: "Recurring",
    },
  },
  {
    text: "Settings",
    icon: "",
    extraLinks: null,
  },
];
