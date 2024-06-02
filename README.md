# Tincture: A Centralized Blockchain Network in JavaScript

## Project Overview

Tincture is a single-node blockchain network implemented in JavaScript. It simulates a centralized proof-of-work (PoW) consensus mechanism where the server validates transactions. This project provides a learning environment for exploring core blockchain concepts and functionalities.

## Supported Transactions

* **Value Transactions:** Represents the transfer of digital currency (coins) between participants in the network.
* **Data Storage Transactions:** Facilitate storage of state change data on the blockchain.
* **Data Transfer Transactions:** Enable secure transfer of data units like messages or multimedia content.

## Key Features

* **State Management:** Maintains the blockchain state for data storage transactions, ensuring data integrity.
* **HTTP Endpoints:** Provides a RESTful API for interacting with the blockchain:
    * Submission of new transactions
    * Retrieval of blockchain data

## Getting Started

1. **Clone the Repository:**

```bash
git clone [https://github.com/your-username/tincture.git](https://github.com/your-username/tincture.git)
```

2. Install Dependencies:
```bash
cd tincture
npm install
```

3. Run the Server:
```bash
node server.js
```
4. Access the API:
Open http://localhost:5000 in your web browser to explore the available routes for interacting with the blockchain.

Note
Due to the centralized nature, Tincture is intended for educational purposes. It does not provide the full security and decentralization benefits of a distributed blockchain network.

* Future Enhancements (Optional)
* Implement a distributed consensus mechanism (e.g., Byzantine Fault Tolerance) for a true decentralized network.
* Design a graphical user interface (GUI) for user-friendly interaction with the blockchain.
* Explore advanced blockchain functionalities such as smart contracts.

