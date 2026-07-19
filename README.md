# ODK XLSForm & Criminal Risk Assessment Pug PDF Generator (Assignment 3)

This repository contains the deliverables for **Assignment 3**:
1.  **ODK XLSForm (`Criminal Risk Assessment Request.xlsx`)**: A fully structured ODK spreadsheet mapping the logical rules, constraints, and elements of the PDF.
2.  **Pug Template (`views/criminal.pug`)**: A high-fidelity, pixel-perfect printable A4 web replication of the Criminal Risk Assessment form, complete with dynamic client-side pagination.
3.  **AI Integration Documentation**: Prompt history, LLM choice rationale, and pros/cons analysis.

---

## 🚀 Key Features

*   **ODK XLSForm Schema:**
    *   **`survey`**: Maps demographics, dates, select-one gender options, multi-select checkboxes for identification, and conditional visibility (e.g., Driver's License field appears only if checked).
    *   **`choices`**: Lists all lookup codes and user-friendly labels.
    *   **`settings`**: Handles form naming and schema versioning.
*   **Pug (Jade) Template & Reusable Mixins:**
    *   Modular template layout built with Pug.
    *   Reuses custom mixins for section headers, underlines, and checkbox structures.
*   **Simulated Backend Datasets:**
    *   **Dataset 1 (Normal):** A regular completed form that fits cleanly on a standard 2-page template.
    *   **Dataset 2 (Overflow):** Injects long text blocks (e.g., signature witnesses, addresses, alias lists) to verify that the client-side pagination engine handles page overflow cleanly without overlap.
*   **Hybrid A4 Pagination Engine:**
    *   Client-side JavaScript (`public/app.js`) inspects element heights, breaks text lines/components across standard A4 pages (`297mm` height), and dynamically inserts page footers at the bottom of each page.
*   **Print-Media Optimization:**
    *   `@media print` styles hide the sidebar and screen preview bars, allowing you to export a perfect A4 PDF using the browser's native print engine.

---

## 📁 File Structure

```text
├── Criminal Risk Assessment Request.xlsx   # ODK XLSForm Spreadsheet
├── server.js                                # Express application server
├── package.json                             # Node package definitions
├── data/
│   └── datasets.js                          # Simulated backend datasets (Normal & Overflow)
├── public/
│   ├── app.js                               # Client-side dynamic A4 pagination script
│   ├── style.css                            # Screen & Print CSS styling
│   └── Screenshot...png                     # Logo asset
├── views/
│   ├── layout.pug                           # Base Pug skeleton layout
│   ├── mixins.pug                           # Reusable form mixins
│   ├── index.pug                            # Dashboard view container
│   ├── criminal.pug                         # Criminal Risk Assessment template [Assignment 3]
│   ├── medical.pug                          # Medical Form template [Reference]
│   └── worker.pug                           # Worker Report template [Reference]
└── README.md                                # Project documentation [This file]
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
    http://localhost:8080/?doc=criminal
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
    *   **Margins:** **None** (allows the stylesheet's precise `15mm` margins to style the layout).
    *   **Scale:** Default (100%).
    *   **Options:** Uncheck "Headers and footers" (hides browser URL/dates) and check "Background graphics" (renders checkmarks and backgrounds).
3.  Click **Save**.

---

## 🧠 AI Model Selection & Rationale

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

## 📝 Prompt History Used to Generate Pug Template

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

## 🎥 Video Presentation Details

*   **Video Link:** https://drive.google.com/file/d/1Nq1yqfG9HhzQj9SlbLulcRHb1UaAWgmJ/view?usp=drivesdk
*   **Content Covered:** Selection of LLM (Gemini 3.5 Flash), rationale, pros & cons of AI, demonstrating the live web interface, switching between Dataset 1 (Normal) and Dataset 2 (Overflow), showing the online ODK validator test, and printing to PDF.
