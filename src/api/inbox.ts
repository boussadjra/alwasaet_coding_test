export type Message = {
    id: number;
    subject: string;
    body: string;
    read: boolean;
}

export const inbox: Message[] = [
    {
        id: 1,
        subject: 'Hello',
        body: 'Hello, how are you?',
        read: false,

    },
    {
        id: 2,
        subject: 'Meeting Reminder',
        body: 'Just a friendly reminder about our meeting tomorrow at 10 AM. Please make sure to prepare the necessary documents. Thanks!',
        read: true,

    },
    {
        id: 3,
        subject: 'Vacation Plans',
        body: 'Hey there! I hope you\'re doing well. I wanted to discuss our upcoming vacation plans. Let\'s meet for lunch sometime this week to go over the details. Can you suggest a day and time that works for you? Looking forward to it!',
        read: true,

    },
    {
        id: 4,
        subject: 'Important Announcement',
        body: 'Dear valued employee, We are pleased to inform you that the company will be implementing a new employee recognition program starting next month. Please refer to the attached document for more information. Thank you.',
        read: false,

    },
    {
        id: 5,
        subject: 'Invitation: Birthday Party',
        body: 'Hey, I\'m throwing a birthday party next Saturday to celebrate my special day. You\'re invited! The party starts at 7 PM at my place. Let me know if you can make it. Looking forward to celebrating with you!',
        read: true,
    }
];


const archived: Message[] = [
]
export function fetchMessages() {
    return new Promise<Message[]>((resolve) => {
        setTimeout(() => {
            resolve(inbox)
        }, 1000)
    })
}


export function archive(id: number) {
    const message = inbox.find(message => message.id === id)
    if (message) {
        archived.push(message)
        inbox.splice(inbox.indexOf(message), 1)
    }
}

export function unarchive(id: number) {
    const message = archived.find(message => message.id === id)
    if (message) {
        inbox.push(message)
        archived.splice(archived.indexOf(message), 1)
    }
}

