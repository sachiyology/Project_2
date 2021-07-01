const React = require('react')

const myStyle = {
color: '#ffffff',
backgroundColor: '#000000',
};

class Index extends React.Component {
  render(){
    const products = this.props.products;
    return (
      <div style={myStyle}>
        <h1>See All The Products!</h1>
        <ul>
          {
            products.map((product)=>{
              return(
                /*<li style={cap}>
                  <a href={`/pokemon/${i}`}><font color="silver">{`${i}`} {pokemon.name}</font></a>
                </li>*/

                <li key={product._id}>
                                  <a href={`/products/${product._id}`}><font color="silver">{product.name}{product.description}</font></a>

                                  <form method="POST" action={`/products/${product._id}?_method=DELETE`}>
                                  <img src={product.img} width="295px" height="393px" ></img>
                                  <input type="submit" value="DELETE"/>
                  </form>
                  <a href={`/products/${product._id}/edit`}><font color="silver">Edit This Product</font></a>

                                </li>

              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Index;
