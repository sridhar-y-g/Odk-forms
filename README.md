# WCB Manitoba - Interactive Form Generator & A4 PDF Engine (Assignment 2)

A pixel-perfect, backend-driven web replication of the official Workers Compensation Board of Manitoba (WCB) forms:
1.  **Medical & Travel Expense Request**
2.  **Worker Progress Report**

This project has been updated to use **Pug templates**, **Express.js**, and simulated backend datasets to dynamically generate printable A4 document formats.

---

## 🚀 Key Features

*   **Pug (Jade) Templating & Reusable Mixins:**
    *   Replaces static HTML with modular Pug templates.
    *   Implements reusable design blocks (WCB headers, footers, checkbox grids, custom underlines) via **Pug mixins** for a clean, DRY (Don't Repeat Yourself) codebase.

*   **Simulated Backend Datasets:**
    *   No manual data entry on screen. All values are fed dynamically from the backend simulated database (`data/datasets.js`).
    *   Includes a dashboard switcher to toggle between:
        *   **Dataset 1 (Normal):** Represents regular claims that fit within standard page bounds.
        *   **Dataset 2 (Overflow):** Injects long text areas and multi-row tables to test dynamic pagination.

*   **Hybrid A4 Pagination Engine:**
    *   Express renders the full form markup using Pug on the backend.
    *   Client-side JavaScript (`public/app.js`) inspects element heights in the browser, splits tables row-by-row when they exceed page limits, repeats table headers on subsequent pages with `(Continued)` tags, and aligns the page footers at the exact bottom of standard A4 dimensions.

*   **Print-Media Optimization:**
    *   `@media print` CSS rules hide the dashboard sidebar and preview headers, rendering the document as a clean, margin-perfect PDF directly from the browser's print dialog (`Ctrl + P` or the **Print & Export** button).

---

## 📁 File Structure

```text
├── data/
│   └── datasets.js       # Predefined mock datasets (Dataset 1 & Dataset 2)
├── public/
│   ├── app.js            # Client-side dynamic pagination & print engine
│   ├── style.css         # Print & screen stylesheets
│   └── Screenshot...png  # WCB Manitoba Logo asset
├── views/
│   ├── layout.pug        # Base Pug HTML layout
│   ├── mixins.pug        # Reusable Pug mixins (headers, footers, checkboxes)
│   ├── index.pug         # Main dashboard layout
│   ├── medical.pug       # Medical & Travel Form template
│   └── worker.pug        # Worker Progress Report template
├── package.json          # Node dependencies (express, pug)
├── server.js             # Express application server
└── README.md             # Project documentation
```

---

## 🛠️ How to Run Locally

1.  **Ensure Node.js is installed** on your machine.
2.  Open your terminal and navigate to the project directory:
    ```bash
    cd c:\Users\Acer\Desktop\intership
    ```
3.  Install the required dependencies:
    ```bash
    npm install
    ```
4.  Start the Express local server:
    ```bash
    npm start
    ```
5.  Open your browser and navigate to:
    ```text
    http://localhost:8080/
    ```

---

## 🖨️ How to Export to PDF Correctly

To get pixel-perfect WCB PDF documents from the web application:
1.  Click the **Print & Export to PDF** button in the sidebar (or press `Ctrl + P`).
2.  In the browser's print preview dialog, configure these settings:
    *   **Destination:** Save as PDF / Microsoft Print to PDF.
    *   **Pages:** All.
    *   **Layout:** Portrait.
    *   **Paper size:** A4 (mandatory for pixel-perfect pagination).
    *   **Margins:** **None** (this allows the stylesheet's precise `15mm` margins to style the layout).
    *   **Scale:** Default (100%).
    *   **Options:** Uncheck "Headers and footers" (to hide browser URL/dates) and check "Background graphics" (to render form backgrounds and checkmarks).
3.  Click **Save** or **Print**.
