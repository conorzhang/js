const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(
    e(LikeButton), domContainer
);

const e = React.createElement;
return e(
    'button',
    { onClick: () => this.setState({ liked: true }) },
    'Like'
  );
  
return (
    <button onClick={() => this.setState({ liked: true })}>
      Like
    </button>
);