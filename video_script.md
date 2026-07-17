# Video Presentation Script: Assignment 3

Use this script as a guide when recording your up-to-be 5-minute video. Ensure your **camera is turned on** and your screen is shared.

---

## ⏱️ Video Breakdown & Script

### 🎬 Introduction (0:00 - 0:45)
*   **[Visual]**: Face-cam on, displaying your local browser showing the dashboard at `http://localhost:8080/`.
*   **[What to Say]**:
    > "Hello everyone, my name is [Your Name], and this is my presentation for Assignment 3: ODK XLSForm and Pug PDF template replication for the Criminal Risk Assessment Request form.
    > 
    > In this assignment, I developed a complete ODK XLSForm corresponding to the Manitoba Department of Families' Criminal Risk Assessment PDF. I then replicated that exact form using a high-fidelity Pug template inside our Express application, powered by client-side dynamic A4 pagination."

---

### 🧠 AI Model & Rationale (0:45 - 1:45)
*   **[Visual]**: Keep face-cam visible, show the `README.md` file in VS Code or in your browser.
*   **[What to Say]**:
    > "For this task, I chose **Gemini 3.5 Flash** as my underlying AI model. I selected this model because it has exceptional coding and reasoning capabilities, which are crucial for analyzing raw documents and generating structured syntax like Pug, HTML, and CSS grids.
    > 
    > There are key pros and cons to using AI for a task like this:
    > 
    > **Pros:**
    > 1. It speeds up boilerplate code generation significantly, especially nesting elements and fields.
    > 2. It accurately maps complex tabular Excel columns to Javascript objects.
    > 3. It makes generating simulated normal and overflow datasets instant.
    > 
    > **Cons:**
    > 1. AI cannot visually execute output, so I still had to manually adjust CSS margins, flex properties, and line alignments to prevent text overlap.
    > 2. Dynamic client-side pagination requires custom height-handling rules that standard code generators sometimes struggle to write without human guidance."

---

### 📊 ODK XLSForm & Online Validation (1:45 - 2:45)
*   **[Visual]**: Open `Criminal Risk Assessment Request.xlsx` in Excel or VS Code, click through the tabs (`survey`, `choices`, `settings`).
*   **[What to Say]**:
    > "First, let's look at the ODK XLSForm spreadsheet I developed. It is built on three essential worksheets:
    > 
    > 1. The **survey** sheet defines our form's questions and input types. It has:
    >    - Standard question types like `text` and `date` for demographics.
    >    - Choice-based questions like `select_one` for gender and `select_multiple` for identification checkboxes.
    >    - Logic columns like `required` to mandate key inputs, and `relevant` columns for conditional visibility—such as showing the MB Driver's License number line only when that ID checkmark is active.
    > 
    > 2. The **choices** sheet contains all our option lists. Here, lists like `gender`, `yes_no`, or `id_list` define the exact database values and user-friendly labels.
    > 
    > 3. The **settings** sheet contains form metadata, including the Form Title, unique Form ID, and schema versioning, which signals ODK to fetch updates when changes occur."
*   **[Action]**: Switch your browser tab to `https://getodk.org/xlsform/` and upload the `Criminal Risk Assessment Request.xlsx` file. Show the success screen.
*   **[What to Say]**:
    > "To verify that this spreadsheet compiles correctly to ODK standards, I can upload it to the official online ODK validator at `getodk.org/xlsform`. 
    > 
    > As you can see, when I submit our file, the validator returns a successful compilation message with no errors or warnings, confirming that our XLSForm structure is fully valid and ready to be used in ODK Collect or Enketo."

---

### 🖥️ Live Web App Demonstration (2:45 - 4:15)
*   **[Visual]**: Switch back to the browser at `http://localhost:8080/`.
*   **[Action 1]**: Click on **"3. Criminal Risk"** in the sidebar to load the form.
*   **[What to Say]**:
    > "Now, let's look at the web application where this form is rendered. As you can see, when I select 'Criminal Risk', the layout renders the exact headers, consent terms, demographics grid, and agency submission sections from the PDF."
*   **[Action 2]**: Click on **"Dataset 1 (Normal)"** in the sidebar.
*   **[What to Say]**:
    > "Under Dataset 1, the form fields are filled with typical data. It paginates beautifully across exactly two pages, matching the original PDF document structure. The headers and footers with page numbers are rendered dynamically in the print preview."
*   **[Action 3]**: Click on **"Dataset 2 (Overflow)"** in the sidebar.
*   **[What to Say]**:
    > "If I switch to Dataset 2, we simulate an overflow case with extremely long names, addresses, and lists. Notice how the client-side pagination engine dynamically shifts the content, wraps the text, and expands the line heights without causing any overlap, pushing content cleanly onto Page 3. The page count badge automatically updates to reflect this."

---

### 🖨️ Exporting to PDF & Outro (4:15 - 5:00)
*   **[Visual]**: Click on the blue **"Print & Export to PDF"** button. Let the print preview window pop up.
*   **[What to Say]**:
    > "Finally, let's test exporting this form to a PDF document. By clicking the print button, the browser opens the native A4 print window. With margins set to 'None' and background graphics checked, the form prints as a clean, multi-page vector PDF.
    > 
    > This completes my overview of the Criminal Risk Assessment form replication. The ODK XLSForm spreadsheet and code are fully updated in my repository. Thank you for your time!"
