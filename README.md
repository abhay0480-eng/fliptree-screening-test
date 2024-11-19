# E-Commerce Application

This is a single-page application (SPA) built with React, Tailwind CSS, Vite, React Router, and Redux Toolkit. The application includes functionality for user authentication (login and sign-up), product listing, and an add-to-cart feature.

## Key Features

- **Login Functionality**: 
  - Users can log in to their accounts.
  - Token management is implemented for session handling.

- **Sign-Up Functionality**: 
  - New users can create an account.

- **Product Listing Page**: 
  - Products are displayed in a grid format.
  - Each product includes an image, name, price, and an option to add to the cart.

- **Add to Cart Functionality**: 
  - Users can add products to their cart.
  - The cart updates seamlessly, reflecting the total price and quantity of items.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the application.
- **Vite**: For fast development and build tooling.
- **React Router**: For routing between different screens.
- **Redux Toolkit**: For state management, including cart and authentication states.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` (or the port specified in the terminal).

## Screens

### 1. Login Screen
- Users can enter their credentials to log in.
- On successful login, a token is stored for session management.

### 2. Sign-Up Screen
- New users can create an account by providing necessary details.
- Validation is implemented for user inputs.

### 3. Product Listing Page
- Displays a list of products fetched from an API.
- Each product card includes an image, name, price, and an "Add to Cart" button.

### 4. Add to Cart Screen
- Users can view items added to their cart.
- Users can update quantities or remove items from the cart.
- The total price is calculated and displayed.

## Best Practices
- Code is structured into components for reusability and maintainability.
- State management is handled using Redux Toolkit for a predictable state container.
- Tailwind CSS is used for responsive design and utility-first styling.

## Future Improvements
- Implement user authentication with JWT tokens.
- Add error handling and loading states for API calls.
- Enhance the UI/UX with animations and transitions.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Thanks to the React and Redux communities for their resources and documentation.
- Inspiration from various e-commerce platforms for UI design.
