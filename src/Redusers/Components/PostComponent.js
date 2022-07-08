import { connect } from "react-redux";
import Post from "./Content/Post";
let mapStatetoProps = (state) => {
  return {
    post: state.post,
  };
};
let PostComponent = connect(mapStatetoProps)(Post);
export default PostComponent;
