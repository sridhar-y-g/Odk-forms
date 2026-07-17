/* ==========================================
   WCB Manitoba Form Pagination & Print Engine
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Start the pagination process once the DOM is ready
  paginateForm();
});

/**
 * Main function to paginate the unpaginated HTML template rendered by Pug.
 */
function paginateForm() {
  const viewer = document.getElementById('document-viewer');
  const rawContainer = document.getElementById('raw-content-container');
  
  if (!viewer || !rawContainer) {
    console.error("Required DOM elements for pagination are missing.");
    return;
  }
  
  // Clear the A4 preview area
  viewer.innerHTML = '';
  
  // Read document type and metadata attributes injected by the server-rendered template
  const docType = rawContainer.getAttribute('data-doc'); // 'medical' or 'worker'
  const workerName = rawContainer.getAttribute('data-worker-name') || '';
  const claimNo = rawContainer.getAttribute('data-claim-no') || '';
  const appId = rawContainer.getAttribute('data-app-id') || '';
  const submittedDate = rawContainer.getAttribute('data-submitted-date') || '';
  
  // Create an array of children elements from the raw content to iterate over
  const elements = Array.from(rawContainer.children);
  
  // Keep track of page generation states
  let currentPageNum = 1;
  const pages = [];
  
  // Helper function to create a new, empty A4 page container
  function createPage(pageNum) {
    const page = document.createElement('div');
    page.className = 'pdf-page';
    
    let headerHTML = '';
    
    if (docType === 'criminal') {
      headerHTML = `
        <div class="pdf-header">
          <div class="pdf-header-left" style="flex: 1.2;">
            <div style="font-weight: 700; font-size: 10px; margin-bottom: 1.5mm; font-family: var(--font-main);">MANITOBA FAMILIES - CRIMINAL RISK ASSESSMENT UNIT</div>
            <div class="pdf-header-address" style="font-size: 8px;">
              Child Protection Branch<br>
              201 - 114 Garry Street<br>
              Winnipeg, Manitoba R3C 4V5
            </div>
          </div>
          <div class="pdf-header-right" style="flex: 1; align-items: flex-end;">
            <h1 style="font-size: 13.5px; font-weight: 700; text-align: right; line-height: 1.2; margin-bottom: 1.5mm; font-family: var(--font-title);">CRIMINAL RISK ASSESSMENT<br>REQUEST</h1>
            <div style="font-size: 8px; color: #555; text-align: right;">Revision date: 2025-01-10</div>
          </div>
        </div>
        <div class="pdf-body"></div>
        <div class="pdf-footer">
          <div class="pdf-footer-left">Criminal Risk Assessment Request</div>
          <div class="pdf-footer-right">
            Page <span class="page-num">${pageNum}</span> of <span class="total-pages">Y</span>
          </div>
        </div>
      `;
    } else {
      headerHTML = `
        <div class="pdf-header">
          <div class="pdf-header-left">
            <img src="/Screenshot%202026-07-07%20143952.png" class="wcb-logo-img" alt="WCB Manitoba Logo">
            <div class="pdf-header-address">
              333 Broadway<br>
              Winnipeg, MB R3C 4W3<br>
              Phone: (204) 954-4321<br>
              Toll Free: 1-855-954-4321<br>
              wcb.mb.ca
            </div>
          </div>
          <div class="pdf-header-right">
            <h1>${docType === 'medical' ? 'Medical & Travel Expense<br>Request' : 'Worker Progress Report'}</h1>
            <div class="pdf-header-boxes">
              <div class="claim-box">Claim No. ${claimNo || '________'}</div>
              ${docType === 'worker' ? '<div class="doc-type-box">WP</div>' : ''}
            </div>
          </div>
        </div>
        <div class="pdf-body"></div>
        <div class="pdf-footer">
          <div class="pdf-footer-left">Worker App ID: ${appId || '______'}</div>
          <div class="pdf-footer-right">
            Submitted: ${submittedDate || '__________________'} / Page <span class="page-num">${pageNum}</span> of <span class="total-pages">Y</span>
          </div>
        </div>
      `;
    }
    
    page.innerHTML = headerHTML;
    viewer.appendChild(page);
    pages.push(page);
    return page;
  }
  
  // Initialize the first page
  let currentPage = createPage(currentPageNum);
  let currentBody = currentPage.querySelector('.pdf-body');
  
  // Function to create a new page and transition states
  function addNewPage() {
    currentPageNum++;
    currentPage = createPage(currentPageNum);
    currentBody = currentPage.querySelector('.pdf-body');
  }
  
  // Loop through all unpaginated elements and distribute them across pages
  elements.forEach((el) => {
    // 1. Check for manual page breaks inserted in templates
    if (el.classList.contains('page-break-marker')) {
      if (currentBody.children.length > 0) {
        addNewPage();
      }
      return;
    }
    
    // 2. Check if the element is a table section (contains header & rows)
    if (el.classList.contains('pdf-table-section')) {
      const sectionTitle = el.getAttribute('data-title');
      const sectionNote = el.getAttribute('data-note');
      const originalTable = el.querySelector('table');
      
      if (!originalTable) return;
      
      const originalThead = originalTable.querySelector('thead');
      const originalRows = Array.from(originalTable.querySelectorAll('tbody tr'));
      
      // Create a new section wrapper on the current page
      let currentSection = document.createElement('div');
      currentSection.className = 'pdf-table-section';
      currentSection.setAttribute('data-title', sectionTitle);
      
      // Append Title
      const titleEl = document.createElement('div');
      titleEl.className = 'pdf-section-title';
      titleEl.innerText = sectionTitle;
      currentSection.appendChild(titleEl);
      
      // Append Note if present
      if (sectionNote) {
        const noteEl = document.createElement('div');
        noteEl.className = 'section-note';
        noteEl.innerText = sectionNote;
        currentSection.appendChild(noteEl);
      }
      
      // Create fresh table structure
      let currentTable = document.createElement('table');
      currentTable.className = 'pdf-table';
      currentTable.appendChild(originalThead.cloneNode(true));
      
      const currentTbody = document.createElement('tbody');
      currentTable.appendChild(currentTbody);
      currentSection.appendChild(currentTable);
      
      // Append table section to the current page body
      currentBody.appendChild(currentSection);
      
      // If adding the table skeleton (even empty) causes page overflow, move it entirely to a new page
      if (currentBody.scrollHeight > currentBody.clientHeight && currentBody.children.length > 1) {
        currentBody.removeChild(currentSection);
        addNewPage();
        currentBody.appendChild(currentSection);
      }
      
      // If table is empty (0 records), render a placeholder blank row to preserve visual layout
      if (originalRows.length === 0 || (originalRows.length === 1 && originalRows[0].cells[0].innerHTML === '&nbsp;')) {
        const dummyRow = document.createElement('tr');
        const colCount = originalThead.querySelectorAll('th').length;
        dummyRow.innerHTML = Array(colCount).fill('<td>&nbsp;</td>').join('');
        currentTbody.appendChild(dummyRow);
        return;
      }
      
      // Distribute table rows row-by-row
      originalRows.forEach((row, rowIndex) => {
        const rowClone = row.cloneNode(true);
        currentTbody.appendChild(rowClone);
        
        // If a row causes page overflow, split the table
        if (currentBody.scrollHeight > currentBody.clientHeight) {
          // Remove the overflowing row
          currentTbody.removeChild(rowClone);
          
          // Start a new page for the remaining rows
          addNewPage();
          
          // Re-create the table section on the new page, labeling it as '(Continued)'
          currentSection = document.createElement('div');
          currentSection.className = 'pdf-table-section';
          currentSection.setAttribute('data-title', sectionTitle);
          
          const contTitleEl = document.createElement('div');
          contTitleEl.className = 'pdf-section-title';
          contTitleEl.innerText = `${sectionTitle} (Continued)`;
          currentSection.appendChild(contTitleEl);
          
          currentTable = document.createElement('table');
          currentTable.className = 'pdf-table';
          currentTable.appendChild(originalThead.cloneNode(true));
          
          const newTbody = document.createElement('tbody');
          currentTable.appendChild(newTbody);
          currentSection.appendChild(currentTable);
          currentBody.appendChild(currentSection);
          
          // Append the row to the new table
          newTbody.appendChild(rowClone);
        }
      });
      
    } else {
      // 3. Regular block element (Titles, Checkbox blocks, fields, textboxes)
      const blockClone = el.cloneNode(true);
      currentBody.appendChild(blockClone);
      
      // Check for page overflow
      if (currentBody.scrollHeight > currentBody.clientHeight) {
        // If it overflows and there is other content on the page, move the entire block to a new page
        if (currentBody.children.length > 1) {
          currentBody.removeChild(blockClone);
          addNewPage();
          currentBody.appendChild(blockClone);
        }
      }
    }
  });
  
  // Set the total page count in all footers
  pages.forEach((page) => {
    page.querySelector('.total-pages').innerText = currentPageNum;
  });
  
  // Update the page count badge in the preview dashboard header
  const badge = document.getElementById('page-count-badge');
  if (badge) {
    badge.innerText = `Pages: ${currentPageNum}`;
  }
}

/**
 * Toggles the sidebar collapsed state.
 */
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('collapsed');
}
