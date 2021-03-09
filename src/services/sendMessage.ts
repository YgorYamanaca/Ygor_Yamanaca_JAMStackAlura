export default function sendMessage(userDTO: Object): Promise<Response> {
  return fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userDTO),
  });
}
