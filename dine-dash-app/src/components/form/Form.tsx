import React, { useState } from "react";
import Input from "./input/Input";
import useFetchRestaurants from "../../util/FetchRestaurant.tsx";
import { FaPlus, FaMinus } from "react-icons/fa6";
import styles from "./Form.module.scss";
import Select from "./select/Select.tsx";
import ConfirmationModal from "../confirmationModal/ConfirmationModal.tsx";
import { formatDate, getTimeOfDay } from "../../util/FormatDate.tsx";

const Form: React.FC = () => {
  const { restaurants, error } = useFetchRestaurants();

  if (error) {
    return <p>Failed to load restaurants. Please try again later.</p>;
  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    date: "",
    time: "",
    persons: 1,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    date: "",
    time: "",
    persons: "",
  });

  const [selectedRestaurant, setSelectedRestaurant] = useState<string>("");

  const handleRestaurantChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedRestaurant(event.target.value);
  };

  const allCuisines = restaurants.reduce((items, restaurant) => {
    restaurant.cuisine.forEach((cuisine) => items.push({ name: cuisine }));
    return items;
  }, [] as { name: string }[]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const increasePersons = () => {
    setFormData((prev) => ({ ...prev, persons: prev.persons + 1 }));
    
    setErrors((prev) => ({ ...prev, persons: "" }));
  };

  const decreasePerons = () => {
    setFormData((prev) => ({
      ...prev,
      persons: Math.max(1, prev.persons - 1),
    }));
    setErrors((prev) => ({ ...prev, persons: "" }));
  };

  const validate = () => {
    let isValid = true;
    const formErrors = { ...errors };

    if (!formData.firstName.trim()) {
      formErrors.firstName = "First name is required";
      isValid = false;
    } else {
      formErrors.firstName = "";
    }

    if (!formData.lastName.trim()) {
      formErrors.lastName = "Last name is required";
      isValid = false;
    } else {
      formErrors.lastName = "";
    }
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email format";
      isValid = false;
    } else {
      formErrors.email = "";
    }

    if (!formData.mobile.trim()) {
      formErrors.mobile = "Mobile Number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      formErrors.mobile = "Invalid mobile number (10 digits required)";
      isValid = false;
    } else {
      formErrors.mobile = "";
    }
    if (!formData.date) {
      formErrors.date = "Booking date is required";
      isValid = false;
    } else {
      formErrors.date = "";
    }
    if (!formData.time) {
      formErrors.time = "In-Time is required";
      isValid = false;
    } else {
      formErrors.time = "";
    }
    if (formData.persons <= 0) {
      formErrors.persons = "Must be at least 1 person";
      isValid = false;
    } else {
      formErrors.persons = "";
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsModalOpen(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <>
      {isModalOpen ? (
        <ConfirmationModal
          persons={formData.persons}
          restaurantName={selectedRestaurant}
          formattedDate={formatDate(formData.date)}
          timeOfDay={getTimeOfDay(formData.time)}
        />
      ) : (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.nameDetailsContainer}>
            <div className={styles.inputContainer}>
              <Input
                key={1}
                inputId={1}
                inputType={"text"}
                inputLabel={"First Name"}
                inputName={"firstName"}
                value={formData.firstName}
                onChange={handleChange}
                width="100%"
              />
              {errors.firstName && (
                <span className={styles.error}>{errors.firstName}</span>
              )}
            </div>
            <div className={styles.inputContainer}>
              <Input
                key={2}
                inputId={2}
                inputType={"text"}
                inputLabel={"Last Name"}
                inputName={"lastName"}
                value={formData.lastName}
                onChange={handleChange}
                width="100%"
              />
              {errors.lastName && (
                <span className={styles.error}>{errors.lastName}</span>
              )}
            </div>
          </div>
          <div className={styles.inputContainer}>
            <Input
              key={3}
              inputId={3}
              inputType={"email"}
              inputLabel={"Email address"}
              inputName={"email"}
              value={formData.email}
              onChange={handleChange}
              width="100%"
            />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>
          <div className={styles.inputContainer}>
            <Input
              key={4}
              inputId={4}
              inputType={"tel"}
              inputLabel={"Mobile Number"}
              inputName={"mobile"}
              value={formData.mobile}
              onChange={handleChange}
              width="100%"
            />
            {errors.mobile && (
              <span className={styles.error}>{errors.mobile}</span>
            )}
          </div>

          <div className={styles.bookingDetailsContainer}>
            <div className={styles.inputContainer}>
              <Input
                key={5}
                inputId={5}
                inputType={"date"}
                inputLabel={"Date you want to book"}
                inputName={"date"}
                value={formData.date}
                onChange={handleChange}
                width="100%"
              />
              {errors.date && (
                <span className={styles.error}>{errors.date}</span>
              )}
            </div>
            <div className={styles.inputContainer}>
              <Input
                key={6}
                inputId={6}
                inputType={"time"}
                inputLabel={"In-Time"}
                inputName={"time"}
                value={formData.time}
                onChange={handleChange}
                width="100%"
              />
              {errors.time && (
                <span className={styles.error}>{errors.time}</span>
              )}
            </div>
          </div>

          <Select
            inputId={7}
            items={restaurants}
            label={"Choose a category"}
            onChange={handleRestaurantChange}
          />
          <Select
            inputId={8}
            items={allCuisines}
            label={"Choose a restaurant"}
            onChange={handleRestaurantChange}
          />
          <div className={styles.btnContainer}>
            <Input
              key={9}
              inputId={9}
              inputType={"string"}
              inputLabel={"No of Persons"}
              inputName={"persons"}
              value={formData.persons.toString()}
              onChange={handleChange}
              textAlign={"center"}
              width="50%"
            />
            {errors.persons && (
              <span className={styles.error}>{errors.persons}</span>
            )}
            <button type="button" className={styles.increaseBtn} onClick={increasePersons}>
              <FaPlus />
            </button>
            <button type="button" className={styles.decreaseBtn} onClick={decreasePerons}>
              <FaMinus />
            </button>
          </div>
          <button type="submit" className={styles.submitBtn}>
            RESERVE MY TABLE
          </button>
        </form>
      )}
    </>
  );
};

export default Form;
