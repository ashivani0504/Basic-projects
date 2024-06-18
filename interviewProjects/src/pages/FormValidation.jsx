import { useState } from "react";
import "../styles/formvalidation.css";

function FormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
    bday: "",
    course: "",
    username: "",
    password: "",
    terms: false,
    file: null,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
    bday: "",
    course: "",
    username: "",
    password: "",
    terms: "",
    file: "",
  });

  function handleChange(e) {
    const { name, value, checked, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files && files[0]
          : value,
    }));
  }

  function validate() {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone is invalid";
    }
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (isNaN(formData.age) || formData.age < 18) {
      newErrors.age = "Your age should be at least 18";
    }
    if (!formData.bday) newErrors.bday = "Birthdate is required";
    if (!formData.course) newErrors.course = "Course is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password should be at least 8 characters";
    }
    if (!formData.terms) newErrors.terms = "Terms is required";
    if (!formData.file) newErrors.file = "File is required";

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length === 0) {
      console.log("formdata", formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        gender: "",
        age: "",
        bday: "",
        course: "",
        username: "",
        password: "",
        terms: false,
        file: null,
      });
      setErrors({
        name: "",
        email: "",
        phone: "",
        gender: "",
        age: "",
        bday: "",
        course: "",
        username: "",
        password: "",
        terms: "",
        file: "",
      });
    } else {
      setErrors(validateErrors);
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Email :
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Phone Number:
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>
        <label>
          Gender: Male:
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
            checked={formData.gender === "male"}
          />
          Female:
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            checked={formData.gender === "female"}
          />
          {errors.gender && <span className="error">{errors.gender}</span>}
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <span className="error">{errors.age}</span>}
        </label>
        <label>
          Birthdate:
          <input
            type="date"
            name="bday"
            value={formData.bday}
            onChange={handleChange}
          />
          {errors.bday && <span className="error">{errors.bday}</span>}
        </label>
        <label>
          Course:
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="">-</option>
            <option>HTML & CSS</option>
            <option>Javascript</option>
            <option>React</option>
            <option>Angular</option>
            <option>Vue</option>
          </select>
          {errors.course && <span className="error">{errors.course}</span>}
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </label>
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          Terms & conditions
          {errors.terms && <span className="error">{errors.terms}</span>}
        </label>
        <label>
          File:
          <input type="file" name="file" onChange={handleChange} />
          {errors.file && <span className="error">{errors.file}</span>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;
