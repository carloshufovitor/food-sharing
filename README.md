[![Releases](https://img.shields.io/badge/Releases-Download-blue?logo=github&style=for-the-badge)](https://github.com/carloshufovitor/food-sharing/releases)

# 🍽️ Food Sharing — React App to Share Available Food Items Near You

Badges
- [![React](https://img.shields.io/badge/React-17.0.2-61DAFB?logo=react&logoColor=white)](#)
- [![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)](#)
- [![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)](#)
- [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)](#)
- [![React Query](https://img.shields.io/badge/TanStack%20React%20Query-4.x-FF4154?logo=react-query&logoColor=white)](#)
- [![Topics](https://img.shields.io/badge/topics-axios%20express-js%20javascript%20lottie-react%20mongodb%20react%20react-router-dom%20react-toastify%20sweatalert%20tailwindcss%20tanstack-react-query-blue?style=flat-square)](#)

Live demo assets and installers
- Download the latest release file and execute it from the Releases page: https://github.com/carloshufovitor/food-sharing/releases

Table of contents
- About
- Features
- Tech stack
- Architecture and data model
- Screenshots & animations
- Getting started
  - Prerequisites
  - Install
  - Run
- API and endpoints
- Search, filters and caching
- Styling and UX
- Testing
- Deployment
- Releases (download and execute)
- Contributing
- License
- Contact

About
Food Sharing is a React-based web app that helps people share available food. Users can browse items, search by keyword, filter by category, and view item details. The app stores listings in MongoDB and serves data via an Express API. It uses React Query for caching and Axios for HTTP calls.

Features
- Browse available food items with images and metadata.
- Full-text search across titles and descriptions.
- Category and location filters.
- Item detail view with pickup instructions and contact.
- Create, edit, and remove listings (auth-ready hooks).
- Notifications with react-toastify.
- Smooth animations via lottie-react.
- Client-side routing with react-router-dom.
- Query caching and background refresh with tanstack-react-query.
- Mobile-first responsive UI with Tailwind CSS.

Tech stack
- Frontend: React, react-router-dom, react-toastify, lottie-react, tailwindcss
- Backend: Node.js, Express
- Data: MongoDB (Atlas or local)
- HTTP: Axios
- State & cache: TanStack React Query
- Alerts: sweatalert (as used in the repo)
- Build: Vite or Create React App (repo provides config)
- Testing: Jest + React Testing Library (sample tests included)

Architecture and data model
- Client (React)
  - Components: ItemCard, ItemList, ItemDetail, SearchBar, Filters, MapView, AuthForm
  - Hooks: useItems, useItem, useCreateItem, useSearch
  - Query keys: ["items"], ["item", id], ["search", query]
- Server (Express)
  - Routes: /api/items, /api/items/:id, /api/auth (placeholders)
  - Middlewares: json parser, logging, error handler
- Data model (MongoDB, example schema)
  - Item
    - _id: ObjectId
    - title: string
    - description: string
    - category: string
    - location: { lat: number, lng: number, address: string }
    - availableAt: ISODate
    - images: [string]
    - contact: { name: string, phone: string, email?: string }
    - createdAt, updatedAt

Screenshots & animations
- Hero image (Unsplash):  
  ![food-hero](https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&q=80&w=1200&auto=format&fit=crop&sharp=10)
- Example app screenshot (placeholder):  
  ![app-screenshot](https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&q=80&w=1200&auto=format&fit=crop)
- Lottie sample (search animation):  
  ![lottie-demo](https://assets8.lottiefiles.com/temp/lf20_8y3bq7.json)

Getting started

Prerequisites
- Node.js 16+ and npm or yarn.
- MongoDB instance (Atlas or local).
- Git.

Install (local dev)
1. Clone repository
   git clone https://github.com/carloshufovitor/food-sharing.git
2. Install server dependencies
   cd food-sharing/server
   npm install
3. Install client dependencies
   cd ../client
   npm install

Environment variables
- server/.env.example
  - MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/food-sharing
  - PORT=4000
  - JWT_SECRET=replace_with_secret
- client/.env.example
  - VITE_API_URL=http://localhost:4000/api

Run (development)
- Start server
  cd server
  npm run dev
- Start client
  cd client
  npm run dev
- Open browser at http://localhost:3000 (or Vite port)

Build and run (production)
- client:
  cd client
  npm run build
- server:
  cd server
  npm run start
- Serve static build from Express or a static host.

API and endpoints
- GET /api/items
  - Query params: q, category, lat, lng, radius, limit, page
  - Returns paged list of items
- GET /api/items/:id
  - Returns single item with contact info
- POST /api/items
  - Body: title, description, category, location, images, contact
  - Creates a listing
- PUT /api/items/:id
  - Updates a listing
- DELETE /api/items/:id
  - Removes a listing

Search, filters and caching
- The client uses Axios for requests.
- React Query caches /api/items responses under key ["items", filterState].
- Use query invalidation after POST/PUT/DELETE to keep UI fresh.
- Search behavior
  - Debounce user input (300ms).
  - Send q param to /api/items.
  - Server uses text index on title and description.

Styling and UX
- Tailwind CSS gives utility classes and responsiveness.
- The UI uses a card layout for items. Cards show image, title, short desc, tags, and a pickup time.
- Item detail shows larger images, full description, map snippet, and contact actions.
- Toasts appear on success or error.
- Sweatalert shows confirm dialogs for delete actions.
- Lottie animations play in empty states and search results.

Component map (core)
- App
  - Header (search + nav)
  - Routes
    - / (ItemList)
    - /items/:id (ItemDetail)
    - /create (CreateItemForm)
    - /edit/:id (EditItemForm)
  - Footer

State handling
- Keep local UI state in components.
- Use React Query for server state.
- Use context for theme or auth stub.

Testing
- Unit tests for hooks and small components with Jest.
- Integration tests for key routes with React Testing Library.
- Example test command:
  cd client
  npm test

Deployment
- Build client, serve static files from server/public, and deploy server to Node host.
- Or host client on Netlify/Vercel and server on Heroku/Render/Cloud Run.
- Use environment variable MONGO_URI for production DB.

Releases
- Visit and download the latest release artifact. The release contains a packaged server and client build or an installer script. After download, run the included installer or execute the start script inside the package.
- Releases URL: https://github.com/carloshufovitor/food-sharing/releases
- Steps after download
  - Unpack the archive (zip/tar.gz).
  - Inspect files and run the included start/install script.
  - Example commands:
    unzip food-sharing-x.y.z.zip
    cd food-sharing
    chmod +x install.sh
    ./install.sh
  - The installer sets up environment files and starts the server and client build in serve mode.

Security and data
- Use secure MongoDB credentials.
- Protect write endpoints with auth middleware before production.
- Sanitize user input on server.

Contributing
- Fork the repo.
- Create a branch: feat/your-feature
- Implement tests for new features.
- Open a PR and describe the change.
- Keep commits small and focused.

License
- MIT License. See LICENSE file in the repository.

Contact
- Issues and feature requests: open an issue on GitHub.
- For quick fixes, open a PR with tests.

Changelog and releases
- Check the Releases page for packaged builds and changelog entries: https://github.com/carloshufovitor/food-sharing/releases

Icons and credits
- Images from Unsplash and LottieFiles.
- Built with React and MongoDB.

Maintenance tips
- Keep indexes on MongoDB for fast search.
- Monitor cache sizes for React Query.
- Rotate secrets and restrict DB access.

Developer notes
- The repo uses a modular layout. Add a new field to Item schema, update server validation, and add UI fields in the Create/Edit forms.
- Use QueryClient.invalidateQueries(["items"]) after mutating data.

End of file