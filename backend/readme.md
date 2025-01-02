# API Documentation

## User Endpoints

### Register User

- **URL:** `/api/users/register`
- **Method:** `POST`
- **Description:** Register a new user.
- **Request Body:**
  ```json
  {
    "name": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "name": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

### Login User

- **URL:** `/api/users/login`
- **Method:** `POST`
- **Description:** Login an existing user.
- **Request Body:**
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "name": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

### Get User Profile

- **URL:** `/api/users/profile`
- **Method:** `GET`
- **Description:** Get the profile of the logged-in user.
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "user_id",
    "name": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

### Logout User

- **URL:** `/api/users/logout`
- **Method:** `POST`
- **Description:** Logout the current user.
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Logged out"
  }
  ```

## Captain Endpoints

### Register Captain

- **URL:** `/api/captains/register`
- **Method:** `POST`
- **Description:** Register a new captain.
- **Request Body:**
  ```json
  {
    "name": {
      "firstName": "Jane",
      "lastName": "Doe"
    },
    "email": "jane.doe@example.com",
    "password": "password123",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token",
    "captain": {
      "_id": "captain_id",
      "name": {
        "firstName": "Jane",
        "lastName": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

### Login Captain

- **URL:** `/api/captains/login`
- **Method:** `POST`
- **Description:** Login an existing captain.
- **Request Body:**
  ```json
  {
    "email": "jane.doe@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token",
    "captain": {
      "_id": "captain_id",
      "name": {
        "firstName": "Jane",
        "lastName": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

### Get Captain Profile

- **URL:** `/api/captains/profile`
- **Method:** `GET`
- **Description:** Get the profile of the logged-in captain.
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "captain_id",
    "name": {
      "firstName": "Jane",
      "lastName": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
  ```

### Logout Captain

- **URL:** `/api/captains/logout`
- **Method:** `POST`
- **Description:** Logout the current captain.
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Logged out"
  }
  ```
