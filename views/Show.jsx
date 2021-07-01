const React = require('react');

const myStyle = {
color: '#ffffff',
backgroundColor: '#000000',

};

class Show extends React.Component {
  render(){
    const product = this.props.product;
    return (
      <div style={myStyle}>
        <h1>Product page</h1>
         <h2>{product.name}{product.description}{product.img}</h2>

         {/*
         <img src={pokemon.img + '.jpg'}></img>
         */}
        <br/>
        <a href='/products'><font color="silver">back</font></a>
        </div>
    )
  }
}
module.exports = Show;
