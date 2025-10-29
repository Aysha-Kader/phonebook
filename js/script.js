

    //access elements

const searchInput = document.getElementById("searchInput");
const addContact = document.getElementById("addContact");
const contactList = document.getElementById("contactList");
let contacts = [];

// Add Contact
addContact.addEventListener("click", () => {
  const name = prompt("Enter name");
  const phone = prompt("Enter phone number");

  if (!name || !phone) {
    alert("Both fields required!");
    return;
  }

  const contact = { name, phone };
  contacts.push(contact);

  const newContact = document.createElement("li");
  newContact.className =
    "d-flex justify-content-between align-items-center p-2 mb-2 border border-1 border-secondary";
  newContact.innerHTML = `
    <span><span class="fs-5">${name}</span><br>${phone}</span>
    <div>
      <button class="btn btn-sm btn-warning me-1">Edit</button>
      <button class="btn btn-sm btn-danger">X</button>
    </div>
  `;

  // Edit Button
  const editBtn = newContact.querySelector("button.btn-warning");
  editBtn.addEventListener("click", () => {
    const newName = prompt("Enter new name", contact.name);
    const newPhone = prompt("Enter new phone number", contact.phone);

    if (newName && newPhone) {
      contact.name = newName;
      contact.phone = newPhone;
      newContact.querySelector("span").innerHTML = `<span class="fs-5">${newName}</span><br>${newPhone}`;
    }
  });

  // Delete Button
  const deleteBtn = newContact.querySelector("button.btn-danger");
  deleteBtn.addEventListener("click", () => {
    contacts = contacts.filter((c) => c !== contact);
    newContact.remove();
  });

  contactList.appendChild(newContact);
});

// Search contacts
searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const allContacts = contactList.querySelectorAll("li");

  allContacts.forEach((li) => {
    const text = li.textContent.toLowerCase();
    li.style.display = text.includes(term) ? "" : "none";
  });
});
