# Webshop-eCommerce

Complete WebShop / eCommerce application in MERN stack. (MongoDB Express React Node)

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Database

You can use the following commands to fill up the database.

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

### Backend Endpoints

Private means you have to login.

| Entity  | Type   | URL                       | Description                                            | Access          |
| ------- | ------ | ------------------------- | ------------------------------------------------------ | --------------- |
| User    | POST   | /api/users/login          | Auth user and get token.                               | Public          |
|         | POST   | /api/users                | Register a new user.                                   | Public          |
|         | GET    | /api/users/profile        | Get user profile.                                      | Private         |
|         | PUT    | /api/users/profile        | Update user profile.                                   | Private         |
|         | GET    | /api/users/               | Get all users                                          | Private & Admin |
|         | DELETE | /api/users/:id            | Delete user.                                           | Private & Admin |
|         | GET    | /api/users/:id            | Get user by id.                                        | Private & Admin |
|         | PUT    | /api/users/:id            | Update user.                                           | Private & Admin |
| Product | GET    | /api/products             | Get all products, with search function and pagination. | Public          |
|         | GET    | /api/products/:id         | Get a single product.                                  | Public          |
|         | DELETE | /api/products/:id         | Delete product.                                        | Private & Admin |
|         | POST   | /api/products             | Create a product.                                      | Private & Admin |
|         | PUT    | /api/products/:id         | Update a product.                                      | Private & Admin |
|         | POST   | /api/products/:id/reviews | Create new review.                                     | Private         |
|         | GET    | /api/products/top         | Get top rated products.                                | Public          |
| Order   | POST   | /api/orders               | Create new order.                                      | Private         |
|         | GET    | /api/orders/:id           | Get order by id.                                       | Private         |
|         | PUT    | /api/orders/:id/pay       | Update order to paid.                                  | Private         |
|         | PUT    | /api/orders/:id/deliver   | Update order to delivered.                             | Private & Admin |
|         | GET    | /api/orders/myorders      | Get the logged in user's orders.                       | Private         |
|         | GET    | /api/orders               | Get all orders.                                        | Private & Admin |
