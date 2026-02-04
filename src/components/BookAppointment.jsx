import { useState } from "react";

function BookAppointment() {
  const [showForm, setShowForm] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isWithinWorkingHours = (dateStr, timeStr) => {
    if (!dateStr || !timeStr) return false;

    const [hourStr, minuteStr] = timeStr.split(":");
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    if (Number.isNaN(hour) || Number.isNaN(minute)) return false;

    const day = new Date(`${dateStr}T${timeStr}`).getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Closed on Sunday
    if (day === 0) return false;

    // Monday–Friday: 9:00 – 17:00
    if (day >= 1 && day <= 5) {
      const afterOpen = hour > 9 || (hour === 9 && minute >= 0);
      const beforeClose = hour < 17 || (hour === 17 && minute === 0);
      return afterOpen && beforeClose;
    }

    // Saturday: 9:00 – 14:00
    if (day === 6) {
      const afterOpen = hour > 9 || (hour === 9 && minute >= 0);
      const beforeClose = hour < 14 || (hour === 14 && minute === 0);
      return afterOpen && beforeClose;
    }

    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (!isWithinWorkingHours(date, time)) {
      setError(
        "Appointments can only be booked Monday–Friday 9:00–17:00 and Saturday 9:00–14:00."
      );
      return;
    }

    setError("");
    setSuccess("Thank you. Your appointment request has been prepared in your email client.");

    // Build email to clinic
    const to = "uzimafertility@gmail.com";
    const subject = `New Appointment Request - ${date || "No date"} at ${time || "No time"}`;
    const bodyLines = [
      "You have received a new appointment request from the website:",
      "",
      `Full name: ${fullName || "-"}`,
      `Email: ${email || "-"}`,
      `Phone: ${phone || "-"}`,
      `Preferred date: ${date || "-"}`,
      `Preferred time: ${time || "-"}`,
      "",
      "Reason for visit:",
      reason || "-",
      "",
      "Clinic working hours: Mon–Fri 9:00–17:00, Sat 9:00–14:00.",
    ];

    const mailtoLink = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    // Open default email client with prefilled email
    window.location.href = mailtoLink;

    // Clear form fields after preparing the email
    setFullName("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime("");
    setReason("");
  };

  return (
    <section className="book-appointment" id="book-appointment" data-aos="fade-up">
      <div className="container book-appointment-container">
        <h2>Book an Appointment</h2>
        <p className="book-appointment-intro">
          Book your visit online in a few simple steps. Our team will confirm your
          appointment and guide you on the next steps.
        </p>

        <div className="clinic-hours">
          <h3>Operating Hours</h3>
          <div className="hours-list">
            <div className="hours-item">
              <span className="hours-days">Monday – Friday</span>
              <span className="hours-time">9:00 AM – 5:00 PM</span>
            </div>
            <div className="hours-item">
              <span className="hours-days">Saturday</span>
              <span className="hours-time">9:00 AM – 2:00 PM</span>
            </div>
          </div>
          <p className="hours-note">Sundays and public holidays we are closed.</p>
        </div>

        {!showForm && (
          <div className="book-appointment-button-wrap">
            <button
              type="button"
              className="hero-btn book-btn-primary"
              onClick={() => setShowForm(true)}
            >
              Book Appointment Online
            </button>
          </div>
        )}

        {showForm && (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <textarea
              placeholder="Reason for visit (optional)"
              rows="4"
              name="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            ></textarea>
            {error && <p className="form-error">{error}</p>}
            {success && <p className="form-success">{success}</p>}
            <button type="submit">Request Appointment</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default BookAppointment;
