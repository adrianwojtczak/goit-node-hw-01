const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);

    return contacts;
  } catch (err) {
    console.error("Error reading contacts file:", err);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const contact = contacts.find(({ id }) => id === contactId);

    return contact;
  } catch (err) {
    console.error("Error reading contacts file:", err);
  }
};

const removeContact = async (contactId) => {
  try {
    let contacts = await listContacts();
    const contactIndex = contacts.findIndex(({ id }) => id === contactId);
    if (contactIndex === -1) {
      return null;
    }
    const [removedContact] = contacts.splice(contactIndex, 1);

    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return removedContact;
  } catch (err) {
    console.error("Error reading contacts file:", err);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const contacts = await listContacts();
    const newContact = { id: nanoid(), name, email, phone };

    contacts.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return newContact;
  } catch (err) {
    console.error("Error reading contacts file:", err);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
