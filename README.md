# Trebox Finance - Official Website

This is the official web platform for **Trebox Finance**, a microfinance and loans company based in Zimbabwe. The platform provides users with access to affordable personal, agricultural, education, and business loans.

## 🚀 Vision & Slogan
> **"Trebox Finance: Where your future is our treasure."**

---

## ✨ Features

* **Loan Packages:** Detailed information on Collateral Based, Salary Based, and Agriculture loans.
* **Invoice Discounting:** Specialized financial tools for businesses to manage cash flow.
* **Eligibility Checker:** Integrated tool for users to verify loan requirements.
* **Admin Dashboard:** A secure portal for administrators to manage applications and client data.
* **Responsive Design:** Optimized for mobile, tablet, and desktop users across Zimbabwe.

## 🛠 Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (or Framework like React/Next.js)
* **Backend/Database:** [Firebase](https://firebase.google.com/) (Realtime Database / Firestore)
* **Hosting:** [Specify Hosting, e.g., Firebase Hosting, Vercel, or Local Zimbabwean Host]

---

## 🔐 Admin & Data Management

As per the system architecture, all submission data and user inquiries are synchronized with **Firebase**.

* **Data Source:** The Admin panel fetches all real-time data directly from the Firebase collections.
* **Authentication:** Admin access is restricted via Firebase Auth to ensure the security of sensitive financial data.
* **Handling Leads:** New loan applications are updated instantly in the admin view for fast approval processing.

---

## 📦 Installation & Setup

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/trebox-finance.git](https://github.com/your-username/trebox-finance.git)
    ```
2.  **Navigate to the directory:**
    ```bash
    cd trebox-finance
    ```
3.  **Configure Firebase:**
    * Create a `.env` file in the root directory.
    * Add your Firebase configuration keys:
    ```env
    FIREBASE_API_KEY=your_key
    FIREBASE_AUTH_DOMAIN=treboxfinance.firebaseapp.com
    FIREBASE_PROJECT_ID=treboxfinance
    ```
4.  **Install dependencies & Start:**
    ```bash
    npm install
    npm start
    ```

---

## 📞 Contact & Support

* **Website:** [treboxfinance.co.zw](https://treboxfinance.co.zw/)
* **Location:** Harare & Bulawayo, Zimbabwe
* **Developer Note:** Website Upgrade by Joseph Marlon.

---
© 2026 Trebox Finance. All Rights Reserved.
