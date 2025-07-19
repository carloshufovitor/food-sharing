# Food Sharing App

A React-based web app for sharing available food with others. Users can view available food items, search for specific items, and view detailed information about each food.


## Features

-  Search foods by name
-  Add / Delete / Update food with Crud Operation
-  Manage my foods
-  Protected routes using PrivateRoute
-  View food details
-  Toast notifications on successful actions
-  Lottie animation support
-  Clean & responsive UI with Tailwind CSS

---

##  Packages Used

| Package                     
|-----------------------------
| `react`                     
| `react-router-dom`          
| `axios`                     
| `@tanstack/react-query`     
| `react-toastify`            
| `lottie-react`              
| `sweetalert2`               
| `tailwindcss`                

---

##  Installation & Setup

- react
- react-router
- mongodb
- axios
- tailwind
- daisy
- express
- dotenv
- toast 
- lottie


---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── AvailableFoods.jsx
│   ├── ManageFoodCard.jsx
│   └── LottieAnimation.jsx
│
├── pages/
│   ├── Home/
│   │   ├── Home.jsx
│   │   ├── FeaturedFoods.jsx
│   │   ├── FoodDetails.jsx
│   │   ├── UpdatedFoodDetails.jsx
│   └── Private Page/
│       ├── AddFood.jsx
│       ├── ManageMyFoods.jsx
│       └── MyFoodRequest.jsx
│
├── routes/
│   ├── router.jsx
│   └── PrivateRoute.jsx
│
└── App.jsx
```


## 🔁 API Endpoints (Example)

- `GET /available-foods` – Get all food items
- `GET /food-details/:id` – Get single food item by ID
- `PUT /updated-food-details/:id` – Update food item
- `DELETE /manage-my-foods/:id` – Delete food
- `POST /add-food` – Add new food

---































































































# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
