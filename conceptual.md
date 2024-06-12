### Conceptual Exercise 

Answer the following questions below:

- What is the purpose of the React Router?
  * It is used to handle routing in single-page applications
  
- What is a single page application?
  * It is a webpage that loads chunks of data or parts of the page dynamically based on the user interaction vs loading an entire new page 
  
- What are some differences between client side and server side routing?
  * Server side results in a full page refresh when the user interacts, Client does not.
  * Server side is usually slower because of the page load, Client is smoother with the reload happening to just the content that is being interacted with
  * Server requires more resources as it takes the request and renders a new HTML page
  * Client adds the ability to create a smooth user experience and it feels more like an app
  
- What are two ways of handling redirects with React Router? When would you use each?
  * using the Redirect component - declarative style, component-based logic, conditional rendering
  * using the useHistory hook - imperative navigation, complex logic, user interactions

- What are two different ways to handle page-not-found user experiences using React Router? 
  * using the Route component to catch the fact that there is no page immediately
  * using the Redirect component to redirect the user to a special 404 page

- How do you grab URL parameters from within a component using React Router?
  * by using the useParams hook

- What is context in React? When would you use it?
  * Context allows you to pass data through the component tree without having to pass props down manually at every level
  * It would be used for things such as global data, to avoid prop drilling, to control UI components, and to manage application state.

- Describe some differences between class-based components and function
  components in React.
  * Class components use ES6 style syntax
  * Class uses "this" and Function uses "use"
  * Function components are lighter and faster as they don't rely on class definition and lifecycle
  * Function components tend to be more concise and easier to read

- What are some of the problems that hooks were designed to solve?
  * Complexity in using Stateful Logic (avoiding wrapper hell)
  * Complicated lifecycle methods (keeping related code together)
  * "this" keyword generally isn't fun
  * difficulties in testing
  * Large components
  * Learning curve for new-comers