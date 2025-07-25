# Mini Chat App

A modern, responsive chat application built with Node.js, Express, MongoDB, and EJS templating.



## Features

- 💬 Create, read, update, and delete chat messages
- 🎨 Modern and responsive UI with animations and transitions
- 🔒 Confirmation dialog for delete operations
- 📱 Mobile-friendly design
- 🌈 Professional color scheme and typography

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas
- **View Engine**: EJS
- **Frontend**: HTML, CSS, JavaScript
- **Styling**: Custom CSS with CSS variables for theming

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mini-chat-app.git
   cd mini-chat-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your MongoDB credentials:
   ```
   MONGODB_USERNAME=your_username
   MONGODB_PASSWORD=your_password
   MONGODB_CLUSTER=your_cluster
   MONGODB_DATABASE=your_database
   ```

4. Start the application:
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## Project Structure

```
mini-chat-app/
├── models/
│   └── chat.js         # MongoDB schema for chat messages
├── public/
│   ├── js/
│   │   └── delete-confirmation.js  # JavaScript for delete confirmation
│   ├── main.css        # CSS for the welcome page
│   └── style.css       # CSS for the chat pages
├── views/
│   ├── edit.ejs        # Edit chat message page
│   ├── index.ejs       # List all chats page
│   ├── main.ejs        # Welcome page
│   └── new.ejs         # Create new chat page
├── .env                # Environment variables (not in repo)
├── .gitignore          # Git ignore file
├── index.js            # Main application file
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## API Routes

- `GET /` - Welcome page
- `GET /chats` - View all chats
- `GET /chats/new` - Form to create a new chat
- `POST /chats` - Create a new chat
- `GET /chats/:id/edit` - Form to edit a chat
- `PUT /chats/:id` - Update a chat
- `DELETE /chats/:id` - Delete a chat

## Schema

### Chat

| Field      | Type     | Description                                |
|------------|---------|--------------------------------------------|
| from       | String   | Sender of the chat message                 |
| to         | String   | Recipient of the chat message              |
| msg        | String   | Content of the chat message (max 200 chars)|
| created_at | Date     | When the chat was created                  |
| updated_at | Date     | When the chat was last updated (if any)    |


## Future Enhancements

- User authentication and authorization
- Real-time chat with WebSockets
- File attachments
- Chat search functionality
- Dark mode theme

## License

MIT

## Created By

KiloCode - 2025