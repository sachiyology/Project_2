const React = require('react');
class Edit extends React.Component {
  render(){
    return (

        <form method="POST" action={`/products/${this.props.product._id}?_method=PUT`}>
        name: <input type="text" name="name" defaultValue={this.props.product.name}/><br/>
        description: <input type="text" name="description"  defaultValue={this.props.product.description}/><br/>
        // shipIsBroken:
        //     { this.props.log.shipIsBroken
        //       ? <input type="checkbox" name="shipIsBroken" defaultChecked />
        //       : <input type="checkbox" name="shipIsBroken"/>
        //     }
        <br/>
        <input type="submit" value="Submit Changes"/>
        </form>

    )
  }
}
module.exports = Edit;
