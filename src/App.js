
function App() {

  return (
    <><div>
      <h1>What Is React </h1>
      <p>React is a Javascript library for building user interface.React component implement a render() method that takes input data and return what to display,the data can be accessed by <b>this.props</b>.
        In addition to input data,a component can maintain internal state data (accessed via <b>this.state</b>).When a component state data changes,the rendered markup will be updated by reinvoking render().</p><hr></hr>
      <h1>Difference Between SPA & MPA </h1>
      <h2 >SPA:</h2>
      <p>SPA or Single Page Application enables you to work inside a browser while eliminating the need to reload a page when the user is using it.
        Today, we are surrounded by SPAs. Email providers, namely Gmail, navigation apps like Google Maps, and social media platforms like Facebook are some great examples of SPAs.</p>
      <h2>MPA:</h2>
      <p>Opposite of SPA is MPA or Multi-Page Application, which reloads each time the user opens a new page in the browser.

        In general, MPAs are great for massive applications as they can consist of a large number of pages that are refreshed every time the data on them is changed.</p><hr></hr>
      <h1>Angular Vs React</h1>
      <h2>Angular:</h2>
      <p>Angular is Javascript framework built by using Typescript,angular is mostly used to build complex enterprise-grade apps like SPA and PWA.Angular's learning curve is steeper due to its too many functionalities.</p>
      <h2>React:</h2>
      <p>React is a Javascript library and built using JSX,react is used to build UI component in any app with frequently variable data.</p><hr></hr>
    <h1>Framework vs Library</h1>
    <h2>Library:</h2>
    <p>Libraries provide developers with predefined functions and classess to make their work easier and boost the development process.</p>
    <h2>FrameWork:</h2>
    <p>framework is like the foundation upon which the developers build applications for specific platforms.</p><hr></hr>
    <h1>DOM vs Virtual DOM</h1>
    <h2>DOM:</h2>
    <p>DOM stands for Document Object Model it is the structural representation of all nodes in an HTML document represent the UI of your application.DOM is an interface that allows the script to update the content,style,and structure of the document.</p>
     <h2>Virtual DOM:</h2>
     <p>Virtual DOM is just like the blueprint of a machine,can do the changes in the blueprint but those changes will not directly apply to the machine.</p><hr></hr> 
    <h1>One-Way Data Binding vs Two-Way Data Binding</h1>
    <h2>One-Way Data Binding:</h2>
    <p>In one-way binding the data flow in one direction,this means that the flow of code is from typescript file to HTML file.</p>
    <h2>Two-Way Data Binding:</h2>
    <p>In two-way binding the data is bi-directional,this means that the flow of code is from ts file to HTML file and HTML file to ts file.</p>




    </div></>
  );
}



export default App;
