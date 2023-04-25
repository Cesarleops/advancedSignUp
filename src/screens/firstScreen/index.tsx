import { useState } from "react";
import ScreensHeader from "../../components/molecules/screensHeader";
import "./firstScreen.scss";
const FirstScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="firstScreenContainer">
      <ScreensHeader
        title="Personal info"
        text="Please provide your name,email address and phone humber"
      />

      <form className="firstScreenContainer--form">
        <div className="firstScreenContainer--input">
          <label>Name</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="e.g. Stephen King"
            value={form.name}
            name="name"
          />
        </div>

        <div className="firstScreenContainer--input">
          <label>Email Address</label>
          <input
            name="email"
            onChange={handleChange}
            value={form.email}
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>

        <div className="firstScreenContainer--input">
          <label>Phone Number</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="text"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
    </div>
  );
};

export default FirstScreen;
