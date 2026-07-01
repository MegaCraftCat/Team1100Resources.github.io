//the sidebar for when there is only one page in the subcategory
//maybe include some sponsors or something idk
const emptySidebarHTML = `
  <!-- Left Sidebar -->
  <aside id="sidebar_left">
    <h1>Navigation</h1>
    <ul>
      <li>
        <img src="https://placeholder.com" alt="icon">
        <a href="https://github.com/">GitHub Link</a>
      </li>
      <li>
        <img src="https://placeholder.com" alt="icon">
        <a href="#">dunno</a> 
      </li>
    </ul>
  </aside>
`;


document.body.insertAdjacentHTML('afterbegin', emptySidebarHTML);