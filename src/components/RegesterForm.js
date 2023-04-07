import { useState } from "react";

export default function RegesterForm() {
  const [form, setForm] = useState({
    firstName: "enter your name",
    lastName: "enter your family",
    email: "enter email address",
  });

  return (
    <>
      <div>
        {" "}
        <lable>
          First name:
          <input
            value={form.firstName}
            onChange={(e) => {
              setForm({ ...form, firstName: e.target.value });
            }}
          />
        </lable>
      </div>
      <div>
        {" "}
        <lable>
          Last name:
          <input
            value={form.lastName}
            onChange={(e) => {
              setForm({ ...form, lastName: e.target.value });
            }}
          />
        </lable>
      </div>
      <div>
        {" "}
        <lable>
          Email:
          <input
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
          />
        </lable>
      </div>

      <div>
        <h1>
          My name is {form.firstName} {form.lastName} and my email is{" "}
          {form.email}
        </h1>
      </div>

      <button
        onClick={() => {
          setForm({
            firstName: "...",
            lastName: "...",
            email: "...",
          });
        }}
      >
        Reset
      </button>
    </>
  );
}
