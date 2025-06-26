# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<!-- new methods used  -->
useLocation = to show the component based on which page we are
lazy loading = for better performace of react application

<!-- project details  -->

<!-- root.jsx -->
<!-- for showing during navigation  -->

<!-- Home file================================================================================================= -->
Home.jsx container data of home page and Most-selled contain the suggestion on home page and dropdown on home page 

<!-- Navbar file ========================================================= -->
cart.jsx containes the cart status -->
input.jsx contains the input content 
 Navbar.jsx main navbar file

<!-- suggestion folder========================== -->
containes the suggestion list expect home page 

<!-- productlist  -->
loadinglist.jsx contains the data which we shown during loading of data

<!-- productionlist.jsx -->
main file when user search and product and we have used Infinite scroll in it for lazy loading 

<!-- Redux folder -->
contains the store 

<!-- Cart folder -->
slice.js contains the slice method for adding and removing the cart items  -->
<!-- Addcart.jsx is the main file for cart -->
<!-- DisplayItems.jsx is the file which show the cart items if present -->
<!-- Empty.jsx is the file while show when cart is empty 

<!-- DataNotFound -->
this folder is for when no data is found

<!-- ProductDetail -->
Provides details about Product 
