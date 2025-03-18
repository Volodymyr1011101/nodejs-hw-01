import { readContacts } from './utils/readContacts.js';
import { generateContacts } from './scripts/generateContacts.js';
const mainFn = async ()  => {
    await generateContacts(5);
    console.log(await readContacts());
};
mainFn();