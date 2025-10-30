import type { Route } from "./+types";
import { Form, useActionData } from "react-router"; 

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Funny Dev | Contact" },
    { name: "description", content: "Welcome to my Website" },
  ];
}

// 🧠 Server-side validation for security
export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name")?.toString().trim() || "";
  const Email = formData.get("Email")?.toString().trim() || "";
  const Subject = formData.get("Subject")?.toString().trim() || "";
  const Message = formData.get("Message")?.toString().trim() || "";

  const errors: Record<string, string> = {};

  // Simple validation checks
  if (!name) errors.name = "Full name is required.";
  if (!Email) {
    errors.Email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
    errors.Email = "Please enter a valid email address.";
  }
  if (!Subject) errors.Subject = "Subject is required.";
  if (!Message) errors.Message = "Message cannot be empty.";

  // If errors, return them to the component
  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  // ✅ No errors: return success
  return { message: "Form Submitted Successfully!" };
}

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  const data = useActionData<typeof action>();

  const errors = data?.errors || {};
  const success = data?.message;

  // disable submit button if there are errors
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900 rounded-lg">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        👤 Contact Me
      </h2>

      {success && (
        <p className="mb-6 p-4 bg-green-700 text-green-100 text-center rounded-lg border border-green-500 shadow-md">
          {success}
        </p>
      )}

      <Form method="post" className="space-y-6">
        {/* NAME */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`w-full mt-1 px-4 py-2 border rounded-lg bg-gray-800 text-gray-100 ${
              errors.name ? "border-red-500" : "border-gray-700"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <label
            htmlFor="Email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="text"
            id="Email"
            name="Email"
            className={`w-full mt-1 px-4 py-2 border rounded-lg bg-gray-800 text-gray-100 ${
              errors.Email ? "border-red-500" : "border-gray-700"
            }`}
          />
          {errors.Email && (
            <p className="text-red-500 text-sm mt-1">{errors.Email}</p>
          )}
        </div>

        {/* SUBJECT */}
        <div>
          <label
            htmlFor="Subject"
            className="block text-sm font-medium text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="Subject"
            name="Subject"
            className={`w-full mt-1 px-4 py-2 border rounded-lg bg-gray-800 text-gray-100 ${
              errors.Subject ? "border-red-500" : "border-gray-700"
            }`}
          />
          {errors.Subject && (
            <p className="text-red-500 text-sm mt-1">{errors.Subject}</p>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <label
            htmlFor="Message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="Message"
            name="Message"
            className={`w-full mt-1 px-4 py-2 border rounded-lg bg-gray-800 text-gray-100 ${
              errors.Message ? "border-red-500" : "border-gray-700"
            }`}
          />
          {errors.Message && (
            <p className="text-red-500 text-sm mt-1">{errors.Message}</p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={hasErrors}
          className={`w-full py-2 rounded-lg text-white font-semibold transition-all duration-200 ${
            hasErrors
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-800"
          }`}
        >
          Send Message
        </button>
      </Form>
    </div>
  );
};

export default ContactPage;
