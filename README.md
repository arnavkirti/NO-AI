These are intentionally scoped to be achievable **without needing AI help**, while still challenging you enough to encourage deeper understanding. After these you can move onto bigger projects. This list will keep growing so keep learning. 

---

### Stuff is this:

- **Frontend**: `JS, CSS, React.js, Next.js`
    These modern frameworks are just frameworks they can change, learn from first principles and don't be framework dependent. (dont be the guy who loves React and only uses that). Frameworks change (Remember that).

- **Backend**: Start with `Nodejs/Express` then work with better languages that are fast like `Rust/Go`, always take these design decisions seriously and not just because you know Nodejs then you stick to Nodejs. You can go on to use a Framework like `Nestjs`. Again learn deeply about what you are using and why you are.

- **DevOps**: Learn `docker, kubernetes` build some CI/CD pipelines and dockerise your apps. Just learn by doing bro. 

- **System Design**: Watch gaurav Sen, read blogs and just think about whys more.

- **Web3**: (Ethereum) Start with Full-Stack Learning and then learn `Solidity`, then go and learn about `EVM` and read blogs on Ethereum's Official Website. Implement an EVM is `Rust/Go`. Then comes your interests like `ZK, MEV, DeFi, Tokenomics, RWA, etc.` etc. Also learn about libraries that let you interact with your contracts like `viem`. 

- **Low-Level Programming**: Learn `C` then read `OSTEP` and work your way through compilers, lexers, CPU architecture and other stuff. Read `Beej's Guide to network programming` and just build things. Also learn `Assembly` it will really help you understand CPUs. Do some basic Reverse Engineering at PicoCTF if you want to go that extra mile. 

- **Games**: You could Learn `Godot` or `Unity`. Or if interested in Browser based games: learn `phaser.js, three.js, GSAP, Babylon.js` these are some really good resources. Other than that just build stuff bro.

---

## Frontend (Vanilla JS)

### Project: Simple Task-Manager (To-do App)

* What it is: A App made to manage tasks
* What you'll practice:
  
  * DOM Manipulation
  * Events and event bubbling
  * State Management w/o frameworks
  * Browser storage (localStorage, sessionStorage)

  I will add a detailed README for the project in `Frontend(Vanilla)/README.md`, with project structured into tasks that can help you complete it and learn on the go.


## **Frontend (React)**

### Project: Simple Task-Manager (To-do App)

* **What it is**: A mini UI app to manage task but in React.
* **What you’ll practice**:

  * React component composition
  * `useState`, `useEffect`, lifting state
  * Conditional rendering
  * CSS grid or flexbox layout
  * `useReducer` for complex state management logic
  * Context API for Global State

**Stretch Goal**: Implement dark mode toggle and persist theme in `localStorage`.

---

## 🛠️ **Backend (Node.js + Express)**

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

---

## 6. **Phaser.js (2D Graphics and in-browser Games)**

### Project: **Snake Game**

* **What it is**: A in-bowser snake game (React + Phaser.js) 

**Stretch Goal**: Multi-level Game, or make a website with a Collection of 90s Games. (Like Contra would be a nice challenge)

---

## Mini Rust Projects
---

### 🚀 Beginner Level

These focus on basic syntax, ownership, enums, pattern matching, etc.

1. **CLI Calculator**

   * Learn: Enums, pattern matching, basic CLI parsing with `clap` or `std::env`.
   * Task: Perform basic arithmetic based on user input (e.g. `calc 4 + 2`).

2. **To-Do List (in-memory)**

   * Learn: Vectors, structs, enums, and user input.
   * Task: Create, list, mark as done, and delete tasks during the session.

---

### 🛠️ Intermediate Level

These explore error handling, file I/O, crates, and concurrency.

3. **To-Do List with File Storage**

   * Learn: File I/O, `serde`, `serde_json` or `ron`, and persistence.
   * Task: Store your to-do list on disk between sessions.

4. **Markdown to HTML Converter**

   * Learn: File reading/writing, string processing, third-party crates.
   * Optional: Use `pulldown-cmark` crate for Markdown parsing.

5. **Simple HTTP Server**

   * Learn: TCP networking with `std::net`, multithreading.
   * Task: Serve static HTML files from a directory.

---

### ⚙️ Advanced (Stretch Projects)

These help with understanding concurrency, async/await, and more complex data structures.

6. **Key-Value Store (like a tiny Redis)**

   * Learn: Traits, generics, file I/O, serialization.
   * Optional: Make it support concurrent access with `Arc<Mutex<...>>`.

7. **Chat Server**

* Learn: Networking, threads, channels, synchronization.
* Task: Accept multiple client connections and broadcast messages.

---

- Create an HTTP Server from scratch in C/C++. (Will teach you a lot)
- Build a neural network from scratch.

If you feel stuck in JS (Javascript being your life): need some change:
- Use pyhton :
  - Make a game using pygame.
  - Make a cli tool in python.
