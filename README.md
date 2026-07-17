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

To get pixel-perfect PDF documents from the web application:
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

---

## 📋 Assignment 3: ODK XLSForm & Pug PDF Template for Criminal Risk Assessment

This project has been extended to support the **Criminal Risk Assessment Request** form, using an ODK XLSForm structure and generating a matching high-fidelity Pug template with A4 client-side pagination.

### 📁 Files Added
*   `Criminal Risk Assessment Request.xlsx` (in root/odk): The complete ODK XLSForm spreadsheet mapping the PDF structure.
*   `views/criminal.pug`: High-fidelity layout template replicating the Criminal Risk Assessment form.
*   Updated `data/datasets.js`, `server.js`, `views/index.pug`, `public/app.js`, and `public/style.css` to integrate the form and pagination.

---

### 🧠 AI Model Selection & Rationale
*   **Model Chosen:** **Gemini 3.5 Flash** (via Antigravity assistant)
*   **Why:** Flash is a reasoning-capable model that excels at processing structural document requirements (like PDF fields and ODK XLSForm rows) and translating them into code formats (like Pug templates, JS datasets, and styling structures). Its high accuracy, speed, and contextual awareness allow for rapid, correct generation of complex hierarchical layouts.

#### Pros of using AI for this task:
1.  **Speed of Boilerplate:** Instantly structures nested HTML elements, input fields, tables, and inline lines.
2.  **Structural Mapping:** Seamlessly maps Excel sheet fields (`survey`, `choices`) directly to Javascript dataset schemas and Pug variables.
3.  **Mock Data Generation:** Quickly generates edge-case datasets (e.g., overflow text, nested fields) to test limits.

#### Cons of using AI for this task:
1.  **Visual Alignment Refinements:** Standard text LLMs lack real-time visual output, requiring human-in-the-loop CSS tuning for pixel-perfection.
2.  **Logic Constraints:** AI might write static styles where dynamic margins/paddings are necessary for client-side pagination to work correctly under overflow scenarios.

---

### 📝 Prompt History Used to Generate Pug Template

Here are the key prompts executed in the session to construct and integrate the Pug template:

#### Prompt 1: Inspect PDF Structure & Fields
> "Develop an Excel-based ODK XLSForm representing the fields in 'Criminal Risk Assessment Request.pdf'. Identify all inputs, checkboxes, consent texts, witness names, demographics, ID documents, and submission details. Parse this data to outline the spreadsheet columns."

#### Prompt 2: Write Pug Layout from XLSForm
> "Create a Pug template named `criminal.pug` that maps all the logical fields and sections from the XLSForm. Replicate the PDF's A4 format precisely. Use standard mixins for sections, underlines, and checkbox rows. Organize it into:
> 1. Consent declaration with signature lines.
> 2. Demographics grid (First/Second/Last Names, DOB, Gender checkboxes, current address, etc.).
> 3. Identification list (Birth Cert, SIN, Health Card, Treaty Card, MB Driver's License number).
> 4. CFS Agency Request Details (Agency name, reason checkboxes, worker, designate details, request date)."

#### Prompt 3: Setup Mock Datasets and Integrate Routing
> "Extend `data/datasets.js` with standard (Dataset 1) and overflow (Dataset 2) records containing realistic data for the Criminal form. Update `server.js` and `views/index.pug` to include this form in the dashboard switcher and render it."

---

### 🎥 Video Presentation Details

*   **Video Link:** *[Insert Loom/YouTube Video Link Here]*
*   **Content Covered:** Selection of LLM (Gemini 3.5 Flash), rationale, pros & cons of AI, demonstrating the live web interface, switching between Dataset 1 (Normal) and Dataset 2 (Overflow), and printing to PDF.

