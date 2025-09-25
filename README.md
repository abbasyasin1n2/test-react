
## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-007

### 📅 Deadline For 60 marks: 27th September, 2025 (11:59 pm ⏱️)

### 📅 No Deadline For 50 marks 

### 📅 Deadline For 30 marks: Any time after 27th September , 2025 (11:59pm⏱️).

---

# Private Repository: https://classroom.github.com/a/VVl8VKya

# Customer Support Zone

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

---

## 📌 Features & Requirements 

### ✅ Navbar 

* Website name/logo on the **left**.
* Menu items and **New Ticket** button on the **right**.

### ✅ Banner

* Banner section designed according to Figma.
* Shows a **linear gradient** background.
* Displays ticket statistics:

  * **In Progress Count**
  * **Resolved Count** (default = 0).

### ✅ Main Section

1. **JSON Data **

   * Created **10–15 tickets** with the following properties:

     * `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`.

2. **Ticket Cards**

   * Display all ticket information in a **card layout**.
   * Cards arranged in a **2-column grid** (left side).

3. **Task Status Section**

   * Clicking a card adds it to the **Task Status Section** (right side) and shows alert. It will increase the count of in-progress in banner
   * Task Status shows:

     * Ticket Title
     * **Complete Button**
   * Clicking **Complete Button**:

     * show alert
     


### ✅ Footer 

* Designed according to Figma.

### ✅ Responsiveness 

* The entire website is **responsive** for mobile devices.

### ✅ Readme: 
Create a README file to answer the following question-

 - What is JSX, and why is it used?
 - What is the difference between State and Props?
 - What is the useState hook, and how does it work?
 - How can you share state between components in React?
 - How is event handling done in React?

---

### 

## 📌 Challenge Requirements 

### 🔔 React-Toastify 

* Used **React-Toastify** to replace all alerts with stylish toast notifications.

### 📝 Task Completion Logic 

Clicking **Complete Button**:

1. It is **removed from Task Status**. 
2. It is added to the **Resolved List**. 
3. The **In Progress count decreases**. 
4. The **Resolved count increases**. 
5. It is removed from the **Customer Tickets list**. 


---

## React Core Concepts

### What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript. It makes React components more readable and intuitive by combining the power of JavaScript with the familiar structure of HTML. JSX is transpiled to regular JavaScript function calls that create React elements, making it easier to visualize and build user interfaces.

### What is the difference between State and Props?

**State** is internal data that belongs to a component and can be changed over time, triggering re-renders when updated. It's mutable and managed within the component using hooks like useState.

**Props** are external data passed down from parent components to child components. They are read-only (immutable) from the child's perspective and allow components to be reusable and configurable. Props enable data flow from parent to child components.

### What is the useState hook, and how does it work?

useState is a React Hook that allows functional components to have state. It returns an array with two elements: the current state value and a function to update that state. When the state is updated, React re-renders the component with the new state value.

Example:
```javascript
const [count, setCount] = useState(0);
```

The `count` variable holds the current state, `setCount` is the function to update it, and `0` is the initial state value.

### How can you share state between components in React?

State can be shared between components through several methods:

1. **Lifting State Up**: Move shared state to the closest common parent component and pass it down via props
2. **Props Drilling**: Pass state through multiple component layers via props
3. **Context API**: Create a context to share state across multiple components without prop drilling
4. **State Management Libraries**: Use libraries like Redux or Zustand for complex state management

In this project, we lift state up to the App component and pass it down to child components.

### How is event handling done in React?

React uses SyntheticEvents, which are wrappers around native DOM events that provide consistent behavior across browsers. Event handlers are passed as props to JSX elements using camelCase naming (onClick, onChange, etc.).

Example:
```javascript
const handleClick = () => {
  setCount(count + 1);
};

<button onClick={handleClick}>Click me</button>
```

React events are automatically bound and use event delegation for better performance.

---


