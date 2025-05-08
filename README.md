This project is a simplified clone of the Apollo247 General Physician/Internal Medicine destination page, built using Next.js with off-page SEO support. It includes a functional doctor listing with filters, a basic header, and a backend API powered by your chosen technology stack (SQL/NoSQL supported).

🌐 Live Destination Page Reference
https://doctor-compass-listing.vercel.app/

🚀 Features
Frontend (Next.js)
Functional destination page clone.

Off-page SEO implemented using Next.js Head and server-side rendering.

Doctor Listings with mock UI components.

Filters are fully functional and dynamically query data from the backend.

Other UI elements (like sort, buttons, etc.) are included for layout completeness but do not have any interactivity.

Backend (REST API)
Built with your choice of technology (Node.js + Express/NestJS, etc.)

Database: SQL or NoSQL (your preference)

Two main endpoints:

POST /api/add-doctor — Add a doctor to the database.

GET /api/list-doctor-with-filter?page=&limit=&filters= — List doctors with pagination and filters.
