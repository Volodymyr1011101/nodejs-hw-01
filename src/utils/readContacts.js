import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB);
        return JSON.parse(data);
    } catch (error) {
        console.error(error);
        return [];
    }
};
