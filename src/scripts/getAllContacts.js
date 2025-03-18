import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
    const contacts = await readContacts();
    if (contacts.length === 0) {
        console.log('No contacts found');
        return; 
    }
    return contacts;
};

console.log(await getAllContacts());
