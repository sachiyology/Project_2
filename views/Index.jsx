const React = require('react')
const DefaultLayout = require('./layouts/Default');

class Index extends React.Component {
  render(){
    const products = this.props.products;

    return (
      <DefaultLayout title={"Shop Page"} styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/indexpage.css'}]}>
        <ul>
          {
            products.map((product)=>{
              return(
                <li key={product._id} id="column">

                                  <img src={product.img} width="295px" height="393px" ></img>

                                  <br />
                                  <a href={`/products/${product._id}`}><font color="silver">{product.name}</font></a>
                                  <br />
                                  <font color="silver">In stock: {product.qty}</font>
                                  <br />
                                  <form method="POST" action={`/products/${product._id}?_method=DELETE`}>
                                  <input type="submit" value="DELETE"/>
                                  </form>

                                </li>
              )
            })
          }
        </ul>

        </DefaultLayout>
    )
  }
}

module.exports = Index;
