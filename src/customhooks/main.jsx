// Custom hooks in React are a way to reuse logic across different components without repeating code. They're basically functions that can use React's built-in hooks and other custom hooks.

// Here's a simple breakdown:

// Regular functions: You write normal JavaScript functions.
// Use React features: These functions can use React hooks like useState, useEffect, etc.
// Name convention: They always start with "use" (e.g., useCustomHook).
// Reusable logic: They allow you to extract component logic into reusable functions.
// Not for UI: They don't render anything; they're for logic and state management.



// An example might help:

// Let's say you have multiple components that need to track whether a user is online or offline. Instead of writing this logic in each component, you could create a custom hook:


// function useOnlineStatus() {
//     const [isOnline, setIsOnline] = useState(true);
  
//     useEffect(() => {
//       function handleOnline() { setIsOnline(true); }
//       function handleOffline() { setIsOnline(false); }
  
//       window.addEventListener('online', handleOnline);
//       window.addEventListener('offline', handleOffline);
  
//       return () => {
//         window.removeEventListener('online', handleOnline);
//         window.removeEventListener('offline', handleOffline);
//       };
//     }, []);
  
//     return isOnline;
//   }
  

// Now, any component can use this hook:

// function MyComponent() {
//     const isOnline = useOnlineStatus();
  
//     return <div>{isOnline ? 'Online' : 'Offline'}</div>;
//   }
  

// This way, you've encapsulated the online/offline logic in a reusable hook, making your code cleaner and more modular.