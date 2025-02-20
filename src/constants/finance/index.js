export const DUMMY_CLAIMS = [
  {
    id: 1,
    status: "Approved",
    staffName: "Michael Brown",
    projectName: "Healthcare System",
    startDate: "2025-03-01",
    endDate: "2025-04-10",
    totalWorking: 140,
  },
  {
    id: 2,
    status: "Paid",
    staffName: "James Wilson",
    projectName: "AI Chatbot",
    startDate: "2025-04-05",
    endDate: "2025-05-15",
    totalWorking: 130,
  },
  {
    id: 3,
    status: "Approved",
    staffName: "Oliver Harris",
    projectName: "Mobile Banking",
    startDate: "2025-07-10",
    endDate: "2025-08-25",
    totalWorking: 135,
  },
  {
    id: 4,
    status: "Paid",
    staffName: "Liam Garcia",
    projectName: "Payment Gateway",
    startDate: "2025-09-01",
    endDate: "2025-10-10",
    totalWorking: 140,
  },
  {
    id: 5,
    status: "Approved",
    staffName: "Noah Hall",
    projectName: "Data Analytics",
    startDate: "2026-01-05",
    endDate: "2026-02-15",
    totalWorking: 125,
  },
  {
    id: 6,
    status: "Paid",
    staffName: "Ethan Adams",
    projectName: "E-Learning Platform",
    startDate: "2026-03-05",
    endDate: "2026-04-15",
    totalWorking: 110,
  },
  {
    id: 7,
    status: "Approved",
    staffName: "Mason Roberts",
    projectName: "Food Delivery App",
    startDate: "2026-07-01",
    endDate: "2026-08-20",
    totalWorking: 125,
  },
  {
    id: 8,
    status: "Paid",
    staffName: "Logan Turner",
    projectName: "Fitness Tracker",
    startDate: "2026-09-10",
    endDate: "2026-10-25",
    totalWorking: 110,
  },
  {
    id: 9,
    status: "Approved",
    staffName: "Henry Parker",
    projectName: "IoT Home Automation",
    startDate: "2027-01-05",
    endDate: "2027-02-15",
    totalWorking: 120,
  },
  {
    id: 10,
    status: "Paid",
    staffName: "Jack Rivera",
    projectName: "Legal Management",
    startDate: "2027-03-05",
    endDate: "2027-04-15",
    totalWorking: 125,
  },
];

export const CLAIM_STATUSES = {
  DRAFT: "Draft",
  PENDING: "Pending",
  APPROVED: "Approved",
  PAID: "Paid",
  REJECTED: "Rejected",
  CANCELLED: "Cancelled",
};

export const STATUS_COLORS = {
  [CLAIM_STATUSES.DRAFT]: "#6C757D", // Xám
  [CLAIM_STATUSES.PENDING]: "#FFC107", // Vàng
  [CLAIM_STATUSES.APPROVED]: "#007BFF", // Xanh dương
  [CLAIM_STATUSES.PAID]: "#28A745", // Xanh lá
  [CLAIM_STATUSES.REJECTED]: "#DC3545", // Đỏ
  [CLAIM_STATUSES.CANCELLED]: "#6F42C1", // Tím
  default: "#28A745",
};
