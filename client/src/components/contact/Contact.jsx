import { useState } from "react";
import "./contact.css";
import FileBase from "react-file-base64";
import axios from "axios";


const Contact = () => {
  const url = "http://localhost:5000/posts";

  const [done, setDone] = useState(false);
  const [postData, setPostData] = useState({
    name: "",
    // category: "",
    text: "",
    location: "",
    image: "",
  });

  const clear = () => {
    setPostData({
      name: "",
      category: "",
      text: "",
      location: "",
      image: "",
    });
  };

  const createPost = async () => {
    const data = await axios.post(url, postData);
    console.log(data);
    setDone(true)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost();
    clear();
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your testimony</h1>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your testimony?</b> Get in touch. “I just wanted to share
            a quick note and let you know that you guys do a really good job.
            I'm glad I decided to work with you. It's really great how easy your
            websites are to update and manage
          </p>
          <form>
            <input
              className="input"
              type="text"
              placeholder="Full Name"
              name="name"
              value={postData.name}
              onChange={(e) =>
                setPostData({ ...postData, name: e.target.value })
              }
            />
            &nbsp;
            <input
              className="input"
              type="text"
              placeholder="Location"
              name="location"
              value={postData.location}
              onChange={(e) =>
                setPostData({ ...postData, location: e.target.value })
              }
            />
            <br />
            <br />
            <label htmlFor="">Upload Image</label><br />
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, image: base64 })
              }
            />
            <br />
            <br />
            <label>Category</label>:<br />
            <input
              // value={postData.category}
              // onChange={(e) =>
              //   setPostData({ ...postData, category: e.target.value })
              // }
              type="radio"
              id="vendor"
              name="category"
            />
            &nbsp;
            <label>Vendor</label>
            <br />
            <input
              // value={postData.category}
              // onChange={(e) =>
              //   setPostData({ ...postData, category: e.target.value })
              // }
              type="radio"
              id="customer"
              name="category"
            />
            &nbsp;
            <label>Customer</label>
            <br />
            <br />
            <textarea
              value={postData.text}
              onChange={(e) =>
                setPostData({ ...postData, text: e.target.value })
              }
              rows="5"
              placeholder="Message"
              name="text"
            />
            <button onClick={handleSubmit}>Submit</button> &nbsp; &nbsp;
            <button onClick={clear}>Clear</button>
            <span>{done && <span>Thank you!!!</span>}</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
