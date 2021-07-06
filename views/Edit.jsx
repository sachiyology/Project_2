const React = require('react');
const DefaultLayout = require('./layouts/Default');
class Edit extends React.Component {
  render(){
    return (

        <form method="POST" action={`/products/${this.props.product._id}?_method=PUT`}>
        name: <input type="text" name="name" defaultValue={this.props.product.name}/><br/>
        description: <input type="text" name="description"  defaultValue={this.props.product.description}/><br/>
        img: <input type="text" name="img" defaultValue={this.props.product.img}/><br/>
        price: <input type="Number" name="price" defaultValue={this.props.product.price}/><br/>
        qty: <input type="Number" name="qty" defaultValue={this.props.product.qty}/><br/>
        <br/>
        <input type="submit" value="Submit Changes"/>
        </form>

    )
  }
}
module.exports = Edit;
