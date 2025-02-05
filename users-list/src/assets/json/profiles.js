import lelah from '../images/lelah.jpeg';
import jesus from '../images/jesus.jpeg';
import annie from '../images/annie.jpeg';
import robert from '../images/robert.jpeg';
import amy from '../images/amy.jpeg';
import anthony from '../images/anthony.jpeg';
import { v4 as uuidv4 } from "uuid";

export const profiles = [
    {
        "id": uuidv4(),
        "name": "Lelah Nichols",
        "location": "Troy, MI",
        "tags": ['clothes', 'stem'],
        "image": lelah,
    },
    {
        "id": uuidv4(),
        "name": "Jesus Weiss",
        "location": "Fort Worth, TX",
        "tags": ['headset', 'gadget', 'speed', 'winter'],
        "image": jesus,
    },
    {
        "id": uuidv4(),
        "name": "Annie Rice",
        "location": "Austin, TX",
        "tags": ['road', 'mountain', 'trip', 'earth', 'nature'],
        "image": annie,
    },
    {
        "id": uuidv4(),
        "name": "Robert Brower",
        "location": "Cincinnati, OH",
        "tags": ['Maintainance', 'gears', 'frame', 'repair'],
        "image": robert,
    },
    {
        "id": uuidv4(),
        "name": "Amy Campbell",
        "location": "Warrior, AL",
        "tags": ['music', 'disks'],
        "image": amy,

    },
    {
        "id": uuidv4(),
        "name": "Anthony S.Morin",
        "location": "Lyndhurst, NJ",
        "tags": ['vintage', 'electric'],
        "image": anthony,

    }
];