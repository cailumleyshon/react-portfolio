// src/components/ContactForm.jsx
import React, { useState } from "react";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";
import { AlertCircle } from "lucide-react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) tempErrors.email = "Email is required.";
    if (!formData.message) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <Card className={styles.container}>
      <CardContent>
        <h2 className={styles.title}>Contact Me</h2>
        {submitted && (
          <p className={styles.successMessage}>Thank you for reaching out!</p>
        )}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.name && (
            <p className={styles.error}>
              <AlertCircle /> {errors.name}
            </p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.email && (
            <p className={styles.error}>
              <AlertCircle /> {errors.email}
            </p>
          )}

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
          ></textarea>
          {errors.message && (
            <p className={styles.error}>
              <AlertCircle /> {errors.message}
            </p>
          )}

          <p className={styles.consent}>
            By submitting, you consent to your details being used for
            communication purposes only.
          </p>

          <Button type="submit" className={styles.button}>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default ContactForm;
