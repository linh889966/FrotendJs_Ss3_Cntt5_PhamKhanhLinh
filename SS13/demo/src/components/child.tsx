import * as React form 'react'
 interface ChildProps {
   name: string;
   age?: number;
 }
 export default class Child extends React.Component<ChildProps> {
   render() {
     return (
       <>
       <h2>Child Component</h2>
       <p>Name: {this.props.name}</p>
       <p>Age: {this.props.age}</p>
       </>
     );
   }
 }
