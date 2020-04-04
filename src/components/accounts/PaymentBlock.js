import React, { PropTypes } from 'react';

class PaymentBlock extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    var dues = nextProps.dues.map(d => {
      var s = Object.assign({}, d);
      s.selected = true;
      s.amt = parseInt(s.amt);
      return s
    });
    console.log(dues);
    this.setState({
      dues
    });
    this.setState({ amount: dues.reduce((a, b) => a + b.amt, 0) });
    this.setState({
      paying: dues.reduce((a, b) => {
        if (b.selected)
          return a + b.amt;
        else
          return a;
      }, 0)
    });
  }
  constructor(props, context) {
    super(props, context);
    this.checked = this.checked.bind(this);
    this.pay = this.pay.bind(this);
    // [{
    //       id:1,
    //       type:"Ganesh Puja",
    //       amt:100,
    //       selected:true
    //     },
    //     {
    //       id:2,
    //       type:"Maintainence Jan",
    //       amt:1000,
    //       selected:true
    //     },
    //     {
    //       id:3,
    //       type:"Maintainence Feb",
    //       amt:1200,
    //       selected:true
    //     }]

    this.state = {
      dues: this.props.dues,
      amount: 0,
      paying: 0,
      monthsName: [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
      ]
    };
    this.state.amount = this.state.dues.reduce((a, b) => a + b.amt, 0);
    this.state.paying = this.state.dues.reduce((a, b) => {
      if (b.selected)
        return a + b.amt;
      else
        return a;
    }, 0);

  }
  pay() {
    var ids = this.state.dues.filter(d => { if (d.selected) return d._id; });
    if (ids.length > 0)
      this.props.pay(ids.map(id => id._id));
  };
  checked(evt, id) {
    var ven = this.state.dues.find((due) => due._id == id);
    ven.selected = !ven.selected;
    this.setState({
      dues: this.state.dues
    });
    var pay = this.state.dues.reduce((a, b) => {
      if (b.selected)
        return a + b.amt;
      else
        return a;
    }, 0);
    this.setState({
      paying: pay
    });
  }

  render() {
    return (
      <div className="payment-div">
        <div className="inner" data-toggle="collapse" data-target="#payment">
          <span>Total Due &nbsp;&nbsp;- &nbsp;&nbsp;<span className="amt">{this.state.amount} INR</span></span>
          <button disabled={this.state.amount == 0}>Pay Now</button>
        </div>
        {this.state.amount == 0 ? null :
          <div id="payment" className="collapse clearfix">
            {this.state.dues.map(due =>
              <div className="col-xs-12" key={due._id} >
                <div className="col-xs-9 type">
                  <input type="checkbox" onChange={(evt) => this.checked(evt, due._id)} checked={due.selected} />{due.type} {this.state.monthsName[due.month-1]} {due.year}</div>
                <div className="col-xs-3 amt">{due.amt}</div>
              </div>
            )}

            <div className="col-xs-12 total">
              <div className="col-xs-8  type">Total</div>
              <div className="col-xs-4 amt">
                {/*<button disabled={this.state.paying == 0} onClick={this.pay}>Pay {this.state.paying}</button>*/}
                <button disabled="disabled" onClick={this.pay}>Pay {this.state.paying}</button>
              </div>
            </div>

          </div>
        }
      </div>
    );
  }
}
export default PaymentBlock;