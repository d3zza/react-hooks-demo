import React, { Component, createRef, Ref, RefObject } from 'react';

class FormClass extends Component<FormProps, FormState> {
  private inputRef: RefObject<HTMLInputElement>;
  private boundMouseMove: (e: MouseEvent) => void;

  constructor(props: FormProps) {
    super(props);

    this.state = {
      count: 0,
      name: 'Jane',
      mouse: {
        x: 0,
        y: 0,
      },
    };

    this.inputRef = createRef();
    this.boundMouseMove = this.onMouseMove.bind(this);
  }

  onMouseMove(e: MouseEvent) {
    this.setState({
      mouse: {
        x: e.offsetX,
        y: e.offsetY,
      },
    });
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.inputRef.current?.focus();
    document.addEventListener('mousemove', this.boundMouseMove);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    document.removeEventListener('mousemove', this.boundMouseMove);
  }

  render() {
    const { title } = this.props;
    const { count, name, mouse } = this.state;

    return (
      <form className="form">
        <h2>{title}</h2>
        <button
          type="button"
          onClick={() => this.setState({ count: count + 1 })}
        >
          Count is {count}
        </button>
        <input
          ref={this.inputRef}
          type="text"
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <p>
          Mouse: {mouse.x},{mouse.y}
        </p>
      </form>
    );
  }
}

export default FormClass;
