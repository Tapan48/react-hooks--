// Virtual DOM:
// Reconciliation Algorithm: Efficiently updates the UI based on state changes.
// React Fiber: A reimplementation of React's core algorithm. 

// Renders: The process of updating the virtual DOM.
// Diff algorithm: Compares the previous and current state to determine changes.
// How does render work?: Updating the UI based on virtual DOM changes. 


///virtual dom is an inmemory representation of the actual DOM.

/// react updates the virtual dom 

/// diff algorithm is used to compare the previous and current state  of the virtual dom to determine changes.

/// batch updates are used to update the virtual dom in a single pass.

// React creates a copy of original dom to avoid making direct changes in the original.
// When a change occurs in any state, a new copy of virtual dom is created reflecting that change,
// Now react will do diffing on the new and earlier virtual dom to specify the changes,
// And now it will batchup changes of several virtual doms to finally reflect it in the original DOM. This process is called Reconciliation.





// simple steps

// 1. react creates a virtual dom
// 2. when state changes, react creates a new virtual dom
// 3. react does diffing on the new and earlier virtual dom to specify the changes.
// 4. react batch up changes of several virtual doms to finally reflect it in the original DOM. This process is called Reconciliation.

// Minimal Updates:
// React only updates the parts of the real DOM that have actually changed, based on the diffing process. This minimizes the number of expensive DOM manipulations, leading to better performance.
// Batching:
// React batches together multiple updates and applies them to the DOM in a single operation, further improving performance.


// React Fiber is a complete rewrite of React's core reconciliation algorithm that was introduced in React 16. Here's the code update with information about React Fiber:




// React Fiber:
// - A complete reimplementation of React's core algorithm reconciliation introduced in React 16
// - Main features:
//   1. Ability to pause, abort, or reuse work as new updates come in
//   2. Ability to assign priority to different types of updates
//   3. New concurrency primitives
//   4. Better error handling with error boundaries

// How Fiber Works:
// - Breaks down rendering work into smaller chunks called "fiber nodes"
// - Each fiber node represents a unit of work
// - Enables incremental rendering: can pause and resume work
// - Uses a priority system to handle urgent updates first
// - Maintains a linked list of fiber nodes for efficient traversal

// Key Benefits of Fiber:
// - Improved perceived performance through prioritization
// - Smoother animations and transitions
// - Better handling of CPU-intensive updates
// - More responsive user interfaces
// - Better error handling and debugging capabilities

// ... existing code ...