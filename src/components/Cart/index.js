import React, {Component} from 'react';
export default class Home extends Component {
  componentDidMount(){
    document.head.title = "xx";
  }
  constructor() {
    super();
    this.state = {
      items: [
        {id: 1, name: 'iphone5', price: 500, amount: 1},
        {id: 2, name: 'iphone6', price: 600, amount: 1},
        {id: 3, name: 'iphone7', price: 700, amount: 1}
      ]
    };
  }

  render() {
    return (
      <table>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>price</td>
          <td>amount</td>
        </tr>
        {
          this.state.items.map((item, index) => {
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.amount}</td>
            </tr>
          })
        }
      </table>
    )
  }
}