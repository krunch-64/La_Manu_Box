class test extends React.component {
   render() {
    return (
        <div class="list">
            <h1>shopping List for  {this.props.name}</h1>
        </div>

        
    );
   
   } 
}

return React.createElement('div',{classname: 'list'},
React.createElement('div',{classname: 'list'}))