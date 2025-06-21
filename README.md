These are intentionally scoped to be achievable **without needing AI help**, while still challenging you enough to encourage deeper understanding. After these you can move onto bigger projects. This list will keep growing so keep learning. 

---

## 🧑‍🎨 1. **Frontend (React / Next.js)**

### 🧩 Project: **DevTools-Inspired Tab Switcher**

* **What it is**: A mini UI app with tabs (like "Console", "Elements", "Network"), where each tab shows mock data.
* **What you’ll practice**:

  * React component composition
  * `useState`, `useEffect`, lifting state
  * Conditional rendering
  * CSS grid or flexbox layout

**Stretch Goal**: Implement dark mode toggle and persist theme in `localStorage`.

---

## 🛠️ 2. **Backend (Node.js + Express)**

### 🧩 Project: **Minimal URL Shortener API**

* **What it is**: Build a REST API where you can POST a long URL and get back a short one (e.g. `/abc123`), and GET will redirect to the long URL.
* **What you’ll practice**:

  * Setting up Express routes
  * In-memory or file-based storage (or SQLite if comfortable)
  * Basic error handling, status codes
  * URL parsing & validation

**Stretch Goal**: Add expiry times to links.

---

## 🧾 3. **CLI Tool (Rust)**

### 🧩 Project: **Simple JSON Formatter CLI**

* **What it is**: A command-line tool that reads a JSON string from a file or stdin and pretty-prints it.
* **What you’ll practice**:

  * Command-line argument parsing (`clap` or `structopt`)
  * File I/O
  * JSON parsing with `serde_json`
  * Error handling and `Result`

**Stretch Goal**: Add `--minify` flag.

---

## 💻 4. **Solidity (Smart Contract)**

### 🧩 Project: **Basic Voting Contract**

* **What it is**: A contract where users can vote for a candidate by address, and anyone can see the results.
* **What you’ll practice**:

  * Mapping and storage
  * `require` statements
  * Structs and enums
  * Events

**Stretch Goal**: Add time limits using block timestamps.

---

## ⚙️ 5. **Viem or Ethers.js (Frontend ↔ Smart Contract)**

### 🧩 Project: **Vote DApp Frontend**

* **What it is**: A frontend interface (React + Viem or Ethers.js) that connects to your voting contract and allows:

  * Viewing candidates
  * Sending votes
  * Displaying vote counts
* **What you’ll practice**:

  * Contract ABI & interaction
  * MetaMask wallet integration
  * `writeContract`, `readContract`
  * Events or polling for updates

**Stretch Goal**: Show transaction history.
