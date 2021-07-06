const React = require('react');
const DefaultLayout = require('./layouts/Default');

const myStyle = {
color: '#ffffff',
backgroundColor: 'black',

};

class Show extends React.Component {
  render(){
    const product = this.props.product;

    const buyButton = () => {
                if (product.qty > 0) {
                    return(
                        <>
                            <p>In stock: {product.qty}</p>
                            <form action={`/products/${product.id}/buy`}>
                            <input type="submit" value="Buy"/>
                            </form>
                        </>
                    )
                }else {
                    return (
                        <p>Out of stock</p>
                    )
                }
            }

    return (

            <DefaultLayout title={`${product.name.toUpperCase()}`} styles={[{key:0, href: '/css/app.css'},
          {key:1, href:'/css/showpage.css'}]}>
              <div className="parent-container">
                <div className="l-img"><img src={product.img} height="500px"/> </div>
                <div className="text-box">
                  <div className="name">{product.name} </div>
                  <div className="description">{product.description}</div>
                  <div className= "price">Price: ${product.price}</div>
                  <div className="buy-button">{buyButton()} </div>
                  <br />
                  <div className="edit-link"><a href={`/products/${product._id}/edit`}>Edit This Product</a></div>
                  <div className="back-link"><a href="/products">Back</a></div>
                </div>
              </div>
            </DefaultLayout>
          )
        }
      }

      {/*<div style={myStyle}>
        <h1></h1>
         <h2>{product.name} <br/>
         {product.description}</h2>

         <img src={product.img} height="700px"></img>

        <br/>
        <a href='/products'><font color="silver">back</font></a>
        </div>
)
}
}
        */}



module.exports = Show;
