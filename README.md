project-root/
├── controllers/ ← 💡 Handles business logic (CRUD operations)
│ └── userController.js
├── models/ ← 💾 Handles database queries / schema setup
│ └── userModel.js
├── routes/ ← 🛣️ Defines API routes and maps them to controller functions
│ └── userRoutes.js
├── config/ ← ⚙️ Database connection and other configs
│ └── db.js
├── app.js ← 🚀 Main Express app setup
├── server.js ← 🌐 Starts the server
└── .env ← 🔐 Environment variables (e.g., DB credentials)
