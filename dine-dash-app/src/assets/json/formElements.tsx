interface formElement {
    id: number;
    name: string;
    label: string;
    type: string;
}

interface formFields{
    nameDetails: formElement[];
    contactDetails: formElement[];
    bookingDetails: formElement[];
    preferenceDetails: formElement[];
}

export const elements: formFields = {
    nameDetails: [
        { id: 1, name: "firstName", type: "text", label: "First name" },
        { id: 2, name: "lastName", type: "text", label: "Last name" }
      ],
      contactDetails: [
        { id: 3, name: "email", type: "email", label: "Email address" },
        { id: 4, name: "mobile", type: "tel", label: "Mobile Number" }
      ],
      bookingDetails: [
        { id: 5, name: "date", type: "date", label: "Date you want to book" },
        { id: 6, name: "time", type: "time", label: "In-Time" }
      ],
      preferenceDetails: [
        { id: 6, name: "veg", type: "checkbox", label: "Veg" },
        { id: 7, name: "nonVeg", type: "checkbox", label: "Non Veg" }
      ]

};