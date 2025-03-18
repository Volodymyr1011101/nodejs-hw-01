import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
export const removeAllContacts = async () => {
    const contacts = await readContacts();
    if (contacts.length === 0) {
        console.log('No contacts to remove');
        return;
    }
    const emptyContactsArray = [];
    await writeContacts(emptyContactsArray);
};

removeAllContacts();
