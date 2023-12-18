import fetch from 'node-fetch';

const apiKey = '6425835045:AAH4oQKUYBm1HJRb2ALoeP5fEkfGgqSvmuo'; // Replace with your bot API key
const chatId = '-1002102330634'; // Replace with your chat ID

const sendTelegramMessage = async (message: string): Promise<any> => {
    const data = {
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
        disable_notification: false,
    };

    const headers = {
        'Content-Type': 'application/json',
    };

    const apiUrl = `https://api.telegram.org/bot${apiKey}/sendMessage`;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('ok');
        } else {
            console.error('Failed to send message');
        }
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

export default sendTelegramMessage;
