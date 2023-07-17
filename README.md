# Node API - Product Management

This Node API project is designed to manage products using a MongoDB database. It provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on products.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

To get started with the Node API for product management, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```
   The server will start running on `http://localhost:3000`.

## API Endpoints

### GET /products
- Retrieves all products from the database.
- Response:
  - Status: 200 (OK)
  - Body: Array of product objects

### GET /products/:id
- Retrieves a single product by its ID.
- Path Parameters:
  - `id` - The ID of the product
- Response:
  - Status: 200 (OK)
  - Body: Product object

### POST /product
- Creates a new product.
- Request Body: Product object
- Response:
  - Status: 200 (OK)
  - Body: Created product object

### PUT /products/:id
- Updates a single product by its ID.
- Path Parameters:
  - `id` - The ID of the product
- Request Body: Updated product object
- Response:
  - Status: 200 (OK)
  - Body: Updated product object

### DELETE /products/:id
- Deletes a single product by its ID.
- Path Parameters:
  - `id` - The ID of the product
- Response:
  - Status: 200 (OK)
  - Body: Deleted product object

## Database Connection

The Node API connects to a MongoDB database using Mongoose. The connection URL is `mongodb://127.0.0.1:27017/node_api`. Ensure that you have MongoDB installed and running locally.

## Error Handling

In case of any errors, the API will respond with an appropriate status code and an error message in the JSON format.

## Conclusion

The Node API for product management provides a robust backend solution for managing products. With the provided endpoints, you can perform CRUD operations on products, enabling easy management and manipulation of product data in your application.

Feel free to explore the API endpoints and integrate them into your frontend application or utilize them for any other purposes related to product management.