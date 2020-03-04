import React from 'react';
import API from "../util/API";



class Page extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            isLoaded: true,
            results:[]
        }
    }
    componentDidMount(){
        console.log("mounting")
        API.search()
        .then(data => {
            console.log(data.data.results)
            // let employees = data.data.results;

            // this.setState({ results : employees })
        }).catch(err => console.log(err))
    }
    
    
//   componentDidMount() {
//     fetch("https://randomuser.me/api/?results=10")
//       .then(res => res.json())
//       .then(
//         (results) => {
//           this.setState({
//             isLoaded: true,
//             results: results
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

  render() {
    //   const{ error, results } = this.state;
    //   if(error){
    //       return<div>Error: {error.message}</div>;
    //   }else{
       
    //   }
      return(
        <ul>
            {this.state.results.map(result => (
                <li> { result.name }</li>
            ))
            }
        </ul>
    )
     
    // const { error, isLoaded, items } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    //   return (
    //     <ul>
    //       {this.state.results.map(results => (
    //         <li key={results.name.first}>
    //           {results.name.first} {results.name.last}
    //         </li>
    //       ))}
    //     </ul>
    //   );
    // }
  }

}
    
    
    


export default Page;


