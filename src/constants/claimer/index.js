export const DUMMY_CLAIMS = [
    { id: 1, status: "Draft", staffName: "Edward King", projectName: "E-Commerce", startDate: "2025-01-01", endDate: "2025-02-20", totalWorking: 120 },
    { id: 2, status: "Pending", staffName: "Alice Johnson", projectName: "Banking App", startDate: "2025-02-10", endDate: "2025-03-15", totalWorking: 100 },
    { id: 3, status: "Approved", staffName: "Michael Brown", projectName: "Healthcare System", startDate: "2025-03-01", endDate: "2025-04-10", totalWorking: 140 },
    { id: 4, status: "Rejected", staffName: "Sophia Davis", projectName: "CRM Software", startDate: "2025-01-20", endDate: "2025-02-28", totalWorking: 90 },
    { id: 5, status: "Draft", staffName: "James Wilson", projectName: "AI Chatbot", startDate: "2025-04-05", endDate: "2025-05-15", totalWorking: 130 },
    { id: 6, status: "Pending", staffName: "Emily Clark", projectName: "Cloud Storage", startDate: "2025-05-01", endDate: "2025-06-20", totalWorking: 110 },
    { id: 7, status: "Approved", staffName: "Daniel Moore", projectName: "Inventory System", startDate: "2025-02-15", endDate: "2025-03-30", totalWorking: 115 },
    { id: 8, status: "Rejected", staffName: "Emma Thompson", projectName: "ERP System", startDate: "2025-06-01", endDate: "2025-07-20", totalWorking: 125 },
    { id: 9, status: "Draft", staffName: "Oliver Harris", projectName: "Mobile Banking", startDate: "2025-07-10", endDate: "2025-08-25", totalWorking: 135 },
    { id: 10, status: "Pending", staffName: "Ava Martinez", projectName: "Logistics System", startDate: "2025-08-05", endDate: "2025-09-15", totalWorking: 120 },
    { id: 11, status: "Approved", staffName: "Liam Garcia", projectName: "Payment Gateway", startDate: "2025-09-01", endDate: "2025-10-10", totalWorking: 140 },
    { id: 12, status: "Rejected", staffName: "Charlotte Lopez", projectName: "Blockchain Ledger", startDate: "2025-10-05", endDate: "2025-11-20", totalWorking: 130 },
    { id: 13, status: "Draft", staffName: "Benjamin Lee", projectName: "Cybersecurity System", startDate: "2025-11-01", endDate: "2025-12-15", totalWorking: 110 },
    { id: 14, status: "Pending", staffName: "Mia Walker", projectName: "HR Management", startDate: "2025-12-01", endDate: "2026-01-20", totalWorking: 120 },
    { id: 15, status: "Approved", staffName: "Noah Hall", projectName: "Data Analytics", startDate: "2026-01-05", endDate: "2026-02-15", totalWorking: 125 },
    { id: 16, status: "Rejected", staffName: "Harper Young", projectName: "Retail POS", startDate: "2026-02-10", endDate: "2026-03-25", totalWorking: 130 },
    { id: 17, status: "Draft", staffName: "Ethan Adams", projectName: "E-Learning Platform", startDate: "2026-03-05", endDate: "2026-04-15", totalWorking: 110 },
    { id: 18, status: "Pending", staffName: "Amelia Nelson", projectName: "Smart Home System", startDate: "2026-04-01", endDate: "2026-05-20", totalWorking: 140 },
    { id: 19, status: "Approved", staffName: "Alexander Carter", projectName: "Social Media App", startDate: "2026-05-10", endDate: "2026-06-25", totalWorking: 115 },
    { id: 20, status: "Rejected", staffName: "Isabella Perez", projectName: "Fleet Management", startDate: "2026-06-05", endDate: "2026-07-15", totalWorking: 130 },
    { id: 21, status: "Draft", staffName: "Mason Roberts", projectName: "Food Delivery App", startDate: "2026-07-01", endDate: "2026-08-20", totalWorking: 125 },
    { id: 22, status: "Pending", staffName: "Sophia Scott", projectName: "Hotel Booking", startDate: "2026-08-05", endDate: "2026-09-15", totalWorking: 120 },
    { id: 23, status: "Approved", staffName: "Logan Turner", projectName: "Fitness Tracker", startDate: "2026-09-10", endDate: "2026-10-25", totalWorking: 110 },
    { id: 24, status: "Rejected", staffName: "Mila Phillips", projectName: "Virtual Reality App", startDate: "2026-10-05", endDate: "2026-11-20", totalWorking: 140 },
    { id: 25, status: "Draft", staffName: "Lucas Campbell", projectName: "Streaming Platform", startDate: "2026-11-01", endDate: "2026-12-15", totalWorking: 135 },
    { id: 26, status: "Pending", staffName: "Luna Evans", projectName: "AI Image Processing", startDate: "2026-12-01", endDate: "2027-01-20", totalWorking: 110 },
    { id: 27, status: "Approved", staffName: "Henry Parker", projectName: "IoT Home Automation", startDate: "2027-01-05", endDate: "2027-02-15", totalWorking: 120 },
    { id: 28, status: "Rejected", staffName: "Ella Collins", projectName: "Online Marketplace", startDate: "2027-02-10", endDate: "2027-03-25", totalWorking: 130 },
    { id: 29, status: "Draft", staffName: "Jack Rivera", projectName: "Legal Management", startDate: "2027-03-05", endDate: "2027-04-15", totalWorking: 125 },
    { id: 30, status: "Pending", staffName: "Emma Torres", projectName: "Digital Wallet", startDate: "2027-04-01", endDate: "2027-05-20", totalWorking: 140 },
  ];
  
  export const CLAIM_STATUSES = {
    DRAFT: "Draft",
    PENDING: "Pending",
    APPROVED: "Approved",
    REJECTED: "Rejected"
  };
  
  export const STATUS_COLORS = {
    [CLAIM_STATUSES.DRAFT]: "#6C757D",
    [CLAIM_STATUSES.PENDING]: "#FFC107",
    [CLAIM_STATUSES.APPROVED]: "#007BFF",
    [CLAIM_STATUSES.REJECTED]: "#DC3545",
    default: "#28A745"
  };